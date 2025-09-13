import { authOptions } from "./options";
import { getServerSession } from "next-auth";

export function getSession() {
  return getServerSession(authOptions);
}
