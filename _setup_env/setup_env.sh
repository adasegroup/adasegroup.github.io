#!/usr/bin/env bash
cd /adasegroup.github.io  &&\
npm install  &&\
npm install --global gulp-cli  &&\
gem update --system 3.0.8  &&\
gem install jekyll bundler  &&\
bundle install  &&\
bundle clean --force
