import React from "react";
import { Box, styled } from "@mui/system";

import { Typography } from "@mui/material";
import Logo from "assets/images/logo-footer.png";
import { Twitter, Instagram } from "@mui/icons-material";
import FooterBg from "assets/images/footerBg.png";
import { FaTiktok, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterStyle bgimage={FooterBg}>
      <div className="about">
        <img src={Logo} alt="logo" />
        <Typography variant="p" component="p">
          Cras convallis feugiat felis eget venenatis. Sed leo tellus, luctus
          eget ante quis, rutrum dignissim enim. Morbi efficitur tellus non
          mauris tincidunt feugiat.
        </Typography>
      </div>
      <div className="contact">
        <Typography variant="p" component="p">
          Contact us
        </Typography>
        <Typography variant="p" component="p">
          <a href="mailto:">nicetree@gmail.com</a>
        </Typography>
        <div className="socials">
          <FaInstagram />
          <FaTwitter />
          <FaTiktok />
        </div>
      </div>
    </FooterStyle>
  );
};
const FooterStyle = styled("div")`
  background: ${({ bgimage }) =>
    `linear-gradient(rgba(0,0,0, 0.9) , rgba(0,0,0, 0.9)),url(${bgimage})`};
  background-size: cover;
  padding: 100px;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  min-height: 50vh;
  display: flex;
  .about {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    gap: 1rem;
    p {
      width: 50%;
    }
    img {
      width: fit-content;
      height: 100px;
    }
  }
  .contact {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    a {
      color: white;
    }
    .socials {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    svg {
      font-size: 1.2rem;
    }
  }
`;

export default Footer;
