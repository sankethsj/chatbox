const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('box-name');
const userList = document.getElementById('users');
const input_box = document.getElementById("msg");

// Get username and room from URL
function getQueryParam(param) {
  var query = window.location.search.substring(1);
  var params = query.split('&');

  for(var i=0; i < params.length; i++){
    var pair = params[i].split('=');
    if (decodeURIComponent(pair[0]) === param){
      return decodeURIComponent(pair[1]);
    } else {
      console.log(`Query ${param} not found`);
    }
  }
}

const username = getQueryParam('username');
const room = getQueryParam('room');
const socket = io();

// Join chatroom
socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

// Message from server
socket.on('message', (message) => {
  outputMessage(message);
  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Bring input box into view
input_box.addEventListener('click', (e) => {
  input_box.scrollIntoView();
})


// Message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get message text
  let msg = e.target.elements.msg.value;

  msg = msg.trim();

  if (!msg) {
    return false;
  }

  // Emit message to server
  socket.emit('chatMessage', msg);

  // Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

// Output message to DOM
const savedusername = localStorage.getItem('username');

function outputMessage(message) {
  const wrap = document.createElement('div');
  wrap.classList.add('message-wrapper');
  const div = document.createElement('div');
  div.classList.add('message');
  const p = document.createElement('p');
  p.classList.add('meta');
  p.innerText = message.username;
  p.innerHTML += `<span>${message.time}</span>`;
  p.style.color = message.color;
  
  div.appendChild(p);
  const para = document.createElement('p');
  para.classList.add('text');
  para.innerText = message.text;
  div.appendChild(para);
  wrap.appendChild(div)
  document.querySelector('.chat-messages').appendChild(wrap);
  if(message.username == username){ 
    wrap.style.justifyContent = 'flex-end';
  }
}

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.innerText = user.username;
    li.style.color = user.color
    if (user.username === username){
      li.style.fontWeight = 'bold'
    }
    userList.appendChild(li);
  });
}

//Prompt the user before leave chat room
document.getElementById('leave-btn').addEventListener('click', () => {
  const leaveRoom = confirm(`Are you sure you want to leave the ${room} box ?`);
  if (leaveRoom) {
    window.location = '../index.html';
  } else {
  }
});
