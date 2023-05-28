import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const List: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">List UI</IonContent>
    </IonPage>
  );
};

export default List;
