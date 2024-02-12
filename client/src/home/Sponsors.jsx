import { Link } from 'react-router-dom';

const Sponsors = () => {
  return (
    <div className="bg-teal-100 h-full">
      <div className="flex justify-center items-center py-12 px-4 lg:px-24">
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-center font-bold text-red-700 mb-28">
            Premium sponsors and cooperation partners
          </h2>
          <div className="flex justify-center">
            <Link to="https://www.purina.at" className="m-6">
              <img
                src="https://www.animalcare-austria.at/Content/img/sponsors/purina-logo-web.png"
                alt="Purina"
                className="h-14"
              />
            </Link>
            <Link to="https://share-me.com/#/" className="m-6">
              <img
                src="https://www.animalcare-austria.at/Content/img/sponsors/share-me-logo-web.png"
                alt="Share me"
                className="h-14"
              />
            </Link>
            <Link to="https://www.cisco.com/c/de_at/index.html" className="m-6">
              <img
                src="https://www.animalcare-austria.at/Content/img/sponsors/cisco-logo.png"
                alt="Cisco"
                className="h-14"
              />
            </Link>
            <Link to="https://www.dogweekend.at/" className="m-6">
              <img
                src="https://www.animalcare-austria.at/Content/img/sponsors/dogweekend-logo.png"
                alt="Dog Weekend"
                className="h-14"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
