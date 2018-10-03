module.exports.add = (a, b) => a + b;
module.exports.square = (a) => a * a;
module.exports.setName = (obj, name) => (Object.assign(obj, { name: name}));

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

module.exports.asyncSquare = (a, callback) => {
  setTimeout(() => {
    callback(a * a);
  }, 1000);
};