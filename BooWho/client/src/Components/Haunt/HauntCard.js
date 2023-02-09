// export default function HauntCard({
//   haunt,
//   house,
//   user,
//   setDetailsHauntId,
//   setDetailsHouseId,
//   setDetailsUserId,
// }) {
//   return (
//     <div className="pt-16">
//       <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//         <div class="md:flex">
//           <div class="md:shrink-0">
//             <img
//               class="h-48 w-full object-cover md:h-full md:w-48"
//               src={require("../../assetts/agnes.png")}
//               alt="loving ghost"
//             />
//           </div>
//           <div class="p-8">
//             <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
//               {house.address}
//             </div>
//             <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
//               {user.name}
//             </div>
//             <p class="mt-2 text-slate-500">{haunt.notes}</p>
//             <button
//               className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-lg.no-underline font-frijole leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//               onClick={() => {
//                 setDetailsHauntId(haunt.id);
//                 setDetailsHouseId(house.id);
//                 setDetailsUserId(user.id);
//               }}
//             >
//               Show details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
