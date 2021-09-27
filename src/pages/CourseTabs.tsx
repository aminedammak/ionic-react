import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import React from "react";
import { Redirect, Route, Switch } from "react-router";
import AllGoals from "./AllGoals";
import CourseGoals from "./CourseGoals";
import Courses from "./Courses";

import { list, trophyOutline } from "ionicons/icons";

const CourseTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Redirect path="/courses" to="/courses/list" exact />

        <Switch>
          <Route path="/courses/list" exact>
            <Courses />
          </Route>
          <Route path="/courses/all-goals" exact>
            <AllGoals />
          </Route>
          <Route path="/courses/:courseId" exact>
            <CourseGoals />
          </Route>
        </Switch>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="a" href="/courses/all-goals">
          <IonIcon icon={list} />
          <IonLabel>All goals</IonLabel>
        </IonTabButton>
        <IonTabButton tab="b" href="/courses/list">
          <IonIcon icon={trophyOutline} />
          <IonLabel>Courses</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default CourseTabs;
