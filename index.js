const moment = require('moment');

module.exports = {
    date: (number, increment) => {
        const method = number < 0 ? "subtract": "add";
        const num = Math.abs(number);
        return moment()[method](num || 0, increment || 'days')
            .format("DD-MM-YYYY");
    }
}
