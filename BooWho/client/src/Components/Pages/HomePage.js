import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logout } from "../../modules/authManager";

const navigation = [
  { nameOne: "Haunt Reviews" },
  { nameTwo: "Available Houses" },
  { nameThree: "Living and Deceased" },
  { nameFour: "Home" },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleHouseListNavigate = () => {
    navigate("/house");
  };
  const handleHauntListNavigate = () => {
    navigate("/haunt");
  };

  const handleNavigate = () => {
    navigate("/boohome");
  };

  const handleHauntAddNavigate = () => {
    navigate(`/haunt/add`);
  };

  const handleUserProfileListNavigate = () => {
    navigate("/userProfile");
  };

  const logoutSubmit = () => {
    logout();

    navigate("/boowho");
  };

  const handleSocial = () => {
    navigate("/list");
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
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
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
                    onClick={handleNavigate}
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
        <div>
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="sm:max-w-lg">
                  <h1 className="text-4xl font-fijole leading-8 text-white sm:text-6xl">
                    A HAUNTING WE WILL GO
                  </h1>
                  <p className="mt-4 text-left text-xl text-gray-300">
                    Whether you're looking for your forever home or prefer to
                    keep things open
                  </p>
                  <h3 className="mt-4 text-xl text-yeller">
                    Going on Haunts is fun
                  </h3>
                  <p className="mt-4 text-left text-xl text-gray-300">
                    Your Haunt can last as long as you want - just a few days or
                    generations
                  </p>
                </div>
              </div>

              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="pt-96 pb-16 flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src={require("../../assetts/cornfield.jpg")}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={require("../../assetts/beach.jpg")}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={require("../../assetts/column.jpg")}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={require("../../assetts/ghostslove.gif")}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={require("../../assetts/apartment.jpg")}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={require("../../assetts/smaller.jpg")}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={require("../../assetts/window.jpg")}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  href="#"
                  className="mr-9 inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                  onClick={handleHouseListNavigate}
                >
                  Find A House
                </button>
                <button
                  className="mr-9 inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                  onClick={handleHauntAddNavigate}
                >
                  Start A Haunt
                </button>
                <button
                  onClick={handleSocial}
                  className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Make Friends
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 mr-40">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={require("../../assetts/littleghost.jpg")}
                alt="loving ghost"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                So many houses to haunt...
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Our Haunting opportunities are updated daily
              </a>
              <p className="mt-2 text-slate-500">
                Cabins, apartments, even classic Victorian, as soon as a family
                lists their home on BooWho!?, their listing is available for you
                to book a Haunt immediately
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-16 pb-16 ml-60">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={require("../../assetts/plant.gif")}
                alt="loving ghost"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Connect with other ghosts
              </div>
              <a
                href="#"
                className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              >
                Don't let death stand in the way of friendship
              </a>
              <p className="mt-2 text-slate-500">
                Not only does BooWho?! connect you with houses to haunt, we
                connect you with other ghosts too. Make a new friend today and
                go on a Haunt together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
