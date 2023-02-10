// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAllHouses } from "../../modules/houseManager";
// import HouseCard from "../House/HouseCard";

// export default function HouseList({ setDetailsHouseId }) {
//   let navigate = useNavigate();
//   const [haunt, setHaunts] = useState([]);

//   const getHaunts = () => {
//     getAllHaunts().then((haunt) => setHaunts(haunt));
//   };

//   useEffect(() => {
//     getHaunts();
//   }, []);

//   return (
//     <>
//       <h2>Haunts</h2>
//       <section>
//         {haunt.map((h) => (
//           <HouseCard
//             key={ha.id}
//             haunt={ha}
//             setDetailsHauntId={setDetailsHauntId}
//           />
//         ))}
//       </section>
//     </>
//   );
// }
