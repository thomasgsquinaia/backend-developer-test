const express = require("express")
const router = express.Router();
const companiesController = require("../../controllers/companies")

router.get("/", companiesController.getCompanies
/*
    #swagger.tags = ['companies']
    #swagger.description = 'Endpoint to list companies.'
    #swagger.security = [{
        "token": []
    }]
    #swagger.responses[200] = {
        description: "Success",
        schema: [        
                {
                    "id": "5a655ed8-2cee-4e9b-8fe2-b9c8c884f512",
                    "name": "ABC Corp",
                    "created_at": "2024-02-16T13:03:03.424Z",
                    "updated_at": "2024-02-16T13:03:03.424Z",
                    "createdAt": "2024-02-16T13:03:03.424Z",
                    "updatedAt": "2024-02-16T13:03:03.424Z"
                },
                {
                    "id": "2ee5582c-b34c-4a48-af9f-3f2c4c5d4df4",
                    "name": "XYZ LLC",
                    "created_at": "2024-02-16T13:03:03.424Z",
                    "updated_at": "2024-02-16T13:03:03.424Z",
                    "createdAt": "2024-02-16T13:03:03.424Z",
                    "updatedAt": "2024-02-16T13:03:03.424Z"
                },
                {
                    "id": "84fec672-f25f-4d92-92eb-fcb80a3c4f1f",
                    "name": "ACME Enterprises",
                    "created_at": "2024-02-16T13:03:03.424Z",
                    "updated_at": "2024-02-16T13:03:03.424Z",
                    "createdAt": "2024-02-16T13:03:03.424Z",
                    "updatedAt": "2024-02-16T13:03:03.424Z"
                }
            
            ]
    }
    #swagger.responses[400] = {
            description: "BAD_REQUEST",
            schema: {
                message:"Companies were not found!",
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

router.get("/:id", companiesController.getFindByIdCompany
/*
    #swagger.tags = ['companies']
    #swagger.description = 'Endpoint to list a specific company.'
    #swagger.security = [{
        "token": []
    }]
    #swagger.responses[200] = {
        description: "Success",
        schema: [{
            "id": "5a655ed8-2cee-4e9b-8fe2-b9c8c884f512",
            "name": "ABC Corp",
            "created_at": "2024-02-16T13:03:03.424Z",
            "updated_at": "2024-02-16T13:03:03.424Z",
            "createdAt": "2024-02-16T13:03:03.424Z",
            "updatedAt": "2024-02-16T13:03:03.424Z"
        }]
    }
    #swagger.responses[400] = {
            description: "BAD_REQUEST",
            schema: {
                message:"Companies were not found!",
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