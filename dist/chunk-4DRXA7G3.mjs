import {
  subsribeToEvent
} from "./chunk-MTRQNP6I.mjs";

// src/routers/subscribe-to-event-route.ts
import z from "zod";
var subscribeToEventRoute = async (app) => {
  app.post(
    "/subscriptions",
    {
      schema: {
        summary: "Subscribes someone to the event",
        tags: ["Subscription"],
        description: "Test",
        body: z.object({
          name: z.string(),
          email: z.string().email(),
          referrer: z.string().nullish()
        }),
        response: {
          201: z.object({
            subscriberId: z.string()
          })
        }
      }
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body;
      const { subscriberId } = await subsribeToEvent({
        name,
        email,
        referrerId: referrer
      });
      return reply.status(201).send({
        subscriberId
      });
    }
  );
};

export {
  subscribeToEventRoute
};
