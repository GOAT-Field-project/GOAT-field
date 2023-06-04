import {
  ExpandLessOutlined,
  ExpandMoreOutlined,
  NavigateNextOutlined,
  Star,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { hotelListData } from "../../dummyData";
// import Fuse from "fuse.js";
const Container = styled.div`
  /* border: 1px solid red; */
  margin: 10px;

  @media screen and (max-width: 925px) {
    margin: 0px;
  }
`;

const FilterContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #0083cc;
  color: #0083cc;
  border-radius: 20px;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;

  &:active {
    box-shadow: 0 2px #666;
    transform: translateY(1px);
  }
`;

const IconContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  margin: 10px 0px 0px 4px;

  .expand-icon {
    /* border: 1px solid black; */
    font-size: 16px;
    margin-top: -10px;
  }
`;

const OptionsListContainer = styled.div`
  box-shadow: 0px 0px 3px -2px black;
  border: 1px solid #cbcbcb;
  border-radius: 3px;
  background-color: white;
  padding: 10px 0px;
  position: absolute;
  top: 43px;
  left: 0px;
  z-index: 1;

  ul {
    /* border: 1px solid black; */
    list-style-type: none;

    li {
      /* border: 1px solid black; */

      option {
        /* border: 1px solid black; */
        font-size: 15px;
        color: #4c4747;
        padding: 10px 25px;
        cursor: pointer;

        &:hover {
          background-color: #efefef;
        }
      }
    }
  }
`;

const HotelList = styled.div`
  border: 1px solid #c3e5fd;
  background-color: #ebf3ff;
  display: flex;
  justify-content: space-between;
  padding: 13px;
  margin: 15px 0px;
  border-radius: 3px;

  @media screen and (max-width: 925px) {
    margin: 15px 0px 0px;
  }

  @media screen and (max-width: 675px) {
    flex-direction: column;
    position: relative;
  }
`;

const LeftContainer = styled.div`
  display: flex;

  @media screen and (max-width: 675px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  /* border: 3px solid red; */
  width: 250px;
  height: 250px;
  border-radius: 3px;
  overflow: hidden;

  @media screen and (max-width: 675px) {
    width: 100%;
  }

  @media screen and (max-width: 426px) {
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div`
  /* border: 1px solid black; */
  padding: 0px 13px;

  @media screen and (max-width: 675px) {
    padding: 5px 0px;
    text-align: center;
  }
`;

const Details = styled.div`
  h2 {
    font-size: 20px;
    color: #0e71c2;
  }
  span {
    font-size: 13px;
    color: #262626;
  }
`;

const OfferInfo = styled.div`
  border-radius: 10px 0px 10px 0px;
  background-color: #008009;
  color: white;
  font-size: 12.5px;
  padding: 6px;
  width: 125px;
  text-align: center;
  margin: 20px 0px;

  @media screen and (max-width: 675px) {
    margin: 5px auto;
  }
`;

const Facilities = styled.div`
  border-left: 1px solid #a19bae;
  padding-left: 7px;

  @media screen and (max-width: 675px) {
    border: none;
    padding: 0px;
  }

  h5 {
    font-size: 13px;
    margin: 7px 0px;

    @media screen and (max-width: 675px) {
      margin: 3px 0px;
    }

    &.green {
      color: green;
    }

    &.red {
      color: #d33b1f;
    }
  }

  span {
    font-size: 13px;
  }
`;

const RightContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 675px) {
    flex-direction: row;
    margin-bottom: 42px;
  }
`;

const PriceContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Price = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    @media screen and (max-width: 675px) {
      order: -1;
    }

    @media screen and (max-width: 346px) {
      font-size: 20px;
    }
  }

  span {
    font-size: 13px;
    text-align: center;
    margin: 3px 0px;
  }
