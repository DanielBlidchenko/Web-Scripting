"use client";
import { useEffect, useState } from "react";


type Current = {
  temp_f: number;
  feelslike_f: number;
  humidity: number;
  wind_mph: number;
  condition: { text: string; icon: string };
};

type WeatherAPIResponse = {
  location: { name: string };
  current: Current;
  error?: { message: string };
};

const API_KEY = process.env.NEXT_PUBLIC_WAPI_KEY;

export default function WeatherPage() {
  const [city, setCity] = useState("Miami");
  const [data, setData] = useState<WeatherAPIResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // call the API
  async function fetchWeather(targetCity: string) {
    if (!API_KEY) {
      setErr("Missing API key. Add NEXT_PUBLIC_WAPI_KEY to .env.local");
      return;
    }

    setLoading(true);
    setErr("");
    setData(null);

    try {
      const url =
        `https://api.weatherapi.com/v1/current.json` +
        `?key=${API_KEY}&q=${encodeURIComponent(targetCity)}&aqi=no`;

      const res = await fetch(url);
      const json: WeatherAPIResponse = await res.json();

      // console log 
      console.log("Weather data:", json);

      if (!res.ok || (json as any).error) {
        const msg = (json as any).error?.message || "Failed to fetch weather.";
        setErr(msg);
      } else {
        setData(json);
      }
    } catch (e) {
      setErr("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchWeather(city);
  }, []);

  
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetchWeather(city);
  }

  return (
    <main className="p-6 max-w-md mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">Weather Checker</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 justify-center mb-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="border rounded px-3 py-2 w-2/3"
        />
        <button
          type="submit"
          disabled={loading}
          className="border px-3 py-2 rounded disabled:opacity-60"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      
      {loading && <p className="text-sm">Loading...</p>}
      {err && <p className="text-red-400 text-sm">{err}</p>}

      {data && (
        <div className="border rounded p-4 mt-4 text-left">
          <div className="flex items-center gap-3 mb-2">
        
            <img
              src={`https:${data.current.condition.icon}`}
              alt={data.current.condition.text}
              className="w-12 h-12"
            />
            <div>
              <div className="text-lg font-semibold">
                {data.location.name}
              </div>
              <div className="text-sm">{data.current.condition.text}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="border rounded p-2">
              <div className="font-medium">Temp</div>
              <div>{Math.round(data.current.temp_f)} °F</div>
            </div>
            <div className="border rounded p-2">
              <div className="font-medium">Feels like</div>
              <div>{Math.round(data.current.feelslike_f)} °F</div>
            </div>
            <div className="border rounded p-2">
              <div className="font-medium">Humidity</div>
              <div>{data.current.humidity}%</div>
            </div>
            <div className="border rounded p-2">
              <div className="font-medium">Wind</div>
              <div>{data.current.wind_mph} mph</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
