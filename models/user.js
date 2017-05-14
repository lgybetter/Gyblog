import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UsersSchema = new Schema({
  name: { type: String, unique: true, required: true },
  phone: { type: String, unique: true },
  introduction: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  createAt: { type: Date, default: Date.now() }
})

const Users = mongoose.model('Users', UsersSchema)

export default Users