export const CheckIndexedDb = () => {
  if (!window["indexedDB"]) {
    alert("try in new browser");
    // navigate to try in new browser
  }
};
