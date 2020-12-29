import React, { useState, useEffect } from "react";
import { DataTable } from "./DataTable";
import { Modal, Upload, message, Input, Drawer, Descriptions, Row, Button } from "antd";
import { Pagination } from "../../components/Pagination";
import { useSelector } from "react-redux";
const { Search } = Input;
const User = () => {
  const [searchValue, setsearchValue] = useState("");
  const [currentPage, setcurrentPage] = useState([1]);
  const [visible,setVisible] = useState(false) 
  const [dataPerPage] = useState([3]);
  const end = currentPage * dataPerPage;
  const begin = end - dataPerPage;
  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  
 const data = useSelector(state => state.user)
 console.log(data)
  //   const filterDataSearch = data.filter((filterData) => {
  //     return filterData.tensp.toLowerCase().includes(searchValue.toLowerCase()),
  //     filterData.gia.toString().includes(searchValue)
  //   });
  const handleAdd = () =>{
    setVisible(true)
  }
  return (
    <div>
      <div
        className="content-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: 10,
        }}
      >
        <Button onClick={()=>handleAdd()}>ADD NEW</Button>
        <Search
          placeholder="Search sản phẩm..."
          onSearch={(value) => console.log(value)}
          style={{ width: 300 }}
        />
      </div>
      <DataTable data={data.slice(begin,end)} />
      <Pagination
        dataPerPage={dataPerPage}
        totalData={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default User;
