import React, { useState, useEffect } from "react";
import { Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PrayerTime {
  name: string;
  time: string;
}

const PrayerTimesWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prayerTimes, setPrayerTimes] = useState<PrayerTime[]>([]);
  const [dateInfo, setDateInfo] = useState<{
    gregorian: string;
    hijri: string;
  } | null>(null);

  useEffect(() => {
    const fetchPrayerTimes = async (lat: number, lng: number, tz: string) => {
      try {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();

        const response = await fetch(
          `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${lat}&longitude=${lng}&method=7&school=0&timezonestring=${tz}`
        );
        const data = await response.json();

        if (data?.data) {
          setPrayerTimes([
            { name: "Fajr", time: data.data.timings.Fajr },
            { name: "Dhuhr", time: data.data.timings.Dhuhr },
            { name: "Asr", time: data.data.timings.Asr },
            { name: "Maghrib", time: data.data.timings.Maghrib },
            { name: "Isha", time: data.data.timings.Isha },
          ]);

          setDateInfo({
            gregorian: `${data.data.date.gregorian.weekday.en}, ${data.data.date.gregorian.day} ${data.data.date.gregorian.month.en} ${data.data.date.gregorian.year}`,
            hijri: `${data.data.date.hijri.day} ${data.data.date.hijri.month.en} ${data.data.date.hijri.year} AH`,
          });
        }
      } catch (error) {
        console.error("Error fetching prayer times:", error);
      }
    };

    // Try to get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
          fetchPrayerTimes(pos.coords.latitude, pos.coords.longitude, tz);
        },
        () => {
          // Default fallback if location denied → Karachi
          fetchPrayerTimes(24.911338, 67.035702, "Asia/Karachi");
        }
      );
    } else {
      // If browser doesn’t support geolocation
      fetchPrayerTimes(24.911338, 67.035702, "Asia/Karachi");
    }
  }, []);

  if (!isVisible) {
    return (
      <Button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 animate-fade hover:animate-pulse dark:bg-islamic-green backdrop-blur-md"
        variant="default"
        size="icon"
      >
        <Clock className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-80 z-50 overflow-hidden rounded-lg shadow-lg border bg-card text-card-foreground">
      <div className="p-4 text-primary-foreground bg-primary flex justify-between items-center">
        <h3 className="text-lg font-semibold flex items-center">
          <Clock className="w-6 h-6 mr-3" /> Prayer Times
        </h3>
        <X
          onClick={() => setIsVisible(false)}
          aria-label="Close widget"
          className="w-5 h-5 cursor-pointer hover:opacity-80"
        />
      </div>

      <div className="p-4 text-center">
        {dateInfo && (
          <>
            <p className="text-lg">{dateInfo.gregorian}</p>
            <p className="text-sm text-muted-foreground dark:text-islamic-gold italic">
              {dateInfo.hijri}
            </p>
          </>
        )}

        <ul className="divide-y divide-border mt-3">
          {prayerTimes.map((prayer) => (
            <li
              key={prayer.name}
              className="flex items-center justify-between py-2"
            >
              <span className="font-semibold text-lg">{prayer.name}</span>
              <span className="text-green-500 dark:text-islamic-gold font-semibold text-lg">
                {new Date(`1970-01-01T${prayer.time}`).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-4 text-center">
          <a href="#home" className="text-sm font-medium text-primary">
            Monthly Schedule
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrayerTimesWidget;
