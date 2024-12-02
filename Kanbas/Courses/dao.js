import model from "./model.js";

export function findAllCourses() {
  return model.find();
}
export function findCoursesForEnrolledUser(userId) {
  return model.find({ students: userId });
}
export function createCourse(course) {
  delete course._id;
  return model.create(course);
}
export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
} 
export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, courseUpdates);
}
export function findCourseById(courseId) {
  return model.findOne({ _id: courseId });
}