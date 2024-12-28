const fs = require('fs');

try {
    const readStream = fs.createReadStream('input.txt', 'utf8');
    const writeStream = fs.createWriteStream('output.txt');
    
    readStream.pipe(writeStream);
    console.log('File copied successfully!');
}
catch(err){
    console.log("Error due to:",err)
}


