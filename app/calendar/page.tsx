"use client";

import {useState, startTransition } from "react";
import { useFormState } from "react-dom";
import { createMeeting } from "./actions/createMeeting";
import { getAvailableSlots } from "./actions/get-slots";
import { DayPicker } from "react-day-picker";
import { format, startOfToday } from "date-fns";
import 'react-day-picker/dist/style.css';
import { WORK_SCHEDULE } from "./data/working";
import { CUSTOM_DAYS } from "./data/custom";
import Hero from "../components/sections/hero-ie";
import { Calendar as CalendarIcon, Clock, Mail, MessageSquare, Loader2, CheckCircle2, AlertCircle,ArrowLeftCircle } from "lucide-react";

export default function BookingPage() {
  const [selected, setSelectedDate] = useState<Date>();
  const [slots, setAvailableSlots] = useState<string[]>();
  const [timetableError, setTimetableError] = useState<string>("");
  const [isTimeTableLoading, setIsTimeTableLoading] = useState(false);
  const isDayOff = (date: Date) => {
  const dateStr = format(date, 'yyyy-MM-dd');
  const dayOfWeek = date.getDay();
  const override = CUSTOM_DAYS[dateStr as keyof typeof CUSTOM_DAYS];
  const schedule = WORK_SCHEDULE.find(d => d.dayOfWeek === dayOfWeek);
  return override ? override.isDayOff : (schedule ? schedule.isDayOff : true);
};
  const isPastDate = (date: Date) => date < startOfToday();
  
  // React 19 / Next.js 15 hook
  const [state, formMeetAction, isPending] = useFormState(createMeeting, { message: "" });

  const handleDayPickerSelect = async (date: Date | undefined) => {
    setTimetableError("");
    
    if (!date) {
      setSelectedDate(undefined);
      setAvailableSlots([]);
    } else {
      const dateStr = format(date, 'yyyy-MM-dd');
      const dayOfWeek = date.getDay();
      
      const override = CUSTOM_DAYS[dateStr as keyof typeof CUSTOM_DAYS];
      const schedule = WORK_SCHEDULE.find(d => d.dayOfWeek === dayOfWeek);
      const isDayOff = override ? override.isDayOff : (schedule ? schedule.isDayOff : true);

      if (date < startOfToday() || isDayOff) {
          setSelectedDate(undefined);
          setAvailableSlots([]);
      } else {
        setSelectedDate(date);
        setIsTimeTableLoading(true);
        try {
          const availableSlots = await getAvailableSlots(format(date, 'yyyy-MM-dd')); 
          setAvailableSlots(availableSlots);
        } catch (error) {
          console.error(error);
          setTimetableError("Błąd pobierania terminów. Spróbuj ponownie.");
        } finally {
          setIsTimeTableLoading(false);
        }
      }
    }
  };

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    if (!formData.get("timetable") || !selected) {
      setTimetableError("Wybierz datę i godzinę spotkania.");
      return;
    }

    formData.set("selectedCalendarDate", format(selected, 'yyyy-MM-dd'));

    startTransition(() => {
      formMeetAction(formData);
    });
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white overflow-x-hidden selection:bg-[#00C7BE]/30">
      
      {/* 1. HERO SECTION */}
      <Hero 
        tile="Book *Consultation* Engineering Call" 
        color="bg-teal-600/30" 
      />
      <div className="border-t border-white/20">

      <div className="max-w-6xl mx-auto px-4 py-20 ">
        
        {/* Kontener Formularza ("Karta Techniczna") */}
        <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {/* Dekoracja tła */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C7BE]/5 blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 p-8 md:p-12">
                
                <div className="mb-10 text-center md:text-left">
                    <a href="/">
                    <ArrowLeftCircle className="w-12 h-12 pb-4 text-gray-500 hover:text-white transition-colors mb-4 inline-block"/>
                    </a>
                    <h2 className="text-3xl font-bold mb-3 tracking-tight">Zarezerwuj Rozmowę</h2>
                    <p className="text-gray-400 max-w-2xl">
                        Wybierz dogodny termin, aby omówić architekturę Twojego systemu lub strategię wdrożenia. 
                        Spotkanie trwa 30-45 minut.
                    </p>
                </div>

                {/* Komunikaty Błędów / Sukcesów */}
                {state?.message && (
                    <div className={`mb-8 p-4 rounded-xl border flex items-center gap-3 ${
                        state.message.includes("Error") || state.message.includes("Failed")
                        ? "bg-red-500/10 border-red-500/20 text-red-400" 
                        : "bg-teal-500/10 border-teal-500/20 text-teal-400"
                    }`}>
                        {state.message.includes("Error") ? <AlertCircle className="w-5 h-5"/> : <CheckCircle2 className="w-5 h-5"/>}
                        <span className="font-mono text-sm">{state.message}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="grid lg:grid-cols-12 gap-12">
                    

                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-black/40 border border-white/10 rounded-2xl p-6">
                            <div className="flex items-center gap-2 mb-4 text-gray-400">
                                <CalendarIcon className="w-4 h-4" />
                                <span className="text-xs font-mono uppercase tracking-widest">Wybierz Datę</span>
                            </div>
                            

                            <style>{`
                                .rdp { margin: 0; --rdp-cell-size: 40px; --rdp-accent-color: #00C7BE; --rdp-background-color: #00C7BE; }
                                .rdp-day_selected:not([disabled]) { background-color: #00C7BE; color: black; font-weight: bold; }
                                .rdp-day_selected:hover:not([disabled]) { background-color: #00C7BE; opacity: 0.8; }
                                .rdp-day:hover:not([disabled]):not(.rdp-day_selected) { background-color: #27272a; }
                                .rdp-caption_label { color: white; font-weight: bold; }
                                .rdp-nav_button { color: gray; }
                                .rdp-nav_button:hover { color: white; }
                                .rdp-head_cell { color: #71717a; font-size: 0.75rem; text-transform: uppercase; }
                                .rdp-day { color: #e4e4e7; }
                                .rdp-day_disabled { opacity: 0.2; }
                                .rdp-button[disabled] { opacity: 0.2; }
                            `}</style>
                            
                            <DayPicker
                                mode="single"
                                required
                                selected={selected}
                                onSelect={handleDayPickerSelect}
                                showOutsideDays={false}
                                className="flex justify-center"
                                modifiers={{
        busy: (date) => isDayOff(date) || isPastDate(date),
    }}
    modifiersStyles={{
        busy: {
            backgroundColor: 'rgba(239, 68, 68, 0.1)', 
            color: '#ef4444', 
            fontWeight: 'bold',
            textDecoration: 'line-through', 
        },
        disabled: {
             // Szary kolor dla dni przeszłych (domyślny "disabled" działa dla dat przed startOfToday)
             opacity: 0.3,
             cursor: 'not-allowed',
        }
    }}

                            />
                            <input
                                name="selectedCalendarDate"
                                type="hidden"
                                value={selected ? format(selected, 'yyyy-MM-dd') : ""}
                            />
                        </div>
                    </div>

                    {/* PRAWA KOLUMNA: GODZINY I DANE */}
                    <div className="lg:col-span-7 space-y-8">
                        
                        {/* 1. Wybór Godziny */}
                        <div>
                            <div className="flex items-center gap-2 mb-4 text-gray-400">
                                <Clock className="w-4 h-4" />
                                <span className="text-xs font-mono uppercase tracking-widest">
                                    {selected ? `Dostępne godziny: ${format(selected, "dd.MM.yyyy")}` : "Najpierw wybierz datę"}
                                </span>
                            </div>

                            <div className="min-h-[180px] bg-black/40 border border-white/10 rounded-2xl p-6">
                                {isTimeTableLoading ? (
                                    <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-3">
                                        <Loader2 className="w-6 h-6 animate-spin text-[#00C7BE]" />
                                        <span className="text-xs font-mono">Pobieranie terminów API...</span>
                                    </div>
                                ) : slots && slots.length > 0 ? (
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                        {slots.map((slot) => (
                                            <label key={slot} className="relative cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    value={slot}
                                                    name="timetable"
                                                    onChange={() => setTimetableError("")}
                                                    className="peer sr-only"
                                                />
                                                <div className="
                                                    px-2 py-3 rounded-lg text-sm font-mono text-center transition-all duration-300
                                                    border border-white/10 bg-white/5 text-gray-300
                                                    hover:border-[#00C7BE]/50 hover:text-white
                                                    peer-checked:border-[#00C7BE] peer-checked:bg-[#00C7BE]/10 peer-checked:text-[#00C7BE] peer-checked:shadow-[0_0_15px_rgba(0,199,190,0.2)]
                                                ">
                                                    {slot}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="h-full flex items-center justify-center text-gray-600 text-sm font-mono border border-dashed border-white/10 rounded-lg">
                                        {selected ? "Brak wolnych terminów w tym dniu." : "Wybierz datę z kalendarza po lewej."}
                                    </div>
                                )}
                                
                                {timetableError && (
                                    <p className="mt-4 text-red-400 text-xs font-mono flex items-center gap-2">
                                        <AlertCircle className="w-3 h-3" /> {timetableError}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* 2. Dane Kontaktowe */}
                        <div className="space-y-4">
                             <div>
                                <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
                                    <Mail className="w-3 h-3" /> Twój Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="abc@firma.pl"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#00C7BE] focus:ring-1 focus:ring-[#00C7BE]/50 transition-all duration-300 font-mono text-sm"
                                />
                            </div>

                            <div>
                                <label className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
                                    <MessageSquare className="w-3 h-3" /> Temat Rozmowy
                                </label>
                                <textarea
                                    name="message"
                                    rows={3}
                                    placeholder="Opisz krótko problem lub cel spotkania..."
                                    className="w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#00C7BE] focus:ring-1 focus:ring-[#00C7BE]/50 transition-all duration-300 text-sm resize-none"
                                ></textarea>
                            </div>
                        </div>

                        {/* 3. Submit Button */}
                        <div className="pt-4 border-t border-white/10">
                            <button
                                type="submit"
                                disabled={isPending || !selected || !slots}
                                className="w-full py-4 rounded-xl font-bold text-black bg-[#00C7BE] hover:bg-[#00e0d6] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(0,199,190,0.2)] hover:shadow-[0_0_30px_rgba(0,199,190,0.4)]"
                            >
                                {isPending ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <Loader2 className="w-5 h-5 animate-spin" /> Przetwarzanie...
                                    </span>
                                ) : (
                                    "Potwierdź Rezerwację"
                                )}
                            </button>
                            <p className="text-center text-gray-600 text-xs mt-3">
                                Po zatwierdzeniu otrzymasz zaproszenie Google Calendar na podany email.
                            </p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}