import { google } from "googleapis";

const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/calendar.events",
];

// Funkcja musi być eksportowana, żebyś mógł jej użyć w getAvailableSlots
export const initGoogleCalendar = async () => {
  try {
    // 1. Pobieranie klucza prywatnego
    // Bardzo ważne: .replace(/\\n/g, '\n') naprawia problem, gdzie znaki nowej linii
    // są źle odczytywane z pliku .env jako zwykły tekst "\\n".

    
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!privateKey) {
      throw new Error("Missing GOOGLE_PRIVATE_KEY in environment variables");
    }

    const credentials = {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: privateKey,
      project_id: process.env.GOOGLE_PROJECT_ID, 
    };

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: SCOPES,
    });

    const calendar = google.calendar({ version: "v3", auth });

    return calendar;
  } catch (error) {
    console.error("Error initializing Google Calendar API:", error);
    return null; // Zwracamy null w przypadku błędu, żeby obsłużyć to wyżej
  }
};