import { prisma } from "@/lib/db";
export default defineAdminEventHandler(async (event) => {
  return await prisma.user.findMany({});
});
