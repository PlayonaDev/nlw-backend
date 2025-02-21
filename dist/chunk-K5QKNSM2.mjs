import {
  db
} from "./chunk-XVJ2C6ES.mjs";
import {
  subscriptions
} from "./chunk-5OAAD53O.mjs";
import {
  redis
} from "./chunk-BO77YDHI.mjs";

// src/functions/get-ranking.ts
import { inArray } from "drizzle-orm";
async function getRanking() {
  const ranking = await redis.zrevrange("referral:ranking", 0, 2, "WITHSCORES");
  const subscriberIdAndScore = {};
  for (let i = 0; i < ranking.length; i += 2) {
    subscriberIdAndScore[ranking[i]] = Number.parseInt(ranking[i + 1]);
  }
  const subscribers = await db.select().from(subscriptions).where(inArray(subscriptions.id, Object.keys(subscriberIdAndScore)));
  const rankingWithScore = subscribers.map((subscribers2) => {
    return {
      id: subscribers2.id,
      name: subscribers2.name,
      score: subscriberIdAndScore[subscribers2.id]
    };
  }).sort((sub1, sub2) => {
    return sub2.score - sub1.score;
  });
  console.log(rankingWithScore);
  return { rankingWithScore };
}

export {
  getRanking
};
