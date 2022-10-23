module.exports = (router) => {
  router.route("/").get((req, res) => {
    res.render("index.ejs");
  });

  router.route("/handsomeHack").get((req, res) => {
    res.render("handsomeHack.ejs");
  });

  router.route("/eveStation").get((req, res) => {
    res.render("eveStation.ejs");
  });

  router.route("/kbsc").get((req, res) => {
    res.render("kbsc");
  });
  router.route("/capstone").get((req, res) => {
    res.render("capstone");
  });
};
