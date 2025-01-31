class FileNameExtractor {
  static extractFileName(dirtyFileName: string) {
    const [filename, extOne, _extTwo] = dirtyFileName.split(".");
    const indexOfUnderscore = filename.indexOf("_");

    return `${filename.slice(indexOfUnderscore + 1)}.${extOne}`;
  }
}
