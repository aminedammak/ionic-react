import React, { useRef, useState } from "react";
import {
  IonAlert,
  IonApp,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import BmiControls from "./components/BmiControls";
import BmiResult from "./components/BmiResult";
import InputControls from "./components/InputControls";

const App: React.FC = () => {
  const [calculatedBmi, setCalculatedBmi] = useState<number>();
  const [error, setError] = useState<string>();
  const [calcUnits, setCalcUnits] = useState<"mkg" | "ftlbs">("mkg");
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);
  const calculateBMI = () => {
    const enteredHeight = heightInputRef.current!.value;
    const enteredWeight = weightInputRef.current!.value;
    if (
      !enteredWeight ||
      !enteredHeight ||
      +enteredHeight <= 0 ||
      +enteredWeight <= 0
    ) {
      setError("Please enter valid numbers.");
      return;
    }
    const weighConversionFactor = calcUnits === "ftlbs" ? 2.2 : 1;
    const heightConversionFactor = calcUnits === "ftlbs" ? 3.28 : 1;

    const weight = +enteredWeight / weighConversionFactor;
    const height = +enteredHeight / heightConversionFactor;

    const bmi = weight / (height * height);
    setCalculatedBmi(bmi);
  };
  const resetInputs = () => {
    heightInputRef.current!.value = "";
    weightInputRef.current!.value = "";
  };
  const clearError = () => {
    setError("");
  };

  const selectCalcUnitHandler = (selectedValue: "mkg" | "ftlbs") => {
    setCalcUnits(selectedValue);
  };
  return (
    <React.Fragment>
      <IonAlert
        isOpen={!!error}
        message={error}
        buttons={[{ text: "Okay", handler: clearError }]}
      />
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>BMI calculator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol
                size-md="8"
                offset-md="2"
                size-lg="6"
                offset-lg="3"
                className="ion-no-padding"
              >
                <IonCard className="ion-no-margin">
                  <IonCardContent>
                    <InputControls
                      selectedValue={calcUnits}
                      onSelectValue={selectCalcUnitHandler}
                    />
                    <IonGrid className="ion-no-padding">
                      <IonRow>
                        <IonCol>
                          <IonItem>
                            <IonLabel position="floating">
                              Your Height (
                              {calcUnits === "mkg" ? "Meters" : "Feet"})
                            </IonLabel>
                            <IonInput
                              type="number"
                              ref={heightInputRef}
                            ></IonInput>
                          </IonItem>
                        </IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>
                          <IonItem>
                            <IonLabel position="floating">
                              Your Weight ({calcUnits === "mkg" ? "Kg" : "lbs"})
                            </IonLabel>
                            <IonInput
                              type="number"
                              ref={weightInputRef}
                            ></IonInput>
                          </IonItem>
                        </IonCol>
                      </IonRow>
                      <BmiControls
                        onCalculate={calculateBMI}
                        onReset={resetInputs}
                      />
                    </IonGrid>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                {calculatedBmi && <BmiResult result={calculatedBmi} />}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default App;
