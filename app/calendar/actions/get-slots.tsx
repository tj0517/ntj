"use server"; 
import { calendar_v3 as googleCalendar } from "googleapis"; // Alias, aby pasował do Twojego kodu
import { parse, add, isBefore, isAfter, format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

// Zmień ścieżki na te, gdzie faktycznie trzymasz te funkcje:
import { initGoogleCalendar } from "./initgoogle"
import { buildDateSlots } from "./meet-action";

const calendarId = process.env.CALENDAR_ID;

export const getAvailableSlots = async (date: string) => {
  const calendar = await initGoogleCalendar();

  const dayDate = parse(date, 'yyyy-MM-dd', new Date())
  const response = await calendar?.events.list({
    calendarId: calendarId,
    eventTypes: ["default"],
    timeMin: dayDate.toISOString(),
    timeMax: add(dayDate, { days: 1 }).toISOString(),
    singleEvents: true,
    orderBy: 'startTime',
  })

  const events = response?.data?.items || [];
  const dateSlots = await buildDateSlots(dayDate);

  const availableSlots = dateSlots.filter(slot => {
    const slotEnd = add(slot, { minutes: 20 });
    
    // Check if this slot conflicts with any existing event
    const hasConflict = events.some((event: googleCalendar.Schema$Event) => {
      const eventStart = new Date(event.start?.dateTime || '');
      const eventEnd = new Date(event.end?.dateTime || '');
      return isBefore(slot, eventEnd) && isAfter(slotEnd,eventStart)
    });

    return !hasConflict;
  });

  // Convert available Date objects to string time slots
  return availableSlots.map(slot => {
    return format(toZonedTime(slot, 'Europe/Paris'), 'HH:mm')
  });

};