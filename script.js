async function fetchJoke() {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');;
    return res.json();
}

fetchJoke()
    .then((joke) => {
        console.log(joke);
        const setup = document.getElementById('getSetup');
        const punchline = document.getElementById('getPunchline');
        setup.textContent = joke.setup;
        punchline.textContent = joke.punchline;
    })

const button = document.getElementById('jokeBtn');
button.addEventListener('click', () => {
    fetchJoke()
        .then((joke) => {
            console.log(joke);
            const setup = document.getElementById('getSetup');
            const punchline = document.getElementById('getPunchline');
            setup.textContent = joke.setup;
            punchline.textContent = joke.punchline;
        })
});