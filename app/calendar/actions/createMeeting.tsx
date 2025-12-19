"use server";

import { revalidatePath } from "next/cache";
import { parse, add, formatISO } from "date-fns";
import { fromZonedTime } from "date-fns-tz";
import { initGoogleCalendar } from "./initgoogle"; 
import { getAvailableSlots } from "./get-slots";   

export const createMeeting = async (
  prevState: { message: string } | null,
  formData: FormData
) => {
  const calendar = await initGoogleCalendar();
  const calendarId = process.env.CALENDAR_ID; // <--- Pobranie ID kalendarza
  let message = "";

  const dateString = formData.get("selectedCalendarDate") as string;
  const timeString = formData.get("timetable") as string;
  const description = formData.get("message") as string;
  const invitee = formData.get("email") as string;

  const availableSlots = await getAvailableSlots(dateString);

  if (!timeString || !availableSlots.includes(timeString)) {
    return { message: "Wybrany termin jest nieprawidłowy lub już zajęty." };
  }

  const dateStrForParse = `${dateString} ${timeString}`; 
  const cetDateTime = parse(dateStrForParse, 'yyyy-MM-dd HH:mm', new Date());
  
  // Konwersja czasu lokalnego (Polska/Paryż) na UTC dla Google Calendar
  const utcDate = fromZonedTime(cetDateTime, 'Europe/Warsaw'); 

  const startDateTime = new Date(utcDate.toISOString());
  const endDateTime = add(startDateTime, { minutes: 20 }); // Czas trwania: 20 min

  // 4. Budowa obiektu wydarzenia
  const event = {
    summary: `Spotkanie z: ${invitee}`,
    description: description || "Brak dodatkowego opisu.",
    start: {
      dateTime: formatISO(startDateTime),
      timeZone: "UTC",
    },
    end: {
      dateTime: formatISO(endDateTime),
      timeZone: "UTC",
    },

  };


  try {
    const meeting = await calendar?.events.insert({
      calendarId: calendarId,
      conferenceDataVersion: 1,
      requestBody: event,
    });

    if (meeting?.status === 200) {
      message = "Spotkanie zostało dodane do kalendarza!";
    } else {
      console.error("Google zwróciło błąd:", meeting?.status);
      message = "Wystąpił błąd podczas zapisu wydarzenia.";
    }
  } catch (error) {
    console.error("Błąd API Google:", error);
    message = "Nie udało się połączyć z kalendarzem.";
  }
  
  revalidatePath("/contact");
  
  return { message: message };
};