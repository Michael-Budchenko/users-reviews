import '@/assets/styles/components/_carousel.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { testimonials } from './testimonials-data';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-slider-wrapper">
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card px-2">
            <div className="flex justify-center items-center max-h-12 mt-4">
              <img src={item.logo} alt={item.name} className="h-full object-contain" />
            </div>
            <div className="flex-grow">
              <p className="text-mainColor leading-9 text-xl mt-10">{item.description}</p>
              <p className="text-mainColor text-8xl text-right font-StaatlichesRegular">”</p>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <img
                src={item.avatar}
                className="size-16 rounded-full object-cover"
                alt={item.name}
              />
              <div>
                <p className="font-bold text-black text-2xl">{item.name}</p>
                <p className="text-xl text-black max-w-52">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
