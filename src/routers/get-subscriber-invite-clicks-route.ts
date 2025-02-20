import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { env } from '../env'
import { accessInviteLink } from '../functions/access-invite-link'
import { getSubscriberInviteClicks } from '../functions/get-subscriber-invites-clicks'
export const getSubscriberInviteClicksRoute: FastifyPluginAsyncZod =
  async app => {
    app.get(
      '/subscribes/:subscriberId/ranking/clicks',
      {
        schema: {
          summary: 'Get subscriber invite clicks count',
          tags: ['Referral'],
          description: 'Test',
          params: z.object({
            subscriberId: z.string(),
          }),
          response: {
            200: z.object({
              count: z.number(),
            }),
          },
        },
      },
      async (request, reply) => {
        const { subscriberId } = request.params

        const { count } = await getSubscriberInviteClicks({ subscriberId })

        return { count }
      }
    )
  }
