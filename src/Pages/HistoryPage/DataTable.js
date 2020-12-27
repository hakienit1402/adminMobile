import React from "react";
import { Button } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
export const DataTable = ({data}) => {
  return (
    <div style={{minHeight:400}}>
      <table className="table  table-bordered table-hover">
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>ID</th>
            <th>Tên người dùng</th>
            <th>Ngày làm</th>
            <th>Ngôn ngữ</th>
            <th>Bộ đề</th>
            <th>Điểm số</th>
            <th>Tác vụ</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
            {data.map((item,index)=>(
                <tr key={index}>
            <td>{item.id}</td>
            <td>Hà Ngoc Kiên </td>
            <td style={{ textAlign: "center", width: 120 }}>
            </td>
            <td style={{ textAlign: "center" }}></td>
            <td></td>
            <td></td>
            <td style={{ width: 100, textAlign: "center" }}>
              <a><EyeOutlined style={{ color: "blue", fontSize: 20, padding: 3 }}/>
              </a>
              <a><EditOutlined style={{ color: "yellow", fontSize: 20, padding: 3 }}/>
              </a>
              <a><DeleteOutlined style={{ color: "red", fontSize: 20, padding: 3 }}/>
              </a>
            </td>
          </tr>
            ))}
          
        </tbody>
      </table>
    </div>
  );
};
