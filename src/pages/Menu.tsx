import {
  IonContent,
  IonHeader,
  IonMenu,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Menu: React.FC = () => {
  return (
    <IonPage>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">Menu Items</IonContent>
      </IonMenu>

      <IonRouterOutlet id="main"></IonRouterOutlet>
    </IonPage>
  );
};

export default Menu;
