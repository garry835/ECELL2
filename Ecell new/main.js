document.getElementById('review-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const reviewText = document.getElementById('review-text').value;
    if (reviewText) {
        const reviewContainer = document.getElementById('reviews-container');
        const newReview = document.createElement('p');
        newReview.textContent = reviewText;
        reviewContainer.appendChild(newReview);

        document.getElementById('review-text').value = '';  
    } else {
        alert('Please write a review before submitting!');
    }
});
