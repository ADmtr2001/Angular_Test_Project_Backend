import bcrypt from "bcrypt";

const comparePassword = async (
  candidatePassword: string,
  userPassword: string
) => {
  const isMatch = await bcrypt.compare(candidatePassword, userPassword);
  return isMatch;
};

export default comparePassword;
