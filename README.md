# start-date

Returns the current date or a date prior or after the current date in
DD-MM-YYYY format.

## Install

```
npm install --save start-date
```

## Usage

```
const date = require('start-date');

date();
// today's date (eg. 01-05-2017)

date(-3);
//Three days ago (eg. 25-04-2017)

date(3);
//Three days in the future (eg. 04-05-2017)
```

## License

MIT
