import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HauntList from "./Haunt/HauntList";
import HauntForm from "./Haunt/HauntAddForm";
import HauntDetails from "./Haunt/HauntDetails";
import HauntEdit from "./Haunt/HauntEditForm";
import HouseList from "./House/HouseList";
import HouseForm from "./House/HouseAddForm";
import HouseDetails from "./Haunt/HauntDetails";
import HouseEdit from "./Haunt/HauntEditForm";
// import UserDetails from "./User/UserProfileDetails";
// import UserList from "./User/UserProfileList";
import HomePage from "./Pages/HomePage";
import HeroPage from "./Pages/HeroPage";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

export default function ApplicationViews({ isLoggedIn }) {
  const [detailsHouseId, setDetailsHouseId] = useState(null);

  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={isLoggedIn ? <HomePage /> : <Navigate to="/boowho" />}
        />

        <Route path="boowho" element={<HeroPage />} />
        <Route path="boohome" element={<HomePage />} />
        {/* <Route path="haunt" element={<HauntList />} /> */}
        <Route
          path="house"
          element={<HouseList setDetailsHouseId={setDetailsHouseId} />}
        />
        {/* <Route path="userprofile" element={<UserList />} />
        <Route path="myhaunt" element={<MyHaunt />} />
        <Route path="myhouse" element={<MyHouse />} />
        <Route path="haunt/details" element={<HauntDetails />} />
        <Route path="haunt/add" element={<HauntForm />} />
        <Route path="haunt/edit" element={<HauntEdit />} />
        <Route path="house/details" element={<HouseDetails />} />
        <Route path="house/add" element={<HouseForm />} />
        <Route path="house/edit" element={<HouseEdit />} />
        <Route path="userprofile/details" element={<UserDetails />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<p>Whoops, nothing here...</p>} />
      </Route>
    </Routes>
  );
}
