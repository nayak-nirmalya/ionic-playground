import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  checkmarkDoneOutline,
  logInOutline,
  personCircleOutline,
} from "ionicons/icons";
import React from "react";

const Register: React.FC = () => {
  const doRegister = (event: any) => {
    event.preventDefault();
    console.log("DoRegister");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Create Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <IonCard>
          <IonCardContent>
            <form onSubmit={doRegister}>
              <IonInput
                label="E-Mail"
                type="email"
                placeholder="john.doe@gmail.com"
                labelPlacement="floating"
                fill="outline"
              ></IonInput>
              <IonInput
                className="ion-margin-top"
                label="Password"
                type="password"
                labelPlacement="floating"
                fill="outline"
              ></IonInput>

              <IonButton
                className="ion-margin-top"
                expand="block"
                type="submit"
              >
                Create My Account
                <IonIcon icon={checkmarkDoneOutline} slot="end" />
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Register;
