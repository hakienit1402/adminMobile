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
            <th>Họ và tên</th>
            <th>Ảnh đại diện</th>
            <th>Email</th>
            <th>Mô tả</th>
            <th>Trạng thái</th>
            <th>Tác vụ</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
            {data.map((item,index)=>(
                <tr key={index}>
            <td>{item.id}</td>
            <td>Hà Ngoc Kiên </td>
            <td style={{ textAlign: "center", width: 120 }}>
              <img
                src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/79451546_3058864351005230_4509966735998189568_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=BVKeMnoM84YAX9axhDn&_nc_ht=scontent.fvca1-1.fna&oh=4bd8cbd3991d8830a0d8f6bf5b3e8fa5&oe=600E8EBA"
                alt=""
                style={{ width: 100, height: 100 }}
              />
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
