module.exports = function (str) {
  // TODO
  let reg = new RegExp(/\.$/);
  return reg.exec(str);
}