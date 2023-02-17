import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getAllUserProfiles } from "../../modules/userProfileManager";
import { logout } from "../../modules/authManager";

const navigation = [
  { nameOne: "BooHome" },
  { nameTwo: "Haunt Reviews" },
  { nameThree: "Available Houses" },
  { nameFour: "Make Friends" },
];

export default function UserProfileList() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  const getAllProfiles = () => {
    getAllUserProfiles().then((users) => setUsers(users));
  };

  useEffect(() => {
    getAllProfiles(id);
  }, [id]);

  const navigate = useNavigate();

  const handleHouseListNavigate = () => {
    navigate("/house");
  };
  const handleHauntListNavigate = () => {
    navigate("/haunt");
  };

  const handleHomeNavigate = () => {
    navigate(`/boohome`);
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
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 float-left">
            <div>
              <h1 className="text-center text-4xl font-fijole leading-8 text-white sm:text-6xl">
                Our Families want to meet you. Our Ghosts want to Haunt you.{" "}
              </h1>
              <p className="mt-6 text-left text-2xl font-bold font-cutive leading-8 text-gray-300">
                We ensure that the haunting opportunities you find on BooWho?!
                are with families that want you in their homes. No exorcisms, no
                salt circles, and no sage.{" "}
              </p>
              <h3 className="mt-6 text-center text-2xl font-bold font-cutive leading-8 text-yellow-500">
                Everyone in the paranormal community is welcomed by the families
                on BooWho?!
              </h3>
            </div>
          </div>
          <div>
            <div className="pt-36 bg-smoke grid xl:grid-cols-4 gap-8">
              {users.map((u) => (
                <div key={u.id}>
                  <div class="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-smoke rounded-xl">
                    <Link to={`/userProfile/meet/${u.id}`}>
                      <img
                        class="object-cover w-32 h-32 rounded-full ring-4 bg-white ring-gray-300"
                        src={u.imageUrl}
                        alt="ghost"
                      />
                    </Link>

                    <h1 class="mt-4 text-2xl font-frijole text-yellow-500 text-center capitalize group-hover:text-yellow-500">
                      {u.name}
                    </h1>
                    <p class="text-md font-frijole text-white group-hover:text-yellow-500">
                      {u?.ghostType?.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {users.map((u) => (
              <div key={u.id} className="pt-16">
                <div className="max-w-md mx-auto float-right bg-white rounded-xl shadow-md md:max-w-2xl">
                  <div className="md:flex">
                    <div className="md:shrink-0">
                      <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src={u.imageUrl}
                        alt="house"
                      />
                    </div>
                    <div class="p-8">
                      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        {u.name}
                        {"  "}
                        {u?.userType?.type}
                      </div>
                      <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
