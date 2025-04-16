function greet(name = "stranger") {
  const now = new Date().toLocaleTimeString();
  console.log(`[${now}] Hello, ${name}!`);
  console.log("Git is cool!");
  console.log("Git is aweseome!");
  console.log("Git is magnificient!");
}

module.exports = greet;
