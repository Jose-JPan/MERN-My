# First Step
    Go to backend directory 
    $ cd backend
    
    And install node dependencies
    $ npm install

# Second Step
    Go to frontend directory
    $ cd frontend

    And install node dependencies
    $ npm install

# Third Step
    In the root folder of the Application edit the .env file with your machine IP
    $ ifconfig | grep inet

# Fourth Step
    Go to the root folder of the Project and build the Docker image
    $ docker compose build

    And then run it with the command:
    $ docker compose up

