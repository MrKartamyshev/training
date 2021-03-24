
function copyObj(user) {
  let copiedObj = JSON.parse(JSON.stringify(user));// копирует обект и записывает в новый 
  return copiedObj;
}
