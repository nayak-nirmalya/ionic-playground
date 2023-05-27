import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { arrowForwardOutline } from "ionicons/icons";

import "./Intro.css";
import IntroSVG1 from "../assets/intro/1.svg";
import IntroSVG2 from "../assets/intro/2.svg";
import IntroSVG3 from "../assets/intro/3.svg";

interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return (
    <IonButton shape="round" onClick={() => swiper.slideNext()}>
      {children}
    </IonButton>
  );
};

const Intro: React.FC<ContainerProps> = ({ onFinish }) => {
  return (
    <Swiper>
      <SwiperSlide>
        <img src={IntroSVG1} alt="Intro1" />
        <IonText>
          <h3>Build Awesome Apps with Ionic UI Components!</h3>
        </IonText>
        <SwiperButtonNext>
          <IonIcon icon={arrowForwardOutline} />
        </SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={IntroSVG2} alt="Intro2" />
        <IonText>
          <h3>Create Poweful Native Apps with Capacitor.</h3>
        </IonText>
        <SwiperButtonNext>
          <IonIcon icon={arrowForwardOutline} />
        </SwiperButtonNext>
      </SwiperSlide>
      <SwiperSlide>
        <img src={IntroSVG3} alt="Intro3" />
        <IonText>
          <h3>Enjoy Learning to Code!</h3>
        </IonText>
        <IonButton onClick={() => onFinish()}>Finish</IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
