// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { getUserProfileDetails } from "../../modules/userProfileManager";

// import { logout } from "../../modules/authManager";

// const navigation = [
//   { nameOne: "Haunt Reviews" },
//   { nameTwo: "Available Houses" },
//   { nameThree: "Living and Deceased" },
//   { nameFour: "Home" },
// ];

// const UserCard = () => {
//   const [profile, setProfile] = useState({});
//   const { id } = useParams();

//   const getProfile = (id) => {
//     getUserProfileDetails(id).then((profile) => setProfile(profile));
//   };

//   useEffect(() => {
//     getProfile(id);
//   }, []);

//   const navigate = useNavigate();

//   const handleHouseListNavigate = () => {
//     navigate("/house");
//   };
//   const handleHauntListNavigate = () => {
//     navigate("/haunt");
//   };

//   const handleHomeNavigate = () => {
//     navigate("/boowho");
//   };

//   const handleHauntAddNavigate = () => {
//     navigate("/haunt/add");
//   };

//   const handleUserProfileListNavigate = () => {
//     navigate("/userProfile");
//   };

//   const logoutSubmit = () => {
//     logout();

//     navigate("/boowho");
//   };

//   return (
//     <>
//       <div className="isolate bg-spooky">
//         <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
//           <svg
//             className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
//             viewBox="0 0 1155 678"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
//               fillOpacity=".3"
//               d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
//             />
//             <defs>
//               <linearGradient
//                 id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
//                 x1="1155.49"
//                 x2="-78.208"
//                 y1=".177"
//                 y2="474.645"
//                 gradientUnits="userSpaceOnUse"
//               >
//                 <stop stopColor="#9089FC" />
//                 <stop offset={1} stopColor="#FF80B5" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//         <div className="px-6 pt-6 lg:px-8">
//           <nav
//             className="flex items-center justify-between"
//             aria-label="Global"
//           >
//             <div className="flex lg:flex-1">
//               <button className="-m-1.5 p-1.5">
//                 <span className="sr-only">Your Company</span>
//                 <img
//                   className="h-20"
//                   src={require("../../assetts/navlogo.png")}
//                   alt=""
//                 />
//               </button>
//             </div>
//             <div className="hidden lg:flex lg:gap-x-12">
//               {navigation.map((item, index) => (
//                 <div key={index}>
//                   <button
//                     key={item.nameOne}
//                     onClick={handleHauntListNavigate}
//                     className="text-lg font-cutive leading-6 text-yeller"
//                   >
//                     {item.nameOne}
//                   </button>
//                   <button
//                     key={item.nameTwo}
//                     onClick={handleHouseListNavigate}
//                     className="text-lg font-cutive leading-6 text-yeller"
//                   >
//                     {item.nameTwo}
//                   </button>
//                   <button
//                     key={item.nameThree}
//                     onClick={handleUserProfileListNavigate}
//                     className="text-lg font-cutive leading-6 text-yeller"
//                   >
//                     {item.nameThree}
//                   </button>
//                   <button
//                     key={item.nameFour}
//                     onClick={handleHomeNavigate}
//                     className="text-lg font-cutive leading-6 text-yeller"
//                   >
//                     {item.nameFour}
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//               <button
//                 type="submit"
//                 className="text-lg font-cutive leading-6 text-yeller"
//                 onClick={logoutSubmit}
//               >
//                 {" "}
//                 Log Out <span aria-hidden="true">&rarr;</span>
//               </button>
//             </div>
//           </nav>
//           <div className="bg-white">
//             <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
//               <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
//                 <svg
//                   viewBox="0 0 1024 1024"
//                   className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
//                   aria-hidden="true"
//                 >
//                   <circle
//                     cx={512}
//                     cy={512}
//                     r={512}
//                     fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
//                     fillOpacity="0.7"
//                   />
//                   <defs>
//                     <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
//                       <stop stopColor="#7775D6" />
//                       <stop offset={1} stopColor="#E935C1" />
//                     </radialGradient>
//                   </defs>
//                 </svg>
//                 <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
//                   <h2 className="text-3xl font-frijole tracking-tight text-yellow-500">
//                     {haunt?.userProfile?.name}'s{"..."}
//                     <br />
//                     Haunt Experience
//                   </h2>
//                   <p className="mt-6 text-xl leading-8 text-gray-300">
//                     {haunt.notes}
//                   </p>
//                   <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
//                     <img
//                       className="h-auto w-auto object-center"
//                       src={haunt?.userProfile?.imageUrl}
//                       alt="loving ghost"
//                     />
//                     <img
//                       className="h-auto w-auto object-center"
//                       src={haunt?.house?.imageUrl}
//                       alt="loving ghost"
//                     />
//                   </div>
//                 </div>
//                 <div className="relative mt-16 h-80 lg:mt-8">
//                   <img
//                     className="absolute top-0 left-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
//                     src={require("../../assetts/ghosthome.gif")}
//                     alt="App screenshot"
//                     width={1824}
//                     height={1080}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex min-h-full items-center justify-between py-12 px-4">
//             <h1 className="font-cutive font-bold text-center text-yellow-500">
//               {profile.name}'s Profile
//             </h1>
//             <div className="float-left">
//               <img
//                 className="h-auto w-auto object-center float-left"
//                 src={profile.imageUrl}
//                 alt="loving ghost"
//               />
//             </div>
//             <img
//               float-right
//               mr-48
//               className="h-auto w-auto object-center float-right mr-48"
//               src={profile?.house?.imageUrl}
//               alt="loving ghost"
//             />
//             <p className="mt-4 text-left text-xl text-gray-300">
//               {profile?.house?.address}
//             </p>

//             <p className="mt-4 text-left text-xl text-gray-300">
//               {profile.hobbies}
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserCard;