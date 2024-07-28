const moment = require('moment')

function formatMessages(username, text) {
    return {
        username,
        text,
        time: moment().format('YYYY-MM-DD HH:mm:ss')
    }
}

module.exports=formatMessages