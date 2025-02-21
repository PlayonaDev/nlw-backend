import {
  getSubscriberRankingPosition
} from "./chunk-OPRWD5AX.mjs";

// src/routers/get-subscriber-ranking-position-route.ts
import z from "zod";
var getSubscriberRankingPositionRoute = async (app) => {
  app.get(
    "/subscribers/:subscriberId/ranking/position",
    {
      schema: {
        summary: "Get subscriber ranking position",
        tags: ["referral"],
        description: "This route counting the numbers",
        params: z.object({
          subscriberId: z.string()
        }),
        response: {
          200: z.object({
            position: z.number().nullable()
          })
        }
      }
    },
    async (request) => {
      const { subscriberId } = request.params;
      const { position } = await getSubscriberRankingPosition({
        subscriberId
      });
      return { position };
    }
  );
};

export {
  getSubscriberRankingPositionRoute
};
