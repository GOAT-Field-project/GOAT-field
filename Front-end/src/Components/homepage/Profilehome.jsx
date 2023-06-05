import { FaUser } from "react-icons/fa";
import jwtDecode from "jwt-decode";
import { BiEdit } from "react-icons/bi";

export default function Profilehome() {
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);

  const { username, email, role } = decodedToken; // Extract the relevant data from the decoded token

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div
          className="custom-width"
          style={{
            maxWidth: "700px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="bg-white shadow-xl rounded-lg p-6">
            <div className="photo-wrapper">
              <FaUser className="w-32 h-32 rounded-full mx-auto text-gray-500" />
            </div>
            <div className="p-6">
              <h3 className="text-center text-3xl text-gray-900 font-medium mb-4">
                {username} {/* Insert the username here */}
              </h3>
              <div className="text-center text-gray-600 text-lg font-semibold mb-4">
                <p>Web Developer</p>
              </div>
              <div className="flex">
                <div className="w- ml-auto">
                  <table className="text-lg my-4">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2">Address: Zarqa/120</td>{" "}
                        {/* Insert the city here */}
                      </tr>
                      <tr>
                        <td className="px-2 py-2">Phone: +977 9955221114</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2">Email: {email}</td>{" "}
                        {/* Insert the email here */}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="w-1/2 order-first">
                  <table className="text-lg my-4" id="datas">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2">First Name: {username}</td>{" "}
                        {/* Insert the first name here */}
                      </tr>
                      <tr>
                        <td className="px-2 py-2">Last Name: {username}</td>{" "}
                        {/* Insert the last name here */}
                      </tr>
                      <tr>
                        <td className="px-2 py-2">City : Zarqa</td>{" "}
                        {/* Insert the city here */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-center mt-6">
                <a
                  className="text-2xl text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium flex items-center justify-center"
                  href="#asd"
                  style={{ color: "#54B435" }}
                >
                  {decodedToken && decodedToken.role == "user"
                    ? "Your Reservations 🡫"
                    : ""}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br id="asd" />
    </>
  );
}
