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

  router.route("/kamp").get((req, res) => {
    res.render("kamp");
  });
  router.route("/goGroomTon3").get((req, res) => {
    res.render("goGroomTon3");
  });
  router.route("/goKoreaTrolling").get((req, res) => {
    res.render("KoreaTrolling");
  });
};
