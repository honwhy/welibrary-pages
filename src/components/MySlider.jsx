// import function to register Swiper custom elements
import { useEffect, useRef } from "react";
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

export default function MySwiper() {
    const swiperRef = useRef(null);

    useEffect(() => {
      const swiperContainer = swiperRef.current;
      const params = {
        navigation: true,
        pagination: true,
        injectStyles: [
            `
            .swiper-button-next, .swiper-button-prev {
                color: black;
            }
            .swiper-pagination-bullet-active {
                background: black;
            }
          `,
        ],
      };
  
      Object.assign(swiperContainer, params);
      swiperContainer.initialize();
    }, []);

    return (
        <swiper-container navigation="true" pagination="true" ref={swiperRef} init="false">
        <swiper-slide>
        <img
            src={`${import.meta.env.BASE_URL}douban.jpg`}
            className="1"
            alt="user image"
            />
        </swiper-slide>
        <swiper-slide>
        <img
            src={`${import.meta.env.BASE_URL}comments.jpg`}
            className="1"
            alt="user image"
            />
        </swiper-slide>
        <swiper-slide>
        <img
            src={`${import.meta.env.BASE_URL}popup.jpg`}
            className="1"
            alt="user image"
            />
        </swiper-slide>
        <swiper-slide>
        <img
            src={`${import.meta.env.BASE_URL}billboards.jpg`}
            className="1"
            alt="user image"
            />
        </swiper-slide>
        <swiper-slide>
        <img
            src={`${import.meta.env.BASE_URL}search.jpg`}
            className="1"
            alt="user image"
            />
        </swiper-slide>
        <swiper-slide>
        <img
            src={`${import.meta.env.BASE_URL}setting.jpg`}
            className="1"
            alt="user image"
            />
        </swiper-slide>
        <swiper-slide>
        <img
            src={`${import.meta.env.BASE_URL}context-search.gif`}
            className="1"
            alt="user image"
            />
        </swiper-slide>
        </swiper-container>
    );
}