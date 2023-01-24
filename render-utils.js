export function renderTeams(team) {
    const divEl = document.createElement('div');
    const aEl = document.createElement('a');
    const nameEl = document.createElement('p');
    const imgEl = document.createElement('img');

    nameEl.textContent = team.name;
    imgEl.src = '';
    aEl.href = '';

    divEl.append(nameEl, imgEl);
    aEl.append(divEl);
    return aEl;
}
