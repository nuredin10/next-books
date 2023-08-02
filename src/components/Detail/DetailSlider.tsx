'use client'

// @ts-ignore
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import DetailImage from "@/components/Detail/DetailImage";

const DetailSlider = () => {
    return (
        <div>
            <Splide
                aria-label="Books"
                options={{perPage: 1, arrows: false}}
            >
                <SplideSlide>
                    <DetailImage/>
                </SplideSlide>
                <SplideSlide>
                    <DetailImage/>
                </SplideSlide>
                <SplideSlide>
                    <DetailImage/>
                </SplideSlide>
                <SplideSlide>
                    <DetailImage/>
                </SplideSlide>
                <SplideSlide>
                    <DetailImage/>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default DetailSlider