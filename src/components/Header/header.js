import React from 'react';
import { Container } from '@mui/material';
import { Box, styled } from '@mui/system';
import logoSrc from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import { Sling as Hamburger } from 'hamburger-react';
import useOnclickOutside from 'react-cool-onclickoutside';
const Header = () => {
  const [mobile, setMobile] = React.useState(false);
  const handleMobile = () => {
    setMobile(!mobile);
  };
  const ref = useOnclickOutside(() => {
    // console.log("outside");
    setMobile(false);
  });
  return (
    <HeaderStyle {...{ mobile }}>
      <nav {...{ ref }}>
        <div className="logo">
          <img src={logoSrc} />
        </div>
        <div className="mobile">
          <div className="icons">
            <img src={logoSrc} />
            <div className="icon" onClick={() => handleMobile()}>
              <Hamburger duration={0.8} toggled={mobile} toggle={setMobile} />
            </div>
          </div>
        </div>
        <div className="menus">
          <Link to="/">Basket Ball</Link>
          <Link to="/">Contact</Link>
        </div>
        <div className="nav-links">
          <Link to="/">Basket Ball</Link>
          <Link to="/contact">Contact</Link>
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
    .menus {
      display: none;
    }
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
    .mobile {
      display: none;
    }
  }
  .menus {
    display: none;
  }
  @media (max-width: 768px) {
    nav {
      padding: 20px 20px 0;
      background-color: #000;
      border-top: none;
      height: fit-content;
      position: relative;
      flex-direction: column;
      .logo {
        display: none;
      }
      .mobile {
        display: flex;
        color: white;
        width: 100%;

        .icons {
          display: flex;
          width: 100%;
          /* gap: 5rem; */
          justify-content: space-between;
          align-items: center;
          img {
            width: 40%;
          }
          svg {
            font-size: 3rem;
            height: 100%;
            /* transform: rotate(180deg); */
          }
        }
      }
      .menus {
        background-color: #000;
        width: 100%;
        height: 100%;
        display: flex;
        padding: 30px 0;
        flex-direction: column;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        a {
          color: white;
        }
        position: ${({ mobile }) => (mobile ? 'relative' : 'absolute')};
        top: ${({ mobile }) => (mobile ? '0px' : '-100000px')};
      }

      .nav-links {
        display: none;
      }
    }
  }
`;
export default Header;
