import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: String,
    course: String,
    description: String,
    points: Number,
    startDate: Date,
    dueDate: Date,
  },
  { collection: "assignments" }
);
export default assignmentSchema;