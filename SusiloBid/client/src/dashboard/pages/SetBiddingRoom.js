import React, { useEffect, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { GetSubmissionAuct } from "../../redux/action";

// style
import { Table, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button, Container, Row, Col } from "react-bootstrap";
import Loader from "react-loader-spinner";

//moment.js
import Moment from "moment";

// sample image
import sampleImage from "../../asset/SSB-1.jpeg";

const SetBiddingRoom = () => {

  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [selectedName, setSelectedName] = useState('');

  const fetchSubmission = useSelector(({ setBidding }) => setBidding.submission);
  const loading = useSelector(({ setBidding }) => setBidding.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetSubmissionAuct());
  }, []);

  const handleToggle = (id, product) => {
    // console.log(id)
    setOpenModal(true);
    setSelectedId(id);
    setSelectedName(product);
  };

  console.log(fetchSubmission.image_path)

  const renderModal = () => {
    let detail = fetchSubmission.find(val => val.product_id === selectedId);
    let detailArray = [];
    detailArray.push(detail);
    // console.log(detailArray)
    if (detail) {
      return(
        <div>
          <Modal isOpen={openModal} toggle={handleToggle} size="lg" centered>
            {detailArray.map((val, idx) => {
              return (
                <>
                  <ModalHeader className="d-flex align-items-center" toggle={handleToggle}>
                    {val.product_name + ` (Product ID : ${val.product_id})`}
                  </ModalHeader>
                  <ModalBody className="row">
                    <div className="col-4">
                      <img
                        className="img-thumbnail"
                        alt={val.product_name}
                        src={sampleImage}
                      />
                    </div>
                    <div className="col-8">
                      <Container>
                        <Row>
                          <Col sm={4}>Submission Time</Col>
                          <Col sm={8}>{Moment(val.submission_time).format("Do MMMM YYYY, hh:mm:ss") + " WIB"}</Col>
                        </Row>
                        <hr/>
                        <Row>
                          <Col sm={4}>Seller</Col>
                          <Col sm={8}>-</Col>
                        </Row>
                        <hr/>
                        <Row>
                          <Col sm={4}>Starting Price</Col>
                          <Col sm={8}>Rp {val.starting_price}</Col>
                        </Row>
                        <hr/>
                        <Row>
                          <Col sm={4}>Description</Col>
                          <Col sm={8}>{val.product_desc}</Col>
                        </Row>
                        <hr/>
                        <Row>
                          <Col sm={4}>Product Category</Col>
                          <Col sm={8}>ambil dari join</Col>
                        </Row>
                        <hr/>
                        <Row>
                          <Col sm={4}>Due Date</Col>
                          <Col sm={8}>{Moment(val.due_date).format("Do MMMM YYYY, hh:mm:ss") + " WIB"}</Col>
                        </Row>
                        <hr/>
                        <Row>
                          <Col sm={4}>Status</Col>
                          <Col sm={8}>{val.status}</Col>
                        </Row>
                      </Container>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button variant="danger">Reject</Button>
                    <Button variant="warning">Confirm</Button>
                  </ModalFooter>
                </>
              )
            })}
          </Modal>
        </div>
      );
    };
  };

  const renderTable = () => {
    return fetchSubmission.map((val, idx) => {
      return (
        <tr key={idx}>
          <td>{val.product_id}</td>
          <td>{val.product_name}</td>
          <td>
            {Moment(val.submission_time).format("Do MMMM YYYY, hh:mm:ss") +
              " WIB"}
          </td>
          <td>
            <img
              src={sampleImage}
              alt={val.image_path}
              width="120rem"
              height="90rem"
            />
          </td>
          <td>{val.status}</td>
          <td>
            <Button className="btn-bootstrap" onClick={() => handleToggle(val.product_id, val.product_name)}>
              {loading ? (
                <Loader type="Circles" color="#009C95" height={20} width={20} />
              ) : (
                  "Details"
                )}
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="d-flex justify-content-between">
      <table
        class="ui single line table"
        style={{ marginLeft: "20px", marginRight: "20px" }}
      >
        <thead class="">
          <tr class="">
            <th class="">Product ID</th>
            <th class="" rowSpan={2}>
              Product Name
            </th>
            <th class="">Submission Time</th>
            <th class="">Image</th>
            <th class="">Status</th>
            <th class="">Action</th>
          </tr>
        </thead>
        <tbody class="">{renderTable()}</tbody>
      </table>
      {renderModal()}
    </div>
  );
};

export default SetBiddingRoom;