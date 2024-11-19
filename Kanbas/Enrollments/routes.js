import * as enrollmentsDao from "./dao.js";

export default function EnrollmentRoutes(app) {
  app.post("/api/enrollments/enroll", (req, res) => {
    const { userId, courseId } = req.body;
    enrollmentsDao.enrollUserInCourse(userId, courseId);
    res.sendStatus(201);
  });
  app.delete("/api/enrollments/unenroll/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    enrollmentsDao.unenrollUserFromCourse(userId, courseId);
    res.sendStatus(204);
  });
}