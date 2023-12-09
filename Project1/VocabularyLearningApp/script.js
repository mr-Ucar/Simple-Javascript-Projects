function addWord() {
    // Get the word and meaning from input fields
    var word = document.getElementById('word').value;
    var meaning = document.getElementById('meaning').value;

    // Check if both fields are filled
    if (word && meaning) {
        // Create a new list item
        var listItem = document.createElement('li');
        listItem.textContent = `${word}: ${meaning}`;

        // Add the new item to the word list
        document.getElementById('wordList').appendChild(listItem);

        // Clear input fields
        document.getElementById('word').value = '';
        document.getElementById('meaning').value = '';
    } else {
        alert('Please enter both word and meaning.');
    }
}
