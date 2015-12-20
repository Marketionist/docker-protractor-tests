FROM node:slim
MAINTAINER marketionist@gmail.com
WORKDIR /tmp
RUN npm install -g protractor gulp && \
    webdriver-manager update && \
    apt-get update && \
    apt-get install -y xvfb wget openjdk-7-jre git && \
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    dpkg --unpack google-chrome-stable_current_amd64.deb && \
    apt-get install -f -y && \
    apt-get clean && \
    rm google-chrome-stable_current_amd64.deb

ADD . /app
ADD protractor.sh /protractor.sh
WORKDIR /app

# Install all npm packages from package.json
RUN npm install

# Set default image container command to launch linting, xvfb, integration tests
ENTRYPOINT ["/protractor.sh"]
