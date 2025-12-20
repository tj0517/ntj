"use client"; // Ważne w Next.js

import { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"; // Dodałem Loader2

export function ContactForm() {
  const [activeType, setActiveType] = useState("external");
  
  // 1. Stan dla danych formularza
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // 2. Stan wysyłania (UX)
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  // 3. Kolory zależne od typu (Twoja logika)
  const activeBorder = activeType === "external" ? "focus:border-blue-500" : "focus:border-cyan-500";
  const activeBg = activeType === "external" ? "bg-blue-600" : "bg-cyan-600";

  // 4. Obsługa wpisywania
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 5. Obsługa wysyłki
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");


    const response = await fetch("https://formspree.io/f/xzdprrdw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        ...formData, 
        typ_uslugi: activeType // Dodajemy wybrany przycisk do danych
      }),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Błąd wysyłania.");
      setStatus("idle");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative space-y-6">
      
      {/* Wybór ścieżki (Internal / External) - BEZ ZMIAN */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button
          type="button"
          onClick={() => setActiveType("external")}
          className={`p-4 rounded-xl border text-left transition-all duration-300 ${
            activeType === "external" 
              ? "bg-blue-600/10 border-blue-500 text-white" 
              : "bg-transparent border-white/10 text-gray-500 hover:border-white/30"
          }`}
        >
          <div className="font-bold text-sm mb-1">Wizerunek</div>
          <div className="text-xs opacity-70">Marketing & Technologia</div>
        </button>
        <button
          type="button"
          onClick={() => setActiveType("internal")}
          className={`p-4 rounded-xl border text-left transition-all duration-300 ${
            activeType === "internal" 
              ? "bg-cyan-600/10 border-cyan-500 text-white" 
              : "bg-transparent border-white/10 text-gray-500 hover:border-white/30"
          }`}
        >
          <div className="font-bold text-sm mb-1">Optymalizacja</div>
          <div className="text-xs opacity-70">Systemy & Logika</div>
        </button>
      </div>

      {/* Pola formularza - DODANO name, value, onChange, required */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Imię i Nazwisko</label>
          <input 
            type="text" 
            name="name" // Ważne
            value={formData.name} // Ważne
            onChange={handleChange} // Ważne
            required // Prosta walidacja HTML
            disabled={status === "loading" || status === "success"}
            className={`w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-transparent transition-all duration-300 ${activeBorder} disabled:opacity-50`}
          />
        </div>
        
        <div>
          <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Email Firmowy</label>
          <input 
            type="email" 
            name="email" // Ważne
            value={formData.email} // Ważne
            onChange={handleChange} // Ważne
            required
            disabled={status === "loading" || status === "success"}
            className={`w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-transparent transition-all duration-300 ${activeBorder} disabled:opacity-50`}
          />
        </div>

        <div>
          <label className="block text-xs font-mono text-gray-500 uppercase mb-2">Opisz wyzwanie</label>
          <textarea 
            rows={4}
            name="message" // Ważne
            value={formData.message} // Ważne
            onChange={handleChange} // Ważne
            required
            disabled={status === "loading" || status === "success"}
            className={`w-full bg-black/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-700 focus:outline-none focus:ring-1 focus:ring-transparent transition-all duration-300 ${activeBorder} disabled:opacity-50`}
          />
        </div>
      </div>

      {/* Submit Button - Obsługa Stanów */}
      <button 
        type="submit"
        disabled={status === "loading" || status === "success"}
        className={`w-full overflow-clip py-4 mt-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative disabled:opacity-80 disabled:hover:scale-100`}
      >
        {/* Tło przycisku */}
        <div className={`absolute -top-20 -left-12 blur-xl w-32 h-32 rounded-full opacity-30 pointer-events-none ${activeBg}`}></div>
        <div className={`absolute -bottom-20 -right-12 blur-xl w-32 h-32 rounded-full opacity-30 pointer-events-none ${activeBg}`}></div>
        
        {/* Warunkowe wyświetlanie treści */}
        {status === "idle" && (
            <>Wyślij Zgłoszenie <ArrowRight className="w-5 h-5" /></>
        )}
        
        {status === "loading" && (
            <><Loader2 className="w-5 h-5 animate-spin" /> Wysyłanie...</>
        )}

        {status === "success" && (
            <><CheckCircle2 className="w-5 h-5 text-green-400" /> Wysłano pomyślnie!</>
        )}
      </button>
      
      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
        <CheckCircle2 className="w-3 h-3" /> Odpisujemy w max. 24h
      </div>

    </form>
  );
}