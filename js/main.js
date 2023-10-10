function loginUser() {
  const email = document.getElementById('emailInput').value;
  const password = document.getElementById('passwordInput').value;
  const loginError = document.getElementById('loginError');

  if (email.trim() === '' || password.trim() === '') {
    loginError.textContent = 'Both email and password are required!';
    return;
  }

  // Here you'd typically authenticate the user, but for this mockup, we'll assume login success if fields are filled.
  document.getElementById('loginSection').style.display = 'none';
  document.getElementById('talksSection').style.display = 'block';
  loadTalks(); // Load the talks when user logs in
}

function loadTalks() {
  // Normally you'd fetch this data from a backend, but for simplicity, we're using a mock list
  const talks = [
    { title: 'Talk 1', description: 'This is talk 1' },
    { title: 'Talk 2', description: 'This is talk 2' },
  ];

  const talksList = document.getElementById('talksList');
  talksList.innerHTML = '';

  talks.forEach((talk) => {
    const listItem = document.createElement('li');
    listItem.textContent = talk.title;
    listItem.onclick = function () {
      showDiscussion(talk);
    };
    talksList.appendChild(listItem);
  });
}

function showDiscussion(talk) {
  document.getElementById('selectedTalkTitle').textContent = talk.title;
  document.getElementById('discussionSection').style.display = 'block';
}

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;
  if (message.trim() !== '') {
    const messagesDiv = document.getElementById('messages');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    messageInput.value = '';
  }
}

function showCreateTalkForm() {
  document.getElementById('newTalkForm').style.display = 'block';
}

function createTalk() {
  const titleInput = document.getElementById('talkTitle').value;
  const descriptionInput = document.getElementById('talkDescription').value;

  if (titleInput.trim() !== '' && descriptionInput.trim() !== '') {
    // Normally, you'd send this to your backend to create a talk. For now, just log it.
    console.log(
      'Creating talk with title:',
      titleInput,
      'and description:',
      descriptionInput
    );
    loadTalks(); // Refresh the talks list
    document.getElementById('newTalkForm').style.display = 'none'; // Hide the form
  }
}
