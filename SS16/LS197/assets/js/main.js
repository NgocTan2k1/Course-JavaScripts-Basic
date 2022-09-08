function toast({title = '', message = '', type = '', duration = 3000}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        //auto remove toast
        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        },duration + 1000);

        //remove toast by click
        toast.onclick = function (event) {
            if(event.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId );
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-exclamation',
        };
        const icon = icons[type];
        const delay = (duration/1000 ).toFixed(2)

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>

            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>

            <div class="toast__close">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
        `;
        main.appendChild(toast);

        
    }
}

function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Tôi đã thành công!!!',
        type: 'success',
        duration: 2000,
    });

}

function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Tôi đã thất bại!!',
        type: 'error',
        duration: 5000,
    });
}

function showWarningToast() {
    toast({
        title: 'Warning',
        message: 'Tôi nguy hiểm!!!',
        type: 'warning',
        duration: 5000,
    });

}

function showInfoToast() {
    toast({
        title: 'Info',
        message: 'Tôi không biết!!!',
        type: 'info',
        duration: 2000,
    });
}

