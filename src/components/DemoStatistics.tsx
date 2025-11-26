import React, { useState } from 'react';
import { Button, Col, Row, Statistic } from 'antd';

const DemoStatistics: React.FC = () => {
    const [success, setSuccess] = useState<boolean>(true);

    const changeSuccess = () => {
        setSuccess((prev) => !prev);
    };

    return (
        <Row gutter={16}>
            <Col span={12}>
                <Statistic title="Active Users" value={112893} />
            </Col>

            <Col span={12}>
                <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                <Button style={{ marginTop: 16 }} type="primary" onClick={changeSuccess}>
                    {`success=${success}`}
                </Button>
            </Col>

            <Col span={12}>
                <Statistic title="Active Users" value={112893} loading />
            </Col>

        </Row>
    );
};

export default DemoStatistics;