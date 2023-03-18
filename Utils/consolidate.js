const fs = require('fs');
const path = require('path');

// Define the directory path where the NFT metadata files are located
const dirPath = './metadata';

// Define the output file path and name for consolidated metadata
const outputFilePath = './consolidatedMetadata.json';

let metadataArr = [];

fs.readdirSync(dirPath).forEach(file => {
  if (path.extname(file) === '.json') {
    const metadata = fs.readFileSync(path.join(dirPath, file), 'utf8');
    const parsedMetadata = JSON.parse(metadata);
    metadataArr.push(parsedMetadata);
  }
});

const metadataObj = {};
metadataArr.forEach(metadata => {
  if (metadata.id) {
    metadataObj[metadata.id] = metadata;
  } else {
    console.error(`Error: Metadata file ${metadata.name} does not have an 'id' field.`);
  }
});

const metadataJson = JSON.stringify(metadataObj);

fs.writeFileSync(outputFilePath, metadataJson);

console.log(`Consolidated NFT metadata written to ${outputFilePath}
For Tips:
ETH/Poly/Bsc: 0xd4578a6692ED53A6A507254f83984B2Ca393b513
Solana: 5VrRcctapQ2chk9cCdcaMEGgTtVPR71fasy7YDr7jLcQ
`);
