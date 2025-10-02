import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = new Hono();

app.get("/", async (c) => {
  const elo = await prisma.user.findMany();
  console.log(elo);

  return c.json(elo, { status: 200 });
});

app.get("/:name/:age/:location", (c) => {
  const elo = c.req.param();
  console.log(elo);

  return c.json(elo);
});

export default app;
