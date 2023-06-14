document.addEventListener("DOMContentLoaded", () => {
    const up = document.getElementById("up");
    let arr = JSON.parse(localStorage.getItem("board")) ?? [];
    up.addEventListener("click", () => {
      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1; // 월
      let date = today.getDate(); // 날짜
      const title = document.getElementById("title");
      const user = document.getElementById("user");
      const detail = document.getElementById("detail");
      if (title.value == "") {
        alert("제목을 입력해주세요.");
        title.focus();
      } else if (user.value == "") {
        alert("작성자를 입력해주세요.");
        user.focus();
      } else if (detail.value == "") {
        alert("내용을 입력해주세요.");
        detail.focus();
      } else {
        arr.push({
          제목: title.value,
          작성자: user.value,
          내용: detail.value,
          작성일자: year + "/" + month + "/" + date,
        });
        localStorage.setItem("board", JSON.stringify(arr));
        title.value = "";
        user.value = "";
        detail.value = "";
      }
    });
  });