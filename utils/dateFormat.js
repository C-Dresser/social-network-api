const moment = require('moment');

function formatDate(date) {
    // Format the date using Moment.js
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

module.exports = { formatDate };
