"use client";

import { useState, useEffect } from 'react';

interface Settings {
  hour12: boolean;
  showSeconds: boolean;
  showDate: boolean;
  dateFormat: 'short' | 'long' | 'full';
  fontSize: 'small' | 'normal' | 'big';
}

const defaultSettings: Settings = {
  hour12: false,
  showSeconds: true,
  showDate: true,
  dateFormat: 'full',
  fontSize: 'normal',
};

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [settings, setSettings] = useState<Settings>(() => {
    const saved = localStorage.getItem('clock-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...defaultSettings, ...parsed };
      } catch {}
    }
    return defaultSettings;
  });
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const updateSetting = (key: keyof Settings, value: Settings[keyof Settings]) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    localStorage.setItem('clock-settings', JSON.stringify(newSettings));
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    ...(settings.showSeconds && { second: 'numeric' }),
    hour12: settings.hour12,
  };
  const formattedTime = time.toLocaleTimeString([], timeOptions);

  const dateOptions: Intl.DateTimeFormatOptions = {
    dateStyle: settings.dateFormat,
  };
  const formattedDate = settings.showDate ? time.toLocaleDateString([], dateOptions) : '';

  const fontSizeClasses = {
    small: { time: 'text-6xl', date: 'text-lg' },
    normal: { time: 'text-8xl', date: 'text-2xl' },
    big: { time: 'text-9xl', date: 'text-3xl' },
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-background">
      {/* Settings Button */}
      <button
        onClick={() => setShowSettings(!showSettings)}
        className="fixed top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors z-20"
        aria-label="Settings"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      </button>

      {/* Settings Popup */}
      {showSettings && (
        <div className="fixed top-16 right-4 bg-card border border-border rounded-lg p-4 shadow-lg z-10 min-w-64">
          <h3 className="text-lg font-semibold mb-3">Clock Settings</h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.hour12}
                onChange={(e) => updateSetting('hour12', e.target.checked)}
              />
              <span>12-hour format</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.showSeconds}
                onChange={(e) => updateSetting('showSeconds', e.target.checked)}
              />
              <span>Show seconds</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={settings.showDate}
                onChange={(e) => updateSetting('showDate', e.target.checked)}
              />
              <span>Show date</span>
            </label>
            <div className="flex items-center space-x-2">
              <span>Date format:</span>
              <select
                value={settings.dateFormat}
                onChange={(e) => updateSetting('dateFormat', e.target.value as Settings['dateFormat'])}
                className="bg-background border border-border rounded px-2 py-1"
              >
                <option value="short">Short</option>
                <option value="long">Long</option>
                <option value="full">Full</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <span>Font size:</span>
              <select
                value={settings.fontSize}
                onChange={(e) => updateSetting('fontSize', e.target.value as Settings['fontSize'])}
                className="bg-background border border-border rounded px-2 py-1"
              >
                <option value="small">Small</option>
                <option value="normal">Normal</option>
                <option value="big">Big</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Clock */}
      <div className="text-center">
        <div className={`${fontSizeClasses[settings.fontSize].time} font-bold text-foreground mb-4`}>
          {formattedTime}
        </div>
        {settings.showDate && (
          <div className={`${fontSizeClasses[settings.fontSize].date} text-muted-foreground`}>
            {formattedDate}
          </div>
        )}
      </div>
    </div>
  );
}