import React from "react";
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
} from "@ionic/react";
// import { useHistory } from 'react-router-dom';

export const COURSE_DATA = [
  { id: "c1", title: "React native: the practical guide" },
  { id: "c2", title: "React native: the complete guide" },
  { id: "c3", title: "Javascript: the practicle guide" },
];

const Courses: React.FC = () => {
  // const history = useHistory();

  // const changePageHandler = () => {
  //   history.push('/course-goals');
  // };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Courses</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          {COURSE_DATA.map((course) => {
            return (
              <IonRow key={course.id}>
                <IonCol size-md="4" offset-md="4">
                  <IonCard>
                    <IonCardContent className="ion-text-center">
                      <h2>{course.title}</h2>
                      <IonButton routerLink={`/courses/${course.id}`}>
                        View course details
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            );
          })}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Courses;
