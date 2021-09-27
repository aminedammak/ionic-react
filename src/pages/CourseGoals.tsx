import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonPage,
  IonButtons,
  IonBackButton,
  IonItem,
  IonList,
  IonButton,
  IonIcon,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonFab,
  IonFabButton,
} from "@ionic/react";

import { addOutline, create, trash } from "ionicons/icons";

import { useParams } from "react-router-dom";

import { COURSE_DATA } from "./Courses";
import { isPlatform } from "@ionic/core";

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId;

  const selectedCourse = COURSE_DATA.find(
    (course) => course.id === selectedCourseId
  );

  const deleteGoalHandler = () => {
    console.log("deleted");
  };
  const editGoalHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("edited");
  };

  const addGoalHandler = () => {
    console.log("added");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/courses/list" />
          </IonButtons>
          <IonTitle>
            {selectedCourse ? selectedCourse.title : "Course does not exist"}
          </IonTitle>
          {!isPlatform("android") && (
            <IonButtons slot="end">
              <IonButton onClick={addGoalHandler}>
                <IonIcon slot="icon-only" icon={addOutline} />
              </IonButton>
            </IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {selectedCourse && (
          <IonList>
            {selectedCourse.goals.map((goal) => (
              <IonItemSliding key={goal.id}>
                <IonItemOptions side="start">
                  <IonItemOption onClick={deleteGoalHandler} color="danger">
                    <IonIcon icon={trash} slot="icon-only" />
                  </IonItemOption>
                </IonItemOptions>
                <IonItem lines="full" button>
                  {goal.text}
                </IonItem>
                <IonItemOptions side="end">
                  <IonItemOption onClick={editGoalHandler}>
                    <IonIcon icon={create} slot="icon-only" />
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            ))}
          </IonList>
        )}
        {isPlatform("android") && (
          <IonFab horizontal="end" vertical="bottom" slot="fixed">
            <IonFabButton color="secondary" onClick={addGoalHandler}>
              <IonIcon icon={addOutline} />
            </IonFabButton>
          </IonFab>
        )}
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
