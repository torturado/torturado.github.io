document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    menuBtn.addEventListener('click', function() {
        if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    });

    // Función para mostrar la modal
    function showModal(title, text) {
        modalTitle.textContent = title;
        modalText.textContent = text;
        modal.style.display = 'block';
    }

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    dropdownMenu.addEventListener('click', function(e) {
        if (e.target.classList.contains('menu-item')) {
            switch (e.target.innerText) {
                case 'Servicios':
                    showModal('Servicios', 'Aquí encontrarás todos nuestros servicios...');
                    break;
                case 'Sobre nosotros':
                    showModal('Sobre nosotros', 'Somos una empresa líder en el mercado...');
                    break;
                case 'Contáctenos':
                    showModal('Contáctenos', 'Para contactarnos, puedes llamarnos o enviarnos un correo...');
                    break;
            }
            dropdownMenu.style.display = 'none'; // Cerrar el menú
        }
    });
});
