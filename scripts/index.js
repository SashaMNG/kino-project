// скрипт
const cardTemplate = document.querySelector('#card-template').content;
const cardsList = document.querySelector('.content__card__list-all');

function createCard(card, deleteCard) {
    const cardElement = cardTemplate.querySelector('.content__card__item').cloneNode(true);
    
    const cardImage = cardElement.querySelector('.card__image');
    cardImage.src = card.link;
    cardImage.alt = card.name;
    
    const cardTitle = cardElement.querySelector('.card__title');
    cardTitle.textContent = card.name;
          
    const deleteButton = cardElement.querySelector('.card__delete-button');
    
    deleteButton.addEventListener('click', function(evt) {
        deleteCard(cardElement);
    })

    return cardElement;
}

function deleteCard (element) {
    element.remove();
}

initialCards.forEach(function(item) {
    cardsList.append(createCard(item, deleteCard));
})