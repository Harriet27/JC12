import React from 'react';
import { Alert } from 'reactstrap';

const AlertCustom = (props) => {
  return (
    <div>
      <Alert color={props.color}>
        {
          props.content
          ?
          `Welcome Back! ${props.content}`
          :
          'This is a primary alert - check it out!'
        }
      </Alert>
    </div>
  );
};

export default AlertCustom; 