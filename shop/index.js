const modal_container = document.getElementById('modal_container');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.articleCard').forEach(article => {
    article.onclick = function () {
        modal_container.classList.add('show');
    }
});

closeModal.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

document.getElementById('goToCart').addEventListener('click', () => {
    window.location.href = "../cart/index.html";
})