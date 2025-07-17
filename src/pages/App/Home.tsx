import TestimonialSlider from '@/components/ui/Carousel';
import { Fragment } from 'react/jsx-runtime';
import layoutImg from '/images/layout.jpg';

const Home = () => {
  return (
    <Fragment>
      <div className="app-layout">
        <img className="app-layout__layout-img" src={layoutImg} alt="layoutImg" />
        <h1 className="font-bold text-5xl text-black text-center mb-8 sm:text-3xl">
          Voices of Success with Sales Fortuna
        </h1>
        <TestimonialSlider />
      </div>
    </Fragment>
  );
};

export default Home;
