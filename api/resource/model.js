// build your `Resource` model here
const db = require ('../../data/dbConfig');

async function find () {
  const resources = await db ('resources');
  return resources;
}

async function createResource (resource) {
  const [resource_id] = await db ('resources').insert (resource);
  const newResource = await getById (resource_id);
  return newResource;
}

async function getById (resource_id) {
  const [resource] = await db ('resources').where ('resource_id', resource_id);
  return resource;
}

module.exports = {
  find,
  createResource,
};
