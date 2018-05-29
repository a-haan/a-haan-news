# NEWS

## Prerequisites

### Polymer CLI

Install [polymer-cli](https://github.com/Polymer/polymer-cli):
(Need at least npm v0.3.0)

    npm install -g polymer-cli

### Google App Engine SDK

Install [Google App Engine SDK](https://cloud.google.com/appengine/downloads)

## Setup

    git clone https://github.com/a-haan/a-haan-news.git
    cd a-haan-news
    bower install

## Start the development server

    dev_appserver.py .

## Build

    polymer build

## Test the build

This command serves the minified version of the app in an unbundled state, as it would be served by a push-compatible server:

    dev_appserver.py build/unbundled

This command serves the minified version of the app generated using fragment bundling:

    dev_appserver.py build/default

## Deploy to Google App Engine

    gcloud app deploy build/default/app.yaml --project [YOUR_PROJECT_ID]
