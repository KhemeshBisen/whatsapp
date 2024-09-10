// Example of dynamically adding a message
document.querySelector('button').addEventListener('click', () => {
    const input = document.querySelector('input[type="text"]');
    const message = input.value;
    if (message.trim()) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message');
        messageContainer.innerText = message;
        document.querySelector('.messages').appendChild(messageContainer);
        input.value = '';
    }
});
