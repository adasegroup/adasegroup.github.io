FROM ubuntu:18.04

ENV LANG='en_US.UTF-8' LANGUAGE='en_US:en' LC_ALL='en_US.UTF-8'

RUN apt -y update && \
    apt -y install locales && \
    locale-gen en_US.UTF-8

RUN apt -y install nodejs npm ruby-full zlib1g-dev && apt clean
