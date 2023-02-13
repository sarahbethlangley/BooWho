import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllHaunts } from "../../modules/hauntManager";
import { getHouseById } from "../../modules/houseManager";

export default function HauntList() {
  const [haunts, setHaunts] = useState([]);
  const { hauntId } = useParams();

  const getHaunts = () => {
    getAllHaunts().then((haunts) => setHaunts(haunts));
  };

  useEffect(() => {
    getHaunts(hauntId);
  }, [hauntId]);

  return (
    <>
      <h2>Haunts</h2>

      <section>
        {haunts.map((hh) => (
          <div key={hh.id} className="pt-16">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={hh?.userProfile?.imageUrl}
                    alt="haunt"
                  />
                </div>
                <div>
                  <h1 class="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
                    {hh?.userProfile?.name}
                  </h1>
                  <h1 class="uppercase tracking-wide text-2xl text-indigo-500 font-semibold">
                    {hh?.userProfile?.userType?.ghostType?.type}
                  </h1>
                </div>
                <div class="p-8">
                  <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    ACTIVE HAUNT
                  </div>
                  <Link to={`/detail/${hh?.house?.id}`}>
                    <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                      Check out the house
                    </div>
                  </Link>
                </div>
                <div class="p-8">
                  <p class="mt-2 text-slate-500">check it out</p>
                  <Link to={`/review/${hh.id}`}>
                    <button className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-lg.no-underline font-frijole leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Read about this ghost's experience
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
