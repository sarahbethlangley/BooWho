import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getHauntDetails } from "../../modules/hauntManager";

import { logout } from "../../modules/authManager";

const navigation = [
  { nameOne: "Haunt Reviews" },
  { nameTwo: "Available Houses" },
  { nameThree: "Living and Deceased" },
  { nameFour: "Home" },
];

const HauntShow = () => {
  const [haunt, setHaunt] = useState({});
  const { id } = useParams();

  const getHaunt = (id) => {
    getHauntDetails(id).then((haunt) => setHaunt(haunt));
  };

  useEffect(() => {
    getHaunt(id);
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

          <div className="flex min-h-full items-center justify-between py-12 px-4">
            <img
              className="h-auto w-auto object-center"
              src={haunt?.userProfile?.imageUrl}
              alt="loving ghost"
            />
            <img
              className="h-auto w-auto object-center"
              src={haunt?.house?.imageUrl}
              alt="loving ghost"
            />
            <p className="mt-4 text-left text-xl text-gray-300">
              {haunt?.house?.address}
            </p>
            <h1 className="font-cutive font-bold text-center text-yellow-500">
              {haunt?.userProfile?.name}'s Haunt Experience
            </h1>
            <p className="mt-4 text-left text-xl text-gray-300">
              {haunt.notes}
            </p>
            <Link to={`/haunt/edit/${id}`}>
              <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-lg.no-underline font-frijole leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                edit your experience
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HauntShow;
