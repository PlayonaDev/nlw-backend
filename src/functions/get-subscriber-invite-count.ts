import { redis } from '../redis/client'

interface getSubscriberInviteCountsParams {
  subscriberId: string
}

export async function getSubscriberInviteCounts({
  subscriberId,
}: getSubscriberInviteCountsParams) {
  const count = await redis.zscore('referral:ranking', subscriberId)

  return { count: count ? Number.parseInt(count) : 0 }
}
