import React from "react";
import { Container } from "@mui/material";
import { Box, styled } from "@mui/system";
import logoSrc from "assets/images/logo.png";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
const Header = () => {
  return (
    <HeaderStyle>
      <nav>
        <div className="logo">
          <img src={logoSrc} />
        </div>
        <div className="icons">
          <BiMenuAltRight className="menu" />
        </div>
        <div className="nav-links">
          <Link to="/">Basket Ball</Link>
          <Link to="/">Contact</Link>
        </div>
      </nav>
    </HeaderStyle>
  );
};

const HeaderStyle = styled(Box)`
  nav {
    background-color: #fff;
    height: 120px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 40px solid #111;
    .logo {
      background: #fce61d;
      clip-path: polygon(0 0, 100% 0, 76% 100%, 0 100%);
      padding: 10px 60px 10px 20px;
      height: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .nav-links {
      display: flex;
      margin-right: 20px;
      gap: 1rem;
      a {
        color: black;

        text-decoration: none;
      }
    }
    .icons {
      display: none;
    }
  }
  @media (max-width: 768px) {
    nav {
      padding: 20px 20px 0;
      background-color: #000;
      border-top: none;
      height: fit-content;
      .logo {
        display: none;
      }
      .icons {
        display: block;
        color: white;
        svg {
          font-size: 2rem;
          transform: rotate(180deg);
        }
      }
      .nav-links {
        display: none;
      }
    }
  }
`;
export default Header;
