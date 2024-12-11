// Function to shuffle the card positions
function shuffleCards() {
    const cards = document.querySelectorAll('.card');
    const container = document.querySelector('.student-cards');
    const cardArray = Array.from(cards);

    // Shuffle the cards
    cardArray.sort(() => Math.random() - 0.5);

    // Remove the current cards from the DOM
    cardArray.forEach(card => container.removeChild(card));

    // Append them back in their new order
    cardArray.forEach(card => container.appendChild(card));
}

// Call the shuffle function when the page loads
window.onload = shuffleCards;