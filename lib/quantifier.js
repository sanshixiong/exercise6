module.exports = function (str) {
  // TODO
  let reg = new RegExp(/^\d{1,}\.jpe{0,1}g$/);
  return reg.exec(str);
}