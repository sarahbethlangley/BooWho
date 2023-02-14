import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getHouseById } from "../../modules/houseManager";
import { logout } from "../../modules/authManager";

const navigation = [
  { nameOne: "Haunt Reviews" },
  { nameTwo: "Available Houses" },
  { nameThree: "Living and Deceased" },
  { nameFour: "Home" },
];

const HouseShow = () => {
  const [house, setHouse] = useState({});
  const { id } = useParams();

  const getHouse = (id) => {
    getHouseById(id).then((house) => setHouse(house));
  };

  useEffect(() => {
    getHouse(id);
  }, []);

  const navigate = useNavigate();

  const handleHouseListNavigate = () => {
    navigate("/house");
  };
  const handleHauntListNavigate = () => {
    navigate("/haunt");
  };

  const handleHomeNavigate = () => {
    navigate("/boowho");
  };

  const handleHauntAddNavigate = () => {
    navigate(`/haunt/add/${id}`);
  };

  const handleEditNavigate = () => {
    navigate(`/haunt/edit/${id}`);
  };

  const handleUserProfileListNavigate = () => {
    navigate("/userProfile");
  };

  const logoutSubmit = () => {
    logout();

    navigate("/boowho");
  };

  return (
    <>
      <div className="isolate bg-spooky">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="px-6 pt-6 lg:px-8">
          <nav
            className="flex items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <button className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-20"
                  src={require("../../assetts/navlogo.png")}
                  alt=""
                />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item, index) => (
                <div key={index}>
                  <button
                    key={item.nameOne}
                    onClick={handleHauntListNavigate}
                    className="text-lg font-cutive leading-6 text-yeller"
                  >
                    {item.nameOne}
                  </button>
                  <button
                    key={item.nameTwo}
                    onClick={handleHouseListNavigate}
                    className="text-lg font-cutive leading-6 text-yeller"
                  >
                    {item.nameTwo}
                  </button>
                  <button
                    key={item.nameThree}
                    onClick={handleUserProfileListNavigate}
                    className="text-lg font-cutive leading-6 text-yeller"
                  >
                    {item.nameThree}
                  </button>
                  <button
                    key={item.nameFour}
                    onClick={handleHomeNavigate}
                    className="text-lg font-cutive leading-6 text-yeller"
                  >
                    {item.nameFour}
                  </button>
                </div>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button
                type="submit"
                className="text-lg font-cutive leading-6 text-yeller"
                onClick={logoutSubmit}
              >
                {" "}
                Log Out <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </nav>

          <img
            className="h-auto w-auto object-cover"
            src={house.imageUrl}
            alt="loving ghost"
          />
          <p className="mt-4 text-left text-xl text-gray-300">
            {house.address}
          </p>
          <p className="mt-4 text-left text-xl text-gray-300">{house.notes}</p>
          <Link to={`/house/edit/${id}`}>
            <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-lg.no-underline font-frijole leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              edit this house
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HouseShow;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getHouseById } from "../../modules/houseManager";

// export default function HouseShow(evt) {
//   const [house, setHouse] = useState([]);

//   const houseId = parseInt(localStorage.getItem("showHouseId"));

//   const getHouse = (evt) => {
//     let hacienda = getHouseById(houseId);
//     console.log(hacienda);
//     setHouse(hacienda);
//   };

//   useEffect(() => {
//     getHouse();
//   }, []);

//   return (
//     <>
//       <div className="pt-16">
//         <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//           <div className="md:flex">
//             <div className="md:shrink-0">
//               <img
//                 className="h-48 w-full object-cover md:h-full md:w-48"
//                 src={house.imageUrl}
//                 alt="house"
//               />
//             </div>
//             <div className="p-8">
//               <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
//                 {house.address}
//               </div>
//               <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
//                 {house.notes}
//               </div>
//               <p className="mt-2 text-slate-500">check it out</p>
//               {/* <button
//               className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-lg.no-underline font-frijole leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               onClick={handleShowHouseByDetails(house.id)}
//             >
//               Show details
//             </button> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
