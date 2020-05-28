import React, { useState, useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUsers, SearchUser, BanUser, UnbanUser } from '../../redux/action';

// child
import UserPagination from '../../components/UserPagination';

// style
import { Button, Form, Row, Col } from 'react-bootstrap';
import Loader from 'react-loader-spinner';
import Swal from 'sweetalert2';
import './ManageUsers.css';

const ManageUsers = () => {
  const [filterEmail, setFilterEmail] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(8);

  const fetchUser = useSelector(({ user }) => user.data);
  const totalUsers = useSelector(({ user }) => user.count);
  const loading = useSelector(({ user }) => user.loading);

  const dispatch = useDispatch();

  const offset = userPerPage * (currentPage - 1);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(GetAllUsers(userPerPage, offset));
  }, [currentPage]);

  const handleChange = e => {
    if (!e.target.value) dispatch(GetAllUsers(userPerPage, offset));
    setFilterEmail(e.target.value);
  };

  const handleBtn = () => dispatch(SearchUser(filterEmail, userPerPage, offset));

  const handleBan = (id, email) => {
    Swal.fire({
      title: `Are you sure you want to ban ${email}?`,
      text: "You can unban this user after banned",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, ban this user!'
    }).then((result) => {
      if (result.value) {
        dispatch(BanUser(id));
        dispatch(GetAllUsers(userPerPage, offset));
        Swal.fire(
          'Banned!',
          `${email} has been banned`,
          'success'
        );
      };
    });
  };

  const handleUnban = (id, email) => {
    Swal.fire({
      title: `Are you sure you want to Unban ${email}?`,
      text: "Changes will be save",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Unban this user!'
    }).then((result) => {
      if (result.value) {
        dispatch(UnbanUser(id));
        dispatch(GetAllUsers(userPerPage, offset));
        Swal.fire(
          'Unbanned!',
          `${email} has been Unbanned`,
          'success'
        );
      };
    });
  };

  const renderTable = () => {
    return fetchUser.map((val, idx) => {
      return (
        <tr key={idx}>
          <td>{val.user_id}</td>
          <td>{val.username}</td>
          <td>{val.email}</td>
          <td>{val.address}</td>
          <td>{val.phone}</td>
          <td>{val.status}</td>
          <td>
            {
              val.status === 'Active'
              ? 
              <Button variant="danger" onClick={() => handleBan(val.user_id, val.email)}>
                {
                  loading
                  ? <Loader type="Circles" color="#009C95" height={20} width={20} />
                  : 'Ban'
                }
              </Button>
              :
              <Button variant="primary" onClick={() => handleUnban(val.user_id, val.email)}>
                {
                  loading
                  ? <Loader type="Circles" color="#009C95" height={20} width={20} />
                  : 'Unban'
                }
              </Button>
            }
          </td>
        </tr>
      );
    });
  };

  return (
    <div className='mt-5'>
      <Form className='ml-5'>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label className='d-flex align-items-center font-weight-bold'>
            Filter By Email
          </Form.Label>
          <Col sm={3} >
            <Form.Control type="email" placeholder="Email" name="email" onChange={e => handleChange(e)} />
          </Col>
          <Button className="btn-bootstrap" onClick={handleBtn}>Search</Button>
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-between">
        <table class="ui single line table" style={{ marginLeft: '20px', marginRight: '20px' }}>
          <thead class="">
            <tr class="">
              <th class="">User ID</th>
              <th class="">Username</th>
              <th class="">Email Address</th>
              <th class="">Address</th>
              <th class="">Phone</th>
              <th class="">Status</th>
              <th class="">Action</th>
            </tr>
          </thead>
          <tbody class="">
            {
              loading
              ? <Loader type="Circles" color="#009C95" height={20} width={20} />
              : renderTable()
            }
          </tbody>
        </table>
      </div>
      <UserPagination
        userPerPage={userPerPage}
        totalUsers={totalUsers}
        paginate={paginate}
      />
    </div>
  );
};

export default ManageUsers;