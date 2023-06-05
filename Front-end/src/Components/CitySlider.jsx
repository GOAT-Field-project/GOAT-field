import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { citySliderData } from "../dummyData";
import axios from "axios";

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  h1 {
    font-size: 30px;
    margin-left: 2px;

    @media screen and (max-width: 1025px) {
      font-size: 25px;
    }
  }

  p {
    color: gray;
    font-size: 16px;
    margin: 2px 0px 8px 3px;

    @media screen and (max-width: 950px) {
      font-size: 15px;
    }
  }
`;

const Wrapper = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  margin-top: 5px;
  position: relative;
`;

const SliderButton = styled.button`
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.42);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  z-index: 1;
  cursor: pointer;

  &.leftBtn {
    left: -18px;
  }

  &.rightBtn {
    right: -18px;
  }

  &:disabled {
    display: none;
  }

  &:hover {
    transform: scale(1.04);
    .arrow-icon {
      color: black;
    }
  }

  .arrow-icon {
    color: gray;
    font-size: 21px;
  }
`;

const SlideContainer = styled.div`
  /* border: 3px solid red; */
  display: flex;
  overflow: hidden;
`;

const Slide = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  transition: all 0.3s ease-out;

  /* Link renders in DOM as a Anchor (a) Tag but behaves like a div tag.So here I'm using it like a div tag to apply css style*/
  .link {
    /* border: 4px solid black; */
    color: white;
    display: flex;
    justify-content: center;
    min-width: 305px;
    height: 250px;
    padding: 0px 6px;
    position: relative;

    @media screen and (max-width: 1025px) {
      min-width: 324px;
    }

    @media screen and (max-width: 950px) {
      min-width: 352px;
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Text = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: white;
  background-color: #00000091;
  padding: 3px 10px;
  border-radius: 5px;

  span {
    font-size: 14px;
    color: #f4f2f2;
  }
`;

const CitySlider = () => {
  const [slide, setSlide] = useState(4); //Set any number other than 0 and 8 for 12 Images Slider because if,it is 0 then left slider button will be disable and due to css property display:none; it will be invisible.Same thing will happen with right slider button if i set 8.

  //   console.log(slide);

  const handleSlide = (direction) => {
    direction === "left"
      ? setSlide(slide > 0 ? slide - 1 : 8)
      : setSlide(slide < citySliderData.length - 4 ? slide + 1 : 0);
  };

  const [usersnum, setusersnum] = useState("")
  const [fieldnum, setfieldnum] = useState("")
  const [bookingsnum, setbookingsnum] = useState("")
  const getstats = () => {
    axios.get('http://localhost:5151/countreservations')
      .then(response => { setbookingsnum(response.data) })
      .catch(error => {
        console.error(error);
      })
    console.log(bookingsnum);
    axios.get('http://localhost:5151/countusers')
      .then(response => { setusersnum(response.data) })
      .catch(error => {
        console.error(error);
      })
    console.log(usersnum);
    axios.get('http://localhost:5151/countfields')
      .then(response => { setfieldnum(response.data) })
      .catch(error => {
        console.error(error);
      })
    console.log(fieldnum);
  }

  useEffect(() => {
    getstats()
  }, [])
  return (
    <section className="bg-white">
      <hr />

      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            GOAT Feild Stats
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
            laborum labore provident impedit esse recusandae facere libero harum
            sequi.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100"
          >
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Number Of Reservations
              </dt>

              <dd className="text-4xl font-extrabold text-[#54B435] md:text-5xl">
                {bookingsnum.count}
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Our Pitchs
              </dt>

              <dd className="text-4xl font-extrabold text-[#54B435] md:text-5xl">{fieldnum.count}</dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Users Numbers
              </dt>

              <dd className="text-4xl font-extrabold text-[#54B435] md:text-5xl">{usersnum.count}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default CitySlider;
