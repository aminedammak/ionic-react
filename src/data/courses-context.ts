import React from "react";

export interface Course {
  id: string;
  title: string;
  enrolled: Date;
  goals: Goal[];
}
interface Goal {
  id: string;
  text: string;
}

interface Context {
  courses: Course[];
  addCourse: () => void;
  addGoal: () => void;
  deleteGoal: () => void;
  updateGoal: () => void;
}

const CoursesContext = React.createContext<Context>({
  courses: [],
  addCourse: () => {},
  addGoal: () => {},
  deleteGoal: () => {},
  updateGoal: () => {},
});

export default CoursesContext;
