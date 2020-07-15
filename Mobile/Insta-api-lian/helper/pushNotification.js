module.exports = {
  sendNotification: (data) => {
    let headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: "Basic YzdmMjBlZDAtN2Y2YS00OTBhLThhYjYtNjU1YWE0YTlhM2U1",
    };
    let options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers,
    };
    const https = require("https");
    let req = https.request(options, function (res) {
      res.on("data", function (data) {
        console.log("Response:");
        console.log(JSON.parse(data));
      });
    });
    req.on("error", function (e) {
      console.log("ERROR:");
      console.log(e);
    });
    req.write(JSON.stringify(data));
    req.end();
  },
  app_id: "24a4d692-9c95-40a0-a52c-6d293e77c1d0",
};
