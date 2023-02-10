import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HauntList from "./Haunt/HauntList";
import HauntAdd from "./Haunt/HauntAddForm";
import HauntShow from "./Haunt/HauntShow";
import HauntEdit from "./Haunt/HauntEditForm";
import HouseList from "./House/HouseList";
import HouseAdd from "./House/HouseAdd";
import HouseShow from "./House/HouseShow";
import HouseEdit from "./House/HouseEdit";
// import UserDetails from "./User/UserProfileDetails";
// import UserList from "./User/UserProfileList";
import HomePage from "./Pages/HomePage";
import HeroPage from "./Pages/HeroPage";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={isLoggedIn ? <HomePage /> : <Navigate to="/boowho" />}
        />
        <Route path="boowho" element={<HeroPage />} />
        <Route path="boohome" element={<HomePage />} />
        <Route path="detail/:houseId" element={<HouseShow />} />
        <Route path="edit/:editHouseId" element={<HouseEdit />} />
        <Route path="house" element={<HouseList />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<p>Whoops, nothing here...</p>} />
      </Route>
    </Routes>
  );
}

// {/* <Route path="detail/:id" element={<HouseShow />} /> */}
//         {/* <Route path="house/add" element={<HouseAdd />} /> */}
//         {/* <Route path="userprofile" element={<UserList />} />
//         <Route path="myhouse" element={<MyHouse />} />
//
//         {/* <Route path="haunt" element={<HauntList />} /> */}
//         {/* <Route path="haunt/add" element={<HauntForm />} />
//         <Route path="haunt/edit" element={<HauntEdit />} /> */}
//         {/* <Route path="userprofile/details" element={<UserDetails />} /> */} */}
//         {/* <Route
//           path="myhaunt"
//           element={<HauntList setDetailsHauntId={setDetailsHauntId} />}
//         /> */}
