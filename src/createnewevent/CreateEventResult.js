import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from "react-router-dom";

function CreateEventResult() {
  const navigate = useNavigate();
  const nextEvent = () => { navigate('/create-new-event'); }
  const home = () => { navigate('/home'); }

  return (
    <Result
      status="success"
      title="Successfully Create New Event!"
      subTitle=""
      extra={[
        <Button type="primary" key="console" onClick={nextEvent}>
          Create Next Event
        </Button>,
        <Button key="buy" onClick={home}>My Schedule</Button>,
      ]}
    />
  );
}

export default CreateEventResult;