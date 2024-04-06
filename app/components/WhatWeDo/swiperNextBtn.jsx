// some-inner-component.jsx
import { React } from 'react';
import { useSwiper } from 'swiper/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export  function SlideNextButton({...className}) {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()} id='slider-next' ></button>
  );
}

export function SlidePrevButton({...className}) {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()} id='slider-prev' ></button>
  );
}

export function customNext () {
  return(
    <button className="p-2 border block"><ChevronRight/></button>
  )
}

export function customPrev () {
  return(
    <button  className={`p-2 border`}><ChevronLeft/></button>
  )
}