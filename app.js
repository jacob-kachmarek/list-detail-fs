/* Imports */
import { getTeams } from './fetch-utils.js';

/* Get DOM Elements */
const listEl = document.getElementById('list-container');

/* State */
let teamArray = [];

/* Events */
window.addEventListener('load', async () => {
    const teams = await getTeams();
    teamArray = teams;
    console.log(teamArray);
    listEl.textContent = '';
    for (let team of teamArray) {
        const divEl = document.createElement('div');
        const aEl = document.createElement('a');
        const nameEl = document.createElement('p');
        const imgEl = document.createElement('img');

        nameEl.textContent = team.name;
        imgEl.src = '';
        aEl.href = '';

        divEl.append(nameEl, imgEl);
        aEl.append(divEl);
        listEl.append(aEl);
        // return listEl;
    }
    return listEl;
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
