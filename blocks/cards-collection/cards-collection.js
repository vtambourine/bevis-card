var cardsCollection = document.getElementsByClassName('cards-collection').item(0);
var cards = cardsCollection.children;
var i = cards.length;
while (i--) {
    var card = cards.item(i);
    (function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('_visible');
            var nextCard = card.nextElementSibling;
            if (nextCard) {
                nextCard.classList.toggle('_visible');
            } else {
                cards.item(0).classList.toggle('_visible');
            }
        })
    })(card);
}