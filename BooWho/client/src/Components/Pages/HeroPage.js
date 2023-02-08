import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  HomeIcon,
  ChatBubbleBottomCenterTextIcon,
  UserIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Who To Boo?", href: "#" },
  { name: "How To Boo It", href: "#" },
  { name: "What To Boo Now", href: "#" },
];

const features = [
  {
    name: "Find a home",
    description:
      "Checkout our extensive listings of houses ready to be haunted or add yours now",
    icon: HomeIcon,
  },
  {
    name: "Connect with the living",
    description:
      "You don't need a Ouiji board to connect. Our families are waiting for you to say hi",
    icon: UserIcon,
  },
  {
    name: "No obligations",
    description:
      "For whatever reason, you can end a Haunt at any time - there are no obligations",
    icon: FaceSmileIcon,
  },
  {
    name: "Connect with the dead",
    description:
      "Connect with ghosts, ghouls, spirits, and spooks to find the perfect ghost for your house",
    icon: ChatBubbleBottomCenterTextIcon,
  },
];

export default function HeroPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };

  const handleRegisterNavigate = () => {
    navigate("/register");
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
              <a href="#!" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-20"
                  src={require("../assetts/navlogo.png")}
                  alt=""
                />
              </a>
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
              {navigation.map((item) => (
                <button
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-cutive leading-6 text-yeller"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button
                className="text-lg font-cutive leading-6 text-yeller"
                onClick={(event) => {
                  handleNavigate(event);
                }}
              >
                {" "}
                Log in <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </nav>
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel
              focus="true"
              className="fixed inset-0 z-10 overflow-y-auto bg-spooky px-6 py-6 lg:hidden"
            >
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-20"
                    src={require("../assetts/navlogo.png")}
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 float-left">
              <div>
                <h1 className="text-center text-4xl font-fijole leading-8 text-white sm:text-6xl">
                  Temporary Haunts...{"  "}Deadlong Friends
                </h1>
                <p className="mt-6 text-left text-2xl font-bold font-cutive leading-8 text-gray-700">
                  BooWho?! connects ghosts to houses and the families within
                  them through long-term and temporary haunting placements
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button
                    className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-lg.no-underline font-frijole leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleRegisterNavigate}
                  >
                    Start Haunting Now
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
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
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div className="w-full max-w-md space-y-8">
                <div>
                  <img
                    className="mx-auto h-64 w-auto"
                    src={require("../assetts/betterdownload.png")}
                    alt="BooWho"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="pt-28 pb-36 bg-white bg-smoke"></div>
      <div className="pt-0 bg-smoke">
        <img
          class="ml-56 pt-0 pl-20 pr-8 float-left h-2/5 w-2/5"
          src={require("../assetts/ghosthome.gif")}
          alt="loving ghost"
        />
      </div>
      <div className="bg-white pt-20 pl-36 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="pt-10 text-center text-2xl font-semibold leading-8 tracking-tight text-indigo-600">
              Haunt a home
            </h1>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We fight against housing insecurity in the paranomral community
            </p>
            <p className="mt-6 text-left text-xl leading-8 text-gray-600">
              Everyday more spooks, ghouls, ghosts, and spirits are facing
              mounting homelessness in our community. At BooWho?!, we strive to
              protect housing rights for the paranomral by connecting them with
              the right house and the right living people to share their homes,
              lives, - and afterlives - with
            </p>

            <h3 className="pt-10 text-center text-2xl font-semibold leading-8 tracking-tight text-indigo-600">
              Connect with the your community and make deadlong friends
            </h3>

            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              A new home or ghost is waiting for you
            </h1>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <div className="pt-0 pb-2 bg-white bg-wisp">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:shrink-0">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48"
                src={require("../assetts/agnes.png")}
                alt="loving ghost"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                You're welcome here
              </div>
              <p class="mt-2 text-slate-500">
                No sage, no exorcisms, and no salt circles - we ensure every
                family on BooWho?! wants their homes to be haunted
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="text-center text-xl ml-4 pt-4 pb-8 text-indigo-600 font-cutive justify-content: center bg-white">
          <h1>we know who to boo</h1>
        </div>
        <div className="flex lg:flex-1">
          <a href="#!" className="m-auto p-auto">
            <span className="sr-only">Your Company</span>
            <img
              className="h-72 pb-16"
              src={require("../assetts/navlogo.png")}
              alt=""
            />
          </a>
        </div>
      </div>
    </>
  );
}
