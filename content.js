// Make the stream-post-wrapper__post element 100% width
const streamPostWrapper = document.querySelector('.stream-post-wrapper__post');
if (streamPostWrapper) {
    streamPostWrapper.style.width = '100%';
    streamPostWrapper.style.maxWidth = 'none';
}

// Remove the live-chat-block element
const liveChatBlock = document.querySelector('#live-chat-block') || document.querySelector('.sidebar');
if (liveChatBlock) {
    liveChatBlock.remove();
}
