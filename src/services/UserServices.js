export const getAllUsersService = async () => {
  try {
    const res = await fetch("/api/users");
    return res;
  } catch (error) {
    console.error(error.message);
  }
};
