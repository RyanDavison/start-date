const chai = require('chai');
const moment = require('moment');
const expect = chai.expect;
const start = require('../index.js');

describe(`start-date`, function(){
    it(`date() should return today's date when nothing is passed to the
        module`, function(){
            const today = moment().subtract(0, 'days').format("DD-MM-YYYY");
            expect(start.date()).to.equal(today);
        });

    it(`date() should return yesterday's date when -1 is passed to the
        module`, function(){
            const yesterday = moment().subtract(1, 'days').format("DD-MM-YYYY");
            expect(start.date(-1)).to.equal(yesterday);
        });

    it(`date should return tomorrow's date when 1 is passed to the
        module`, function(){
            const tomorrow = moment().add(1, 'days').format("DD-MM-YYYY");
            expect(start.date(1)).to.equal(tomorrow);
        });

    it(`date should return a date one year ago when -1 and "years" are passed`,
        function(){
            const yearAgo = moment().subtract(1, 'years').format("DD-MM-YYYY");
            expect(start.date(-1, "years")).to.equal(yearAgo);
        });

    it(`date should return a date one month in the future when 1 and "months"
        are passed`, function(){
            const monthLater = moment().add(1, 'months').format("DD-MM-YYYY");
            expect(start.date(1, "months")).to.equal(monthLater);
        });
});
