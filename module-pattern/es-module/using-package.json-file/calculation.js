function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

const calculation = {
  add,
  sub,
  mul,
  div,
};

// module.exports = calculation;
export default calculation;
