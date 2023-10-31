// Import the dotenv package and call its config function to load environment variables from the .env file.
require('dotenv').config();

// Import the axios HTTP client to make requests.
const axios = require('axios');

// Declare an asynchronous function that will fetch a random picture from space using NASA's API.
async function getRandomPictureFromSpace(){
    try {
        // Use axios to make a GET request to the NASA API endpoint.
        // The API key is read from the environment variables, which is a secure practice.
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}`);
        // Return the data received from the API call.
        return response.data;
    } catch (error) {
        // If an error occurs during the API request, log it to the console.
        console.error('Error:', error);
    }
}

// Self-invoking anonymous async function to execute the getRandomPictureFromSpace function.
(async()=>{
    // Wait for the getRandomPictureFromSpace function to resolve and store the result in 'picture'.
    const picture = await getRandomPictureFromSpace();
    // Log the result to the console.
    console.log(picture);
})() // The parentheses at the end cause the function to call itself immediately.
