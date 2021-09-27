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
import EditModal from "../components/EditModal";

const CourseGoals: React.FC = () => {
  const selectedCourseId = useParams<{ courseId: string }>().courseId;
  const [startedDeleting, setStartedDeleting] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<{
    id: string;
    text: string;
  } | null>(null);
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
  const startEditGoalHandler = (
    e: React.MouseEvent,
    goal: { id: string; text: string }
  ) => {
    e.stopPropagation();
    setIsEditing(true);
    setSelectedGoal(goal);
  };
  const cancelEditGoalHandler = () => {
    setIsEditing(false);
    setSelectedGoal(null);
  };
  const startAddGoalHandler = () => {
    setIsEditing(true);
    setSelectedGoal(null);
  };
  return (
    <React.Fragment>
      <EditModal
        show={isEditing}
        onCancel={cancelEditGoalHandler}
        editedGoal={selectedGoal}
      />
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
                    <IonItemOption
                      onClick={(e) => startEditGoalHandler(e, goal)}
                    >
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
