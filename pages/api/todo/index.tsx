import Todo from "../../../models/Todo";
import Task from "../../../models/Task";

export default async function handler(req, res) {
  const {
    query: { user },
    method,
  } = req;

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const todos = await Todo.find({user}).populate('tasks');
        if (!todos) {
          return res.status(400).json({ success: false });
        } 
        res.status(200).json({ success: true, data: todos });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
