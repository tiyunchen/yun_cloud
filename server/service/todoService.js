const createTodo = async (req, res, payload = {}) => {
  const data = await req.$models.Todo.create(payload);
  return data;
};

module.exports = {
  createTodo,
};
