// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './BannerCube.css';
// import required modules
import { EffectCube, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

function BannerCube() {
  // Definisanje imena za svaku sliku
  const dogNames = ['Buddy', 'Max', 'Bella', 'Charlie'];

  return (
    <div className="banner">
      <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="image-container">
            <img src="https://media.gettyimages.com/id/531610325/de/foto/obdachlosen-hund-hinter-bars.jpg?s=612x612&w=0&k=20&c=BW6jaC3oAOxa3pueOm2l556kXmjslTvlAfsSQcEdmP0=" />
            <p className="dog-name">{dogNames[0]}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <img src="https://media.gettyimages.com/id/975724302/de/foto/lonely-dog-standing-on-street-belgrade.jpg?s=612x612&w=0&k=20&c=h8VbgwMl5hYqutFbWfF1V7wRybRtbP_zrjaQLJIGtYk=" />
            <p className="dog-name">{dogNames[1]}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <img src="https://media.gettyimages.com/id/1272823746/de/foto/stray-dog-walking-on-the-road.jpg?s=612x612&w=0&k=20&c=UhchIK9QmxJvUSE3GIo9op1naWEdY3n2ntdiK8UHHrw=" />
            <p className="dog-name">{dogNames[2]}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <img src="https://media.gettyimages.com/id/1481040454/de/foto/little-puppy-abandoned-on-the-road-puppy-and-spring-pet-themes.jpg?s=612x612&w=0&k=20&c=_rnzK1kAOdS-_QU69f1H7D6xkMoz0w_9KZW_I_uwobs=" />
            <p className="dog-name">{dogNames[3]}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BannerCube;
