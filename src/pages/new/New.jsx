import React, { useState } from "react";
import "./new.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";

// FORM PAGE DESIGN

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  // state for image upload

  console.log(file);

  return (
    <div className="newer">
      <Sidebar />

      <div className="newerConatiner">
        <Navbar />

        <div className="toppest">
          <h1>Add New User</h1>
        </div>

        <div className="bottomest">
          <div className="leftest">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://source.unsplash.com/300x300/?man"
              }
              alt=""
            />
          </div>

          {/* The below form we are using for both new user and new product */}
          <div className="righest">
            <form action="">
              <div className="formInput">
                <label htmlFor="fileUp">
                  Image: <DriveFolderUploadIcon className="iconest" />
                </label>
                <input
                  type="file"
                  id="fileUp"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              {/* <div className="formInput">
                <label htmlFor="">Name and Surname</label>
                <input type="text" placeholder="john doe" />
              </div>

              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="john_doe@hmail.com" />
              </div>

              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="+91 9876543210" />
              </div>

              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>

              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text" placeholder="Visakhapatnam" />
              </div>

              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder="India" />
              </div> */}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
