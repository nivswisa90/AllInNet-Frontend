//  const fs = require('fs');

// // fs.readFile('./user.json', 'utf-8', (err, jsonString) => {

// //     if(err) {
// //         console.log(err);
// //     }
// //     else {
// //         try { 
// //             const data = JSON.parse(jsonString);
// //         console.log(data.address);
// //         } catch (err) {
// //             console.log('Error parsing JSON', err);
// //         }
// //     }
// // });

// // try {
// //     const jsonString = fs.readFileSync('./user.json', 'utf-8');
// //     const user = JSON.parse(jsonString);
// //     console.log(user.address);
// // } catch (err) {
// //     console.log(err);
// // }

// //Helper function we'll be able to pass a file path to a JSON file 
// // and a callback to handle the parsed JSON data.
// function jsonReader(filePath, cb) {
//     fs.readFile(filePath, 'utf-8', (err, fileData) => {
//         if(err){
//             return cb && cb(err);
//         }
//         try {
//             const object = JSON.parse(fileData);
//             return cb && cb(null, object);
//         } catch (err) {
//             return cb && cb(err);
//         }
//     });
// }


// // jsonReader('./user.json', (err, data) => {
// //     if(err){
// //         console.log(err);
// //     }else {
// //         console.log(data.address);
// //     }
// // });

// //if we want to write new json file

// // const newObject = {
// //     name:'danaaaa',
// //     id:3,
// //     address: 'Tel Aviv'
// // };

// // fs.writeFile('./newUser.json', JSON.stringify(newObject, null, 2), err => {
// //     if(err){
// //         console.log(err);
// //     } else {
// //         console.log('File successful written!');
// //     }
// // });

