import React from "react";
import Button from "@mui/material/Button";
import { Divider, TextField } from "@mui/material";


const HomePage = () => {
  return (
    <>
      <div>
        <h1>Todo List</h1>
        <div
          style={{
            display: "flex",
            gap: "50px",
            alignContent: "center",
            justifyContent: "center",
            // border: "1px solid #eee",
          }}
        >
          <TextField id="filled-basic" label="Enter a Task" variant="filled" />
          <Button variant="contained">Add</Button>
        </div>
        <Divider style={{marginTop:'50px'}}/>
      </div>
    </>
  );
};

export default HomePage;
