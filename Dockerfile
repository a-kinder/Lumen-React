FROM php:7.0-apache

COPY ./apache/site.conf /etc/apache2/sites-available/

RUN a2dissite \* && mkdir -p /srv && \
    a2enmod headers rewrite && a2ensite site.conf

WORKDIR /srv

COPY . /srv