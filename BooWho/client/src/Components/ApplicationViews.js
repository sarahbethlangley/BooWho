import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HauntList from "./Haunt/HauntList";
// import HauntAdd from "./Haunt/HauntAdd";
import HauntShow from "./Haunt/HauntShow";
import HauntEdit from "./Haunt/HauntEdit";
import HouseList from "./House/HouseList";
// import HouseAdd from "./House/HouseAdd";
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
        <Route path="house" element={<HouseList />} />
        <Route path="detail/:houseId" element={<HouseShow />} />
        <Route path="edit/:houseId" element={<HouseEdit />} />
        <Route path="haunt" element={<HauntList />} />
        <Route path="review/:hauntId" element={<HauntShow />} />
        <Route path="edit/:hauntId" element={<HauntEdit />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<p>Whoops, nothing here...</p>} />
      </Route>
    </Routes>
  );
}

// {/* */}
//         {/* <Route path="house/add" element={<HouseAdd />} /> */}
//         {/* <Route path="userprofile" element={<UserList />} />
//         <Route path="myhouse" element={<MyHouse />} />
//
//         {/*  */}
//         {/* <Route path="haunt/add" element={<HauntForm />} />
//         } /> */}
//         {/* <Route path="userprofile/details" element={<UserDetails />} /> */} */}
//         {/* <Route
//           path="myhaunt"
//           element={<HauntList setDetailsHauntId={setDetailsHauntId} />}
//         /> */}
