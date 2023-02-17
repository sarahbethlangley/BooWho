import { Routes, Route, Navigate } from "react-router-dom";
import HauntList from "./Haunt/HauntList";
import HauntAdd from "./Haunt/HauntAdd";
import HauntShow from "./Haunt/HauntShow";
import HauntEdit from "./Haunt/HauntEdit";
import HouseList from "./House/HouseList";
import HouseShow from "./House/HouseShow";
import UserProfileList from "./UserProfile/UserProfileList";
import UserProfileShow from "./UserProfile/UserProfileShow";
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
        <Route path="house/detail/:id" element={<HouseShow />} />
        <Route path="haunt" element={<HauntList />} />
        <Route path="haunt/review/:id" element={<HauntShow />} />
        <Route path="haunt/edit/:id" element={<HauntEdit />} />
        <Route path="haunt/add" element={<HauntAdd />} />
        <Route path="userProfile" element={<UserProfileList />} />
        <Route path="userProfile/profile/:id" element={<UserProfileShow />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<p>Whoops, nothing here...</p>} />
      </Route>
    </Routes>
  );
}
