import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllHaunts } from "../../modules/hauntManager";
import { getAllHouses } from "../../modules/houseManager";

export default function HauntForm() {
  let navigate = useNavigate();
  const [houses, setHouses] = useState([]);
  const [userChoices, setUserChoices] = useState({
    houseId: 0,
    notes: "",
  });

  const handleSaveHauntForm = (userChoices) => {
    addHaunt(userChoices).then(() => {
      navigate("/myhaunts");
    });
  };

  const getHouses = () => {
    getAllHouses().then((houses) => setHouses(houses));
  };

  useEffect((houseId) => {
    getAllHaunts().then((haunt) => {
      setHaunt(haunt);
    });
  }, []);

  //use effect for houses, import house managaer, save the houses as a piece of state use effect with empty dependency array, use map to create select options`ra aqa

  return (
    <>
      <div className="isolate bg-spooky"></div>
    </>
  );
}
