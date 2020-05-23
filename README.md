# Pripyat:
## A Node-Postgres-Docker Development Environment: UNDER-CONSTRUCTION
The ideia behind this project is to have a nice easy-to-use development environment. We are building a simple express API using javascript classes and mocha tests. Postgres will be used as our persistency layer and docker as our platform.

## Running the Application Locally
    $ npm install
    $ npm start

You can also run it in development mode by using nodemon

    $ npm install
    $ npm run dev

## Running the Tests with Mocha

    $ npm install
    $ npm test

## Docker Basics:
### Starting the environment:
    docker-compose up -d
    docker-compose up --build -d

### Stopping the environment:
    docker-compose down

## We are also using PM2 as a monitoring tool in the containers.
### To monitor locally you can go inside the container
    $ docker exec -it pripyat-api /bin/sh
    $ pm2 status
    $ pm2 monit

### CHANGELOG:
    2020-04-19: Added container support
                Added env variables into the contaier
                Added container communication
                Added pm2 monitoring
    
    2020-05-02: Added API Template
                Not-Found Module
                Samples Module
                System-Status Module

    2020-05-23: Switched to a simpler version of the architecture
                Removed System-Status Module (Will be re-added later)
                Started the development of the tests
                Super Simple Inversion of Control with Oversimplified Dependency Container

### STATUS
    [x] Docker Container Support
    [x] Container Communication
    [x] Container Environment Variables
    [x] PM2 Monitoring
    [x] API Template
    [x] Self Contained Modules
    [x] Samples Module
    [x] Error Samples Module
    [x] Not Found Module
    [ ] System Status Module
    [x] Self Contained Module with Inversion of Control
    [!] Expose Services and Repositories through Dependency Container, not directly.
    [x] Timer Module
    [-] CI/CD (GITHUB + HEROKU)
    [ ] Input Validation (express-validator)
    [ ] Data Persistency with Postgres
    [-] Mocha and Tests
    [x] Split tests and src in different folders
    [x] Simpler Architecture
