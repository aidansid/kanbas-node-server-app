import model from "./model.js";

export function findQuizzesForCourse(courseId) {
  return model.find({ course: courseId });
}
export function findQuiz(qid) {
  return model.findById({ _id: qid });
}
export function createQuiz(quiz) {
  delete quiz._id;
  return model.create(quiz);
}
export function updateQuiz(qid, quiz) {
  return model.updateOne({ _id: qid }, quiz);
}
export function deleteQuiz(qid) {
  return model.deleteOne({ _id: qid });
}
export function gradeQuiz(qid, answers, q) {
  const quiz = q;
  let prevAttempts = quiz.howManyAttempts;
  if (quiz.attempts.length > 0) {
    let attemptsArray = quiz.attempts.filter((attempt) => attempt.user === answers.user);
    if (attemptsArray.length > 0) {
      prevAttempts = attemptsArray[0].attemptsRemaining - 1;
      if (prevAttempts < 0) {
        prevAttempts = 0;
      }
      quiz.attempts = quiz.attempts.filter((attempt) => attempt.user !== answers.user);
    }
  }
  const newAnswer = {
    time: answers.time,
    user: answers.user,
    answers: answers.answers,
    score: answers.score,
    attemptsRemaining: prevAttempts,
  }
  quiz.attempts.push(newAnswer);
  return model.updateOne({ _id: qid }, quiz);
}