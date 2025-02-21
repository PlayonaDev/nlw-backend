import {
  redis
} from "./chunk-BO77YDHI.mjs";

// src/functions/get-subscriber-invite-count.ts
async function getSubscriberInviteCounts({
  subscriberId
}) {
  const count = await redis.zscore("referral:ranking", subscriberId);
  return { count: count ? Number.parseInt(count) : 0 };
}

export {
  getSubscriberInviteCounts
};
