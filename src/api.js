const url = "https://api.jsonbin.io/b/605295617ea6546cf3e18655";

function getAssets() {
  return fetch(`${url}`).then((res) => res.json());
}

export default {
  getAssets,
};
