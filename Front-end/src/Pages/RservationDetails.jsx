
import Navbar from "../Layout/Navbar";
import styled from "styled-components";
import Sidebar from "../Components/Rservation/Sidebar";
import Map from "../Components/Rservation/Map";
import PitchDetails from "../Components/Rservation/PitchDetails";
import HotelFeature from "../Components/Rservation/PitchFeatures";
import ReservationDialog from "../Components/Rservation/ReservationDialog";
import { Link } from "react-router-dom";
const Container = styled.div`
  /* border: 3px solid red; */
`;

const MainContainer = styled.div`
  margin: 0px 150px;

  @media screen and (max-width: 1250px) {
    margin: 0px 30px;
  }

  @media screen and (max-width: 890px) {
    margin: 0px 20px;
  }
`;

const Wrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;

  @media screen and (max-width: 865px) {
    flex-direction: column;
  }
`;

const SideContainer = styled.aside`
  /* border: 1px solid blue; */
  margin: 0px 8px 15px 0px;
  flex: 1;

  @media screen and (max-width: 865px) {
    margin: 5px 0px 10px;
    order: 2;
  }

  #sticky-container {
    position: sticky;
    top: 17px;
    z-index: 999; // Don't delete it.

    @media screen and (max-width: 865px) {
      position: static;
      z-index: auto;
    }

    #hide-search-box {
      @media screen and (max-width: 865px) {
        display: none;
      }
    }
  }
`;

const HotelContainer = styled.main`
  /* border: 1px solid black; */
  flex: 3;
  @media screen and (max-width: 865px) {
    flex: 1;
  }
`;

const Hotel = () => {
  return (
    <>
      <Navbar />
      {/*
  This component uses @tailwindcss/forms and @tailwindcss/typography

  yarn add @tailwindcss/forms @tailwindcss/typography
  npm install @tailwindcss/forms @tailwindcss/typography

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]

  @layer components {
    .no-spinner {
      -moz-appearance: textfield;
    }

    .no-spinner::-webkit-outer-spin-button,
    .no-spinner::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
*/}

      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Les Paul"
                src="https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="aspect-square w-full rounded-xl object-cover h-96"
              />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <img
                  alt="Les Paul"
                  src="https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="aspect-square w-full rounded-xl object-cover h-56"
                />

                <img
                  alt="Les Paul"
                  src="https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="aspect-square w-full rounded-xl object-cover h-56"
                />

                {/* <img
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="aspect-square w-full rounded-xl object-cover"
                /> */}
              </div>
            </div>

            <div className="sticky top-0">
              {/* <strong
                className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600"
              >
                Pre Order
              </strong> */}
              {/* bread crumb-------------------------------------------------------------------------------- */}


              {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

              {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

              <nav aria-label="Breadcrumb" className="flex">
                <ol
                  role="list"
                  className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600"
                >
                  <li className="flex items-center">
                    <Link
                      to="/"
                      className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>

                      <span className="ms-1.5 text-xs font-medium"> Home </span>
                    </Link>
                  </li>

                  <li className="relative flex items-center">
                    <span
                      className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                    >
                    </span>

                    <Link
                      to="/reservationlist"
                      className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
                    >
                      Reservation List
                    </Link>
                  </li>
                  <li className="relative flex items-center">
                    <span
                      className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
                    >
                    </span>

                    <div

                      className="flex h-10 items-center text-gray-400 underline bg-white pe-4 ps-8 text-xs font-medium transition "
                    >
                      Reservation Details
                    </div>
                  </li>
                </ol>
              </nav>



              {/* bread crumb-------------------------------------------------------------------------------- */}

              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold text-black sm:text-2xl">
                    Fun Product That Does Something Cool
                  </h1>

                  <p className="text-sm">Highest Rated Product</p>

                  <div className="-ms-0.5 flex">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>

                    <svg
                      className="h-5 w-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-2xl font-bold">20 JD</p>
              </div>

              <div className="mt-4">
                <div className="prose max-w-none mt-9">
                  <legend className="mb-1 text-black text-sm font-bold">Description</legend>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    veniam dicta beatae eos ex error culpa delectus rem tenetur,
                    architecto quam nesciunt, dolor veritatis nisi minus inventore,
                    rerum at recusandae?
                  </p>
                </div>

              </div>

              <form className="mt-8">
                <fieldset>
                  <legend className="mb-1 text-black text-sm font-bold">Location</legend>
                  <div>Zarqa - rusifa</div>


                </fieldset>

                <fieldset className="mt-4 flex justify-between items-center">
                  <div>
                    <legend className="mb-1 text-black text-sm font-bold">Size</legend>

                    <span className="border inline-block  rounded-lg p-2 my-2  hover:bg-green-500 hover:text-white  hover:font-medium hover:drop-shadow-lg">5-A-SIDE</span>
                  </div>
                  <ReservationDialog />

                </fieldset>

                
              </form>
            </div>
          </div>
        </div>
      </section>






      <Container>
        <Navbar />
        <MainContainer>
          <Wrapper>
            <HotelContainer>
              <PitchDetails />
            </HotelContainer>
          </Wrapper>
          <HotelFeature />
        </MainContainer>
      </Container>
    </>
  );
};

export default Hotel;