`;

const Button = styled.button`
  margin-top: 8px;
  width: 130px;
  border: none;
  border-radius: 3px;
  background-color: #0071c2;

  @media screen and (max-width: 675px) {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover {
    background-color: #055f9f;
  }

  .link {
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
    font-size: 14px;
    padding: 5px 0px 5px 8px;
  }
`;

const SearchedHotelsList = () => {
  const [openList, setOpenList] = useState(false);
  const [sortBy, setSortBy] = useState("Fliter");
  const [pitches, setPitches] = useState([]);
  const [filteredPitches, setFilteredPitches] = useState([]);
  const [searchName, setSearchName] = useState(
    sessionStorage.getItem("stadiumName") || ""
  );
  const [priceRange, setPriceRange] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(
    sessionStorage.getItem("city") || ""
  );
  console.log(searchName);
  console.log(priceRange);
  console.log(selectedLocation);
  console.log(filteredPitches);

  useEffect(() => {
    // Fetch the data from the server
    fetch("http://localhost:5151/getdatas")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPitches(data);
          setFilteredPitches(data);
        } else {
          console.error("Invalid data format:", data);
        }
      })
      .catch((error) => {
        console.error("Error retrieving data:", error);
      });
    sessionStorage.clear();
  }, []);

  //  const handleSortByAndOpenList = (e) => {
  //    const selectedSortBy = e.target.value;
  //    setSortBy(selectedSortBy);
  //    setOpenList(false);

  //    // Apply sorting logic based on the selected option
  //    const sortedPitches = [...filteredPitches];
  //    if (selectedSortBy === "Our top picks") {
  //         //add
  //    } else if (selectedSortBy === "Lowest price") {
  //      sortedPitches.sort((a, b) => a.price - b.price);
  //    } else if (selectedSortBy === "Highest price") {
  //      sortedPitches.sort((a, b) => b.price - a.price);
  //    }

  //    setFilteredPitches(sortedPitches);
  //  };

  useEffect(() => {
    filterPitches();
  }, [searchName, priceRange, selectedLocation]);

  const filterPitches = () => {
    let filtered = pitches;

    if (searchName) {
      filtered = filtered.filter((pitch) =>
        pitch.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    if (priceRange) {
      const [min, max] = priceRange.split("-");
      filtered = filtered.filter(
        (pitch) => pitch.price >= parseInt(min) && pitch.price <= parseInt(max)
      );
    }

    if (selectedLocation) {
      filtered = filtered.filter(
        (pitch) => pitch.location === selectedLocation
      );
    }

    setFilteredPitches(filtered);
  };

  // const handleSearch = () => {
  //   filterPitches();
  // };

  return (
    <Container>
      <div className="flex items-center justify-center mt-8">
        <input
          type="text"
          name="place"
          placeholder="Search"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Price Range</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-300">$200 - $300</option>
        </select>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select City</option>
          <option value="Amman">Amman</option>
          <option value="Zarqa">Zarqa</option>
          <option value="Irbid">Irbid</option>
          <option value="Aqaba">Aqaba</option>
          <option value="Jerash">Jerash</option>
          <option value="Madaba">Madaba</option>
        </select>
        {/* <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button> */}
      </div>
      <h2>{filteredPitches.length} Properties Found</h2>
      {/* <FilterContainer>
        <FilterButton onClick={() => setOpenList(!openList)}>
          Sort by: {sortBy}
          <IconContainer>
            <ExpandLessOutlined className="expand-icon" />
            <ExpandMoreOutlined className="expand-icon" />
          </IconContainer>
        </FilterButton>
        {openList === true && (
          <OptionsListContainer>
            <ul>
              <li>
                <option onClick={handleSortByAndOpenList}>Our top picks</option>
              </li>

              <li>
                <option onClick={handleSortByAndOpenList}>Lowest price</option>
              </li>

              <li>
                <option onClick={handleSortByAndOpenList}>Highest price</option>
              </li>
            </ul>
          </OptionsListContainer>
        )} 
      </FilterContainer> */}
      {filteredPitches.map((index) => (
        <HotelList key={index.id}>
          <LeftContainer>
            <ImgContainer>
              <Link to={`/rservationdetails/${index.id}`}>
                <img
                  className="w-full rounded-xl"
                  src={`data:image/jpeg;base64,${index.images[0]}`}
                  alt={`Field`}
                />
              </Link>
            </ImgContainer>
            <InfoContainer>
              <Details>
                <h2>{index.name}</h2>
                <span>{index.location} city </span>
              </Details>
              <OfferInfo>ADD ANYTIHNG</OfferInfo>
              <Facilities>
                <h5>{index.details}</h5>

                <h5 className="green">FREE cancellation | No prepayment</h5>
                <span>
                  You can cancel later, so lock in this great price today.
                </span>
              </Facilities>
            </InfoContainer>
          </LeftContainer>
          <RightContainer>
            <PriceContainer>
              <Price>
                <span>
                  <span>{index.size}</span>
                </span>
                <h2> {index.price} JD</h2>
              </Price>
              <Button>
                <Link to={"/rservationdetails/" + index.id} className="link">
                  See More
                  <NavigateNextOutlined />
                </Link>
              </Button>
            </PriceContainer>
          </RightContainer>
        </HotelList>
      ))}
    </Container>
  );
};

export default SearchedHotelsList;
