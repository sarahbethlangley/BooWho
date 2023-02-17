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
  { nameOne: "BooHome" },
  { nameTwo: "Haunt Reviews" },
  { nameThree: "Available Houses" },
  { nameFour: "Make Friends" },
];

export default function HauntEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [review, setReview] = useState("");
  // const [input, setInput] = useState("");
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
      notes: review,
    }).then(() => {
      navigate(`/haunt/review/${id}`);
    });
  };

  const handleHauntDelete = (evt) => {
    evt.preventDefault();
    deleteHaunt(id).then(() => {
      navigate("/haunt");
    });
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
                    onClick={handleHomeNavigate}
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

        <form className="mt-8 space-y-6" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <div className="relative px-6 lg:px-8">
                <div className="pb-36 mx-auto max-w-2xl py-32 float-left">
                  <div>
                    <h1 className="mr-16 text-center text-4xl font-fijole leading-8 text-white sm:text-6xl">
                      Edit your review of a Haunt {"  "}
                    </h1>
                    <p className="mr-16 mt-6 text-left text-2xl font-bold font-cutive leading-8 text-gray-400">
                      Here is where you share with others your experiences on
                      your Haunt
                    </p>
                    <p className="mr-16 mt-6 text-left text-2xl font-bold font-cutive leading-8 text-gray-400">
                      Did you know...? Ghosts can leave their temporary haunting
                      placements at anytime
                    </p>
                    <p className="mr-16 mt-6 text-left text-2xl font-bold font-cutive leading-8 text-gray-400">
                      Once a Haunt is deleted, it won't come back like you did.
                    </p>
                    <button
                      className="pt-4 text-lg font-cutive leading-6 text-yellow-500"
                      onClick={handleHouseListNavigate}
                    >
                      {" "}
                      Or look for a new Haunt
                      <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
            <div className="mx-auto max-w-7xl pb-8 pt-24">
              <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <svg
                  viewBox="0 0 1024 1024"
                  className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
                  aria-hidden="true"
                >
                  <circle
                    cx={512}
                    cy={512}
                    r={512}
                    fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                    fillOpacity="0.7"
                  />
                  <defs>
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                      <stop stopColor="#7775D6" />
                      <stop offset={1} stopColor="#E935C1" />
                    </radialGradient>
                  </defs>
                </svg>
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                  src={houseImage}
                  <h2 className="text-3xl font-frijole tracking-tight text-yellow-500">
                    How has your haunting experience lived up to your
                    expectations?
                    <br />
                  </h2>
                  <p className="mt-6 text-xl leading-8 text-gray-300">
                    <img
                      className="h-auto w-auto ml-36 pb-16 object-center"
                      src={houseImage}
                      alt="loving ghost"
                    />
                    <input
                      type="textarea"
                      name="review"
                      value={review}
                      // invalid={input}
                      placeholder="change your review here..."
                      className="relative block w-full appearance-none rounded-t-md rounded-b-md border border-gray-300 px-3 pt-16 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                      onChange={(evt) => setReview(evt.target.value)}
                    />
                  </p>
                  <div>
                    <button
                      type="submit"
                      className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={handleHauntEdit}
                    >
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon
                          className="pt 8 h-5 w-5 text-pow group-hover:text-indigo-400"
                          aria-hidden="true"
                        />
                      </span>
                      Update your experience
                    </button>
                  </div>
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="pt-8 group relative flex w-full justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={handleHauntDelete}
                    >
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <LockClosedIcon
                          className="h-5 w-5 text-black group-hover:text-indigo-400"
                          aria-hidden="true"
                        />
                      </span>
                      Click here to delete your Haunt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
