const createRandomNumber = () => Math.ceil(Math.random(100) * 100);

const createTodoTemplate = (todoName) => ({
  id: createRandomNumber(),
  isDone: false,
  value: todoName,
});

export default createTodoTemplate;
