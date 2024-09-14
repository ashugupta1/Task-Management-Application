# Features
* Create new tasks with a title, description, due date, and category.
* View a list of all tasks.
* Mark tasks as completed.
* Edit task details.
* Delete tasks.
* Tasks are stored in a MongoDB database.
* No refresh required for updating the task list.
# Technologies Used
* Frontend: React.js
* Backend: Node.js, Express.js
* Database: MongoDB (with Mongoose ODM)
* Testing: Jest and Supertest (for backend unit tests)
* Other Dependencies: Axios, Nodemon, Cors
# Prerequisites
* Before setting up the project, ensure you have the following installed:

* Node.js (v14 or above)
* npm (comes with Node.js)
* MongoDB (or you can use MongoDB Atlas)

# Installation and Setup
1. Clone the repository
* bash
* Copy code
* git clone https://github.com/ashugupta1/Task-Management-Application.git
* cd task-manager
2. Set up the backend
* Navigate to the backend folder and install dependencies:

* bash
* Copy code
* cd backend
* npm install
3. Set up MongoDB
* Make sure you have MongoDB running locally or create a cloud MongoDB instance using MongoDB Atlas. You’ll need to update the MongoDB connection string in the .env file.

# Create a .env file in the backend folder with the following content:

* bash
* Copy code
* MONGO_URI=mongodb://localhost:27017/taskmanager
* PORT=3006
* For MongoDB Atlas, your connection string would look something like this:

* bash
* Copy code
* MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskmanager?retryWrites=true&w=majority
* PORT=3006
4. Start the backend server
* bash
* Copy code
* npm run dev
* This will start the backend server on http://localhost:3006 using nodemon for auto-restart during development.

5. Set up the frontend
Now, navigate to the frontend folder and install dependencies:

* bash
* Copy code
* cd ../frontend
* npm install
6. Start the frontend development server
* bash
* Copy code
* npm start
* The frontend React app will now be running at http://localhost:3000.

7. Access the application
* Open your browser and go to http://localhost:3000 to start managing tasks.

* API Endpoints (Backend)
* GET /tasks: Fetch all tasks
* POST /tasks: Create a new task
* PATCH /tasks/
* : Update a task (title, description, due date, category, and completion status)
DELETE /tasks/
: Delete a task
# Testing
* Backend Testing
* The backend is set up with unit tests using Jest and Supertest. To run the tests, navigate to the backend folder and run:

* bash
* Copy code
* npm test
