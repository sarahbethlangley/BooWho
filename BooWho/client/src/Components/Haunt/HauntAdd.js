import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addHaunt } from "../../modules/hauntManager";
import { getAllHouses } from "../../modules/houseManager";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { logout } from "../../modules/authManager";

const navigation = [
  { nameOne: "Haunt Reviews" },
  { nameTwo: "Available Houses" },
  { nameThree: "Living and Deceased" },
  { nameFour: "Home" },
];

export default function HauntAdd() {
  const navigate = useNavigate();
  const [houses, setHouses] = useState([]);
  const [userInput, setUserInput] = useState({
    id: 0,
    userProfileId: 0,
    houseId: 0,
    notes: "",
  });

  useEffect(() => {
    getAllHouses().then((houses) => setHouses(houses));
  }, []);

  const handleUserInput = (evt) => {
    const copy = { ...userInput };
    copy[evt.target.name] = evt.target.value;
    setUserInput(copy);
  };

  const handleAddHaunt = (evt) => {
    evt.preventDefault();
    return addHaunt(userInput)
      .then(() => {
        navigate("/haunt");
      })
      .catch((err) => alert(`An error ocurred: ${err.message}`));
  };

  const handleHouseListNavigate = () => {
    navigate("/house");
  };
  const handleHauntListNavigate = () => {
    navigate("/haunt");
  };

  const handleUserProfileListNavigate = () => {
    navigate("/userProfile");
  };

  const logoutSubmit = () => {
    logout();
  };

  const handleHomeNavigate = () => {
    navigate("/boohome");
  };

  return (
    <>
      <h1>you made it to the add page</h1>
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

        <form className="mt-8 space-y-6" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <h1>
                Review your Haunt and let other's know about your experience
              </h1>

              <label htmlFor="address">Choose A House To Haunt</label>
              <select
                id="address"
                name="houseId"
                value={userInput.houseId}
                onChange={(event) => {
                  const home = { ...userInput };
                  home.houseId = parseInt(event.target.value);
                  setUserInput(home);
                }}
              >
                <option value={0}>Haunt Locations</option>
                {houses.map((hh) => (
                  <option key={hh.id} value={hh.id}>
                    {hh.address}
                  </option>
                ))}
              </select>

              <label htmlFor="notes" className="sr-only">
                Help other ghosts decide...
              </label>
              <input
                id="notes"
                type="textarea"
                name="notes"
                value={userInput.notes}
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="why did you chose this home?"
                onChange={handleUserInput}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleAddHaunt}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-pow group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Click here to register your Haunt
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
