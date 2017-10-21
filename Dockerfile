FROM quantumobject/docker-alpine

CMD /sbin/my_init

RUN apk --update add php7 nano git php7-phar php7-json php7-mbstring zip unzip openssl php7-openssl nodejs nodejs-npm
RUN wget https://getcomposer.org/composer.phar && chmod +x composer.phar && mv composer.phar /usr/local/bin/composer
RUN wget -q https://github.com/pupper/pupper/archive/master.zip; exit 0
RUN unzip master.zip
WORKDIR pupper-master
RUN composer install -o -q --no-dev
RUN npm i -s > /dev/null 2>&1
RUN npm build

CMD npm start
