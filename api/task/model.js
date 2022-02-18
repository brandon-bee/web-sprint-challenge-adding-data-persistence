// build your `Task` model here
const db = require ('../../data/dbConfig.js');

async function find () {
  const tasks = await db ('tasks as t')
    .leftJoin ('projects as p', 'p.project_id', 't.project_id')
    .select (
      'task_id',
      'task_description',
      'task_notes',
      'task_completed',
      'project_name',
      'project_description'
    );
  tasks.map (task => {
    if (task.task_completed === 1) {
      task.task_completed = true;
    } else task.task_completed = false;
  });
  return tasks;
}

async function createTask (task) {
  const [task_id] = await db ('tasks').insert (task);
  const newTask = await getByID (task_id);
  if (newTask.task_completed === 1) {
    newTask.task_completed = true;
  } else {
    newTask.task_completed = false;
  }
  return newTask;
}

async function getByID (task_id) {
  const [task] = await db ('tasks as t')
    .leftJoin ('projects as p', 'p.project_id', 't.project_id')
    .select (
      'task_id',
      'task_description',
      'task_notes',
      'task_completed',
      'project_name',
      'project_description'
    )
    .where ('task_id', task_id);
  return task;
}

module.exports = {
  find,
  createTask,
};
