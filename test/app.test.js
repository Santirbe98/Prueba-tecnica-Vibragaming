const request = require("supertest");
const app = require("../index.js");

describe("GET /search", () => {
  it("should return all users if no query params are provided", async () => {
    const response = await request(app).get("/search");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
  it("Should return only one user when provides an id", async () => {
    const response = await request(app).get("/search?id=25");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].id).toBe("25");
  });
  it("Should return an empty array if the id does not exist", async () => {
    const response = await request(app).get("/search?id=9999");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(0);
    expect(response.body).toEqual([]);
  });
  it("Should return all user that has the same name as the specified parameter", async () => {
    const response = await request(app).get("/search?name=walt");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    response.body.forEach((user) => {
      expect(user.name.toLowerCase()).toBe("walt");
    });
  });
  it("Should return all user that has the same surname as the specified parameter", async () => {
    const response = await request(app).get("/search?surname=Tilliards");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    response.body.forEach((user) => {
      expect(user.surname.toLowerCase()).toBe("tilliards");
    });
  });
  it("Should return the user that has the same email as the specified parameter", async () => {
    const response = await request(app).get(
      "/search?email=reldershawh@xing.com"
    );
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    expect(response.body[0].email).toBe("reldershawh@xing.com");
  });
  it("Should return the user that has the same city as the specified parameter", async () => {
    const response = await request(app).get("/search?city=Santa Rosa del Sara");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0].city.toLowerCase()).toBe("santa rosa del sara");
  });
  it("Should return the user that has the same username as the specified parameter", async () => {
    const response = await request(app).get("/search?username=Jayo");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
    response.body.forEach((user) => {
      expect(user.username.toLowerCase()).toBe("jayo");
    });
  });
  it("should return the number of users according to the specified number.", async () => {
    const response = await request(app).get("/search?quantity=8");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(8);
  });
  afterAll((done) => {
    app.close(done);
  });
});
