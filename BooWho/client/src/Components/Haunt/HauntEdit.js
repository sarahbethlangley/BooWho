import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { editHaunt, getHauntDetails } from "../../modules/hauntManager";
import { LockClosedIcon } from "@heroicons/react/20/solid";

export default function HauntEdit() {
  const { hauntId } = useParams();
  const [haunt, setHaunt] = useState({});
  const [notes, setNotes] = useState();

  const getDetails = () => {
    getHauntDetails(hauntId).then((haunt) => {
      setHaunt(haunt);
      setNotes(haunt.notes);
    });
  };

  useEffect(() => {
    getDetails();
  }, [hauntId]);

  const handleHauntEdit = () => {
    editHaunt({ ...haunt, notes: notes });
    getDetails();
  };
  return (
    <>
      <form key={haunt.id} className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <h1>Tell us about your haunting experience</h1>
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src={hauntId?.house?.imageUrl}
                alt="house"
              />
            </div>
            <label>REVIEW YOUR HAUNT</label>
            <input
              type="textarea"
              placeholder="tell ghosts about your house"
              value={notes}
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              onChange={(e) => {
                setNotes(e.target.value);
              }}
            />
          </div>
        </div>

        <div>
          <Link to={`/detail/${hauntId}`}>
            <button
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleHauntEdit}
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-pow group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              update your review
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}
