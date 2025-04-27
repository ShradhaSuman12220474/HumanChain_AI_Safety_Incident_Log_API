# HumanChain AI Safety Incident Log API

### A RESTful API service to log and manage hypothetical AI safety incidents, built with Node.js, Express, and MongoDB.


## Features

+ Create, retrieve, and delete AI safety incidents.

* MongoDB for persistent storage using Mongoose ODM.

- Input validation with Joi.

+ Basic error handling and HTTP status codes.

### Each incident includes:

+ id: Auto-generated unique identifier.

+ title: Short summary of the incident.

+ description: Detailed description.

+ severity: One of "Low", "Medium", or "High".

+ created_at: Timestamp when the incident was logged.

## Prerequisites
+ Node.js (v14 or higher)

+ MongoDB (local or cloud, e.g., MongoDB Atlas)

## Setup Instructions

1. Clone the Repository

```
git clone https://github.com/ShradhaSuman12220474/HumanChain_AI_Safety_Incident_Log_API.git

cd HumanChain_AI_Safety_Incident_Log_API
```
2. Install Dependencies
```
npm install
```
3. Configure Environment Variables

    Create a .env file in the root directory.
    ```
    PORT=
    DB_URL=
    

    ```
    Adjust DB_URL, PORT according to your system.

4. Start the Server
 
 ```
 npm start
```
## Sample Data

To pre-populate the database with sample incidents, I have already provided some sample data if you wish to change it you can. Just put your own seed.js file.

Run the below command to populate the database
```
npm run migration
```

## API Endpoints
All responses are in JSON format.

1. Retrieve All Incidents

GET : http:\\localhost:'Your PORT'\api\v1\incident

Sample response: 
```json
{
    "success": true,
    "message": "All incidents fetched successfully",
    "data": [
        {
            "_id": "680e261ca58b8b2e095cdf54",
            "title": "AI Misclassification in Medical Diagnosis",
            "description": "An AI system incorrectly diagnosed a patient, leading to delayed treatment.",
            "severity": "High",
            "__v": 0,
            "createdAt": "2025-04-27T12:42:04.464Z",
            "updatedAt": "2025-04-27T12:42:04.464Z"
        },
        {
            "_id": "680e261ca58b8b2e095cdf55",
            "title": "Autonomous Vehicle Near-Miss",
            "description": "Self-driving car failed to recognize a pedestrian, resulting in a near-miss.",
            "severity": "Medium",
            "__v": 0,
            "createdAt": "2025-04-27T12:42:04.464Z",
            "updatedAt": "2025-04-27T12:42:04.464Z"
        }
    ]
}

```

2. Create a New Incident

POST : http:\\localhost:'Your PORT'\api\v1\incident
+ reqest body 
```json
{
  "title": "AI Chatbot Offensive Response",
  "description": "Chatbot generated an offensive response during user interaction.",
  "severity": "Low"
}

```
+ response : 201 Created

```json
{
    "success": true,
    "message": "Incident uploaded successfully",
    "data": {
        "title": "AI Chatbot Offensive Response",
        "description": "Chatbot generated an offensive response during user interaction.",
        "severity": "Low",
        "_id": "680e29db69d8484f0ed909d1",
        "createdAt": "2025-04-27T12:58:03.377Z",
        "updatedAt": "2025-04-27T12:58:03.377Z",
        "__v": 0
    }
}
```
Validation errors : 400 Bad Request
```json
{
    "success": false,
    "message": "Please input the correct severity",
    "expected": [
        "Medium",
        "High",
        "Low"
    ]
}
```

3. Retrieve a Specific Incident
GET : http:\\localhost:'Your PORT'\api\v1\incident\{id}
* Response 200 OK
```json
{
    "success": true,
    "message": "Fetched successfully",
    "data": {
        "_id": "680e26f04b5653499faa9803",
        "title": "AI Misclassification in Medical Diagnosis",
        "description": "An AI system incorrectly diagnosed a patient, leading to delayed treatment.",
        "severity": "High",
        "__v": 0,
        "createdAt": "2025-04-27T12:45:36.519Z",
        "updatedAt": "2025-04-27T12:45:36.519Z"
    }
}
```

* 404 Not Found
```json
{
    "success": false,
    "message": "Data not found"
}
```

4. Delete an Incident

DELETE : http:\\localhost:'Your PORT'\api\v1\incident\{id}

* Response 200 OK 
```json
    {
    "success": true,
    "message": "Incident deleted successfully.",
    "deletedIncident": {
        "_id": "680e26f04b5653499faa9803",
        "title": "AI Misclassification in Medical Diagnosis",
        "description": "An AI system incorrectly diagnosed a patient, leading to delayed treatment.",
        "severity": "High",
        "__v": 0,
        "createdAt": "2025-04-27T12:45:36.519Z",
        "updatedAt": "2025-04-27T12:45:36.519Z"
    }
}
```

* 404 Not Found
```json
{
    "success": false,
    "message": "Incident not found"
}
```

## Testing the API

Use tools like Postman or curl to interact with the API endpoints.

## Design Decisions

The project was intentionally kept simple with basic CRUD functionality to focus on core RESTful practices without overcomplicating the architecture. I focused more on breakin each and every part so that it can be mantainable and scalable.
## challenges

Input validation for POST /incidents was handled using Zod to ensure that only valid data (title, description, and allowed severity levels) enters the database, improving reliability and security.
Especially the enum part of severity.
* solution : Spend some time on reading the docs of zod library and understood how it works, why we need schema and also understood the syntax of writing it.
