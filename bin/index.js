#!/usr/bin/env node

const path = require("path");
const meta = require(path.join(__dirname, "..", "package.json"));
const { docopt } = require("docopt");
const { Clone } = require("nodegit");

const doc = `
Usage:
  hype create <name>
 
`;

const args = docopt(doc, { version: meta.version });

if (args["create"]) {
  const name = args["<name>"];
  const repo = "https://github.com/jstreats/hype-boilerplate";
  Clone(repo, name).then(repo =>
    console.log(`Initialize hype app at: ${name}`)
  );
}

module.exports = doc;
