import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getAllHaunts } from "../../modules/hauntManager";
import { logout } from "../../modules/authManager";

const navigation = [
  { nameOne: "BooHome" },
  { nameTwo: "Haunt Reviews" },
  { nameThree: "Available Houses" },
  { nameFour: "Make Friends" },
];

export default function HauntList() {
  const [haunts, setHaunts] = useState([]);
  const { id } = useParams();

  const getHaunts = () => {
    getAllHaunts().then((haunts) => setHaunts(haunts));
  };

  useEffect(() => {
    getHaunts();
  }, []);

  const navigate = useNavigate();

  const handleHouseListNavigate = () => {
    navigate("/house");
  };
  const handleHauntListNavigate = () => {
    navigate("/haunt");
  };

  const handleHauntAddNavigate = () => {
    navigate("/haunt/add");
  };

  const handleUserProfileListNavigate = () => {
    navigate("/userProfile");
  };

  const logoutSubmit = () => {
    logout();
    navigate("/boowho");
  };

  const handleNavigate = () => {
    navigate("/boohome");
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
                    onClick={handleNavigate}
                    className="text-lg font-cutive leading-6 text-yeller"
                  >
                    {item.nameOne}
                  </button>
                  <button
                    key={item.nameTwo}
                    onClick={handleHauntListNavigate}
                    className="text-lg font-cutive leading-6 text-yeller"
                  >
                    {item.nameTwo}
                  </button>
                  <button
                    key={item.nameThree}
                    onClick={handleHouseListNavigate}
                    className="text-lg font-cutive leading-6 text-yeller"
                  >
                    {item.nameThree}
                  </button>
                  <button
                    key={item.nameFour}
                    onClick={handleUserProfileListNavigate}
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
        </div>
        <div className="relative px-6 lg:px-8">
          <div className="pb-36 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 float-left">
            <div>
              <h1 className="mr-16 text-center text-4xl font-fijole leading-8 text-white sm:text-6xl">
                Read About A Haunt Before You Book Your Own{"  "}
              </h1>
              <p className="mr-16 mt-6 text-left text-2xl font-bold font-cutive leading-8 text-gray-400">
                Read about the experiences of the paranormal with BooWho?!'s
                Haunts.{" "}
              </p>
              <p className="mr-16 mt-6 text-left text-2xl font-bold font-cutive leading-8 text-gray-400">
                Ghosts who booked a Haunt through BooWho?! are guarenteed no
                sage, salt circles, or exorcisms.{" "}
              </p>
              <h3 className="mr-16 mt-6 text-center text-2xl font-bold font-cutive leading-8 text-yellow-500">
                Just click on a Ghost and see where they Haunt!{" "}
              </h3>
              <button
                className="pt-10 text-lg font-cutive leading-6 text-yeller"
                onClick={handleHauntAddNavigate}
              >
                {" "}
                or start a Haunt today
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
          <div className="pt-36 bg-smoke grid xl:grid-cols-4 gap-8">
            {haunts.map((hh) => (
              <div key={hh.id}>
                <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-smoke rounded-xl">
                  <Link to={`/haunt/review/${hh.id}`}>
                    <img
                      class="object-cover w-32 h-32 rounded-full ring-4 bg-white ring-gray-300"
                      src={hh?.userProfile?.imageUrl}
                      alt="ghost"
                    />
                  </Link>

                  <h1 class="mt-4 text-2xl font-frijole text-yellow-500 text-center capitalize group-hover:text-yellow-500">
                    {hh?.userProfile?.name}
                  </h1>
                  <p class="text-md font-frijole text-white group-hover:text-yellow-500">
                    {hh?.ghostType?.type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
