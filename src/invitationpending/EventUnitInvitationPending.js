import React from 'react';
import { FiClock } from 'react-icons/fi';
import axios from 'axios';
import { Button, Card, Space, Typography } from 'antd';
const { Title } = Typography;

function EventUnitInvitation(props) {
    const acceptInvitation = (event, eventid, email) => {
        event.preventDefault();
        axios.put(`http://localhost:9000/update/accept-invitation`, { eventid: eventid, email: email })
            .then(res => {
                window.location.reload(false);
            });
    }

    const declineInvitation = (event, eventid, email) => {
        axios.put(`http://localhost:9000/update/decline-invitation`, { eventid: eventid, email: email })
            .then(res => {
                window.location.reload(false);
            });
    }

    return (
        <Card bordered={false}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Title level={2} style={{ margin: 0 }}>{props.event.title}</Title>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Space>
                        <FiClock size={20} />
                        <p>
                            <span>{props.event.starttime}</span> - <span>{props.event.endtime}</span>
                        </p>
                    </Space>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ margin: 0 }}>{props.event.description}</p>
                <p style={{ display: "flex", alignItems: "center", margin: 0 }}>
                    <p>{props.event.duration}</p>
                </p>
            </div>
            <Space>
                <Button type="primary" onClick={(e) => acceptInvitation(e, props.event.eventid, props.event.email)}>
                    Accept
                </Button>
                <Button onClick={(e) => declineInvitation(e, props.event.eventid, props.event.email)}>
                    Decline
                </Button>
            </Space>

        </Card>
    );
}

export default EventUnitInvitation;