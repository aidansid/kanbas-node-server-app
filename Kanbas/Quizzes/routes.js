import * as quizDao from './dao.js';

export default function QuizRoutes(app) {
  app.get('/api/quizzes/course/:courseId', (req, res) => {
    const { courseId } = req.params;
    const quizzes = quizDao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  });

  app.get('/api/quizzes/:qid', (req, res) => {
    const { qid } = req.params;
    const quiz = quizDao.findQuiz(qid);
    res.json(quiz);
  });
}