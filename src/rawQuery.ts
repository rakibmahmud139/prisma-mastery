import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  //const allPosts =
  //await prisma.$queryRaw`SELECT * FROM "posts" where published = 'true'`;

  //console.log(allPosts);

  //delete users all data
  await prisma.$queryRaw`TRUNCATE TABLE "categories" CASCADE`;
};

rawQuery();
