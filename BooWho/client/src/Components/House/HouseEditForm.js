import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllHaunts } from "../../modules/hauntManager";
import { getAllHouses } from "../../modules/houseManager";

export default function HouseList() {
  let navigate = useNavigate();
  const [houses, setHouses] = useState([]);
  const [haunts, setHaunt] = useState([]);

  const getHouses = () => {
    getAllHouses().then((houses) => setHouses(houses));
  };

  const getHaunts = () => {
    getAllHouses().then((houses) => setHouses(houses));
  };

  useEffect(() => {
    getAllHaunts();
  }, []);

  useEffect(() => {
    getAllHouses();
  }, []);

  return (
    <>
      <div>stuff</div>
    </>
  );
}
