import "./css/style.css"; //importing css

const box = document.querySelector(".modal");

const thePromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("block");
    }, 60000);
  });
};

thePromise().then((result) => {
  box.style.display = result;
});
