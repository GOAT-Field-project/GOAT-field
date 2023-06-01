import { Star } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { featuredCityData } from "../dummyData.js";

const Container = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  margin: 30px 0px 25px;

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

const CardContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
margin-bottom: 3rem;
margin-top: 1.5rem;
  justify-content: space-evenly;
`;

const Card = styled.div`
  /* border: 1px solid black; */
  box-shadow: 0px 0px 5px 2px rgb(0 0 0 / 10%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 32%;
  margin: 12px 0px;
  overflow: hidden;
  transition: all 0.2s ease;

  @media screen and (max-width: 620px) {
    width: 48%;
  }

  @media screen and (max-width: 426px) {
    width: 100%;
  }

  .link {
    text-decoration: none;
    color: black;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

const ImgContainer = styled.div`
  /* border: 1px solid yellow; */
  width: 100%;
  height: 230px;

  @media screen and (max-width: 1025px) {
    height: 185px;
  }

  @media screen and (max-width: 950px) {
    height: 135px;
  }
  
  @media screen and (max-width: 426px) {
    height: 220px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


const Country = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 20px;
    color: #54575d;

    @media screen and (max-width: 950px) {
      font-size: 17px;
    }
  }

  .flag-img {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    margin-left: 10px;
    object-fit: cover;
  }
`;

const Desc = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  height: 75px;
  overflow: hidden;
  margin-top: 5px;
  font-size: 14px;
  text-align: center;
  color: gray;

  @media screen and (max-width: 950px) {
    font-size: 13px;
    margin: 0px;
    padding: 5px;
  }
`;

const OtherInfo = styled.div`
  /* border: 1px solid black; */
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #6f7278;

  @media screen and (max-width: 950px) {
    font-size: 13px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;

  .star-icon {
    color: #2061ca;
    font-size: 20px;

    @media screen and (max-width: 950px) {
      font-size: 12px;
    }
  }
`;



const FeaturedCities = () => {
    return (
        <Container>
            <h1>Popular destinations </h1>
            <p>These popular destinations have a lot to offer</p>
            <CardContainer className="gap-y-10 gap-x-1">
                {featuredCityData.map((city) => (
                    <div key={city.id} className=" 2xl:w-1/4 xl:w-1/3 lg:w-1/3 w-2/3 min-w-fit" >
                        <a href="#" className="block rounded-lg p-4 shadow-sm shadow-gray-300 ">

                            <img
                                style={{
                                    aspectRatio: 3 / 2,
                                    odjectFit: "contain"
                                }}
                                alt="Home"
                                src={city.img}
                                className="h-56 w-full rounded-md object-cover"
                            />

                            <div className="mt-2">
                                <dl>

                                    <div>
                                        <dt className="sr-only">Address</dt>

                                        <dd className="font-medium">{city.name}</dd>
                                    </div>
                                    <div>
                                        <dt className="sr-only">Price</dt>

                                        <dd className="text-sm text-gray-500">number of reservation {city.hotels}</dd>
                                    </div>
                                </dl>

                                <div className="mt-6 flex items-center gap-8 text-xs">
                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg
                                            className="h-4 w-4 text-[#54B435]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                                            />
                                        </svg>

                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">City</p>

                                            <p className="font-medium">Zarqa</p>
                                        </div>
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg
                                            className="h-4 w-4 text-[#54B435]"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                                            />
                                        </svg>

                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">Size</p>

                                            <p className="font-medium">5-A-SIDE</p>
                                        </div>
                                    </div>

                                    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.9348 13.1725C15.3654 13.3446 15.5817 13.8402 15.3237 14.2255C15.0294 14.665 14.6493 15.0442 14.2032 15.3386C13.522 15.7881 12.7196 16.0185 11.9037 15.9988C11.0878 15.9792 10.2975 15.7104 9.6387 15.2287C9.20726 14.9131 8.8458 14.5161 8.573 14.0629C8.33384 13.6656 8.57376 13.181 9.01216 13.0299C9.45056 12.8788 9.91919 13.1274 10.2157 13.4839C10.3367 13.6294 10.4756 13.7603 10.63 13.8732C11.0122 14.1527 11.4708 14.3087 11.9441 14.3201C12.4175 14.3315 12.883 14.1978 13.2782 13.937C13.4379 13.8316 13.583 13.7076 13.7108 13.5681C14.0241 13.2262 14.5042 13.0005 14.9348 13.1725Z" fill="#000000" />
                                            <path d="M15 9V10M9 9V10M7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21Z" stroke="#000000" stroke-width="2" stroke-linecap="round" />
                                        </svg>

                                        <div className="mt-1.5 sm:mt-0">
                                            <p className="text-gray-500">Rating</p>

                                            <div className="flex items-center">
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>First star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Second star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Third star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-yellow-400"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Fourth star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg
                                                    aria-hidden="true"
                                                    className="w-5 h-5 text-gray-300 dark:text-gray-500"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <title>Fifth star</title>
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* <Link to="/hotels" className="link">
                            <ImgContainer >
                                <img src={city.img} alt="" />
                            </ImgContainer>
                            <InfoContainer>
                                <Country >
                                    <h1 >{city.name}</h1>
                                </Country>
                                <Desc>{`${city.desc.slice(0, 150)} ...`}</Desc>
                                <OtherInfo>
                                    <Rating>
                                        <h4>Rating:</h4>
                                        <IconContainer>
                                            {(city.rating === 1 && <Star className="text-[#ffd100]" />) ||
                                                (city.rating === 2 && (
                                                    <>
                                                        <Star className="text-[#ffd100]" />
                                                        <Star className="text-[#ffd100]" />
                                                    </>
                                                )) ||
                                                (city.rating === 3 && (
                                                    <>
                                                        <Star className="text-[#ffd100]" />
                                                        <Star className="text-[#ffd100]" />
                                                        <Star className="text-[#ffd100]" />
                                                    </>
                                                )) ||
                                                (city.rating === 4 && (
                                                    <>
                                                        <Star className=" text-[#ffd100]" />
                                                        <Star className="text-[#ffd100]" />
                                                        <Star className="text-[#ffd100]" />
                                                        <Star className="text-[#ffd100]" />
                                                    </>
                                                )) ||
                                                (city.rating === 5 && (
                                                    <>
                                                        <Star className="text-[#ffd100]" />
                                                        <Star className="text-[#ffd100]" />
                                                        <Star className="text-[#ffd100]" />
                                                        <Star className="text-[#ffd100]" />
                                                        <Star className="text-[#ffd100]" />
                                                    </>
                                                ))}
                                        </IconContainer>
                                    </Rating>

                                </OtherInfo>
                            </InfoContainer>
                        </Link> */}
                    </div>
                ))}

            </CardContainer>
        </Container>
    );
};

export default FeaturedCities;
