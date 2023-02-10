export default function HauntCard({ haunt, setDetailsHauntId }) {
  // const navigate = useNavigate();

  // const handleNavigateToHouseDetails = () => {
  //   navigate("/login");
  // };

  return (
    <div className="pt-16">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={require("../../assetts/navlogo.png")}
              alt="house image"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {haunt.notes}
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              you could super haunt this
            </div>
            <p class="mt-2 text-slate-500">Check it out</p>
            <button
              className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-lg.no-underline font-frijole leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                setDetailsHouseId(house.id);
                // handleNavigateToHouseDetails();
              }}
            >
              Show details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
