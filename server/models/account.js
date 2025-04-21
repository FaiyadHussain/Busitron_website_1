const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["superadmin", "admin"],
    default: "admin",
    index: true,
  },
});

adminSchema.index({ email: 1, role: 1 });

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
