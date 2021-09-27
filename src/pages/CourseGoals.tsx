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
} from "@ionic/react";

import { create, trash } from "ionicons/icons";

import { useParams } from "react-router-dom";

import { COURSE_DATA } from "./Courses";

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
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>
            {selectedCourse ? selectedCourse.title : "Course does not exist"}
          </IonTitle>
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
      </IonContent>
    </IonPage>
  );
};

export default CourseGoals;
