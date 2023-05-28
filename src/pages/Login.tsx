import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  useIonLoading,
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
  const [present, dismiss] = useIonLoading();

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      console.log("Login.tsx: checkStorage: seen =>", seen);
      setIntroSeen(seen.value === "true");
    };

    checkStorage();
  }, []);

  const doLogin = async (event: any) => {
    event.preventDefault();
    await present("Logging In...");
    setTimeout(async () => {
      dismiss();
      router.push("/app", "root");
    }, 2000);
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
          <IonContent scrollY={false} className="ion-padding">
            <IonGrid fixed>
              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <div className="ion-text-center ion-padding">
                    <img src={FCCLogo} alt="FCG Logo" width="150" />
                  </div>
                </IonCol>
              </IonRow>

              <IonRow className="ion-justify-content-center">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <IonCard>
                    <IonCardContent>
                      <form onSubmit={doLogin}>
                        <IonInput
                          mode="md"
                          label="E-Mail"
                          type="email"
                          placeholder="john.doe@gmail.com"
                          labelPlacement="floating"
                          fill="outline"
                        ></IonInput>
                        <IonInput
                          mode="md"
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
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default Login;
