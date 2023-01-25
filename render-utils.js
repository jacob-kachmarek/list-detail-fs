export function renderTeams(team) {
    const divEl = document.createElement('div');
    const aEl = document.createElement('a');
    const nameEl = document.createElement('p');
    const imgEl = document.createElement('img');

    divEl.classList.add('teams-container');
    nameEl.textContent = team.name;
    imgEl.src = `./assets/${team.id}.png`;
    aEl.href = `./details/?id=${team.id}`;

    divEl.append(nameEl, imgEl);
    aEl.append(divEl);
    return aEl;
}

export function renderTeamInfo(team) {
    const divEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const schoolEl = document.createElement('p');
    const stateEl = document.createElement('p');
    const coachEl = document.createElement('p');
    const rankingEl = document.createElement('p');

    divEl.classList.add('individual-team');

    nameEl.textContent = `Team Name: ${team.name}`;
    schoolEl.textContent = `School Name: ${team.school}`;
    stateEl.textContent = `State School is Located in: ${team.state.name}`;
    coachEl.textContent = `Coach Name: ${team.coach}`;
    rankingEl.textContent = `National Ranking: ${team.ranking}`;

    divEl.append(nameEl, schoolEl, coachEl, stateEl, rankingEl);
    return divEl;
}
