import { Typography } from "@mui/material";
import { Box as BUI, styled } from "@mui/system";
import React from "react";
import sliderinfo from "pages/Home/slider.info.json";
import Team_member from "./team_member";
const OurTeam = () => {
  return (
    <Box sx={{ background: "#111" }}>
      <Typography
        variant="h3"
        color="primary"
        sx={{ fontWeight: 600, width: "80%" }}
      >
        Our Team
      </Typography>
      <Typography
        variant="p"
        sx={{ color: "rgba(255, 255, 255, 0.7)" }}
        component="p"
      >
        Take highly amazing shots and get your perfect desired images. Take your
        photography skills to a higher level.
      </Typography>
      <div className="team-container">
        {sliderinfo.map((info, key) => {
          return <Team_member {...{ info, key }} />;
        })}
      </div>
    </Box>
  );
};
const Box = styled(BUI)`
  min-height: 50vh;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .team-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    .team-member {
      border-radius: 15px 15px 0 0;
      background-color: #fce61d;
      display: flex;
      flex-direction: column;
      img {
        height: clamp(200px, 400px, 500px);
      }
      .team-member-info {
        padding: 1rem;
        display: flex;
        flex-direction: column;

        gap: 1rem;
        /* h5,
        h6 {
          margin: 0;
        } */
      }
    }
  }
  @media (max-width: 768px) {
    .team-container {
    }
  }
`;

export default OurTeam;
