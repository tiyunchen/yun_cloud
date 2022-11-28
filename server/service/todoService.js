const createTodo = async (req, res, payload = {}) => {
  const data = await req.$models.Todo.create({
    ...payload,
    endTime: new Date(payload.endTime),
  });
  return data;
};

module.exports = {
  createTodo,
};
