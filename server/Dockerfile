FROM ruby:3.2

RUN apt-get update -qq && apt-get install -y locales

ENV APP_PATH='/server'
WORKDIR ${APP_PATH}

COPY Gemfile* $APP_PATH/
RUN bundle install

COPY . .

EXPOSE 443

CMD rails s -b 0.0.0.0 -p 443