document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".content");
    let arr = JSON.parse(localStorage.getItem("board")) ?? [];
    let a = 1;
    for (let i = 0; i < arr.length; i++) {
      const boardList = document.createElement("div");
      const count = document.createElement("div");
      const title = document.createElement("div");
      const name = document.createElement("div");
      const main = document.createElement("div");
      const date = document.createElement("div");
      boardList.setAttribute("class", "boardList");
      count.innerHTML = a + i;
      title.innerHTML = arr[i].제목;
      name.innerHTML = arr[i].작성자;
      main.innerHTML = arr[i].내용;
      date.innerHTML = arr[i].작성일자;
      content.appendChild(boardList);
      boardList.append(count, title, name, main, date);
    }
  });