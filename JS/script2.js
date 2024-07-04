// Sélectionne les éléments img
const images = document.querySelectorAll('img');

// Ajoute un écouteur d'événement pour les clics sur les images
images.forEach((image) => {
  image.addEventListener('click', () => {
    // Affiche une fenêtre modale avec l'image
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;
    document.body.appendChild(modal);

    // Ajoute un bouton de fermeture à la fenêtre modale
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fermer';
    closeButton.addEventListener('click', () => {
      modal.remove();
    });
    modal.appendChild(closeButton);
  });
});