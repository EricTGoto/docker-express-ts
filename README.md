# docker-express-ts
Test repository to dockerize an express app written in Typescript.

Run locally in dev mode by:
```docker-compose up```

Run locally in prod mode by:
```docker-compose -f docker-compose.yaml -f docker-compose-prod.yaml```

Main Objectives:
- create simple express app in javascript
- verify functionality
- dockerize it
- build image and container
- create docker compose to simplify deployment process
- change javascript to typescript

Sub-goal:
- auto build of docker image + starting of container so changes in code are quickly reflected in docker container

sub-goal instructions:
- installing nodemon in the image (RUN npm install nodemon -g)
- adding command and volumes in the compose file
    - command: nodemon -L index.js
        - refer to https://stackoverflow.com/questions/39239686/nodemon-doesnt-restart-in-windows-docker-environment and https://github.com/remy/nodemon#application-isnt-restarting for the -L flag
    - volumes: .:/app
- rebuild image and then docker-compose up and the container should automatically restart after changes are made locally

