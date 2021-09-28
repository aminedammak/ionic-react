import React from "react";
import {
  IonItem,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from "@ionic/react";
import { create, trash } from "ionicons/icons";

const EditableGoalItem: React.FC<{
  slidingRef: React.Ref<HTMLIonItemSlidingElement>;
  onDeleteGoal: () => void;
  text: string;
  onStartEditGoal: (e: React.MouseEvent) => void;
}> = (props) => {
  return (
    <IonItemSliding ref={props.slidingRef}>
      <IonItemOptions side="start">
        <IonItemOption onClick={props.onDeleteGoal} color="danger">
          <IonIcon icon={trash} slot="icon-only" />
        </IonItemOption>
      </IonItemOptions>
      <IonItem lines="full" button>
        {props.text}
      </IonItem>
      <IonItemOptions side="end">
        <IonItemOption onClick={props.onStartEditGoal}>
          <IonIcon icon={create} slot="icon-only" />
        </IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};

export default EditableGoalItem;
