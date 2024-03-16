import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { nanoid } from 'nanoid';
//import { taskList } from '../server_86/data';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

let taskList = [
  { id: nanoid(), title: 'Do w1 assignment', isDone: false },
  { id: nanoid(), title: 'Do w2 assignment', isDone: false },
  { id: nanoid(), title: 'Do w3 assignment', isDone: false },
  { id: nanoid(), title: 'Do w4 assignment', isDone: false },
];

app.get('/', (req, res) => {
  res.send('Hello from server...');
});

app.get('/api/tasks', (req, res) => {
  res.json({ taskList });
});

const port = process.env.PORT || 5000;
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ msg: 'please provide title' });
  }
  const newTask = { id: nanoid(), title, isDone: false };
  taskList = [...taskList, newTask];
  res.json({ task: newTask });
});

const startApp = () => {
  try {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {}
};

startApp();
