import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  editHouse,
  getHouseById,
  deleteHouse,
} from "../../modules/houseManager";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export default function HouseEdit() {
  const { houseId } = useParams();
  const { userProfileId, setUserProfileId } = useState();
  const [edit, setEdit] = useState({
    notes: "",
  });

  const getEditHouse = (houseId) => {
    getHouseById(houseId).then((edit) => {
      setEdit(edit);
    });
  };

  useEffect(() => {
    getEditHouse();
  }, []);

  const handleUserInput = (evt) => {
    const copy = { ...edit };
    copy[evt.target.name] = evt.target.value;
    setEdit(copy);
  };

  const handleEditHouse = (evt) => {
    evt.preventDefault();
    editHouse(houseId);
  };

  return (
    <>
      {edit.map((h) => (
        <div key={h.id}>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <h1>Let me tell you a little something about this house...</h1>
                <label htmlFor="notes" className="sr-only">
                  notes
                </label>
                <input
                  id="notes"
                  type="textarea"
                  name="notes"
                  value={edit.notes}
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="tell ghosts about your house"
                  onChange={handleUserInput}
                />
              </div>
            </div>

            <div>
              <Link to={`/house/detail/${houseId}`}>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleEditHouse}
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-pow group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  update this house
                </button>
              </Link>
            </div>
          </form>
        </div>
      ))}
    </>
  );
}
