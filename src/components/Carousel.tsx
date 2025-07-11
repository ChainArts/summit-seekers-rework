import React, { useRef } from "react";
import { LiaArrowRightSolid, LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper/types";

interface PostMeta {
    footnotes?: string;
}

export interface CarouselPost {
    id: number;
    imagePath: string;
    alt?: string;
    link: string;
    title: string;
    meta?: PostMeta;
}

interface CarouselProps {
    posts: CarouselPost[];
}

const Carousel = ({ posts }: CarouselProps) => {
    const swiperRef = useRef<SwiperClass | null>(null);

    const getSwiperInstance = (swiper: SwiperClass) => {
        swiperRef.current = swiper;
    };

    return (
        <div className="carousel-update">
            <div className="slide-swiper-container">
                <CarouselButton direction="prev" swiperRef={swiperRef} />
                <Swiper
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        1256: {
                            slidesPerView: 3,
                            spaceBetween: 48,
                        },
                    }}
                    loop={true}
                    onSwiper={getSwiperInstance}
                >
                    {posts.map((post) => (
                        <SwiperSlide key={post.id}>
                            <CarouselItem data={post} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <CarouselButton direction="next" swiperRef={swiperRef} />
            </div>
        </div>
    );
};

interface CarouselButtonProps {
    direction: "next" | "prev";
    swiperRef: React.RefObject<SwiperClass | null>;
}

const CarouselButton = ({ direction, swiperRef }: CarouselButtonProps) => {
    const handleClick = () => {
        const swiper = swiperRef.current;
        if (!swiper) return;
        if (direction === "next") {
            swiper.slideNext();
        } else {
            swiper.slidePrev();
        }
    };

    return (
        <div onClick={handleClick} className={`cursor-anchor carousel-button carousel-button-${direction}`}>
            {direction === "next" ? <LiaAngleRightSolid /> : <LiaAngleLeftSolid />}
        </div>
    );
};

interface CarouselItemProps {
    data: CarouselPost;
}

const CarouselItem = ({ data }: CarouselItemProps) => {
    const { imagePath, alt, link, title, meta } = data;

    return (
        <a href={link} className="card">
            <div className="picture-container">
                <img src={imagePath} alt={alt || title} />
            </div>
            <div className="content">
                <LiaArrowRightSolid className="arrow" />
                <h3>{title}</h3>
                <p>{meta?.footnotes}</p>
            </div>
        </a>
    );
};

export default Carousel;
