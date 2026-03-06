"use client";

import { useEffect, useState } from "react";

type Weather = {
  temp: number;
  code: number;
  city?: string;
};

export default function WeatherTime() {
  const [time, setTime] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);

  // live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 30000);

    return () => clearInterval(interval);
  }, []);

  // location + weather
  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        try {
          // get city
          const geoRes = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
          );

          const geoData = await geoRes.json();

          const city =
            geoData.city || geoData.locality || geoData.principalSubdivision;

          // get weather
          const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
          );

          const weatherData = await weatherRes.json();

          setWeather({
            temp: weatherData.current_weather.temperature,
            code: weatherData.current_weather.weathercode,
            city: city,
          });
        } catch (error) {
          console.error("Weather fetch error", error);
        }
      },
      async () => {
        // fallback Cluj
        try {
          const weatherRes = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=46.77&longitude=23.59&current_weather=true"
          );

          const weatherData = await weatherRes.json();

          setWeather({
            temp: weatherData.current_weather.temperature,
            code: weatherData.current_weather.weathercode,
            city: "Cluj-Napoca",
          });
        } catch (error) {
          console.error("Fallback weather error", error);
        }
      }
    );
  }, []);

  const WeatherIcon = getWeatherIcon(weather?.code);

  return (
    <div className="fixed top-6 right-6 flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 hover:scale-102 transition-all duration-500">
      {weather?.city && <span>{weather.city}</span>}

      {weather && (
        <>
          <img src={WeatherIcon} alt="weather" className="w-4 h-4" />
          <span>{weather.temp}°C</span>
          <img src="/clock-color.svg" alt="Clock" className="h-4 w-4 text-neutral-500 hover:text-neutral-800 transition-colors duration-200" />
          <span>{time}</span>
        </>
      )}
    </div>
  );
}

function getWeatherIcon(code?: number) {
  if (code === undefined) return "/weather/partly.svg";

  if (code === 0) return "/weather/sun.svg";
  if (code <= 3) return "/weather/partly.svg";
  if (code <= 48) return "/weather/cloud.svg";
  if (code <= 67) return "/weather/rain.svg";
  if (code <= 77) return "/weather/snow.svg";
  if (code <= 99) return "/weather/storm.svg";

  return "/weather/partly.svg";
}