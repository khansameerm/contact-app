import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add the contact name"],
    },
    email: {
      type: String,
      required: [true, "Please add the contact email"],
    },
    phone: {
      type: String,
      required: [true, "Please add the contact phone"],
    },
  },
  {
    timestamps: true,
  }
);

// Create model from schema
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
