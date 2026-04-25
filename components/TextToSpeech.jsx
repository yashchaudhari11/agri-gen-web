'use client';

import { useState, useRef } from 'react';
import { useLocale } from 'next-intl';

const langVoiceMap = {
  en: 'en-IN',
  hi: 'hi-IN',
  mr: 'mr-IN',
};

export default function TextToSpeech({ text, className = '' }) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const locale = useLocale();
  const utteranceRef = useRef(null);

  const toggleSpeech = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = langVoiceMap[locale] || 'en-IN';
    utterance.rate = 0.9;
    utterance.pitch = 1;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  return (
    <button
      onClick={toggleSpeech}
      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 touch-target ${
        isSpeaking
          ? 'bg-harvest-gold text-earth-brown shadow-md'
          : 'bg-cream text-kisan-green hover:bg-cream-dark'
      } ${className}`}
      aria-label={isSpeaking ? 'Stop listening' : 'Listen to text'}
      title={isSpeaking ? 'Stop' : 'Listen'}
    >
      <span className="material-symbols-outlined text-lg">
        {isSpeaking ? 'stop_circle' : 'volume_up'}
      </span>
      <span className="hidden sm:inline">
        {isSpeaking ? '⏹' : '🔊'}
      </span>
    </button>
  );
}
