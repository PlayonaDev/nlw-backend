import { redis } from '../redis/client'

//TODO -> Error
interface AccessInviteLinkParams {
  subscriberId: string
}
export async function accessInviteLink({
  subscriberId,
}: AccessInviteLinkParams) {
  await redis.hincrby('referral:access-count', subscriberId, 1)
}
