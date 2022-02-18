// build your `Project` model here
const db = require ('../../data/dbConfig');

async function find () {
  const projects = await db ('projects');
  projects.forEach (project => {
    if (project.project_completed === 1) {
      project.project_completed = true;
    } else {
      project.project_completed = false;
    }
  });
  return projects;
}

async function createProject (project) {
  const [project_id] = await db ('projects').insert (project);
  const newProject = await getById (project_id);
  if (newProject.project_completed === 1) {
    newProject.project_completed = true;
  } else {
    newProject.project_completed = false;
  }
  return newProject;
}

async function getById (project_id) {
  const [project] = await db ('projects').where ('project_id', project_id);
  return project;
}

module.exports = {
  find,
  createProject,
};
