const app = require("../app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /drivers", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get('/api/drivers');
      console.log(response)
      expect(response.status).toBe(200);
    });

    it("Responde con un Array de objetos", async () => {
      const response = await agent.get('/api/drivers');
      expect(Array.isArray(response.body)).toBe(true);
    });

    it("Responde un objeto con las propiedades: id, name, image, nationality, teams, description, dob y ref", async () => {
      const response = await agent.get('/api/drivers');
      const driver = response.body[0];
      expect(driver).toHaveProperty('id');
      expect(driver).toHaveProperty('name');
      expect(driver).toHaveProperty('image');
      expect(driver).toHaveProperty('nationality');
      expect(driver).toHaveProperty('teams');
      expect(driver).toHaveProperty('description');
      expect(driver).toHaveProperty('dob');
      expect(driver).toHaveProperty('driverRef');
    });
  });
});