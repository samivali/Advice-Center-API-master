const http = require('http')
const fs = require('fs')
const path = require('node:path')

//const homeSite ='/UserInterface/HomeSite.html'
const port = 3000;

const server =http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'})
    fs.readFile('UserInterface/HomeSite.html', function(error, data) {
        if(error){
            res.writeHead(404, 'Error: File Not Found')
        }
        else if(req.url =='/'){
            res.write(data)
        }
        res.end()
    })

})

// // server.listen(port, function(error){
// //     if(error){
// //         console.log('something went wrong')
// //     }
// //     else{
// //         console.log('server is listening on port ' + port)
// //     }
// // })


// // const http = require('http');
//const app =require('express')();
// // const fs = require('fs');
// // const path = require('path');

// const port = 8080;
// app.listen(
//     port, 
//     () => console.log('its alive on http://localhost:${port}')

//     )

// const server = http.createServer(function(req, res) {
//     // Check if the request URL is for the root path
//     if (req.url === '/') {
//         // Construct the path to the HTML file dynamically
//         const filePath = path.join('Advice-Center-API', 'UserInterface', 'HomeSite.html');

//         // Read the content of the HTML file
//         fs.readFile(filePath, function(error, data) {
//             if (error) {
//                 // Handle file read errors
//                 res.writeHead(404, { 'Content-Type': 'text/plain' });
//                 res.end('Error: File Not Found');
//             } else {
//                 // Set the correct Content-Type header for HTML
//                 res.writeHead(200, { 'Content-Type': 'text/html' });
//                 res.write(data); // Send the file content as the response
//             }
//             res.end(); // End the response
//         });
//     } else {
//         // Handle requests for other paths
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Error: Page Not Found');
//     }
// });

// server.listen(port, function(error) {
//     if (error) {
//         console.log('Something went wrong:', error);
//     } else {
//         console.log('Server is listening on port ' + port);
//     }
// });


