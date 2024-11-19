import * as assignmentsDao from './dao.js';

export default function AssignmentRoutes(app) {
  app.post('/api/assignments', (req, res) => {
    const assignment = req.body;
    const newAssignment = assignmentsDao.createAssignment(assignment);
    res.send(newAssignment);
  });
  app.delete('/api/assignments/:assignmentId', (req, res) => {
    const { assignmentId } = req.params;
    assignmentsDao.deleteAssignment(assignmentId);
    res.sendStatus(204);
  });
  app.put('/api/assignments/:assignmentId', (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const updatedAssignment = assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
    res.send(updatedAssignment);
  });
  app.get('/api/assignments/:assignmentId', (req, res) => {
    const { assignmentId } = req.params;
    const assignment = assignmentsDao.findAssignment(assignmentId);
    res.json(assignment);
  });
  app.get('/api/assignments/course/:courseId', (req, res) => {
    const { courseId } = req.params;
    const assignments = assignmentsDao.findAssignmentsForCourse(courseId);
    res.json(assignments);
  });
}