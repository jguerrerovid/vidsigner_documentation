# VIDchain documentation

This repository contains the documentation web application for VIDchain services. This application is based on [Docusaurus](https://docusaurus.io/) plus [Docusaurus openapi](https://github.com/cloud-annotations/docusaurus-openapi).

## Add or update documents

In order to add new documentation pages or update existing documentation, clone this repository and only modify files within `docs`.

So simply:

1. Import/Update your updated markdown file in `docs` folder.
2. That's all! You can commit and push your changes. The changes will be automatically deployed in a matter of minutes by GitHub Actions.

## Add or update OpenAPI documentation

Docusaurus consumes OpenAPI documentation in JSON format. Since YAML format is commonly used instead, this repository provides a script to convert your new or updated documentation into JSON so Docusaurus can load it.

In a nutshell:

1. Import/Update your updated YAML OpenAPI file in `api` folder.
2. Run:

```
yarn prepare-docs
```

3. You can commit and push your changes. The changes will be automatically deployed in a matter of minutes by GitHub Actions.

## Run docusaurus locally

Simply:

```
yarn
yarn run start
```

Find the app at:

```
http://localhost:3000/vidchain-docs/
```
