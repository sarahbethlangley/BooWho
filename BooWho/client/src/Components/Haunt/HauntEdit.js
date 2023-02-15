import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  editHaunt,
  getHauntDetails,
  deleteHaunt,
} from "../../modules/hauntManager";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { logout } from "../../modules/authManager";

const navigation = [
  { nameOne: "Haunt Reviews" },
  { nameTwo: "Available Houses" },
  { nameThree: "Living and Deceased" },
  { nameFour: "Home" },
];

export default function HauntEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [review, setReview] = useState("");
  const [input, setInput] = useState(null);
  const [houseImage, setHouseImage] = useState(null);
  const [userProfileId, setUserProfileId] = useState(0);
  const [houseId, setHouseId] = useState(0);

  useEffect(() => {
    getHauntDetails(id).then((hauntDetails) => {
      setHouseId(hauntDetails.houseId);
      setHouseImage(hauntDetails.house.imageUrl);
      setUserProfileId(hauntDetails.userProfileId);
      setReview(hauntDetails.notes);
    });
  }, []);

  const handleHauntEdit = (evt) => {
    evt.preventDefault();
    editHaunt(id, {
      id,
      houseId: houseId,
      userProfileId: userProfileId,
      review: review,
    }).then(() => navigate(`/haunt/review/${id}`));

    const handleUserInput = (evt) => {
      setInput(input);
      setReview(evt.target.value);
    };

    const handleHauntDelete = (evt) => {
      evt.preventDefault();
      deleteHaunt(id);
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

      navigate("/boowho");
    };

    const handleHomeNavigate = () => {
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
          <h1>STUFF</h1>
          <form className="mt-8 space-y-6" method="PUT">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <h1>Tell us about your haunting experience</h1>
                <div className="md:shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={houseImage}
                    alt="house"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="review">REVIEW YOUR HAUNT</label>
                <input
                  type="textarea"
                  name="review"
                  invalid={input}
                  placeholder="tell ghosts about your house"
                  value={review}
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  onChange={handleUserInput}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleHauntEdit}
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-pow group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  update your review
                </button>

                <button
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleHauntDelete}
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-pow group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  delete your Haunt
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  };
}
