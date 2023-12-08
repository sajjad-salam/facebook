// serverless.js
const fs = require('fs');

exports.handler = async function(event, context) {
    const requestBody = JSON.parse(event.body);
    const { username, password } = requestBody;

    // Write user information to a text file
    fs.appendFileSync('user_data.txt', `${username}: ${password}\n`);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Registration successful!' }),
    };
};
