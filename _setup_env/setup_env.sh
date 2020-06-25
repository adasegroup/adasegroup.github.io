#!/usr/bin/env bash
cd /adasegroup.github.io  &&\
npm install  &&\
npm install --global gulp-cli  &&\
gem update --system  &&\
gem install jekyll bundler  &&\
bundle install  &&\
bundle clean --force
