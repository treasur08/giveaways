document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('ok-button').addEventListener('click', handleOkButtonClick);
});

let progress = localStorage.getItem('progress') ? parseInt(localStorage.getItem('progress')) : 0;
document.getElementById('progress-bar-fill').style.width = progress + '%';
document.getElementById('progress-bar-fill').textContent = progress + '%';


function handleOkButtonClick() {
    document.getElementById('initial-message').style.display = 'none';
    document.getElementById('account-details').style.display = 'block';
}

function submitAccountDetails() {
    const accountName = document.getElementById('account-name').value;
    const accountNumber = document.getElementById('account-number').value;
    const bankName = document.getElementById('bank-name').value;

    // Validate that all fields are filled
    if (accountName.trim() === '' || accountNumber.trim() === '' || bankName.trim() === '') {
        alert('Please fill in all fields.');
        return; // Stop execution if any field is empty
    }

    // Validate account number (must be exactly 10 digits)
    if (accountNumber.length !== 10 || isNaN(accountNumber)) {
        alert('Invalid Account number! Must be 10 digits.');
        return; // Stop execution if the account number is invalid
    }

    // If all validations pass, proceed with submission
    alert('Account details submitted!');
    document.getElementById('account-details').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
}

function resetLocalStorage() {
    localStorage.clear();
    document.getElementById('progress-bar-fill').style.width = '0%';
    document.getElementById('progress-bar-fill').textContent = '0%';
}

function share() {
    let progress = localStorage.getItem('progress') ? parseInt(localStorage.getItem('progress')) : 0;
    if (progress < 100) {
        progress += 10;
        if (progress > 100) progress = 100;
        document.getElementById('progress-bar-fill').style.width = progress + '%';
        document.getElementById('progress-bar-fill').textContent = progress + '%';
        localStorage.setItem('progress', progress);
    }
    window.open("https://api.whatsapp.com/send?text=Check out this awesome promotion. $2000 giveaway now on this website. Check it out: [link]", "_blank");
    if (progress === 100) {
        showFinalMessage();
    }
}

function showFinalMessage() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('final-message').style.display = 'block';
}

function completeRegistration() {
    window.open("https://t.me/giveaway_who", "_blank");
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


// Simulate adding random comments
function addRandomComment() {
    const commentsArray = [
        {
            profilePic: 'img/emptygir.jpg',
            comment: 'I love your updates please bring more!!'
        },
        {
            profilePic: 'img/emptyman.png',
            comment: 'I have received my $200 thank you so much I appreciate it!'
        },
        {
            profilePic: 'img/emptyman.png',
            comment: 'Just received my $200 payout from this platform! It’s legit guys, don’t miss out. #happydance'
        },
        {
            profilePic: 'img/emptyman.png',
            comment: 'Can confirm, got my $200 in my account! Join now and start earning too.'
        },
        {
            profilePic: 'img/emptygir.jpg',
            comment: 'Another awesome withdrawal received thank you!'
        },
        {
            profilePic: 'img/emptygir.jpg',
            comment: 'This is a paying platform!'
        },
        {
            profilePic: 'img/emptygir.jpg',
            comment: 'Can’t believe it was this easy! Just got my $200 payment. Join now and start earning.'
        }
    ];

    const randomIndex = Math.floor(Math.random() * commentsArray.length);
    const randomComment = commentsArray[randomIndex];

    const commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerHTML = `
        <img src="${randomComment.profilePic}" alt="Profile Pic" class="comment-img">
        <p>${randomComment.comment}</p>
        <div class="comment-info">
            <span class="comment-time">2m</span>
            <span>·</span>
            <span>Like</span>
            <span>·</span>
            <span>Reply</span>
        </div>
    `;

    document.querySelector('.comments').appendChild(commentElement);
}

setInterval(addRandomComment, 12000); // Add a random comment every 12 seconds

const commentsCountElement = document.getElementById('commentsCount');
const sharesCountElement = document.getElementById('sharesCount');
let commentsCount = 32000;
let sharesCount = 20000;

function updateCommentShareCount() {
    commentsCount += Math.floor(Math.random() * 5) + 1;
    sharesCount += Math.floor(Math.random() * 5) + 1;
    commentsCountElement.textContent = commentsCount.toLocaleString();
    sharesCountElement.textContent = sharesCount.toLocaleString();
}

setInterval(updateCommentShareCount, 5000); // Update comment and share counts every 12 seconds
