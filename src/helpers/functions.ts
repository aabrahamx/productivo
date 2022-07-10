export const getTodoObjTemplate = (
  title: string,
  details: string,
  tags: string
) => {
  const uniqueID = new Date().valueOf();
  return {
    id: uniqueID,
    title: title,
    description: details,
    tags: tags,
    status: 'todo',
  };
};
