export function showTask() {
  const plus = document.querySelector(".plus");
  const dialog = document.querySelector("dialog");
  const close = document.querySelector(".close");
  const form = document.querySelector("form");
  const submit = document.querySelector(".submit");
  plus.addEventListener("click", (e) => {
    dialog.showModal();
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });
  close.addEventListener("click", (e) => {
    form.reset();
    dialog.close();
  });
  submit.addEventListener("click", (e) => {
    form.reset();
    dialog.close();
  });
}
