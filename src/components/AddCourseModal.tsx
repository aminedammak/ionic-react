import React, { useRef, useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonModal,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonDatetime,
  IonText,
} from "@ionic/react";

const AddCourseModal: React.FC<{
  show: boolean;
  onCancel: () => void;
}> = (props) => {
  const titleRef = useRef<HTMLIonInputElement>(null);
  const enrollmentRef = useRef<HTMLIonDatetimeElement>(null);
  const [error, setError] = useState<string>("");
  const saveHandler = () => {
    const title = titleRef.current!.value;
    const enrollement = enrollmentRef.current!.value;
    if (
      !title ||
      !enrollement ||
      title.toString().trim().length === 0 ||
      enrollement.trim().length === 0
    ) {
      setError("Title or enrollement fields are invalid");
      return;
    } else {
      setError("");
    }
  };
  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add a course</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Title</IonLabel>
                <IonInput type="text" ref={titleRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Enrollment Date</IonLabel>
                <IonDatetime displayFormat="MM DD YY" ref={enrollmentRef} />
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="text-align-center">
            <IonCol>
              <IonText color="danger">
                <p>{error}</p>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow className="ion-text-center">
            <IonCol>
              <IonButton color="dark" fill="clear" onClick={props.onCancel}>
                Cancel
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton color="secondary" expand="block" onClick={saveHandler}>
                Save
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default AddCourseModal;
