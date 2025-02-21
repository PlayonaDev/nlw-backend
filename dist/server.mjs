import {
  getSubscriberRankingPositionRoute
} from "./chunk-3YEGQ2BJ.mjs";
import {
  subscribeToEventRoute
} from "./chunk-4DRXA7G3.mjs";
import "./chunk-OPRWD5AX.mjs";
import "./chunk-MTRQNP6I.mjs";
import {
  accessInviteLinkRoute
} from "./chunk-XWCU5GGE.mjs";
import "./chunk-36TTR4A4.mjs";
import {
  getRankingRoute
} from "./chunk-WLI3EJWH.mjs";
import "./chunk-K5QKNSM2.mjs";
import "./chunk-XVJ2C6ES.mjs";
import "./chunk-5OAAD53O.mjs";
import {
  getSubscriberInviteClicksRoute
} from "./chunk-4KRH76MW.mjs";
import "./chunk-Z6ARHBCK.mjs";
import {
  getSubscriberInviteCountsRoute
} from "./chunk-FJWY6JTT.mjs";
import "./chunk-XTHFOC6E.mjs";
import "./chunk-BO77YDHI.mjs";
import {
  env
} from "./chunk-QEITFZL7.mjs";

// src/server.ts
import { fastifyCors } from "@fastify/cors";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import { fastify } from "fastify";
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler
} from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);
app.register(fastifyCors);
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: "NLW Connect",
      version: "0.0.1"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.register(subscribeToEventRoute);
app.register(accessInviteLinkRoute);
app.register(getSubscriberInviteClicksRoute);
app.register(getSubscriberInviteCountsRoute);
app.register(getSubscriberRankingPositionRoute);
app.register(getRankingRoute);
app.listen({ port: env.PORT }).then(() => {
  console.log("HTTP server running!");
});
