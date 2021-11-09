import { Typography } from "@mui/material";
import React from "react";

const Team_member = ({ info }) => {
  return (
    <div className="team-member">
      <img src={info.image} alt="" />
      <div className="team-member-info">
        <Typography
          variant="h5"
          color="text"
          component="h5"
          sx={{
            fontWeight: 600,
          }}
        >
          {info.name}
        </Typography>
        <Typography variant="h6" color="text" component="p">
          {info.role}
        </Typography>
      </div>
    </div>
  );
};

export default Team_member;
