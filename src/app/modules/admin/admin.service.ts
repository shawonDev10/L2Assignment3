import { Blog } from "../blog/blog.model";
import { User } from "../user/user.model";

const blockUserFromDB = async (_id: string) => {
  const result = await User.findOneAndUpdate({ _id }, { isBlocked: true });
  return result;
};

const deleteBlogFromDB = async (_id: string) => {
  const result = await Blog.deleteOne({ _id });
  return result;
};

export const adminServices = {
  blockUserFromDB,
  deleteBlogFromDB
};
