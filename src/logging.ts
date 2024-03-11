import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log(e);
});

const main = async () => {
  const getAllData = await prisma.post.findMany();

  //   console.log(getAllData);
};

main();
