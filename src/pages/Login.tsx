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
import React, { useEffect, useState } from "react";
import { logInOutline, personCircleOutline } from "ionicons/icons";
import FCCLogo from "../assets/fcc.svg";
import Intro from "../components/Intro";
import { Preferences } from "@capacitor/preferences";

const INTRO_KEY = "intro_seen";

const Login: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(true);

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      console.log("Login.tsx: checkStorage: seen =>", seen);
      setIntroSeen(seen.value === "true");
    };

    checkStorage();
  }, []);

  const doLogin = (event: any) => {
    event.preventDefault();
    console.log("DoLogIn.");
    router.push("/app", "root");
  };

  const finishIntro = async () => {
    console.log("Finished!");
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };

  const seeIntroAgain = () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  };

  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
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

                  <IonButton
                    className="ion-margin-top"
                    expand="block"
                    type="button"
                    color="medium"
                    size="small"
                    fill="clear"
                    onClick={seeIntroAgain}
                  >
                    Watch Intro Again
                    <IonIcon icon={personCircleOutline} slot="end" />
                  </IonButton>
                </form>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
