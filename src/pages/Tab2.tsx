import {
  CreateAnimation,
  Gesture,
  GestureDetail,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  createGesture,
  useIonViewDidEnter,
} from "@ionic/react";
import React, { useRef } from "react";

const Tab2: React.FC = () => {
  const animationRef = useRef<CreateAnimation | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useIonViewDidEnter(() => {
    animationRef.current?.animation.play();

    const gesture: Gesture = createGesture({
      el: elementRef.current!,
      threshold: 0,
      gestureName: "my-gesture",
      onMove: (ev) => onMoveHandler(ev),
      onEnd: (ev) => onMoveEnd(ev),
      onStart: (ev) => onStartHandler(ev),
    });

    gesture.enable();
  });

  const onStartHandler = (detail: GestureDetail) => {
    elementRef.current!.style.transition = `none`;
  };

  const onMoveHandler = (detail: GestureDetail) => {
    const x = detail.currentX - detail.startX;
    const y = detail.currentY - detail.startY;

    elementRef.current!.style.transform = `translate(${x}px, ${y}px)`;
  };

  const onMoveEnd = (detail: GestureDetail) => {
    elementRef.current!.style.transition = `500ms ease-out`;
    elementRef.current!.style.transform = `translate(${0}px, ${0}px)`;
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollY={false}>
        <CreateAnimation
          ref={animationRef}
          duration={2000}
          iterations={Infinity}
          delay={1000}
          keyframes={[
            { offset: 0, transform: "scale(1)", opacity: "1" },
            { offset: 0.5, transform: "scale(1.5)", opacity: "0.5" },
            { offset: 1, transform: "scale(1)", opacity: "1" },
          ]}
        >
          <IonButton expand="block" color="success" className="ion-margin">
            Click Me
          </IonButton>
        </CreateAnimation>

        <div
          ref={elementRef}
          style={{
            width: 80,
            height: 20,
            backgroundColor: "red",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center",
            textAlign: "center",
          }}
        >
          <p
            style={{
              alignContent: "center",
              justifyContent: "center",
              alignItems: "center",
              justifyItems: "center",
              textAlign: "center",
              userSelect: "none",
              cursor: "grab",
            }}
          >
            Drag Me!
          </p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
