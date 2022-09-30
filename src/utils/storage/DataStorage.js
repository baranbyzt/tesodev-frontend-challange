export let SaveData = (data) => {
  window.localStorage.setItem("link-data", JSON.stringify(data));
};
// export let GetData = () => {
//   return window.localStorage.getItem("link-data");
// };
