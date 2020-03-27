import { Mongoose } from 'mongoose';

const require = 'mongoose';

const UserSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    date: Date,
    default: date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
