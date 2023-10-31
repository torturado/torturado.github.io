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
                    showModal('Servicios', 'n HotMouse, nos enorgullece ofrecer una amplia variedad de ratones de ordenador calefactables para satisfacer todas tus necesidades. Desde modelos básicos hasta opciones más avanzadas, tenemos todo lo que necesitas para trabajar cómodamente durante horas. Además, todos nuestros productos vienen con una garantía de satisfacción del 100%, por lo que puedes comprar con confianza.');
                    break;
                case 'Sobre nosotros':
                    showModal('Sobre nosotros', 'En HotMouse, estamos comprometidos a proporcionar ratones de ordenador calefactables de alta calidad que te permitan trabajar cómodamente durante horas. Nuestros productos están diseñados pensando en ti, y nos aseguramos de que cada uno de ellos cumpla con los más altos estándares de calidad. Además, nuestro equipo de atención al cliente está siempre disponible para ayudarte con cualquier pregunta o problema que puedas tener.');
                    break;
                case 'Contáctenos':
                    showModal('Contáctenos', 'Si tienes alguna pregunta o comentario sobre nuestros productos, no dudes en ponerte en contacto con nosotros. Puedes enviarnos un correo electrónico a info@hotmouse.com o llamarnos al +34 894. También puedes visitar nuestra tienda física en 123 Main Street, Anytown, USA.');
                    break;
            }
            dropdownMenu.style.display = 'none'; // Cerrar el menú
        }
    });
});
