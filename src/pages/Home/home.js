import { Box, styled } from "@mui/system";
// import {Div} from '@mui/material'
import React from "react";
import Deposition from "assets/images/depositionalBg.jpg";
import salahBg from "assets/images/salahBg.png";
import HeroImage from "assets/images/HeroImage.png";

import { Button, Divider, Typography } from "@mui/material";
import previewImage from "assets/images/previewImage.png";
import PostCard from "components/Post/postCard/postCard";
import postLists from "./postList.json";
const Home = () => {
  return (
    <HomeStyle bgimages={[Deposition, salahBg]}>
      <Box className="hero-section" sx={{ height: "100%", display: "flex" }}>
        <Box>
          <img src={HeroImage} alt="" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            gap: "2rem",
            width: "90%",
          }}
          className="hero-body"
        >
          <Typography variant="h3" color="primary">
            Get Latest Sports News Here
          </Typography>
          <Typography variant="h6" color="text">
            Take highly amazing shots and get your perfect desired images. Take
            your photography skills to a higher level.
          </Typography>
          <div className="actions">
            <Button
              sx={{ fontSize: "20px", fontWeight: 600 }}
              variant="contained"
              color="primary"
              size="medium"
            >
              Register
            </Button>
            <Button>Register to get news updates</Button>
          </div>
        </Box>
      </Box>
      {/* preview -> African BasketBall */}
      <Box className="preview">
        <Button variant="contained" color="secondary" size="medium">
          African BasketBall
        </Button>
        <Box className="preview-body" sx={{}}>
          <div>
            <img src={previewImage} alt="" />
            <div className="preview-text">
              <Typography variant="p" component="p">
                Liperpool wins Champions League game against Tottenham Club
              </Typography>
            </div>
          </div>
        </Box>
      </Box>
      <Divider variant="inset" component="div" />
      <Box className="post-list">
        {postLists.map((post, key) => (
          <PostCard {...{ post, key }} />
        ))}
      </Box>
    </HomeStyle>
  );
};
const HomeStyle = styled("div")`
  /* background-color: #f0f; */

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  .hero-section {
    color: rgba(255, 255, 255, 0.7);
    max-width: 100%;
    background: ${({ bgimages }) => `linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.9) 70.52%,
      rgba(0, 0, 0, 0.747) 101.46%
    ),url(${bgimages[1]}),url(${bgimages[0]})`};
    background-size: contain, contain, cover;
    background-position-x: center, right, center;
    background-repeat: no-repeat;

    height: calc(100vh - 80px);
    width: 100%;
    display: flex;
    /* margin-top: 10px; */
    img {
      transform: translateY(-5%);
      height: 105%;
    }
    .actions {
      display: flex;
      /* justify-content: space-between; */
      gap: 3rem;
      width: 100%;
    }
  }
  .hero-body {
    max-width: 50%;
    width: 100%;
  }
  .preview {
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    button {
      width: fit-content;
    }
    .preview-body {
      background-color: rgba(17, 17, 17, 1);
      border-radius: 10px 10px 0 0;
    }
    .preview-text {
      width: 100%;
      padding: 10px 40px;
      color: white;
      text-align: center;
    }
  }
  .post-list {
    display: grid;
    gap: 3rem 2rem;
    padding: 10px 30px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
export default Home;
