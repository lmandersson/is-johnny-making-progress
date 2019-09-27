require('chai').should();

const progressDays = require('./index.js');


describe('Calculate the number of progress days', function () {

  it('Should return the number of progress days', function () {
    progressDays([]).should.eql(0);
    progressDays([3, 4, 1, 2]).should.eql(2);
    progressDays([10, 11, 12, 9, 10]).should.eql(3);
    progressDays([12, 11, 10, 12, 11, 13]).should.eql(2);
  });

  it('Should not count the same distance run on 2 consecutive Saturdays as a progress day', function () {
    progressDays([9, 9]).should.eql(0);
  });
})
