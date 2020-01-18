// Services

const TaskService = {
  list() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  },
  search(task) {
    return JSON.parse(localStorage.getItem('tasks')).filter(loopTask => loopTask.toLowerCase().includes(task.toLowerCase())) || [];
  },
  create(tasks, task) {
    return localStorage.setItem('tasks', JSON.stringify([...tasks, task]));
  },
  delete(tasks, task) {
    return localStorage.setItem('tasks', JSON.stringify([...tasks.filter(loopTask => loopTask !== task)]));
  },
  clear() {
    return localStorage.removeItem('tasks');
  }
};

export default TaskService;
