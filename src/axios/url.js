const base_url = window.location.origin;
const production = 'ec2-34-203-182-65.compute-1.amazonaws.com';
const development = 'http://localhost:5050';

// const url = (base_url == 'http://localhost:3000' ? development : production);
const url = development;

module.exports = url;