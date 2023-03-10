const { Router } = require("express");
const router = Router();
const csvFilePath = "files/vibra_challenge.csv";
const csv = require("csvtojson");

router.get("/search", async (req, res) => {
  const { id, name, surname, email, gender, username, city, quantity } =
    req.query;
  const users = await csv({
    noheader: true,
    headers: ["id", "name", "surname", "email", "gender", "username", "city"],
  }).fromFile(csvFilePath);

  try {
    const filteredUsers = users.filter((user) => {
      if (id && user.id !== id) {
        return false;
      }
      if (name && user.name.toLowerCase() !== name.toLowerCase()) {
        return false;
      }
      if (surname && user.surname.toLowerCase() !== surname.toLowerCase()) {
        return false;
      }
      if (email && user.email !== email) {
        return false;
      }
      if (username && user.username.toLowerCase() !== username.toLowerCase()) {
        return false;
      }
      if (city && user.city.toLowerCase() !== city.toLowerCase()) {
        return false;
      }
      if (gender && user.gender.toLowerCase() !== gender.toLowerCase()) {
        return false;
      }
      return true;
    });

    let result = filteredUsers;
    if (gender && filteredUsers.length > 0) {
      result = filteredUsers.filter(
        (user) => user.gender.toLowerCase() === gender.toLowerCase()
      );
    }

    if (quantity && quantity > 0 && result.length > 0) {
      result = result.slice(0, Number(quantity));
    }

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;
