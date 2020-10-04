// You will be given a list of objects. Each object has type, material,
//  and possibly secondMaterial. The existing materials are: paper, glass,
//   organic, and plastic.

// Your job is to sort these objects across the 4 recycling bins according
// to their material (and secondMaterial if it's present), by listing
// the type's of objects that should go into those bins.


function recycle(array) {
  const bins = [[], [], [], []];
  const binOrder = {
    paper: 0,
    glass: 1,
    organic: 2,
    plastic: 3,
  };
  for (const i in array) {
    if (array[i].secondMaterial) {
      bins[binOrder[array[i].secondMaterial]].push(array[i].type);
    }
    bins[binOrder[array[i].material]].push(array[i].type);
  }
  return bins;
}
