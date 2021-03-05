const championsData = require('../data');

class Champion{
 constructor(data) {
    this.id = data.id;
    this.sport = data.sport;
    this.championship = data.championship;
    this.team = data.team;
    this.numOfWins = data.numOfWins;
}
static get all() {
    const champions = championsData.map((champions) => new Champion(champion));
    return champions;
}
static findById(id) {
    try {
        const championData = championsData.filter((champion) => champion.id === id)[0];
        const champion = new Champion(championData);
        return champion;
    } catch (err) {
        throw new Error('That champion does not exist!');
    }
}
static create(champion) {
    const newChampionId = championsData.length + 1;
    const newChampion = new Champion({ id: newChampionId, ...champion });
    championData.push(newChampion);
    return newChampion;
}
destroy() {
    const champion = championsData.filter((champion) => champion.id === this.id)[0];
    championsData.splice(championsData.indexOf(champion), 1);
}
}

module.exports = Champion;