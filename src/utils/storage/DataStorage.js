let getData = window.localStorage.getItem("link-data");
let linkArr = [];

let check;
getData == null || undefined ? (check = true) : (check = false);

export let SaveData = (data) => {
  if (check) {
    linkArr.push(data);
    window.localStorage.setItem("link-data", JSON.stringify(linkArr));
  } else {
    // JSON.parse(window.localStorage.getItem("link-data")).map((elem) =>
    //   linkArr.push(elem)
    // );
    linkArr = JSON.parse(window.localStorage.getItem("link-data"));
    linkArr.push(data);
    // window.localStorage.removeItem("link-data");
    window.localStorage.setItem("link-data", JSON.stringify(linkArr));
  }
};

/*
let fastSaveDatad= (value) => window.localStorage.setItem("link-data", JSON.stringify(value))
getData == null || undefined ? linkArr.push(data) + saveDatad(linkArr) 
*/
