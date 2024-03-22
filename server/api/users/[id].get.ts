import { prisma } from "@/lib/db";
export default defineAdminEventHandler(async (event) => {
  const { id } = getRouterParams(event);
  if (!id) {
    throw createError({
      statusCode: 300,
      statusMessage:
        "ID parameter is missing. Please provide a valid token ID.",
    });
  }
  return await prisma.user.findUnique({ where: { id } });
});
