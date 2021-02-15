
// Assume all penguins swim at the same speed.
// Waves (~) take twice as long to swim through as smooth water (-).
// Penguins (p or P) are racing from left to right.
// There can be any number of lanes, and the race can be any length.
// All Lanes in a single race will be the same length.
// Penguin names are in the same order as the lanes.
// Return a string in this format: "GOLD: <name-1>, SILVER: <name-2>, BRONZE: <name-3>"
// There will always be an equal amount of penguins and lanes.
// There will always be a top three (no draws).

function calculateWinners(snapshot, penguins) {
  const lanes = snapshot.split('\n').map((x) => x.split(/[P]/gi)[1].split(''));
  const winners = lanes.map((x, i) => {
    const total = x.reduce((sum, loc) => sum += loc === '~' ? 2 : 1, 0);
    return {
      total,
      penguin: penguins[i],
    };
  }).sort((a, b) => a.total - b.total);
  return winners.slice(0, 3).map((x, i) => {
    const places = ['GOLD:', 'SILVER:', 'BRONZE:'];
    return `${places[i]} ${x.penguin}`;
  }).join(', ');
}
