# First band oracles fetcher
> My first fetching attempt using axios, npm, yarn, node and typescript.

## Table of Contents
* [General Info](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* [Project Status](#project-status)
* [Room for Improvement](#room-for-improvement)
* [Acknowledgements](#acknowledgements)
* [Contact](#contact)


## General Information
- My training project, first steps using npm, yarn, axios, node and typescript.
- Project is fetching pricing data for the following assets: ETH, AAVE, BTC, UNI.
- It is a preparation for future tasks for RedStone.


## Technologies Used
- typescript - version 4.9.3
- npm - version 8.19.2
- yarn - version 1.22.19
- axios - version 1.2.0-alpha.1
- node - version v16.18.1


## Features
List the ready features here:
- Fetching BTC price in USD from coingeco


## Setup
> Download missing components:
> npm install -g npm
> sudo npm install -g yarn.
> npm install -g typescript
> sudo  apt-get install nodejs=16.18.1
> npm init -y
> npm i axios@1.2.0-alpha.1

> Compare installed versions:
> node -v
> npm -v
> tsc -v
> npm list -g


## Usage
To see current BTC price open folder with READ.md and run following commands:

`tsc`
`node ./built/main.js`


## Project Status
Project is: _in progress_ (adding more assets)


## Room for Improvement
To do:
- Find the most convinient way to fetch pricing data for the following assets: ETH, AAVE, BTC, UNI
- Update a node.js typescript script that will fetch the data and print the result in a JSON format


## Acknowledgements
- This project was inspired by @hatskier - RedStone
- This project was based on: 
- [Main tutorial](https://github.com/redstone-finance/redstone-oracles-monorepo/issues/140)
- [Nodejs basic](https://nodejs.dev/en/learn/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Axios tutorial](https://zetcode.com/javascript/axios/)
- [Typescript basic](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Migrating to typescript tutorial](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html)
- [Wrigting README tutorial](https://bulldogjob.com/readme/how-to-write-a-good-readme-for-your-github-project)
- [Band Oracles documentation](https://docs.bandchain.org/)
- Fetching data from [coingeco](https://api.coingecko.com/api/v3/coins/)


## Contact
Created by @wuluxBOSS - feel free to contact me!
