import { Card, Row } from "antd";
import React from "react";
import { useContext } from "react";
import { RootContext } from "../../ContextProviders";

const DashBoard = () => {
  const { countUser, countLogin, countExam, countQuestions } = useContext(
    RootContext
  );
  return (
    <Row className="site-card-border-less-wrapper">
      <Card
        size="small"
        title="Tổng số User"
        bordered={false}
        style={{ width: 220, marginBottom: 10 }}
      >
        <p style={{ color: "Highlight", fontSize: 20, fontWeight: "bold" }}>
          {countUser} users
        </p>
      </Card>
      <Card
        size="small"
        title="Tổng user đang đăng nhập "
        bordered={false}
        style={{ width: 220, marginBottom: 10 }}
      >
        <p style={{ color: "Highlight", fontSize: 20, fontWeight: "bold" }}>
          {countLogin} users
        </p>
      </Card>
      <Card
        size="small"
        title="Tổng user đang thi"
        bordered={false}
        style={{ width: 220, marginBottom: 10 }}
      >
        <p style={{ color: "Highlight", fontSize: 20, fontWeight: "bold" }}>
          {countExam} users
        </p>
      </Card>
      <Card
        size="small"
        title="Tổng số câu hỏi"
        bordered={false}
        style={{ width: 220 }}
      >
        <p style={{ color: "Highlight", fontSize: 20, fontWeight: "bold" }}>
          {countQuestions} questions
        </p>
      </Card>
    </Row>
  );
};

export default DashBoard;
