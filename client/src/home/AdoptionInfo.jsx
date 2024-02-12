import { Link } from 'react-router-dom';

const AdoptionInfo = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img
          src="https://www.animalcare-austria.at/media/55950/adoptionsinfos-teaser.jpg"
          alt=""
          className="rounded md:w-10/12"
        ></img>
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Adoption <span className="text-blue-700">Info</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Before you decide to take a dog into your household, first ask
          yourself the following questions, just to make sure that your
          expectations are not too far removed from reality.
        </p>
        {/* stats*/}
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">3200+</h3>
            <p className="text-base">Adoptions since 2006</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">568+</h3>
            <p className="text-base">Dogs Available for Adoption</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">10,600+</h3>
            <p className="text-base">Castrations since 2006</p>
          </div>
        </div>
        <Link to="/adopt" className="mt-12 block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AdoptionInfo;
