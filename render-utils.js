export function renderTeams(team) {
    const divEl = document.createElement('div');
    const aEl = document.createElement('a');
    const nameEl = document.createElement('p');
    const imgEl = document.createElement('img');

    divEl.classList.add('teams-container');
    nameEl.textContent = team.name;
    imgEl.src = `./assets/${team.id}.png`;
    aEl.href = '';

    divEl.append(nameEl, imgEl);
    aEl.append(divEl);
    return aEl;
}
