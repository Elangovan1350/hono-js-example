import { Hono } from "hono";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = new Hono();

app.get("/:name/:age/:location", (c) => {
  const elo = c.req.param();
  console.log(elo);

  return c.json(elo);
});
app.post("/", async (c) => {
  const age = await c.req.json();
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@pr.io",
      posts: {
        create: { title: "Join us for Prisma Day 2020" },
      },
    },
  });
  console.log(user);

  return c.json({ message: user });
});

export default app;
