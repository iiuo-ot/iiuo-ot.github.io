const searchInput = document.getElementById('toolSearch');
const dataList = document.getElementById('autocompleteList');

// Fetch Google autocomplete suggestions
searchInput.addEventListener('input', function () {
    const query = this.value.trim();
    if (!query) return;

    const script = document.createElement('script');
    script.src = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}&callback=handleSuggestions`;
    document.body.appendChild(script);
    script.remove();
});

function handleSuggestions(data) {
    const suggestions = data[1];
    dataList.innerHTML = '';
    suggestions.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        dataList.appendChild(option);
    });
}

// Handle Enter key or mobile "search" action
searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        const query = encodeURIComponent(this.value.trim());
        if (query) {
            window.open(`https://www.google.com/search?q=${query}+site%3Aot.itisuniqueofficial.com`, '_blank');
        }
    }
});
