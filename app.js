/* Imports */
import { getTeams } from './fetch-utils.js';

/* Get DOM Elements */
const listEl = document.querySelector('main');

/* State */
let teamArray = [];

/* Events */
window.addEventListener('load', async () => {
    const teams = await getTeams();
    teamArray = teams;
    console.log(teamArray);
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
