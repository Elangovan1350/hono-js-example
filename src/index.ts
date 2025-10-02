import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = new Hono();

app.get("/:name/:age/:location", (c) => {
  const elo = c.req.param();
  console.log(elo);

  return c.json(elo);
});

export default app;
