import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "title",
          },
        },
        {
          published: true,
        },
      ],
    },
  });

  const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "title",
          },
        },
      ],
    },
  });

  const startsWith = await prisma.user.findMany({
    where: {
      email: {
        startsWith: "r", //endsWith, equals, contains
      },
    },
  });

  const userNameArray = ["rakib", "rakib2", "rakib4"];

  const userNamesByArray = await prisma.user.findMany({
    where: {
      username: {
        in: userNameArray,
      },
    },
  });

  const inDepthData = await prisma.user.findMany({
    where: {
      id: 1,
    },
    include: {
      post: {
        include: {
          postCategory: true,
        },
      },
    },
  });
  console.dir(inDepthData, { depth: Infinity });
};

filtering();
