import Database from "../Database/index.js";

export function findQuizzesForCourse(courseId) {
  const { quizzes } = Database;
  return quizzes.filter((quiz) => quiz.course === courseId);
}

export function findQuiz(qid) {
  const { quizzes } = Database;
  return quizzes.find((quiz) => quiz._id === qid);
}