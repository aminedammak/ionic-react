import React, { useState } from "react";

import CoursesContext, { Course, Goal } from "./courses-context";

const CoursesContextProvider: React.FC = (props) => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "c1",
      title: "React - the complete guide",
      enrolled: new Date(),
      goals: [],
      included: true,
    },
  ]);
  const addCourse = (title: string, enrolled: Date) => {
    const newCourse: Course = {
      id: Math.random().toString(),
      title: title,
      enrolled: enrolled,
      goals: [],
      included: true,
    };
    setCourses((currCourses) => {
      return currCourses.concat(newCourse);
    });
  };
  const addGoal = (text: string, courseId: string) => {
    const newGoal: Goal = { id: Math.random().toString(), text: text };
    setCourses((courses) => {
      let updatedCourses = [...courses];
      const updateCourseIndex = courses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourseGoals =
        updatedCourses[updateCourseIndex].goals.concat(newGoal);

      updatedCourses[updateCourseIndex].goals = [...updatedCourseGoals];
      return updatedCourses;
    });
  };
  const deleteGoal = (courseId: string, goalId: string) => {
    setCourses((courses) => {
      let updatedCourses = [...courses];
      const updateCourseIndex = courses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourseGoals = updatedCourses[updateCourseIndex].goals.filter(
        (goal) => goal.id !== goalId
      );

      updatedCourses[updateCourseIndex].goals = [...updatedCourseGoals];
      return updatedCourses;
    });
  };
  const updateGoal = (courseId: string, goalId: string, newText: string) => {
    setCourses((courses) => {
      let updatedCourses = [...courses];
      const updateCourseIndex = courses.findIndex(
        (course) => course.id === courseId
      );
      const updatedCourseGoals =
        updatedCourses[updateCourseIndex].goals.slice();

      const updateGoalIndex = updatedCourseGoals.findIndex(
        (goal) => goal.id === goalId
      );

      let goalToUpdate = updatedCourseGoals[updateGoalIndex];

      goalToUpdate = { ...goalToUpdate, text: newText };

      updatedCourses[updateCourseIndex].goals[updateGoalIndex] = goalToUpdate;

      return updatedCourses;
    });
  };

  const changeCourseFilter = (courseId: string) => {
    setCourses((courses) => {
      let updatedCourses = [...courses];
      const updateCourseIndex = courses.findIndex(
        (course) => course.id === courseId
      );

      updatedCourses[updateCourseIndex].included =
        !updatedCourses[updateCourseIndex].included;
      return updatedCourses;
    });
  };
  return (
    <CoursesContext.Provider
      value={{
        courses,
        addCourse,
        addGoal,
        deleteGoal,
        updateGoal,
        changeCourseFilter,
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
