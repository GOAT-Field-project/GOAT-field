import hero from '../../public/videos/goathero3.mp4';
import {
  AirportShuttleOutlined,
  AttractionsOutlined,
  CurrencyExchangeOutlined,
  DirectionsCarOutlined,
  HelpOutlineOutlined,
  HotelOutlined,
  HowToRegOutlined,
  LoginOutlined,
  LogoutOutlined,
  NightShelterOutlined,
  SearchOutlined,
  TranslateOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { Link } from "react-router-dom";



const Wrapper = styled.header`
    /* border: 1px solid blue; */
    /* background-image: linear-gradient(90deg, #1958b2, #003580); */
    color: white;
    padding: 0px 150px;
    display: flex;
    flex-direction: column;
    width: 100%;
  
    @media screen and (max-width: 1200px) {
      padding: 0px 30px;
    }
  
    @media screen and (max-width: 950px) {
      padding: 0px 15px;
    }
  `;

const NavContainer = styled.nav`
    /* border: 1px solid yellow; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  `;

const LogoContainer = styled.div`
    /* border: 1px solid black; */
    display: flex;
    align-items: center;
    flex: 1;
  
    span {
      /* border: 1px solid black; */
      width: 250px;
      font-size: 30px;
      font-weight: 600;
  
      @media screen and (max-width: 950px) {
        width: 145px;
        font-size: 25px;
      }
    }
  `;

const BtnContainer = styled.div`
    /* border: 1px solid black; */
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  
    @media screen and (max-width: 675px) {
      display: none;
    }
  
    span {
      font-size: 17px;
      margin: 0px 20px;
      cursor: pointer;
    }
  
    img {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      margin-right: 20px;
      cursor: pointer;
    }
  
    .help-icon {
      font-size: 28px;
      margin-right: 20px;
      cursor: pointer;
    }
  `;

const Button = styled.button`
    border: 1px solid white;
    background-color: white;
    width: 80px;
    padding: 9px 10px;
    margin-right: 10px;
    color: #54B435;
    border-radius:5px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  
    @media screen and (max-width: 950px) {
      padding: 7px;
      margin-right: 7px;
      font-size: 13px;
      width: 70px;
    }
  
    &:hover {
      color: white;
      background-color: transparent;
    }
  
    &.bigBtn {
      background-color: transparent;
      color: white;
      width: 150px;
  
      @media screen and (max-width: 950px) {
        width: 125px;
      }
  
      &:hover {
        background-color: #00000061;
      }
    }
  `;

// ----------------Mobile Hamburger Icon Style--------------------

const ImgAndHamburgerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
  
    @media screen and (min-width: 675px) {
      display: none;
    }
  
    img {
      background-color: whitesmoke;
      border-radius: 50%;
      width: 38px;
      height: 38px;
      object-fit: cover;
    }
  
    .hamburger {
      /* border: 1px solid red; */
      width: 32px;
      height: 27px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-left: 20px;
      cursor: pointer;
  
      span {
        background-color: white;
        width: 100%;
        height: 4px;
        transform-origin: left;
        transition: all 0.2s ease;
      }
    }
  
    .close-hamburger {
      span {
        &:first-of-type {
          transform: rotate(45deg);
        }
  
        &:nth-of-type(2) {
          opacity: 0;
        }
  
        &:last-of-type {
          transform: rotate(-45deg);
        }
      }
    }
  `;

// ----------------End of Hamburger Style---------------------

const SecondNavContainer = styled.nav`
    /* border: 1px solid yellow; */
    display: flex;
    align-items: center;
    height: 77px;
  
    @media screen and (max-width: 950px) {
      height: 50px;
    }
  
    /* For Mobile Phone etc */
    @media screen and (max-width: 675px) {
      background-color: #00224f;
      flex-direction: column;
      align-items: flex-start;
      position: fixed;
      top: 60px;
      right: 0px;
      width: 100vw;
      height: calc(100vh - 60px);
      overflow-y: scroll;
      padding: 10px 30px;
      transform: translateX(${({ openMenu }) => (openMenu ? 0 : 100)}vw);
      transition: all 0.2s ease-out;
    }
  
    h3 {
      padding: 15px 5px;
      border-bottom: 1px solid #4f5874;
      width: 100%;
      display: none;
      @media screen and (max-width: 675px) {
        display: block;
      }
    }
  
    ul {
      /* border: 1px solid red; */
      display: flex;
      align-items: center;
      list-style: none;
  
      &.hidden-ul {
        display: none;
        @media screen and (max-width: 675px) {
          display: flex;
        }
      }
  
      /* For Mobile Phone etc*/
      @media screen and (max-width: 675px) {
        flex-direction: column;
        align-items: flex-start;
        order: 2;
        width: 100%;
        border-bottom: 1px solid #4f5874;
        padding: 5px 0px;
  
        &:last-child {
          border-bottom: none;
        }
      }
  
      .link {
        text-decoration: none;
        color: white;
  
        /* For Mobile Phone etc*/
        @media screen and (max-width: 675px) {
          margin: 5px 0px;
        }
      }
  
      li {
        border: 1px solid transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        padding: 10px 14px;
        font-size: 18px;
        cursor: pointer;
  
        @media screen and (max-width: 1025px) {
          margin-right: 5px;
          padding: 6px 12px;
          font-size: 15px;
        }
  
        @media screen and (max-width: 950px) {
          margin-right: 3px;
          padding: 2px 7px;
          font-size: 14px;
        }
  
        /* For Mobile Phone etc*/
        @media screen and (max-width: 675px) {
          border: none;
          background-color: transparent;
        }
  
        &:hover {
          border: 1px solid white;
          border-radius: 30px;
  
          /* For Mobile Phone */
          @media screen and (max-width: 675px) {
            border: none;
            border-radius: 0px;
          }
        }
  
        &.active {
          border: 1px solid white;
          border-radius: 30px;
  
          /* For Mobile Phone */
          @media screen and (max-width: 675px) {
            border: none;
            border-radius: 0px;
          }
        }
  
        .li-icon {
          margin-right: 8px;
  
          /* For Mobile Phone */
          @media screen and (max-width: 675px) {
            margin-right: 12px;
            /* color: #2874f0; */
          }
        }
      }
    }
  `;





const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [options, setOptions] = useState({
    adult: 2,
    children: 1,
    room: 1,
  });



  return (
    

        <Wrapper className='bg-[#161616]'>
          <NavContainer>
            <LogoContainer>
              <span>🐐GOAT FIELD</span>
            </LogoContainer>

            <BtnContainer>
              <HelpOutlineOutlined className="help-icon" />
              {/* <Link to="/register">
                                <Button className="bigBtn">List Your Property</Button>
                            </Link> */}
              <Link to="/register">
                <Button>Register</Button>
              </Link>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </BtnContainer>

            {/* For Mobile Start */}

            <ImgAndHamburgerContainer>
              <img src="/hotel-booking-app/images/boydp.jpg" alt="" />
              <div
                className={`hamburger ${openMenu && "close-hamburger"}`}
                onClick={() => setOpenMenu(!openMenu)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </ImgAndHamburgerContainer>

            {/* For Mobile End*/}
          </NavContainer>

          <SecondNavContainer openMenu={openMenu}>
            <ul>
              <Link to="/" className="link">
                <li className="active">
                  Home
                </li>
              </Link>
              {/* <Link to="/hotels" className="link">
                                <li>
                                    <ConnectingAirportsOutlined className="li-icon" />
                                    Flights
                                </li>
                            </Link> */}
              {/* <Link to="/hotels" className="link">
                <li>
                  <HotelOutlined className="li-icon" />
                  Hotels
                </li>
              </Link> */}
              <Link to="/reservationlist" className="link">
                <li>
                  <DirectionsCarOutlined className="li-icon" />
                  Reservation
                </li>
              </Link>
              <Link to="/AboutUs" className="link">
                <li>
                  <AttractionsOutlined className="li-icon" />
                  About us
                </li>
              </Link>
              <Link to="/contactus" className="link">
                <li>
                  <AirportShuttleOutlined className="li-icon" />
                  Contact us
                </li>
              </Link>
            </ul>

            {/* For Mobile Start */}

            <h3>Hello, Satya Thakur</h3>

            <ul className="hidden-ul">
              <Link to="/hotels" className="link">
                <li>
                  <SearchOutlined className="li-icon" />
                  Search Hotels
                </li>
              </Link>
              <Link to="/register" className="link">
                <li className="active">
                  <NightShelterOutlined className="li-icon" />
                  List Your Property
                </li>
              </Link>
              <Link to="/hotel/3" className="link">
                <li>
                  <CurrencyExchangeOutlined className="li-icon" />
                  Currency Exchange
                </li>
              </Link>
              <Link to="/hotels" className="link">
                <li>
                  <TranslateOutlined className="li-icon" />
                  Language
                </li>
              </Link>
              <Link to="/hotel/5" className="link">
                <li>
                  <HelpOutlineOutlined className="li-icon" />
                  Help
                </li>
              </Link>
            </ul>

            <ul className="hidden-ul">
              <Link to="/register" className="link">
                <li>
                  <HowToRegOutlined className="li-icon" />
                  Register
                </li>
              </Link>
              <Link to="/login" className="link">
                <li>
                  <LoginOutlined className="li-icon" />
                  Login
                </li>
              </Link>
              <Link to="/hotel/4" className="link">
                <li>
                  <LogoutOutlined className="li-icon" />
                  Logout
                </li>
              </Link>
            </ul>

            {/* For Mobile End */}
          </SecondNavContainer>


        </Wrapper>


  );
};

export default Navbar;
