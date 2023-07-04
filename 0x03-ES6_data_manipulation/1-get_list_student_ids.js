export default getListStudentIds = (getList) => {
  let data = [];
  if (!Array.isArray(getList)) {
    return data;
  }
  return getList.map((results) => results.id);
};
