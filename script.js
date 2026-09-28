const helloButton = document.querySelector("#helloButton");
const message = document.querySelector("#message");

if (helloButton && message) {
  helloButton.addEventListener("click", function () {
    message.textContent = "Hello Codex";
  });
}
