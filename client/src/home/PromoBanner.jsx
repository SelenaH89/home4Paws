import { Link } from 'react-router-dom';

const PromoBanner = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="mt-8 lg:mt-16 py-12 bg-teal-100 px-4 lg:px-24">
        <div>
          <div>
            <h2 className="text-5xl md:text-5xl lg:text-6xl text-center font-bold text-black">
              Donate online now easily, quickly and securely.
            </h2>
            <Link to="donationPage" className="mt-8 lg:mt-12 block text-center">
              <button className="bg-red-700 text-white font-semibold px-5 py-2 rounded">
                I WOULD LIKE TO DONATE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
