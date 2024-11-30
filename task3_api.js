const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');

button.addEventListener('click', getJoke);

function getJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(obj => {
        jokeText.innerHTML = obj.joke;
    })
    .catch(error => {
        jokeText.innerHTML = 'Failed to fetch a joke. Please try again later!';
        console.error('There has been a problem with your fetch operation:', error);
    });
}
