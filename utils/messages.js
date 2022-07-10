const moment = require('moment');
const msgs = [];
function formatMessage(username, text, userColor) {
  var msg = {
    username,
    text,
    time: moment().format('h:mm a'),
    color: userColor
  };
  msgs.push(msg);
  return msg;
}

function getmessages() {
  return msgs;
}

module.exports = {formatMessage, getmessages};
