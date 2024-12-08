import * as quizDao from './dao.js';
import * as courseDao from '../Courses/dao.js';
import * as userDao from '../Users/dao.js';

export default function QuizRoutes(app) {
  app.get('/api/quizzes/course/:courseId', async (req, res) => {
    const { courseId } = req.params;
    const course = await courseDao.findCourseById(courseId);
    const quizzes = await quizDao.findQuizzesForCourse(course.number);
    res.json(quizzes);
  });
  app.get('/api/quizzes/:qid', async (req, res) => {
    const { qid } = req.params;
    const quiz = await quizDao.findQuiz(qid);
    res.json(quiz);
  });
  app.post('/api/quizzes', async (req, res) => {
    const quiz = req.body;
    const course = await courseDao.findCourseById(quiz.course);
    const newQuiz = await quizDao.createQuiz({...quiz, course: course.number});
    res.json(newQuiz);
  });
  app.put('/api/quizzes/:qid', async (req, res) => {
    const { qid } = req.params;
    const quiz = req.body;
    const status = await quizDao.updateQuiz(qid, quiz);
    res.send(status);
  });
  app.delete('/api/quizzes/:qid', async (req, res) => {
    const { qid } = req.params;
    const status = await quizDao.deleteQuiz(qid);
    res.json(status);
  });
  app.put('/api/quizzes/answers/:qid', async (req, res) => {
    const { qid } = req.params;
    const answers = req.body;
    const q = await quizDao.findQuiz(qid);
    const quiz = await quizDao.gradeQuiz(qid, answers, q);
    res.json(quiz);
  });
}