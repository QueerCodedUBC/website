import type {
  Event,
  Date as EventDateType,
  Time as EventTimeType,
} from "@/types/Event";

export function eventDateTimeToDate(
  date: EventDateType,
  time: EventTimeType
): Date {
  return new Date(
    date.year,
    date.month - 1,
    date.day,
    time.hour,
    time.minute,
    0,
    0
  );
}

export function eventStartToDate(event: Event): Date {
  return eventDateTimeToDate(event.date, event.startTime);
}

/**
 * Can be used in Array.sort to sort events by start time earliest to latest
 */
export function compareEventStart(a: Event, b: Event): number {
  return eventStartToDate(a).getTime() - eventStartToDate(b).getTime();
}

export function isEventInFuture(event: Event): boolean {
  return eventStartToDate(event).getTime() > Date.now();
}
