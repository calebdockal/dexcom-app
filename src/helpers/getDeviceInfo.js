const getDeviceInfo = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  fetch("https://sandbox-api.dexcom.com/v2/users/self");
};
