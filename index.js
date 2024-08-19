let currentQuestion = 1;

        function nextQuestion() {
            document.getElementById(`question${currentQuestion}`).classList.remove('active');
            currentQuestion++;
            if (currentQuestion > 5) {
                window.location.href = 'index.html'; // Replace with the actual path to the second page
            } else {
                document.getElementById(`question${currentQuestion}`).classList.add('active');
            }
        }


function addComment() {
    var commentInput = document.getElementById('commentInput');
    var commentText = commentInput.value;
    var commentsContainer = document.getElementById('commentsContainer');
    var nameText = "User"; // Replace this with the actual user name, if available.

    if (commentText !== '') {
        // Create a new comment element
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
            <img src="img/dudee.jpg" alt="User Image" width="50" height="50">
            <p><strong>${nameText}:</strong> ${commentText}</p>
            <div class="comment-info">
                <span class="comment-time">Just now</span>
                <span>·</span>
                <span>Like</span>
                <span>·</span>
                <span>Reply</span>
            </div>
        `;
        
        // Append the new comment to the comments container
        commentsContainer.appendChild(newComment);
        
        // Clear the input and replace with "Comment Added!"
        commentInput.value = 'Comment Added!';
        
        // Optionally, you can disable the textarea temporarily if needed
        commentInput.disabled = true;

        // Re-enable and clear the textarea after a brief period (optional)
        setTimeout(function() {
            commentInput.value = '';
            commentInput.disabled = false;
        }, 2000); // Change 2000 to the desired delay (in milliseconds)
    } else {
        alert('Please enter a comment.');
    }
}
