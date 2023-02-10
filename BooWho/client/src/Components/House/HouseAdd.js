// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { addHouse } from "../../modules/houseManager";

// export default function HouseAdd() {
//   const [houser, setHouser] = useState([]);
//   const [address, setAddress] = useState();
//   const [notes, setNotes] = useState();
//   const [userChoices, setUserChoices] = useState({
//     address: "",
//   });

//   const navigate = useNavigate();
//   const handleSelectHouse = (hos) => {
//     const copy = { ...userChoices };
//     copy.houseId = parseInt(hos.id);
//     copy.address = hos.address;
//     setUserChoices(copy);
//   };

//   const handleSaveHouse = (event) => {
//     event.preventDefault();
//     addHouse(userChoices)
//       .then((data) => setHouser(data.id))
//       .then(() => {
//         navigate("/boohome");
//       });
//   };

//   return (
//     <>
//       <form className="mt-8 space-y-6" action="#" method="POST">
//         <input type="hidden" name="remember" defaultValue="true" />
//         <div className="-space-y-px rounded-md shadow-sm">
//           <div className="pt-3">
//             <label htmlFor="address" className="sr-only">
//               Address
//             </label>
//             <input
//               id="address"
//               name="address"
//               type="address"
//               autoComplete="address"
//               required
//               className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//               placeholder="Address"
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="notes" className="sr-only">
//               Notes
//             </label>
//             <input
//               id="notes"
//               name="notes"
//               type="notes"
//               className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
//               placeholder="notes"
//               onChange={(e) => setNotes(e.target.value)}
//             />
//           </div>
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//             onClick={handleSaveHouse}
//           >
//             <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//               <LockClosedIcon
//                 className="h-5 w-5 text-pow group-hover:text-indigo-400"
//                 aria-hidden="true"
//               />
//             </span>
//             Register
//           </button>
//         </div>
//         <p className="mt-2 text-center text-sm text-white">
//           <div
//             href="#!"
//             className="text-md font-medium text-yeller hover:text-white"
//           >
//             <button
//               className="pt-10 pb-10 text-lg font-cutive leading-6 text-yeller"
//               onClick={(event) => {
//                 handleSaveHouse(event);
//               }}
//             >
//               {" "}
//               save house
//               <span aria-hidden="true">&rarr;</span>
//             </button>
//           </div>
//         </p>
//       </form>
//     </>
//   );
// }
