/* Imports */
import { getTeams } from './fetch-utils.js';
import { renderTeams } from './render-utils.js';

/* Get DOM Elements */
const listEl = document.getElementById('list-container');

/* State */
let teamArray = [];

/* Events */
window.addEventListener('load', async () => {
    const teams = await getTeams();
    teamArray = teams;
    displayTeams();
});

/* Display Functions */
function displayTeams() {
    listEl.textContent = '';
    for (let team of teamArray) {
        const teamsEl = renderTeams(team);
        listEl.append(teamsEl);
    }
}

// (don't forget to call any display functions you want to run on page load!)
