function greet(name = "stranger") {
  const now = new Date().toLocaleTimeString();
  console.log(`[${now}] Hello, ${name}!`);
  console.log("Git is aweseome!");
}

module.exports = greet;
