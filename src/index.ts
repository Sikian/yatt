const helloWorld = async () => {
  console.log("hello world");
};

(async () => {
  await helloWorld();
})();
