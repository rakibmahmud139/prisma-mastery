import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  //find avg of age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  //find sum of age
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  //find count
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
  });

  //find numbers of records
  const countData = await prisma.user.count();

  //find min age
  const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  //find max age
  const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  console.log(maxAge);
};

aggregates();
