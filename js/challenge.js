let count = 0;
let playing = true;

setInterval(() => {
    document.getElementById('counter').textContent = Math.floor(count)
    if (playing) count += 0.1;
}, 100)

document.getElementById('minus').addEventListener('click', () => {
    if (playing) count--;
})

document.getElementById('plus').addEventListener('click', () => {
    if (playing) count++;
})

document.getElementById('heart').addEventListener('click', () => {
    if (playing) {
        const curr = Math.floor(count)
        let li = document.getElementById(curr);

        if (li === null) {
            li = document.createElement('li')
            li.id = curr
            li.setAttribute('likes', 1)
        } else {
            li.setAttribute('likes', parseInt(li.getAttribute('likes')) + 1)
        }

        li.textContent = `${curr} has been liked ${parseInt(li.getAttribute('likes'))} times`
        document.querySelector('.likes').append(li)
    }
})

document.getElementById('submit').addEventListener('click', (event) => {
    event.preventDefault()
    if (playing) document.getElementById('list').append(
        document.getElementById('comment-input').value,
        document.createElement('br')
    )
})

const pause = document.getElementById('pause')


pause.addEventListener('click', () => {
    if (playing) {
        pause.textContent = 'resume'
        playing = false;
    } else {
        pause.textContent = 'pause'
        playing = true;
    }
})