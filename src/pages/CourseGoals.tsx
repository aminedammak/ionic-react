import React, { useState } from "react";
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
  IonAlert,
  IonToast,
  IonModal,
} from "@ionic/react";

import { addOutline, create, trash } from "ionicons/icons";

import { useParams } from "react-router-dom";

import { COURSE_DATA } from "./Courses";
import { isPlatform } from "@ionic/core";

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId;
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const selectedCourse = COURSE_DATA.find(
    (course) => course.id === selectedCourseId
  );

  const startDeleteGoalHandler = () => {
    setStartedDeleting(true);
  };
  const deleteGoalHandler = () => {
    setStartedDeleting(false);
    setToastMessage("Goal deleted!");
  };
  const startEditGoalHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditing(true);
  };
  const cancelEditing = () => {
    setIsEditing(false);
  };
  const startAddGoalHandler = () => {
    setIsEditing(true);
  };
  return (
    <React.Fragment>
      <IonModal isOpen={isEditing}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Edit a goal</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <p>Editing ....</p>
          <IonButton onClick={cancelEditing}>Cancel</IonButton>
          <IonButton>Save</IonButton>
        </IonContent>
      </IonModal>
      <IonToast
        isOpen={!!toastMessage}
        message={toastMessage}
        duration={2000}
        onDidDismiss={() => {
          setToastMessage("Goal deleted!");
        }}
      ></IonToast>
      <IonAlert
        isOpen={startedDeleting}
        header="Are you sure?"
        message="Do you want to delete the goal? this cannot be undone"
        buttons={[
          {
            text: "No",
            role: "cancel",
            handler: () => {
              setStartedDeleting(false);
            },
          },
          {
            text: "Yes",
            handler: deleteGoalHandler,
          },
        ]}
      ></IonAlert>
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
                <IonButton onClick={startAddGoalHandler}>
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
                    <IonItemOption
                      onClick={startDeleteGoalHandler}
                      color="danger"
                    >
                      <IonIcon icon={trash} slot="icon-only" />
                    </IonItemOption>
                  </IonItemOptions>
                  <IonItem lines="full" button>
                    {goal.text}
                  </IonItem>
                  <IonItemOptions side="end">
                    <IonItemOption onClick={startEditGoalHandler}>
                      <IonIcon icon={create} slot="icon-only" />
                    </IonItemOption>
                  </IonItemOptions>
                </IonItemSliding>
              ))}
            </IonList>
          )}
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={startAddGoalHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default CourseGoals;
