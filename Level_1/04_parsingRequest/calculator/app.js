// Create a Calculator
// 1. 2. Create a new Node.js project named “Calculator”.
// On the home page (route “/”), show a welcome message and a
// link to the calculator page.
// 3. On the “/calculator” page, display a form with two input fields
// and a “Sum” button.
// 4. When the user clicks the “Sum” button, they should be taken to
// the “/calculate-result” page, which shows the sum of the two
// numbers.
// ○ Make sure the request goes to the server.
// ○ Create a separate module for the addition function.
// ○ Create another module to handle incoming requests.
// ○ On the “/calculate-result” page, parse the user input, use
// the addition module to calculate the sum, and display the
// result on a new HTML page.

const http = require('http');
// vhan object manke kia to yhan destructure
const {requestHandler} = require('./handler');

const server = http.createServer(requestHandler);

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
   
})

