import { BetterAuthPlugin } from "better-auth";

export const Addfield = () => {
  return {
    id: "my-plugin",
    schema: {
      user: {
        fields: {
          role: {
            type: "string",
          },
          schoolId: {
            type: "string",
          },
        },
      },
    },
  } satisfies BetterAuthPlugin;
};
