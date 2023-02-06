import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../modules/authManager";

import { LockClosedIcon } from "@heroicons/react/20/solid";

export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleNavigate = () => {
    navigate("/register");
  };

  const handleHomeNavigate = () => {
    navigate("/boowho");
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => navigate("/boohome"))
      .catch(() => alert("Login Failed, Boo"));
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
        <div className="pt-1 float-right">
          <img
            className="h-auto w-auto object-center"
            src={require("../assetts/friendghost.jpg")}
            alt=""
          />
        </div>

        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <img
                className="mx-auto h-64 w-auto"
                src={require("../assetts/twoboo.gif")}
                alt="BooWho"
              />
              <h2 className="mt-6 text-center text-4xl font-frijole tracking-tight text-white">
                sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-white">
                <div
                  href="#!"
                  className="text-md font-medium text-yeller hover:text-white"
                >
                  <button
                    className="pt-10 text-lg font-cutive leading-6 text-yeller"
                    onClick={(event) => {
                      handleNavigate(event);
                    }}
                  >
                    {" "}
                    or register a new one
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </p>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="pb-40">
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={loginSubmit}
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-pow group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Sign in
                </button>
                <p className="mt-2 text-center text-sm text-white">
                  <div
                    href="#!"
                    className="text-md font-medium text-yeller hover:text-white"
                  >
                    <button
                      className="pt-10 pb-10 text-lg font-cutive leading-6 text-yeller"
                      onClick={(event) => {
                        handleHomeNavigate(event);
                      }}
                    >
                      {" "}
                      take me back home
                      <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
