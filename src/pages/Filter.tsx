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
import React, { useContext } from "react";
import CoursesContext from "../data/courses-context";

const Filter: React.FC = () => {
  const coursesCtx = useContext(CoursesContext);
  const courseFilterChangeHandler = (e: CustomEvent) => {
    coursesCtx.changeCourseFilter(e.detail.value, e.detail.checked);
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
        {coursesCtx.courses.map((course) => (
          <IonItem key={course.id}>
            <IonLabel>{course.title}</IonLabel>
            <IonToggle
              value={course.id}
              onIonChange={courseFilterChangeHandler}
              checked={course.included}
            ></IonToggle>
          </IonItem>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Filter;
