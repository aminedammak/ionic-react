import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";

import { COURSE_DATA } from "./Courses";

const AllGoals: React.FC = () => {
  const goals = COURSE_DATA.map((course) => {
    return course.goals.map((goal) => {
      return { ...goal, courseTitle: course.title };
    });
  }).reduce((accumulator, currentGoalArray) => {
    return [...accumulator, ...currentGoalArray];
  });
  console.log("goals", goals);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/courses/list" />
          </IonButtons>
          <IonTitle>All Goals</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {goals.map((item) => (
            <IonItem key={item.id}>
              <IonLabel>
                <h2>{item.text}</h2>
                <p>{item.courseTitle}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AllGoals;
