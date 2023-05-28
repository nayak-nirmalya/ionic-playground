import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Settings Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">Settings Page UI</IonContent>
    </IonPage>
  );
};

export default Settings;
