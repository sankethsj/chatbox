var randomColor = require('randomcolor');

const users = [];
const rooms = ['thecrazybox','thememebox']
// Join user to chat
function userJoin(id, username, room) {
  
  var color = randomColor({luminosity: 'bright'});
  const user = { id, username, room, color };

  if (!rooms.includes(room)){
    return [false, `${room} box doesn't exists`];
  }
  const index = users.find(user => user.username === username);

  if (index) {
    return [false, `Oops !! Username '${username}' already taken!`];
  } else {
    users.push(user);
  }
  return [true, user];
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};
