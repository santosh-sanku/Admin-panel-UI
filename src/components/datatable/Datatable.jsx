import React from "react";
import "./datatable.css";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";

// MUI Datattable
// getting the data from datattablesource.js file

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <>
            <div className="cellAction">
              <Link to="/users/test" style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>

              <div className="deleteButton">Delete</div>
            </div>
          </>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      {/* <div style={{ height: 400, width: "100%" }}> */}

      <div className="datatableTitle">
        Add New User
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="linker"
        >
          Add new
        </Link>
      </div>

      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      {/* </div> */}
    </div>
  );
};

export default Datatable;
