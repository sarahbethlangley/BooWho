import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { getAllHouses } from "../../modules/houseManager";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logout } from "../../modules/authManager";

const navigation = [
  { nameOne: "Haunt Reviews" },
  { nameTwo: "Haunted Houses" },
  { nameThree: "The Living" },
  { nameFour: "Home" },
];

export default function HouseList() {
  const [houses, setHouses] = useState([]);
  const { houseId, hauntId } = useParams();

  const getHouses = () => {
    getAllHouses().then((houses) => setHouses(houses));
  };

  useEffect(() => {
    getHouses(houseId);
  }, [houseId]);

  const navigate = useNavigate();

  const handleHouseListNavigate = () => {
    navigate("/house");
  };
  const handleHauntListNavigate = () => {
    navigate("/haunt");
  };

  const handleHomeNavigate = () => {
    navigate("/boohome");
  };

  const handleHauntAddNavigate = () => {
    navigate(`/haunt/add/${hauntId}`);
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
        </div>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 float-left">
            <div>
              <h1 className="text-center text-4xl font-fijole leading-8 text-white sm:text-6xl">
                Temporary Haunts...{"  "}Lifetime Trauma
              </h1>
              <p className="mt-6 text-left text-2xl font-bold font-cutive leading-8 text-gray-300">
                Start haunting a new house today by booking one of BooWho's
                temporary haunting placements. Remember, we guarentee no
                exorcisms or salt circles, and you can cancel your Haunt at
                anytime.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-lg.no-underline font-frijole leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleHauntAddNavigate}
                >
                  Book a Haunt
                </button>
              </div>
            </div>
          </div>
          <section>
            {houses.map((h) => (
              <div key={h.id} className="pt-16">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                  <div className="md:flex">
                    <div className="md:shrink-0">
                      <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src={h.imageUrl}
                        alt="house"
                      />
                    </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        {h.address}
                      </div>
                      <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                        {h.notes}
                      </div>
                      <p className="mt-2 text-slate-500">check it out</p>
                      <Link to={`/house/detail/${h.id}`}>
                        <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-lg.no-underline font-frijole leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                          book now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
