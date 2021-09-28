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
  IonButtons,
  IonMenuButton,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
// import { useHistory } from 'react-router-dom';

import { isPlatform } from "@ionic/core";

import { addOutline } from "ionicons/icons";
import AddCourseModal from "../components/AddCourseModal";
import CourseItem from "../components/CourseItem";

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
  const startAddCourseHandler = () => {
    setIsAdding(true);
  };
  const cancelAddCourseHandler = () => {
    setIsAdding(false);
  };
  const [isAdding, setIsAdding] = useState(false);

  const addCourseHandler = (title: string, enrollement: Date) => {};

  return (
    <React.Fragment>
      <AddCourseModal
        show={isAdding}
        onCancel={cancelAddCourseHandler}
        onSave={addCourseHandler}
      />
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
                    <CourseItem
                      title={course.title}
                      enrolled={course.enrolled}
                      id={course.id}
                    />
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
