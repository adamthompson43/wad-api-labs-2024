import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title:  String,
  description:  String ,
  deadline: Date,
    done: Boolean,
    priority: {type: String, enum: ["Low","Medium","High"]},
    created_at: Date,
    updated_at: Date
});

mongoose.connect('mongodb://localhost:27017/your-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.error('Database connection error:', err);
});

export default mongoose.model('Task', TaskSchema);