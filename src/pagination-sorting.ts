import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const paginationSorting = async () => {
  //offsetPagination
  //   const offsetPagination = await prisma.post.findMany({
  //     skip: 2,
  //     take: 4,
  //   });

  //   console.log(offsetPagination);

  //cursor based pagination
  const cursorBasedPagination = await prisma.post.findMany({
    skip: 2,
    take: 4,
    cursor: {
      id: 15,
    },
  });

  //   console.log(cursorBasedPagination);

  //sorting
  const sortedData = await prisma.post.findMany({
    orderBy: {
      title: "desc",
    },
  });

  console.log(sortedData);
};

paginationSorting();
