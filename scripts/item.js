function validateName(name) {
  if (name === '') {
    throw new TypeError('name must not be blank');
  }
}
  
function create(name) {
  let newItem = {
    id:cuid(),
    name:name,
    checked:false
  };
  return newItem;
}

export default {
  validateName,
  create
};