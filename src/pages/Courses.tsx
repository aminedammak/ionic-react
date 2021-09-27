import React, { useState } from "react";
import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonButton,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCardContent,
  IonCard,
  IonButtons,
  IonMenu,
  IonMenuButton,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonFab,
  IonFabButton,
  IonIcon,
  IonModal,
} from "@ionic/react";
// import { useHistory } from 'react-router-dom';

import { isPlatform } from "@ionic/core";

import { addOutline } from "ionicons/icons";
import AddCourseModal from "../components/AddCourseModal";

export const COURSE_DATA = [
  {
    id: "c1",
    title: "React native: the practical guide",
    enrolled: new Date("02/16/2018"),
    goals: [
      { id: "c1g1", text: "Finish the course" },
      { id: "c1g2", text: "Learn a lot" },
    ],
  },
  {
    id: "c2",
    title: "React native: the complete guide",
    enrolled: new Date("11/08/2020"),
    goals: [
      { id: "c2g1", text: "Finish the course" },
      { id: "c2g2", text: "Learn a lot" },
    ],
  },
  {
    id: "c3",
    title: "Javascript: the practicle guide",
    enrolled: new Date("08/22/2019"),
    goals: [
      { id: "c3g1", text: "Finish the course" },
      { id: "c3g2", text: "Learn a lot" },
    ],
  },
];

const Courses: React.FC = () => {
  // const history = useHistory();

  // const changePageHandler = () => {
  //   history.push('/course-goals');
  // };

  const startAddCourseHandler = () => {
    setIsAdding(true);
  };
  const cancelAddCourseHandler = () => {
    setIsAdding(false);
  };
  const [isAdding, setIsAdding] = useState(false);

  return (
    <React.Fragment>
      <AddCourseModal show={isAdding} onCancel={cancelAddCourseHandler} />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Courses</IonTitle>
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={startAddCourseHandler}>
                  <IonIcon slot="icon-only" icon={addOutline} />
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {COURSE_DATA.map((course) => {
              return (
                <IonRow key={course.id}>
                  <IonCol size-md="4" offset-md="4">
                    <IonCard>
                      <IonCardHeader>
                        <IonCardTitle>{course.title}</IonCardTitle>
                        <IonCardSubtitle>
                          Enrolled on{" "}
                          {course.enrolled.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          })}
                        </IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <div className="ion-text-right">
                          <IonButton
                            routerLink={`/courses/${course.id}`}
                            fill="clear"
                            color="secondary"
                          >
                            View course details
                          </IonButton>
                        </div>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              );
            })}
          </IonGrid>
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton color="secondary" onClick={startAddCourseHandler}>
                <IonIcon icon={addOutline} />
              </IonFabButton>
            </IonFab>
          )}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Courses;
