const { Router } = require("express");
const router = Router();
const csvFilePath = "files/vibra_challenge.csv";
const csv = require("csvtojson");

router.get("/search", async (req, res) => {
  let users = await csv({
    noheader: true,
    headers: ["id", "name", "surname", "email", "gender", "username", "city"],
  })
    .fromFile(csvFilePath)
    .then((jsonObj) => {
      return jsonObj;
    });
  try {
    const { id, name, surname, email, gender, username, city, quantity } =
      req.query;
    const filterUserExact = users.filter((u) => {
      if (id) return u.id === id;
      if (name) return u.name.toLowerCase() === name.toLowerCase();
      if (surname) return u.surname.toLowerCase() === surname.toLowerCase();
      if (email) return u.email === email;
      if (username) return u.username.toLowerCase() === username.toLowerCase();
      if (city) return u.city.toLowerCase() === city.toLowerCase();
    });
    if (filterUserExact.length > 0) return res.json(filterUserExact);
    if (gender) {
      const filterUserGender = users.filter(
        (u) => u.gender.toLowerCase() === gender.toLowerCase()
      );

      if (quantity > 0) {
        let userSlice = filterUserGender.slice(0, Number(quantity));
        return res.json(userSlice);
      }
      return res.json(filterUserGender);
    }
    res.json(users);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
