const { S3Repository } = require("../../repositories/S3Repository");
const fsPromises = require('fs/promises');
const fs = require('fs/promises');
const { getTimeFromFolder } = require("../../utils/getTimeFromFolder");
const path = require("path");

module.exports={
    async get(pathDefault){
        try{
            const currentTime = await getTimeFromFolder(pathDefault);
            if (currentTime > 2) {
                const repoS3 = new S3Repository()
                const resFeed = await repoS3.getObject("thomas-quinaia-feed-plooral", "feed.json")
                await fsPromises.writeFile(path.resolve("./cache/file.json"), resFeed);
            }
            const newFileCache = await fs.readFile(path.resolve("./cache/file.json"))
            return newFileCache;
        }
        catch(err){
            throw(err)
        }
    }
}