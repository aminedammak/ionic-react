import React from "react";
import { IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

const BmiControls: React.FC<{ onCalculate: () => void; onReset: () => void }> =
  (props) => {
    return (
      <IonRow className="ion-margin-top">
        <IonCol size="12" size-md="6" className="ion-text-center">
          <IonButton
            onClick={props.onCalculate}
            expand="block"
            color="secondary"
          >
            <IonIcon slot="start" icon={calculatorOutline} />
            Calculate
          </IonButton>
        </IonCol>
        <IonCol size="12" size-md="6" className="ion-text-center">
          <IonButton onClick={props.onReset} fill="clear" color="medium">
            <IonIcon slot="start" icon={refreshOutline} />
            Reset
          </IonButton>
        </IonCol>
      </IonRow>
    );
  };
export default BmiControls;
