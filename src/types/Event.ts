import type { ImageMetadata } from "astro";
import { z } from "zod";

export const CoverSchema = z.object({
  src: z.custom<ImageMetadata>(),
  /**
   * @default "center"
   */
  position: z.enum(["top", "bottom", "left", "right", "center"]).optional(),
  dominantColor: z.union([z.string(), z.promise(z.string())]),
});
export type Cover = z.infer<typeof CoverSchema>;

export const DateSchema = z.object({
  year: z.number(),
  /**
   * The month number, starting from 1 for January
   */
  month: z.number(),
  day: z.number(),
});
export type Date = z.infer<typeof DateSchema>;

export const TimeSchema = z.object({
  hour: z.number(),
  minute: z.number(),
});
export type Time = z.infer<typeof TimeSchema>;

export const EventSchema = z.object({
  cover: CoverSchema.optional(),

  name: z.string(),
  description: z.string().optional(),

  // we'll assume that events don't span multiple days
  date: DateSchema,
  startTime: TimeSchema,
  endTime: TimeSchema,

  location: z.string(),

  signupLink: z.string().optional(),
});
export type Event = z.infer<typeof EventSchema>;
