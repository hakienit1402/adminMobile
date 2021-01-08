import React from "react";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
export const DataTable = ({ data }) => {
  return (
    <div style={{ minHeight: 400 }}>
      <table className="table  table-bordered table-hover">
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>ID</th>
            <th>Ngôn ngữ</th>
            <th>Mã bộ đề</th>
            <th>Câu hỏi</th>
            <th>Đáp án</th>
            <th>Đáp án đúng</th>
            <th>Tác vụ</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td style={{ textAlign: "center", width: 120 }}></td>
              <td style={{ textAlign: "center" }}></td>
              <td></td>
              <td></td>
              <td style={{ width: 100, textAlign: "center" }}>
                <a>
                  <EyeOutlined
                    style={{ color: "blue", fontSize: 20, padding: 3 }}
                  />
                </a>
                <a>
                  <EditOutlined
                    style={{ color: "yellow", fontSize: 20, padding: 3 }}
                  />
                </a>
                <a>
                  <DeleteOutlined
                    style={{ color: "red", fontSize: 20, padding: 3 }}
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
