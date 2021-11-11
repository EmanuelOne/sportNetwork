import { Box, styled } from "@mui/system";
// import {Div} from '@mui/material'
import React from "react";
import Deposition from "assets/images/depositionalBg.jpg";
import salahBg from "assets/images/salahBg.png";
import HeroImage from "assets/images/HeroImage.png";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import previewImage from "assets/images/previewImage.png";
import PostCard from "components/Post/postCard/postCard";
import postLists from "./postList.json";
import sliderInfo from "./slider.info.json";
import TeamSlider from "components/slider/teamSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  arrows: false,
  slidesToScroll: 4,
  initialSlide: 0,
  autoPlay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
console.log(sliderInfo);

const Home = () => {
  return (
    <HomeStyle bgimages={[Deposition, salahBg]}>
      <Box className="hero-section" sx={{ height: "100%", display: "flex" }}>
        <Box className="hero-image">
          <img src={HeroImage} alt="" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4rem",
            width: "90%",
          }}
          className="hero-body"
        >
          <Typography
            variant="h3"
            color="primary"
            sx={{ fontWeight: 600, width: "80%" }}
          >
            Get Latest Sports News Here
          </Typography>
          <Typography variant="h6" color="text" sx={{ width: "80%" }}>
            Take highly amazing shots and get your perfect desired images. Take
            your photography skills to a higher level.
          </Typography>
          <div className="actions">
            <Button
              sx={{ fontSize: "20px", fontWeight: 600 }}
              variant="contained"
              color="primary"
              size="large"
            >
              Register
            </Button>
            <Button>Register to get news updates</Button>
          </div>
        </Box>
      </Box>
      {/* preview -> African BasketBall */}
      <Box className="preview">
        <Button variant="contained" color="secondary" size="large">
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
      <div className="divider" />
      <Box className="post-list">
        {postLists.map((post, key) => (
          <PostCard {...{ post, key }} />
        ))}
      </Box>
      <Box className="our-team">
        <div className="our-team-content">
          <Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
            Our Team
          </Typography>
          <Typography variant="p" color="text" component="p">
            Our team of workers are head down filed with potentials capable of
            promoting {<Link to="/">African sports </Link>}
            and importantly create a promising for young talents in the future<br/>
            {<Link to="/our_team">view team </Link>}
          </Typography>
        </div>
        <div className="our-team-slider">
          <Slider {...settings}>
            {sliderInfo.map((info, key) => (
              <div className="slide-body" {...{ key, info }}>
                <img src={info.image} alt="" />
                <div className="slide-content">
                  <Typography variant="h5" color="text" component="h5">
                    {info.name}
                  </Typography>
                  <Typography variant="h6" color="text" component="p">
                    {info.role}
                  </Typography>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Box>
      <Box
        sx={{
          minHeight: "50vh",
          width: "100%",
          background: "#000",
          marginTop: "-2%",
        }}
        className="team-footer-breaker"
      ></Box>
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
  .divider {
    height: 10px;
    width: 30%;
    background-color: #000;
    margin: 1rem 10px 1rem auto;
    border-radius: 2px;
  }
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

    height: calc(100vh);
    width: 100%;
    display: flex;
    /* margin-top: 10px; */
    .hero-image {
      /* width: clamp(50%, 100%, 100%); */
    }
    img {
      transform: translateY(-5%);
      height: 105%;
      width: 100%;
    }
    .actions {
      display: flex;
      /* justify-content: space-between; */
      gap: 3rem;
      width: 100%;
      /* justify-content: center; */
      width: 80%;
    }
  }
  .hero-body {
    padding-right: 20px;
    width: 50%;
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
  .our-team {
    background-color: #111111;
    /* height: 100vh; */
    width: 100%;
    min-height: 40vh;
    display: flex;
    z-index: 5;
    padding: 50px 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    .our-team-slider {
      width: 100%;
      .slick-slide img {
        width: 90%;
        z-index: 5;
        height: 280px;
      }
      .slick-dots li button:before {
        color: white;
      }
      .slide-body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .slide-content {
          background-color: #fce61d;
          color: #111;
          width: 90%;
          border-radius: 0 0 10px 10px;
          margin-top: -10px;
          padding: 30px 20px 20px;
          text-align: left;
          h5 {
            font-size: 20px;
            font-weight: 600;
          }
        }
      }
    }
    .our-team-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.5rem;

      p {
        color: white;
        width: 50%;
        word-break: normal;
        line-height: 1.8;
        a {
          color: #fce61d;
          &:hover {
            color: rgba(252, 230, 29, 0.8);
          }
        }
      }
    }
  }
  @media (max-width: 1000px) {
    .hero-section {
      height: calc(80vh - 100px);
    }
    .preview-body {
      width: auto;
      img {
        width: 100%;
      }
    }
  }
  @media (min-width: 770px) and (max-width: 1000px) {
    .hero-section {
      .hero-image {
        width: 50%;
        img {
          width: 100%;
        }
      }
      .hero-body {
        h3,
        h6 {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .hero-section {
      height: 100vh;
      img {
        display: none;
      }
      .hero-body {
        width: 100%;
        padding-right: 0;
        padding: 0px 20px 20px;
        gap: 2rem;
        h3 {
          font-size: 40px;
          width: 100%;
        }
        h6 {
          width: 100%;
        }
        .actions {
          gap: 1rem;
          flex-direction: column;
          width: 100%;
          button {
            width: fit-content;
          }
        }
      }
    }
    .post-list {
      grid-template-columns: 1fr;
    }
    .preview {
      padding: 10px 30px;
      img {
        width: 100%;
      }
    }
    .our-team {
      padding: 50px 20px;
      .our-team-content {
        flex-direction: column;
        p {
          width: 100%;
        }
        h4 {
          text-align: left;
          width: 100%;
        }
      }
    }
    .team-footer-breaker {
      display: none;
    }
  }
`;
export default Home;
