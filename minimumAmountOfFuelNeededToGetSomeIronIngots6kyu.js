
//
// Each iron ingot takes 11 seconds* to produce. Steve needs a
// lot of them, and he has the following fuel options to add into the furnace:

// Buckets of lava, each lasts 800 seconds*Alt text
// Blaze rod, each lasts 120 secondsAlt text
// Coals, each lasts 80 secondsAlt text
// Blocks of Wood, each lasts 15 secondsAlt text
// Sticks, each lasts 1 second*Alt text


function calcFuel(n) {
  const fuel = {
    lava: 0,
    blazeRod: 0,
    coal: 0,
    wood: 0,
    stick: 0,
  };
  let time = n * 11;
  while (time > 0) {
    if (time >= 800) {
      time -= 800;
      fuel.lava += 1;
    } else if (time >= 120) {
      time -= 120;
      fuel.blazeRod += 1;
    } else if (time >= 80) {
      time -= 80;
      fuel.coal += 1;
    } else if (time >= 15) {
      time -= 15;
      fuel.wood += 1;
    } else {
      time -= 1;
      fuel.stick += 1;
    }
  }
  return fuel;
}
