const antBridge = (ants, terrain) => {
  let bridge = [];
  let freeAnts = [...ants];
  for (let i = 0; i < terrain.length; i++) {
    if ([terrain[i], terrain[i - 1], terrain[i + 1]].includes('.')) {
      bridge.push(freeAnts.pop());

      if (terrain[i] === '-') {
        freeAnts = [...bridge.reverse(), ...freeAnts];
        bridge = [];
      }
    } else {
      if (bridge.length) {
        freeAnts = [...bridge.reverse(), ...freeAnts];
        bridge = [];
      }
    }
  }
  return freeAnts.join('');
};
