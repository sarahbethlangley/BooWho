import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getHauntDetails } from "../../modules/hauntManager";

const HauntShow = () => {
  const [haunt, setHaunt] = useState({});
  const { hauntId } = useParams();

  const getHaunt = (hauntId) => {
    getHauntDetails(hauntId).then((haunt) => setHaunt(haunt));
  };

  useEffect(() => {
    getHaunt(hauntId);
  }, []);

  return (
    <>
      <div className="bg-spooky">
        <div className="bg-spooky pt-16 float-left object-position: left">
          <img
            class="h-96 w-full object-top-left"
            src={hauntId?.userProfile?.userPicture}
            alt="loving ghost"
          />
          <img
            class="h-96 w-full object-right-top"
            src={hauntId?.house?.houseImage}
            alt="loving ghost"
          />
          <p className="mt-4 text-left text-xl text-gray-300">
            {hauntId?.house?.address}
          </p>
          <h1>{hauntId?.userProfile?.name}'s Haunt Experience</h1>
          <p className="mt-4 text-left text-xl text-gray-300">{haunt.notes}</p>
          <Link to={`/edit/${hauntId}`}>
            <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-lg.no-underline font-frijole leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              edit your experience
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HauntShow;
