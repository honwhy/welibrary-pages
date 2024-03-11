// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

export default function MySwiper() {
    return (
        <swiper-container navigation="true" pagination="true">
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
        </swiper-container>
    );
}