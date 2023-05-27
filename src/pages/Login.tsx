import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Login: React.FC = () => {
  const doLogin = (event: any) => {
    event.preventDefault();
    console.log("DoLogIn.");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>Page Title</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <form onSubmit={doLogin}>
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
                Login
              </IonButton>

              <IonButton
                className="ion-margin-top"
                expand="block"
                type="button"
                color="secondary"
                routerLink="/register"
              >
                Register
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
