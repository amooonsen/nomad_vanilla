const loginArea = document.querySelector('.login-area');
const button = document.querySelector('#submit-btn');
const form = document.querySelector('.login-form')
const userId = document.getElementById('user-id')
const heading = document.querySelector('.heading')
const main = document.getElementById('main')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const userNameArea = document.querySelector('.heading .user-data')
    const userNameValue = userId.value;
    const keepId = () => {
        localStorage.setItem('username', userNameValue)
        const userInfo = localStorage.getItem('username', userNameValue)
        const setUserId = document.querySelector('.todo-wrap .user-data')
        setUserId.textContent = userInfo
    }

    userNameArea.textContent = userNameValue;
    loginArea.style.opacity = 0;
    loginArea.classList.add('hidden')
    heading.classList.add('opacity1')
    heading.style.opacity = 1;
    setTimeout(() => {
        if (heading.style.opacity = 1) {
            heading.style.display = 'none';
            heading.style.position = 'absolute';
            heading.style.zIndex = -100;
            main.classList.remove('hidden')
        } else if(heading.className == 'opacity1'){
            heading.style.display == 'block'
        }
    }, 3000);
    keepId()
    
})

if (localStorage.getItem('username', userId.value) === null) {
    loginArea.classList.remove('hidden')
    main.classList.add('hidden')
} else {
    loginArea.classList.add('hidden')
    main.classList.remove('hidden')
}

