import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const passwordValidator = {
    validator: function (value) {
      return passwordRegex.test(value);
    },
    message: 'Password must be at least 8 characters long and contain at least one letter, one digit, and one special character.',
  };

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true, validate: passwordValidator }
});

export default mongoose.model('User', UserSchema);
