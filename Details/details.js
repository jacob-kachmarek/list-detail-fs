import { getTeam } from '../fetch-utils.js';
import { renderTeamInfo } from '../render-utils.js';

const teamEl = document.getElementById('team-container');

let team = {};

window.addEventListener('load', async () => {
    const info = new URLSearchParams(window.location.search);
    const id = info.get('id');
    const teamDetails = await getTeam(id);
    team = teamDetails;
    console.log('detailsteamobj', team);
    const teamChoice = renderTeamInfo(team);
    teamEl.append(teamChoice);
});
