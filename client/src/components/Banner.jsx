import BannerCube from '../home/BannerCube';

function Banner() {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="space-y-8 md:w-1/2 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Adopt dog <span className="text-blue-700">SAVE LIFE</span>
          </h2>
          <p className="md:w-4/5">
            Maybe you will find one of the following dogs that warms your heart
            and that you want to give a chance at a new, wonderful life.
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search a dog"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>

        {/* right side */}
        <div>
          <BannerCube></BannerCube>
        </div>
      </div>
    </div>
  );
}

export default Banner;
