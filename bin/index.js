#!/usr/bin/env node

const path = require("path");
const meta = require(path.join(__dirname, "..", "package.json"));
const config = require(path.join(__dirname, "..", "src", "config"));
const { docopt } = require("docopt");
const clone = require("git-clone");

const doc = `
Usage: 
  hype --create <targetPath> [--template <template>]
  hype --help
  hype --version
`;

const parseArgs = doc => {
  return docopt(doc, { version: meta.version });
};

const makeRepoUri = (repoAddr, templateName) => {
  return `${repoAddr}/${templateName}`;
};

const args = parseArgs(doc);

if (args["--create"]) {
  const targetPath = args["<targetPath>"];
  const template = args["<template>"] || config.TEMPLATE;
  const repoUri = makeRepoUri(config.GIT_BASE_URI, template);
  console.log(`Using ${template} (${repoUri}) as base app.`);
  clone(repoUri, targetPath, repo =>
    console.log(`Created ${template} app in the path: ${targetPath}`)
  );
}

module.exports = doc;
