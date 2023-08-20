import { PrismaClient, Profile, User } from "@prisma/client";
const prisma = new PrismaClient();
const createUserService = async (data: User): Promise<User> => {
  const newUser = await prisma.user.create({
    data,
  });
  return newUser;
};

const insertUserProfile = async (data: Profile): Promise<Profile> => {
  const isExist = await prisma.profile.findUnique({
    where: {
      userId: data.userId,
    },
  });
  if (isExist) {
    const result = await prisma.profile.update({
      where: {
        userId: data.userId,
      },
      data: {
        bio: data.bio,
      },
    });

    return result;
  }

  const result = await prisma.profile.create({
    data,
  })

  return result
};


const getUsers = async (): Promise<User[]> => {
  const users = await prisma.user.findMany({
    include: {
      Profile: true
    }
  });
  return users;
}

const getUserById=async(id:number)=>{
  const user=await prisma.user.findUnique({
    where:{
      id
    },
    include:{
      Profile:true
    }
  })
  return user
}

export const userService = {
  createUserService,
  insertUserProfile,
  getUsers,getUserById
};
