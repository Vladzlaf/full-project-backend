###

FROM    mhart/alpine-node

RUN     npm install -g http-server

WORKDIR /index
ADD     ./    /index

# The default port of the application
EXPOSE  80

CMD ["http-server", "--cors", "-p80", "/index"]