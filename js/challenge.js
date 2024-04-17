document.addEventListener('DOMContentLoaded', function() {
    // Timer functionality
    let timerValue = 0;
    const timerDisplay = document.getElementById('timer');
    const timerInterval = setInterval(function() {
      timerValue++;
      timerDisplay.textContent = timerValue;
    }, 1000);
  
    // Counter functionality
    let counterValue = 0;
    const counterDisplay = document.getElementById('counter');
    const plusButton = document.getElementById('plus');
    const minusButton = document.getElementById('minus');
    plusButton.addEventListener('click', function() {
      counterValue++;
      counterDisplay.textContent = counterValue;
    });
    minusButton.addEventListener('click', function() {
      counterValue--;
      counterDisplay.textContent = counterValue;
    });
  
    // Like functionality
    const likeButton = document.getElementById('like');
    const likesDisplay = document.getElementById('likes');
    let likesCount = 0;
    likeButton.addEventListener('click', function() {
      likesCount++;
      likesDisplay.textContent = likesCount;
    });
  
    // Pause and Resume functionality
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');
    pauseButton.addEventListener('click', function() {
      clearInterval(timerInterval);
      plusButton.disabled = true;
      minusButton.disabled = true;
      likeButton.disabled = true;
      pauseButton.disabled = true;
      resumeButton.disabled = false;
      pauseButton.textContent = "Resume";
    });
    resumeButton.addEventListener('click', function() {
      timerInterval = setInterval(function() {
        timerValue++;
        timerDisplay.textContent = timerValue;
      }, 1000);
      plusButton.disabled = false;
      minusButton.disabled = false;
      likeButton.disabled = false;
      pauseButton.disabled = false;
      resumeButton.disabled = true;
      pauseButton.textContent = "Pause";
    });
  
    // Comments functionality
    const commentInput = document.getElementById('comment-input');
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');
    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const commentText = commentInput.value;
      const commentItem = document.createElement('li');
      commentItem.textContent = commentText;
      commentsList.appendChild(commentItem);
      commentInput.value = '';
    });
  });
  