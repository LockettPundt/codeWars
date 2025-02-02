function sortPhotos(pics: string[]): string[] {
  const dateMap = pics.reduce<Record<string, string[]>>((obj, pic) => {
    const [date, img] = pic.split(".");
    if (obj[date]) {
      obj[date].push(img);
    } else {
      obj[date] = [img];
    }
    return obj;
  }, {});
  const dateSorted = Object.entries(dateMap).sort(
    (a, b) => Number(a[0]) - Number(b[0])
  );
  const dateAndImageSorted = dateSorted.map(
    ([year, images]: [string, string[]]): string[] => {
      const sortedImages = images.sort((a, b) => {
        const imgNumberA = Number(a.slice(a.indexOf("g") + 1));
        const imgNumberB = Number(b.slice(a.indexOf("g") + 1));
        return imgNumberA - imgNumberB;
      });

      return sortedImages.map((img) => `${year}.${img}`);
    }
  );

  const mostRecentFive = dateAndImageSorted.flat().slice(-5);
  const [year, img] = mostRecentFive[mostRecentFive.length - 1].split(".");
  const lastNumberIndex = img.indexOf("g") + 1;
  const lastNumber = Number(img.slice(lastNumberIndex));

  mostRecentFive.push(`${year}.img${lastNumber + 1}`);

  return mostRecentFive;
}
