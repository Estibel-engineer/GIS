function greet(name = "stranger") {
  const now = new Date().toLocaleTimeString();
  console.log(`[${now}] Hello, ${name}!`);
}

greet();
greet("Clara");
