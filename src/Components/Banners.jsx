import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../../src/assets/banner/banner1.jpg'
import banner2 from '../../src/assets/banner/banner2.jpg'
import banner3 from '../../src/assets/banner/banner3.jpg'

const Banners = () => {
    return (
<div className="">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={true}
        showStatus={false}
        interval={4000}
      >
        <div>
          <img src={banner2}  alt="Banner 2" />
        </div>
        <div>
          <img src={banner1}  alt="Banner 1" />
        </div>
        <div>
          <img src={banner3}  alt="Banner 3" />
        </div>
      </Carousel>
    </div>
    );
};

export default Banners;