module.exports = function (str) {
  // TODO
  let reg = new RegExp(/\s*,\s*/,'g');
  return str.split(reg);
}