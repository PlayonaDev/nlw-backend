import {
  accessInviteLink
} from "./chunk-36TTR4A4.mjs";
import {
  env
} from "./chunk-QEITFZL7.mjs";

// src/routers/access-invite-link-route.ts
import z from "zod";
var accessInviteLinkRoute = async (app) => {
  app.get(
    "/invites/:subscriberId",
    {
      schema: {
        summary: "Access invite link and redirects users",
        tags: ["referral"],
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          302: z.null()
        }
      }
    },
    async (request, reply) => {
      const { subscriberId } = request.params;
      await accessInviteLink({ subscriberId });
      const redirectUrl = new URL(env.WEB_URL);
      console.log("AccessInvite Link", subscriberId);
      redirectUrl.searchParams.set("referrer", subscriberId);
      return reply.redirect(redirectUrl.toString(), 302);
    }
  );
};

export {
  accessInviteLinkRoute
};
