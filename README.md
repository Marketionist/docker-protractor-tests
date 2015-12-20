# docker-protractor-tests

[![Build Status](https://travis-ci.org/Marketionist/docker-protractor-tests.svg?branch=master)]
(https://travis-ci.org/Marketionist/docker-protractor-tests)

Protractor tests with Chrome running in xvfb inside Docker image. Can be used
locally or built inside CI system - now built in Travis CI.

## Setup to run locally with Docker

You will need [Docker Toolbox](https://www.docker.com/toolbox "Docker Toolbox") installed
to run the tests locally in the container inside Docker image.

To run the tests inside Docker on your local machine follow the next steps:

1. Clone this repository: ``git clone https://github.com/Marketionist/docker-protractor-tests.git``

2. Launch your Docker machine: ``docker-machine start default && eval "$(docker-machine env docker-vm)"``

3. Go to repository folder: ``cd docker-protractor-tests``

4. Build docker image: ``docker build --no-cache -t test/tests .``

5. See that the image was built: ``docker images -a | sort | uniq``


## Setup to run locally without Docker

If you want to run tests without Docker make sure you have
[node.js, npm](https://nodejs.org/en/ "node.js, npm"),
[protractor](https://www.npmjs.com/package/protractor "protractor") and
[gulp](https://www.npmjs.com/package/gulp "gulp") installed globally.

To run the tests without Docker on your local machine follow the next steps:

1. Clone this repository: ``git clone https://github.com/Marketionist/docker-protractor-tests.git``

2. Download and install [node.js, npm](https://nodejs.org/en/ "node.js, npm")

3. Install protractor and gulp globally: ``npm install -g protractor gulp``

4. Go to repository folder: ``cd docker-protractor-tests``

5. Install all needed npm packages: ``npm install``


## Running locally with Docker

Run tests in the container of the image: ``docker run -it --rm --name=dptest -p 8000:80 test/tests``
You can also use additional options for protractor - for example selecting
specific suite: ``docker run -it --rm --name=dptest -p 8000:80 test/tests --suite all``


## Running locally without Docker

Run linting, update webdriver, run tests:
``gulp tests:lint && sudo -s webdriver-manager update && protractor ./tests/protractor.conf.js``
You can also use additional options for protractor - for example selecting specific suite:
``gulp tests:lint && sudo -s webdriver-manager update && protractor ./tests/protractor.conf.js --suite all``


## Cleaning up inside the Docker

1. To delete the container: ``docker rm dptest``

2. To delete the image: ``docker rmi test/tests``
