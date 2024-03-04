import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props : any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red", }}
        onClick={onClick}
      />
    );
  }

  function NoneNextArrow(props : any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
  }
  function NonePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",}}
        onClick={onClick}
      />
    );
  }

export const settingsOurWorks = {
    dots: true,
    // adaptiveHeight: true,
    variableWidth: true,
    centerMode: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          centerMode: false,
          // variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 530,
        settings: {
          nextArrow: <NoneNextArrow />,
          prevArrow: <NonePrevArrow />,
        }
      },
    ]
  };

export  const settingsShopItem = {
    dots: false,
    // adaptiveHeight: true,
    variableWidth: true,
    // centerMode: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          centerMode: false,
          // variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };
  