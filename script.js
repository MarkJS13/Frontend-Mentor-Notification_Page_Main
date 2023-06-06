const notifications = document.querySelectorAll('.notif-tiles');
const notifCount = document.querySelector('header .notification h2');
const markAsRead = document.querySelector('header .mark-as-read');
//const redDot = document.querySelectorAll('.red-dot');



let notif_number = 7;

markAsRead.addEventListener('click', () => {
    if (notif_number !== 0) {
        notif_number = 0;
        notifCount.textContent = notif_number;
    }

    notifications.forEach(notifs => {
        notifs.classList.add('visited-notif');
    })

    const redDot = document.querySelectorAll('.red-dot');
    redDot.forEach(red => {
        red.style.display = 'none';
    })
})


notifications.forEach(notif => {
    notif.addEventListener('click', e => {
        if(e.target.classList.contains('notif-tiles') && !e.target.classList.contains('visited-notif')) {
            e.target.classList.add('visited-notif');
            const redDot = notif.querySelector('.red-dot');
            redDot.style.display = 'none';

            if(notif_number > 0) {
                notif_number--;
                notifCount.textContent = notif_number;
            }
        }
    })
})

