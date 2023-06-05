import styled from "styled-components";

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

import { useEffect, useState } from "react";
import axios from "axios";

const PopularSection = () => {
  const [featuredCityData, setFeaturedCityData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5151/getdatas");
        setFeaturedCityData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Container>
      <h1>Popular destinations</h1>
      <p>These popular destinations have a lot to offer</p>
      <CardContainer className="gap-y-10 gap-x-1">
        {featuredCityData.slice(0, 6).map((city) => (
          <div key={city.id} style={{ width: "380px" }} >
            <a href="#" style={{ height: "450px" }} className="block rounded-lg p-4 shadow-sm shadow-gray-300">

              <img
                style={{
                  width: "100%",
                  objectFit: "contain",
                  height: "220px" // Set the desired height for the image
                }}
                src={`data:image/jpeg;base64,${city.images[0]}`}
                alt={`Image 1`}
              />
              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Address</dt>
                    <dd className="font-medium">{city.name}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Price</dt>
                    <dd className="text-sm text-gray-500">Number of reservations: {city.name}</dd>
                  </div>
                  <br />
                  <div>
                    <dt className="sr-only">Price</dt>

                    <dd style={{ width: "20vw" }} className="text-sm text-gray-500">DEtails:{city.details}</dd>

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
                      <p className="font-medium">{city.city}</p>
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <div className="mt-1.5 sm:mt-0">
                      <p className="text-gray-500">Hotels</p>
                      <p className="font-medium">{city.reservations}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </CardContainer>
    </Container>
  );
};

export default PopularSection;
