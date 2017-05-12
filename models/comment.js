import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  title: { type: String, require: true },
  createBy: { type: Schema.Types.ObjectId, ref: 'Users' },
  postId: { type: Schema.Types.ObjectId, ref: 'Post'},
  createAt: { type: Date, default: Date.now }
})

const Comment = mongoose.model('Comment', CommentSchema)

export default Comment
