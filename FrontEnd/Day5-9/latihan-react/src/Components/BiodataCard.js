import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import AlertCustom from './AlertCustom';

const BiodataCard = (props) => {
    console.log(props);
    const {namaCth, usiaCth, pekerjaanCth, color, show, alert} = props;

    return(
    <div style={{margin: '0px 20px'}}>
      <Card>
        <CardImg top width="100%" src="https://thumbs.dreamstime.com/b/profile-picture-vector-perfect-social-media-other-web-use-125320510.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{namaCth}</CardTitle>
          <CardSubtitle>{usiaCth}</CardSubtitle>
          <CardText>{pekerjaanCth}</CardText>

          <Button onClick={show}>Button</Button>
          <Button onClick={alert}>Alert</Button>

          <AlertCustom color={color}></AlertCustom>
        </CardBody>
      </Card>
    </div>
  );
};

export default BiodataCard;