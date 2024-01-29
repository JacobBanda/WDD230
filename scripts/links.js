// Define baseURL and linksURL
const baseURL = "https://jacobbanda.github.io/wdd230/";
const linksURL = "https://jacobbanda.github.io/wdd230/data/links.json";
const cards = document.querySelector('#cards');


// Asynchronous function to get links data
async function getLinks() {
  try {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data); // Call the displayLinks function
  } catch (error) {
    console.error("Error fetching links data:", error);
  }
}

// Call getLinks to test
getLinks();


// Function to display links
function displayLinks(weeks) {
  const cardsSection = document.querySelector('#cards');

  weeks.forEach(week => {
    const listItem = document.createElement('li');
    const linksArray = week.links.map(link => `[<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.title}</a>]`);

    listItem.innerHTML = `${week.week}: ${linksArray.join(' - ')}`;

    cardsSection.appendChild(listItem);
  });
}