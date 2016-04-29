FROM node:5.8
MAINTAINER EOGILE "agilestack@eogile.com"

ENV name=root-app-test \
    workdir=/plugin \
    HTTP_PORT=8080

EXPOSE $HTTP_PORT

LABEL SERVICE_CHECK_HTTP="/status" \
      SERVICE_CHECK_INTERVAL="10s"

WORKDIR $workdir
ADD $name $workdir/$name

ADD index.js /sources/index.js
ADD lib /sources/lib/
ADD package.json /sources/package.json
ADD node_modules /sources/node_modules/

ENTRYPOINT ["./root-app-test"]