import Banner from '../components/Banner';
import Sponsors from '../home/Sponsors';
import AdoptionInfo from './AdoptionInfo';
import HappyStories from './HappyStories';
import NotForgotten from './Not forgotten';
import PromoBanner from './PromoBanner';

export default function home() {
  return (
    <div>
      <Banner />
      <NotForgotten />
      <AdoptionInfo />
      <PromoBanner />
      <HappyStories />
      <Sponsors />
    </div>
  );
}
