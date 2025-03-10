import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
// install swiper styles
SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

function Slider() {
  return (
    <Swiper
      navigation
      pagination={{ type: "progressbar" }}
      scrollbar={{ draggable: false, hide: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      grabCursor={false}
      loop={true}
    >
      <SwiperSlide>
        <img
          className="swiper__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/Phase2/J23_P2_PC_NTA_Hero_2x._CB574841011_.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiper__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/Jupiter/GW/P2/PC_3000x1200fd._CB574646510_.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiper__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/JUP23/OP-Hero/OP_DesktopHeroTemplate_3000x1200._CB574730574_.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiper__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Biss_2023/Jup23/GW/PHASE2/GW_PC_3000x1200_1._CB574700315_.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiper__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/PHASE2GWCREATIVES/D98347964_IN_WLD_Tecno-POVA-5-Pro-5G_GW_JUPITER_PC_Hero_3000x1200._CB574700547_.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiper__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/Jupiter/Phase2/Gateway/Uber_UnRec_3000x1200_withoutFDFO._CB574650722_.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="swiper__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Toys/GW/Jupiter2023GW/toysunderxx_Toys--games_Phase_2_2x._CB574738383_.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
