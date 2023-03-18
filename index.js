const collectionName = "ReservedSnow"
const desc = "Hire ReservedSnow for your needs"
const imgUri = "ipfs://cid/"
const startTokenID = 0
const endTokenID = 7

const fs = require('fs');
const path = require('path');

const metadataFolder = './metadata';
if (fs.existsSync(metadataFolder)) {
    fs.readdirSync(metadataFolder).forEach((file) => {
        fs.unlinkSync(path.join(metadataFolder, file));
    });
    fs.rmdirSync(metadataFolder);
}

fs.mkdirSync(metadataFolder);

for (let i = startTokenID ; i < endTokenID; i++) {
    const metadata = {
        name: `${collectionName} - ${i}`,
        description: desc,
        image: `${imgUri}${i}.png`,
        id: `${i}`,
        compiler: `Reserved Metadata Generation Script`,
        devContact: `https://linktr.ee/reservedsnow`
    };

    const metadataFileName = `${metadataFolder}/${i}.json`;
    fs.writeFileSync(metadataFileName, JSON.stringify(metadata));
}

console.log(`
            Done generating metadata for your NFTs! 
            For Tips:
            ETH/Poly/Bsc: 0xd4578a6692ED53A6A507254f83984B2Ca393b513
            Solana: 5VrRcctapQ2chk9cCdcaMEGgTtVPR71fasy7YDr7jLcQ
             
            `);
