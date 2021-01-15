import { Card, Row } from 'antd';
import React from 'react';

const DashBoard = () => {
    return (
        <Row className="site-card-border-less-wrapper">
        <Card size="small" title="Tổng số User" bordered={false} style={{ width: 220,marginBottom:10 }}>
          <p>Card content</p>
          <p>Card content</p>
         
        </Card>
        <Card size="small" title="Tổng user đang online" bordered={false} style={{ width: 220,marginBottom:10 }}>
          <p>Card content</p>
          <p>Card content</p>

        </Card>
        <Card size="small" title="Tổng user đang thi" bordered={false} style={{ width: 220,marginBottom:10 }}>
          <p>Card content</p>
          <p>Card content</p>
         
        </Card>
        <Card size="small" title="Tổng số câu hỏi" bordered={false} style={{ width: 220 }}>
          <p>Card content</p>
          <p>Card content</p>
         
        </Card>
      </Row>
    )
}

export default DashBoard
