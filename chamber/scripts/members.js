const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// Set the default view to grid
showGrid();

gridbutton.addEventListener("click", showGrid);
listbutton.addEventListener("click", showList);

async function fetchMembersData() {
  try {
    const response = await fetch('data/members.json'); // Assuming the JSON file is in the 'data' folder
    const data = await response.json();
    return data.companies;
  } catch (error) {
    console.error('Error fetching members data:', error);
    return [];
  }
}

function generateGridHTML(members) {
  return members.map(member => `
    <section>
      <img src="${member.image}" alt="${member.name}" />
      <h3>${member.name}</h3>
      <p>Address: ${member.address}</p>
      <p>Phone: ${member.phone}</p>
      <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p>Membership Level: ${member.membership_level}</p>
      <p>Other Information: ${member.other_info}</p>
    </section>
  `).join('');
}

function generateListHTML(members) {
  return members.map(member => `
    <section>
      <h3>${member.name}</h3>
      <p>Address: ${member.address}</p>
      <p>Phone: ${member.phone}</p>
      <p>Website: <a href="${member.website}" target="_blank">${member.website}</a></p>
      <p>Membership Level: ${member.membership_level}</p>
      <p>Other Information: ${member.other_info}</p>
    </section>
  `).join('');
}

async function showGrid() {
  const members = await fetchMembersData();
  display.innerHTML = generateGridHTML(members);

  // Add 'active' class to the grid button and remove it from the list button
  gridbutton.classList.add("active");
  listbutton.classList.remove("active");
}

async function showList() {
  const members = await fetchMembersData();
  display.innerHTML = generateListHTML(members);

  // Add 'active' class to the list button and remove it from the grid button
  listbutton.classList.add("active");
  gridbutton.classList.remove("active");
}