import { DefaultSession } from "next-auth";

interface User {
  name?: string | null;
  email?: string | null;
  picture?: string | null;
  image?: string | null;
  accessToken?: string | null;
}

export interface Session extends Omit<DefaultSession, "user"> {
  user?: User;
  expires: string;
}