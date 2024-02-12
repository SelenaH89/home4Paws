import 'swiper/css';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const DogsCards = ({ headLine, dogs }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-blue-700 my-5">
        {headLine}
      </h2>

      <div className="mt-12">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {dogs.map((dog) => (
            <SwiperSlide key={dog._id}>
              <Link to={`/dog/${dog._id}`}>
                <div className="relative">
                  <img src={dog.imageUrl} alt={`Image of ${dog.name}`} />
                  <div className=" absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded">
                    <FaHeart className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <div>
                    <h3>{dog.name}</h3>
                  </div>
                  <p>{dog.description}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

DogsCards.propTypes = {
  headLine: PropTypes.string.isRequired,
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DogsCards;
