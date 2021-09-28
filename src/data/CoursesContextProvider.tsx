import React, { useState } from "react";

import CoursesContext, { Course } from "./courses-context";

const CoursesContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const addCourse = () => {};
  const addGoal = () => {};
  const deleteGoal = () => {};
  const updateGoal = () => {};
  return (
    <CoursesContext.Provider
      value={{ courses, addCourse, addGoal, deleteGoal, updateGoal }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
