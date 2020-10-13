$(document).ready(() => {
  let dly = 200;

  function upDown(elm) {
    elm.animate({ top: "-20px" }, dly, () => {
      elm.animate({ top: "0" }, dly);
    });
  }
  //   **********
  function moveNext(elm) {
    upDown(elm);
    if (!elm.next().length == 0) {
      setTimeout(() => {
        moveNext(elm.next());
      }, dly / 4);
    }
  }
  // *******************
  $("button").click(() => {
    moveNext($("span:first"));
  });
  //   *********
  $("button").click();
  setInterval(() => {
    $("button").click();
  }, dly * 5);
});
