import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// 2 send per IP every 15 minutes
export const rateLimiter = new Ratelimit({
  redis: new Redis({
    url: import.meta.env.UPSTASH_REDIS_REST_URL,
    token: import.meta.env.UPSTASH_REDIS_REST_TOKEN,
  }),
  limiter: Ratelimit.slidingWindow(2, "15 m"),
  prefix: "contact_form",
});
