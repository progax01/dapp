
# KYC Dapp

Do your KYC once in blockchain and share your address with anyone, no need to do KYC again and again, use this blockchain KYC App.

# Deployed Link
 - [KYC Dapp](https://cool-mochi-a8b5b7.netlify.app/)

## Authors

- [@progax01](https://github.com/progax01)


## Screenshots

![App Screenshot](/public/pic1.png)

![App Screenshot](/public/pic2.png)

![App Screenshot](/public/pic3.png)

![App Screenshot](/public/pic4.png)

![App Screenshot](/public/pic6.png)


## Features

- Blockchain KYC
- User Friendly 
- Secure 
- Cross platform


## Installation

Install KYC DAPP with npm

```bash
  npm install --force
```
  Run Project with npm  
```bash
  npm run dev
```
## Install Hardhat

Install Hardhat

```bash
  npm install --save-dev hardhat
```

Install hardhat dependencies

```bash
  npm install --save-dev hardhat @nomicfounda/hardhat-toolbox --force
```

Install Dependencies for testing

```bash
npm install --save-dev @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai

```




## Compile Contract


```bash
 npx hardhat compile
```

## Running Tests with Hardhat

To run tests, run the following command

```bash
 npx hardhat test
```


## Deployment

To deploy this project run

```bash
  npx hardhat run scripts/deploy.js --network sepolia
```

