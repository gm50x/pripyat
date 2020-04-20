# Pripyat:
## A Node-Postgres Container Development Environment
The main concern of this project is to learn more about this marvelous development tool called docker, by putting it to practice.

### Starting the environment:
    docker-compose up -d
    docker-compose up --build -d

### Stopping the environment:
    docker-compose down

### PM2 Monitoring
    $ docker exec -it pripyat-api /bin/sh
    $ pm2 status
    $ pm2 monit

### CHANGELOG:
    2020-04-19: Added container support
                Added env variables into the contaier
                Added container communication
                Added pm2 monitoring

### NEXT STEPS:
    Modular API Template
    Data Persistency Module
    Users or Authentication Module
    Not-Found Module
    Mocha and Tests
    CI/CD (GITHUB + HEROKU)
