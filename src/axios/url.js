const currentURL = window.location.origin;
const production = process.env.DATABASE_URL;
const development = 'http://localhost:5050';

const baseURL = (currentURL === 'http://localhost:3000' ? development : production);

module.exports = baseURL;