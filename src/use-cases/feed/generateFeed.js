const { S3Repository } = require("../../repositories/S3Repository");

module.exports={
    async generate(job){
        try{
            const jsonContent = JSON.stringify(job);
            const uploudObjectS3 = new S3Repository()
            await uploudObjectS3.uploadObject("thomas-quinaia-feed-plooral","feed.json",jsonContent)
            return jsonContent;
        }
        catch(err){
            throw(err)
        }
    }
}