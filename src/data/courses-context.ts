import React from "react";

export interface Course {
  id: string;
  title: string;
  enrolled: Date;
  goals: Goal[];
  included: boolean;
}
export interface Goal {
  id: string;
  text: string;
}

interface Context {
  courses: Course[];
  addCourse: (title: string, enrolled: Date) => void;
  addGoal: (text: string, courseId: string) => void;
  deleteGoal: (courseId: string, goalId: string) => void;
  updateGoal: (courseId: string, goalId: string, text: string) => void;
  changeCourseFilter: (courseId: string, isIncluded: boolean) => void;
}

const CoursesContext = React.createContext<Context>({
  courses: [],
  addCourse: () => {},
  addGoal: () => {},
  deleteGoal: () => {},
  updateGoal: () => {},
  changeCourseFilter: () => {},
});

export default CoursesContext;
