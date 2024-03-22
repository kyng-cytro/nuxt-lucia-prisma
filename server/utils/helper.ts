import type { EventHandler, EventHandlerRequest } from "h3";

export const defineAuthenticatedEventHandler = <
  T extends EventHandlerRequest,
  D,
>(
  handler: EventHandler<T, D>,
): EventHandler<T, D> =>
  defineEventHandler<T>(async (event) => {
    try {
      const user = event.context.user;
      if (!user) {
        throw createError({
          statusCode: 401,
          statusMessage:
            "User is not logged in. Please log in to access this resource.",
        });
      }

      return handler(event);
    } catch {
      throw createError({
        statusCode: 403,
        statusMessage: "You do not have permission to access this reasource.",
      });
    }
  });

export const defineAdminEventHandler = <T extends EventHandlerRequest, D>(
  handler: EventHandler<T, D>,
): EventHandler<T, D> =>
  defineEventHandler<T>(async (event) => {
    try {
      const user = event.context.user;
      if (!user) {
        throw createError({
          statusCode: 401,
          statusMessage:
            "User is not logged in. Please log in to access this resource.",
        });
      }

      if (user.role !== "admin") {
        throw createError({
          statusCode: 403,
          statusMessage: "You do not have permission to access this reasource.",
        });
      }

      return handler(event);
    } catch {
      throw createError({
        statusCode: 403,
        statusMessage: "You do not have permission to access this reasource.",
      });
    }
  });
