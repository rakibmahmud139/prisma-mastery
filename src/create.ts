import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //create into db
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title! 2",
  //       content: "This is content....2",
  //       authorName: "Rakib Mahmud",
  //     },
  //   });
  //   console.log(result);

  //create many
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Title 4",
        content: "Content 4",
        authorName: "Author 4",
      },
      {
        title: "Title 5",
        content: "Content 5",
        authorName: "Author 5",
      },
      {
        title: "Title 6",
        content: "Content 6",
        authorName: "Author 6",
      },
    ],
  });

  console.log(createMany);
};

main();
