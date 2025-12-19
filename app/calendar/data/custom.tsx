export const CUSTOM_DAYS = {
  // PRZYKŁAD 1: Wigilia (specjalne godziny, mimo że to np. środa)
  "2025-12-24": {
    isDayOff: false,
    slots: ["09:00", "10:00", "11:00"]
  },

  "2026-01-01": {
    isDayOff: true,
    slots: []
  },

}