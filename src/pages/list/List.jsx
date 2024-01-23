import React from "react";
import "./list.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";

// MUI Datatable

const List = () => {
  return (
    <div className="listed">
      <Sidebar />

      <div className="listContainered">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
