import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 4,
  //     },
  //     data: {
  //       title: "title 4",
  //       content: "content 4",
  //       authorName: "author 4",
  //     },
  //   });

  //   const updateMany = await prisma.post.updateMany({
  //     where: {
  //       title: "Title 1",
  //     },
  //     data: {
  //       published: true,
  //     },
  //   });

  //   console.log(updateMany);

  //upsert data
  const upsertData = await prisma.post.upsert({
    where: {
      id: 7,
    },
    update: {
      authorName: "Rakib",
    },
    create: {
      title: "Title 2",
      content: "Content 2",
    },
  });

  console.log(upsertData);
};

updates();
