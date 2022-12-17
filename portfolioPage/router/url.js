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
    res.redirect("https://blog.naver.com/zerosugarcoke/222914901390");
  });
  router.route("/goGroomTon3").get((req, res) => {
    res.redirect("https://www.notion.so/8fc237d71f874327a32899cb326025b5");
  });
  router.route("/goKoreaTrolling").get((req, res) => {
    res.render("KoreaTrolling");
  });
};
