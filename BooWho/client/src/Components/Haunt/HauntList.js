// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAllHaunts } from "../../modules/hauntManager";
// import { getAllHouses } from "../../modules/houseManager";
// import HouseCard from "../../modules/houseCard";

// export default function HouseList({ setDetailsHauntId, setDetailsHouseId }) {
//   let navigate = useNavigate();
//   const [houses, setHouses] = useState([]);
//   const [haunts, setHaunt] = useState([]);

//   const getHouses = () => {
//     getAllHouses().then((houses) => setHouses(houses));
//   };

//   const getHaunts = () => {
//     getAllHouses().then((houses) => setHouses(houses));
//   };

//   useEffect(() => {
//     getAllHaunts();
//   }, []);

//   useEffect(() => {
//     getAllHouses();
//   }, []);

//   return (
//     <>
//       <h2>Houses</h2>
//       <section>
//         {houses.map((h) => (
//           <HouseCard
//             key={h.id}
//             house={h}
//             setDetailsHouseId={setDetailsHouseId}
//           />
//         ))}
//       </section>
//     </>
//   );
// }
