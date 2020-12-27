import React, { useState, useEffect } from "react";
import { DataTable } from "./DataTable";
import { Modal, Upload, message, Input, Drawer, Descriptions, Row } from "antd";
import { Pagination } from "../../components/Pagination";
const { Search } = Input;
const Question = () => {
  const [searchValue, setsearchValue] = useState("");
  const [currentPage, setcurrentPage] = useState([1]);
  const [dataPerPage] = useState([3]);
  const end = currentPage * dataPerPage;
  const begin = end - dataPerPage;
  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  const data = [
    {
      id: 1,
      fullname: "Ha Ngoc Kien",
      image:
        "https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/79451546_3058864351005230_4509966735998189568_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=BVKeMnoM84YAX9axhDn&_nc_ht=scontent.fvca1-1.fna&oh=4bd8cbd3991d8830a0d8f6bf5b3e8fa5&oe=600E8EBA",
    },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];
  //   const filterDataSearch = data.filter((filterData) => {
  //     return filterData.tensp.toLowerCase().includes(searchValue.toLowerCase()),
  //     filterData.gia.toString().includes(searchValue)
  //   });
  return (
    <div>
      <div
        className="content-header"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingBottom: 10,
        }}
      >
        <Search
          placeholder="Search sản phẩm..."
          onSearch={(value) => console.log(value)}
          style={{ width: 300 }}
        />
      </div>
      <DataTable data={data.slice(begin, end)} />
      <Pagination
        dataPerPage={dataPerPage}
        totalData={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Question;

