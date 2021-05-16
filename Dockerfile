FROM node:16 as base

RUN useradd --create-home --shell /bin/bash app

RUN mkdir /opt/services && chown app: -R /opt/services

WORKDIR /opt/services

# When hooked up to ci/cd we can copy just compiled files to run the application
# after tests pass and tagging
COPY --chown=app package.json package-lock.json /opt/services/
COPY --chown=app ./src /opt/services/src/
COPY --chown=app ./.swcrc /opt/services/

RUN npm ci
RUN npm run build

# Or run straight from index file or use tini
CMD ["npm", "start"]
