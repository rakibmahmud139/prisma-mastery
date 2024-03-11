import { PrismaClient, UserRole } from "@prisma/client";

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
  // const createMany = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "Title 4",
  //       content: "Content 4",
  //       authorName: "Author 4",
  //     },
  //     {
  //       title: "Title 5",
  //       content: "Content 5",
  //       authorName: "Author 5",
  //     },
  //     {
  //       title: "Title 6",
  //       content: "Content 6",
  //       authorName: "Author 6",
  //     },
  //   ],
  // });

  // console.log(createMany);

  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "rakib2",
  //     email: "rakib@gmail.com",
  //     role: UserRole.user,
  //   },
  // });

  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "This is bio",
  //     userId: 1,
  //   },
  // });

  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "Software Engineering",
  //   },
  // });

  const createPost = await prisma.post.create({
    data: {
      title: "This is title",
      content: "This is content of the post",
      authorId: 1,
      postCategory: {
        create:
          // {
          //   categoryId: 3,

          //   // category: {
          //   //   connect: {
          //   //     id: 1,
          //   //   },
          //   // },
          // },
          [
            {
              categoryId: 1,
            },
            {
              categoryId: 2,
            },
            {
              categoryId: 3,
            },
          ],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};

main();
