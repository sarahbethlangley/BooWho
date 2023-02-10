// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { logout } from "../../modules/authManager";
// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Dialog } from "@headlessui/react";

// export default function GhostNav({ isLoggedIn }) {
//   const navigation = [
//     { name: "Active Haunts" },
//     { name: "Haunted Houses" },
//     { name: "Social" },
//     { name: "My Profile" },
//   ];

//   const logoutSubmit = () => {
//     {
//       {
//         {
//           logout();
//         }
//       }
//     }
//     navigate("/boowho");
//   };

//   return (
//     <>
//       <div className="px-6 pt-6 lg:px-8">
//         <nav className="flex items-center justify-between" aria-label="Global">
//           <div className="flex lg:flex-1">
//             <button className="-m-1.5 p-1.5">
//               <span className="sr-only">Your Company</span>
//               <img
//                 className="h-20"
//                 src={require("../../assetts/navlogo.png")}
//                 alt=""
//               />
//             </button>
//           </div>
//           <div className="flex lg:hidden">
//             <button
//               type="button"
//               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(true)}
//             >
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <div className="hidden lg:flex lg:gap-x-12">
//             {navigation.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={item.link}
//                 className="text-lg font-cutive leading-6 text-yeller"
//               >
//                 {item.name}
//               </button>
//             ))}
//           </div>
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <button
//               type="submit"
//               className="text-lg font-cutive leading-6 text-yeller"
//               onClick={logoutSubmit}
//             >
//               {" "}
//               Log Out <span aria-hidden="true">&rarr;</span>
//             </button>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }
