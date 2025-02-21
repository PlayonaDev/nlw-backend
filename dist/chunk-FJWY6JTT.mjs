import {
  getSubscriberInviteCounts
} from "./chunk-XTHFOC6E.mjs";

// src/routers/get-subscriber-invite-counts-routes.ts
import z from "zod";
var getSubscriberInviteCountsRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/count",
    {
      schema: {
        summary: "Get subscriber invite clicks count",
        tags: ["referral"],
        description: "This route counting the numbers",
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          200: z.object({
            count: z.number()
          })
        }
      }
    },
    async (request) => {
      const { subscriberId } = request.params;
      const { count } = await getSubscriberInviteCounts({ subscriberId });
      return { count };
    }
  );
};

export {
  getSubscriberInviteCountsRoute
};
