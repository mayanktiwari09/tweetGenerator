// Define the path to your CSV file
const csvFilePath = 'tweets.csv';

// Function to display a random row from the CSV file
function displayRandomRow() {
  fetch(csvFilePath)
    .then(response => response.text())
    .then(data => {
      const rows = data.split('\n');
      const randomIndex = Math.floor(Math.random() * rows.length);
      const randomRow = rows[randomIndex];

      document.getElementById('output').innerText = randomRow;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

