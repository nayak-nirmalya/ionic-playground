import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from "@ionic/react";
import React, { useState } from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import FCCLogo from "../assets/fcc.svg";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(false);

  const doLogin = (event: any) => {
    event.preventDefault();
    console.log("DoLogIn.");
    // router.push('/home', 'root');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>Log In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent scrollY={false}>
        <div className="ion-text-center ion-padding">
          <img src={FCCLogo} alt="FCG Logo" width="150" />
        </div>

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
                <IonIcon icon={logInOutline} slot="end" />
              </IonButton>

              <IonButton
                className="ion-margin-top"
                expand="block"
                type="button"
                color="secondary"
                routerLink="/register"
              >
                Register
                <IonIcon icon={personCircleOutline} slot="end" />
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
