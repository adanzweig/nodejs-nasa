# NASA Space Pictures

This project is a simple Node.js application that retrieves random pictures from space using the NASA API. It showcases the Astronomy Picture of the Day (APOD) provided by NASA.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm (Node Package Manager)
- A NASA API key, which you can obtain from [NASA's API portal](https://api.nasa.gov/).

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository to your local machine.
   ```sh
   git clone https://github.com/adanzweig/nodejs-nasa.git
   ```
2. Navigate to the project directory.
   ```sh
   cd nodejs-nasa
   ```
3. Install the project dependencies using npm.
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory of the project and add your NASA API key.
   ```env
   NASA_API_KEY=your_nasa_api_key
   ```
5. Run the application.
   ```sh
   node index.js
   ```

## Usage

Run the script, and it will output the Astronomy Picture of the Day's information to the console. You can extend this script to save the information, display it on a web page, or even tweet it.