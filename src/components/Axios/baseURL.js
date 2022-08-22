const production = 'postgres://ysabytscippoyz:f37251487cade6fcac02ac514667f40a5e0ba03b15d19df352e2c8e32bc31098@ec2-34-203-182-65.compute-1.amazonaws.com:5432/dbo4l3u9cgak1l';
const development = 'http://localhost:5050';
const currentURL = window.location.origin;

console.log("currentURL", currentURL);
console.log("production", production);

const baseURL = (currentURL === 'http://localhost:3000' ? development : production);

export default baseURL