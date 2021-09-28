import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonLabel,
  IonItem,
  IonToggle,
} from "@ionic/react";
import React from "react";

import { COURSE_DATA } from "./Courses";

const Filter: React.FC = () => {
  const courseFilterChangeHandler = (e: CustomEvent) => {
    console.log("event", e);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Filter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {COURSE_DATA.map((course) => (
          <IonItem key={course.id}>
            <IonLabel>{course.title}</IonLabel>
            <IonToggle
              value={course.id}
              onIonChange={courseFilterChangeHandler}
            ></IonToggle>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Filter;
