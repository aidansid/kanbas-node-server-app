import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: String,
    course: String,
    description: String,
    published: {
      type: Boolean,
      default: false,
    },
    quizType: {
      type: String,
      enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
      default: "Graded Quiz"
    },
    points: {
      type: Number,
      min: 0,
    },
    assignmentGroup: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Project"],
      default: "Quizzes"
    },
    shuffleAnswers: {
      type: Boolean,
      default: true
    },
    timeLimit: {
      type: Number,
      min: 0,
      default: 20
    },
    multipleAttempts: {
      type: Boolean,
      default: false
    },
    howManyAttempts: {
      type: Number,
      min: 0,
      default: 1
    },
    showCorrectAnswers: Boolean,
    accessCode: String,
    oneQuestionAtATime: {
      type: Boolean,
      default: true
    },
    webcamRequired: {
      type: Boolean,
      default: false
    },
    lockQuestionsAfterAnswering: {
      type: Boolean,
      default: false
    },
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
    questions: {
      type: [
        {
          title: String,
          question: String,
          type: {
            type: String,
            enum: ["Multiple Choice", "True False", "Fill in the Blank"]
          },
          answers: [String],
          correctAnswers: [String],
          points: {
            type: Number,
            min: 0
          }
        }
      ],
      default: []
    },
    attempts: {
      type: [
        {
          time: Date,
          user: String,
          answers: [String],
          score: {
            type: Number,
            min: 0
          },
          attemptsRemaining: {
            type: Number,
            min: 0
          },
        }
      ],
      default: []
    }
  },
  { collection: "quizzes" }
);
export default quizSchema;