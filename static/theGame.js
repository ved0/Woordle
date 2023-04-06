setTimeout(() => {
  const rows = document.querySelectorAll(".row");

  rows.forEach((row, index) => {
    const inputs = row.childNodes;
    inputs.forEach((input, i) => {
      input.addEventListener("keyup", (ev) => {
        if (input.value.length == input.maxLength && input.nextSibling && input.nextSibling.value.length == 0) {
            input.nextSibling.focus();
        }
      });
      input.addEventListener("click", () => {
        input.value = "";
        input.focus();
      });
      input.addEventListener("keydown", (ev) => {
      let inputValue = rows[index].childNodes[i].value;
        if (ev.keyCode == 8) {
            if(inputValue.length > 0){
                return;
            } else if(input.previousSibling){
                input.previousSibling.focus();
            }
        }
      });
    });
  });
}, 1000);
