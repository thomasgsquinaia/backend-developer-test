const express = require("express")
const router = express.Router();
const feedController = require("../../controllers/feed")

router.get("/", feedController.getFeed
/*
    #swagger.tags = ['feed']
    #swagger.description = 'Endpoint to list file from AWS or cache.'
    #swagger.responses[500] = {
        description: "INTERNAL_SERVER_ERROR",
        schema: {
            message:"ERROR",
            status:500
        }
    }
*/
);

router.get("/generateFeed", feedController.generateFeed
/*
    #swagger.tags = ['feed']
    #swagger.description = 'Endpoint to generate file.'
    #swagger.responses[500] = {
        description: "INTERNAL_SERVER_ERROR",
        schema: {
            message:"ERROR",
            status:500
        }
    }
*/
);

module.exports = router;