import React from "react";
import { IonRow, IonCol, IonCard, IonCardContent } from "@ionic/react";

import "./BmiResult.css";

const BmiResult: React.FC<{ result: number }> = (props) => {
  return (
    <IonCard id="result">
      <IonCardContent className="ion-text-center">
        <h2>Your body mass index</h2>
        <h3>{props.result.toFixed(2)}</h3>
      </IonCardContent>
    </IonCard>
  );
};

export default BmiResult;
