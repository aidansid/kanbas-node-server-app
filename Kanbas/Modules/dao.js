import model from "./model.js";

export function findModulesForCourse(courseNumber) {
  return model.find({ course: courseNumber });
}
export function createModule(module) {
  delete module._id
  return model.create(module);
}
export function deleteModule(moduleId) {
  return model.deleteOne({ _id: moduleId });
}
export function updateModule(moduleId, moduleUpdates) {
  return model.updateOne({ _id: moduleId }, moduleUpdates);
}