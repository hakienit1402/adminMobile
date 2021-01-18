import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import React from "react";
export const DataTable = ({ data }) => {
  return (
    <div style={{ minHeight: 400 }}>
      <table className="table  table-bordered table-hover">
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>Bộ đề</th>
            <th>Ngôn ngữ</th>
            <th>Câu hỏi</th>
            <th>Dạng câu</th>
            <th>Multi Option</th>
            <th>Đáp án</th>
            <th>Đáp án đúng</th>
            {/* <th>Tác vụ</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.topic}</td>
              <td>{item.language}</td>

              {item.type === "image" ? (
                <td>
                  <img
                    src={item.question}
                    alt="#"
                    style={{ 
                      height: 'auto', 
                      width: 'auto', 
                      maxWidth:300,maxHeight:200 }}
                  />
                </td>
              ) : (
                <td>{item.question}</td>
              )}
              <td>{item.type}</td>
              {item.multiOption === true ? <td>True</td> : <td>False</td>}
              <td>
                <span style={{ display: "block" }}> A: {item.optionA}</span>
                <span style={{ display: "block" }}> B: {item.optionB}</span>
                <span style={{ display: "block" }}> C: {item.optionC}</span>
                <span style={{ display: "block" }}> D: {item.optionD}</span>
              </td>
              <td>
                <span style={{ display: "block" }}>
                  Answer One: {item.answerOne}
                </span>
                <span style={{ display: "block" }}>
                  Answer Two: {item.answerTwo}
                </span>
              </td>
              {/* <td style={{ width: 80, textAlign: "center"}}>
                <EditOutlined
                  style={{ color: "yellow", fontSize: 20, padding: 3 }}
                />
                <DeleteOutlined
                  style={{ color: "red", fontSize: 20, padding: 3 }}
                />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
