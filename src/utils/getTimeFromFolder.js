const fsPromises = require('fs/promises')

async function getTimeFromFolder(path) {
  try {
    const folderPath = await fsPromises.stat(path);
    const timeOfCreate = folderPath.birthtime.getTime();
    const currentTime = Date.now();
    const diffMs = currentTime - timeOfCreate;
    const minutes = Math.floor(diffMs / (1000 * 60));
    return minutes;
  } catch (err) {
    if (err) {
      return 3
    }
    return null;
  }
}

module.exports = {
  getTimeFromFolder
}
