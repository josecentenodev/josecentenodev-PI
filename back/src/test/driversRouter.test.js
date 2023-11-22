const app = require("../app");
const session = require("supertest");
const agent = session(app);
const { v4: uuid4 } = require("uuid");

describe("Test de RUTAS", () => {
  describe("GET /api/drivers", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/api/drivers");
      expect(response.status).toBe(200);
    });

    it("Responde con un Array de objetos", async () => {
      const response = await agent.get("/api/drivers");
      expect(Array.isArray(response.body)).toBe(true);
    });

    it("Responde un objeto con las propiedades: id, name, image, nationality, teams, description, dob y ref", async () => {
      const response = await agent.get("/api/drivers");
      const randomIndex = Math.floor(Math.random() * 508);
      const driver = response.body[randomIndex];
      expect(driver).toHaveProperty("id");
      expect(driver).toHaveProperty("name");
      expect(driver).toHaveProperty("image");
      expect(driver).toHaveProperty("nationality");
      expect(driver).toHaveProperty("teams");
      expect(driver).toHaveProperty("description");
      expect(driver).toHaveProperty("dob");
      expect(driver).toHaveProperty("driverRef");
    });
  });

  describe("GET /api/drivers/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/api/drivers/1");
      expect(response.status).toBe(200);
    });

    it("Responde un objeto con las propiedades: id, name, image, nationality, teams, description, dob y ref", async () => {
      const driver = (await agent.get("/api/drivers/1")).body;
      expect(driver).toHaveProperty("id");
      expect(driver).toHaveProperty("name");
      expect(driver).toHaveProperty("image");
      expect(driver).toHaveProperty("nationality");
      expect(driver).toHaveProperty("teams");
      expect(driver).toHaveProperty("description");
      expect(driver).toHaveProperty("dob");
      expect(driver).toHaveProperty("driverRef");
    });

    it("Si hay un error responde con status: 404", async () => {
      const response = await agent.get("/api/drivers/900");
      expect(response.status).toBe(404);
    });
  });

  describe('GET /api/drivers/name?="..."', () => {
    it("Responde con status: 200 y lista de conductores", async () => {
      const response = await agent
        .get("/api/drivers")
        .query({ name: "Jo" });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });

    it("Responde con status: 404 para un nombre no existente", async () => {
      const response = await agent
        .get("/api/drivers")
        .query({ name: "NombreInexistente" });
      expect(response.status).toBe(404);
      expect(response.body).toEqual({
        message: "Driver not found",
      });
    });
  });

  describe("POST /api/drivers", () => {
    it("Crea un nuevo driver y responde con status: 201", async () => {
      const newDriver = {
        nombre: "Nuevo Driver",
        apellido: "Equipos",
        imagen: "url_de_la_imagen",
        nacionalidad: "Nacionalidad",
        descripcion: "Descripción del nuevo driver",
        fechaNacimiento: "1990-01-01",
      };

      const response = await agent.post("/api/drivers").send(newDriver);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("id");
      expect(response.body.name).toBe(newDriver.name);
    });
  });

  describe("DELETE /api/drivers/:id", () => {
    it("Responde con status: 200 y mensaje de éxito", async () => {
      // Crear un conductor ficticio para ser eliminado
      const newDriver = (
        await agent.post("/api/drivers").send({
          nombre: "John",
          apellido: "Doe",
          imagen: "url_de_la_imagen",
          nacionalidad: "Estadounidense",
          descripcion: "Descripción del conductor",
          fechaNacimiento: "1990-01-01",
        })
      ).body;

      const response = await agent.delete(`/api/drivers/${newDriver.id}`);
      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: "Conductor eliminado correctamente",
      });
    });

    it("Responde con status: 404 para un ID inexistente", async () => {
      const response = await agent.delete(`/api/drivers/${uuid4()}`);
      expect(response.status).toBe(404);
      expect(response.body).toEqual({ message: "Conductor no encontrado" });
    });
  });
});
