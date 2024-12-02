import * as assignmentsDao from './dao.js';
import * as courseDao from '../Courses/dao.js';

export default function AssignmentRoutes(app) {
  app.post('/api/assignments', async (req, res) => {
    const assignment = req.body;
    const course = await courseDao.findCourseById(assignment.course);
    const newAssignment = await assignmentsDao.createAssignment({...assignment, course: course.number});
    res.send(newAssignment);
  });
  app.delete('/api/assignments/:assignmentId', async (req, res) => {
    const { assignmentId } = req.params;
    await assignmentsDao.deleteAssignment(assignmentId);
    res.sendStatus(204);
  });
  app.put('/api/assignments/:assignmentId', async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const updatedAssignment = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(updatedAssignment);
  });
  app.get('/api/assignments/:assignmentId', async (req, res) => {
    const { assignmentId } = req.params;
    const assignment = await assignmentsDao.findAssignment(assignmentId);
    res.json(assignment);
  });
  app.get('/api/assignments/course/:courseId', async (req, res) => {
    const { courseId } = req.params;
    const course = await courseDao.findCourseById(courseId);
    const assignments = await assignmentsDao.findAssignmentsForCourse(course.number);
    res.json(assignments);
  });
}