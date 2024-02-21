const { S3Client, GetObjectCommand, PutObjectCommand }=require('@aws-sdk/client-s3')
const fs=require("fs")
class S3Repository {
    constructor() {
        const region=process.env.AWS_REGION ? process.env.AWS_REGION: 'sa-east-1'
        this.client = new S3Client({ 
            region, 
            forcePathStyle: true,
            credentials:{
                accessKeyId:process.env.ACCESSKEYID,
                secretAccessKey:process.env.SECRETACCESSKEY
            }
        });
    }
    async getObject(bucket, key) {
        try{
            const command = new GetObjectCommand({ Bucket: bucket, Key: key });
            const response = await this.client.send(command);
            return await response.Body.transformToString();
        }
        catch(err){
            throw(err)
        }
    }
    async uploadObject(bucket, key, data) {
        try{
            const command = new PutObjectCommand({ 
                Bucket: bucket, 
                Key: key, 
                Body: data
            });
            const response = await this.client.send(command);
            return response
        }
        catch(err){
            throw(err)
        }
    }
}
module.exports = { S3Repository }