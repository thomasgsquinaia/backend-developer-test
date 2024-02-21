const express = require("express")
const router = express.Router();
const jobController = require("../../controllers/jobs")

router.post("/", jobController.createJob
/*
    #swagger.tags = ['jobs']
    #swagger.description = 'Endpoint to create a job posting draft.'
    #swagger.security = [{
        "token": []
    }]
    #swagger.responses[200] = {
        description: "Success",
        schema: {
            "id": "177e8dcf-02d9-47c5-9671-8d3369c0ec56",
            "status": "draft",
            "created_at": "2024-02-16T02:18:41.517Z",
            "updated_at": "2024-02-16T02:18:41.517Z",
            "company_id": "38028bfc-a6fe-40cb-b8d3-9529541fd376",
            "title": "Dev C++",
            "description": "c plus plus",
            "location": "Remote",
            "notes": "A",
            "updatedAt": "2024-02-16T02:18:41.517Z",
            "createdAt": "2024-02-16T02:18:41.517Z"
        }
    }
    #swagger.responses[400] = {
            description: "BAD_REQUEST",
            schema: {
                message:"'company_id is not found",
                status:400
            }
    }
    #swagger.responses[500] = {
        description: "INTERNAL_SERVER_ERROR",
        schema: {
            message:"ERROR",
            status:500
        }
    }
*/
);

router.put("/:job_id/publish", jobController.updatePublishJob
/*
    #swagger.tags = ['jobs']
    #swagger.description = 'Endpoint to create a publish a job posting draft.'
    #swagger.security = [{
        "token": []
    }]
    #swagger.responses[200] = {
        description: "Success",
        schema: {
            "message": "Job is published"
        }
    }
    #swagger.responses[400] = {
            description: "BAD_REQUEST",
            schema: {
                message:"Job Status draft!",
                status:400
            }
    }
    #swagger.responses[500] = {
        description: "INTERNAL_SERVER_ERROR",
        schema: {
            message:"ERROR",
            status:500
        }
    }
*/
);

router.put("/:job_id", jobController.updateJob
/*
    #swagger.tags = ['jobs']
    #swagger.description = 'Endpoint to edit a job posting draft (title, location, description).'
    #swagger.security = [{
        "token": []
    }]
    #swagger.responses[200] = {
        description: "Success",
        schema: {
            "id": "4bf6e131-740e-4aad-8d98-7956cbd24d3e",
            "company_id": "2ee5582c-b34c-4a48-af9f-3f2c4c5d4df4",
            "title": "Dev Mid Level Java II",
            "description": "description test",
            "location": "Remote",
            "notes": "A",
            "status": "draft",
            "created_at": "2024-02-16T19:21:26.525Z",
            "updated_at": "2024-02-16T19:21:26.525Z",
            "createdAt": "2024-02-16T19:21:26.525Z",
            "updatedAt": "2024-02-16T19:21:38.020Z"
        }
    }
    #swagger.responses[400] = {
            description: "BAD_REQUEST",
            schema: {
                message:"Job not is found",
                status:400
            }
    }
    #swagger.responses[500] = {
        description: "INTERNAL_SERVER_ERROR",
        schema: {
            message:"ERROR",
            status:500
        }
    }
*/
);

router.put("/:job_id/archive", jobController.updateArchiveJob
/*
    #swagger.tags = ['jobs']
    #swagger.description = 'Endpoint to archive an active job posting.'
    #swagger.security = [{
        "token": []
    }]
    #swagger.responses[200] = {
        description: "Success",
        schema: {
            "id": "08c04a8d-94b4-4136-ad4c-db9c73eb7197",
            "company_id": "2ee5582c-b34c-4a48-af9f-3f2c4c5d4df4",
            "title": "Dev C++",
            "description": "C++",
            "location": "Remote",
            "notes": "A",
            "status": "archived",
            "created_at": "2024-02-16T14:30:18.585Z",
            "updated_at": "2024-02-16T14:30:18.585Z",
            "createdAt": "2024-02-16T14:30:18.585Z",
            "updatedAt": "2024-02-16T14:37:50.746Z"
        }
    }
    #swagger.responses[400] = {
            description: "BAD_REQUEST",
            schema: {
                message:"Job Status is archived!",
                status:400
            }
    }
    #swagger.responses[500] = {
        description: "INTERNAL_SERVER_ERROR",
        schema: {
            message:"ERROR",
            status:500
        }
    }
*/
);

router.delete("/:job_id", jobController.deleteJob
/*
    #swagger.tags = ['jobs']
    #swagger.description = 'Endpoint to delete a job posting draft.'
    #swagger.security = [{
        "token": []
    }]
    #swagger.responses[200] = {
        description: "Success",
        schema: {
            "id": "4bf6e131-740e-4aad-8d98-7956cbd24d3e",
            "company_id": "2ee5582c-b34c-4a48-af9f-3f2c4c5d4df4",
            "title": "Dev Mid Level Java II",
            "description": "description test",
            "location": "Remote",
            "notes": "A",
            "status": "draft",
            "created_at": "2024-02-16T19:21:26.525Z",
            "updated_at": "2024-02-16T19:22:49.075Z",
            "createdAt": "2024-02-16T19:21:26.525Z",
            "updatedAt": "2024-02-16T19:22:49.075Z"
        }
    }
    #swagger.responses[400] = {
            description: "BAD_REQUEST",
            schema: {
                message:"Job is not found!",
                status:400
            }
    }
    #swagger.responses[400] = {
            description: "BAD_REQUEST",
            schema: {
                message:"Job Status draft!",
                status:400
            }
    }
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