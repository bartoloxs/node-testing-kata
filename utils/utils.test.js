const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  const res = utils.add(33, 1);

  expect(res).toBe(34).toBeA('number');
});

it('should square the numbers', () => {
  const res = utils.square(2);

  expect(res).toBe(4).toBeA('number');
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should async square the number', (done) => {
  utils.asyncSquare(4, (sum) => {
    expect(sum).toBe(16).toBeA('number');
    done();
  });
});

it('should verify name', () => {
  expect(utils.setName({}, 'Carlos')).toInclude({name: 'Carlos'});
});