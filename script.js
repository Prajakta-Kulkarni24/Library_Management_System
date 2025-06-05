 // Add event listener to nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        console.log(`Link clicked: ${link.textContent}`);
    });
});

// Add event listener to search form
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const searchValue = document.querySelector('input[type="search"]').value;
    console.log(`Searching for: ${searchValue}`);
});
