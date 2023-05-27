import {
  IonContent,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./Intro.css";
import IntroSVG1 from "../assets/intro/1.svg";
import IntroSVG2 from "../assets/intro/2.svg";
import IntroSVG3 from "../assets/intro/3.svg";

interface ContainerProps {
  onFinish: () => void;
}

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={IntroSVG1} alt="Intro1" />
        <IonText>
          <h3>Build Awesome Apps with Ionic UI Components!</h3>
        </IonText>
      </SwiperSlide>
      <SwiperSlide>
        <img src={IntroSVG2} alt="Intro2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={IntroSVG3} alt="Intro3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
