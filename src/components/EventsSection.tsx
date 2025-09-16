import React, { useState, useEffect } from "react";
import { Share2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

type EventType = {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  description: string;
  upcoming: boolean;
};

const initialEvents: EventType[] = [
  // {
  //   id: 1,
  //   title: "Muharram Majlis",
  //   date: "July 7-16, 2023",
  //   time: "7:30 PM - 10:00 PM",
  //   image:
  //     "https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/482019897_661191103096725_2559918048843181815_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0MxnNjUAfgkQ7kNvwH5byTJ&_nc_oc=Adl6_MMifAiAUFbD4bF4pGc_aNJ84V2yU9rQymmaxs_ASZu0MR9VnLDsLq3xZCURfGg&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=7D_Wb5AX1PffbyJzxcj18Q&oh=00_Afa4RLN3l_jaDYuv6bK1HyhoMqrUXBffH2SSzYAgnUH_Qg&oe=68CDB305",
  //   description:
  //     "Join us for Majalis commemorating the martyrdom of Imam Hussain (A.S) and his companions in Karbala for 9 Nights",
  //   upcoming: true,
  // },
];

const EventsSection = () => {
  const [events, setEvents] = useState<EventType[]>(initialEvents);
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("upcoming");

  // Load from localStorage on first render
  useEffect(() => {
    const stored = localStorage.getItem("events");
    if (stored) setEvents(JSON.parse(stored));
  }, []);

  // Save to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const [formData, setFormData] = useState({
    title: "",
    startDate: "",
    endDate: "",
    Time: "",
    image: "",
    description: "",
  });

  const handleAddEvent = () => {
    if (!formData.title || !formData.startDate || !formData.endDate) return;

    const newEvent: EventType = {
      id: events.length + 1,
      title: formData.title,
      date: `${formData.startDate} - ${formData.endDate}`,
      time: formData.Time,
      image:
        formData.image ||
        "https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/482019897_661191103096725_2559918048843181815_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0MxnNjUAfgkQ7kNvwH5byTJ&_nc_oc=Adl6_MMifAiAUFbD4bF4pGc_aNJ84V2yU9rQymmaxs_ASZu0MR9VnLDsLq3xZCURfGg&_nc_zt=23&_nc_ht=scontent.fkhi2-3.fna&_nc_gid=7D_Wb5AX1PffbyJzxcj18Q&oh=00_Afa4RLN3l_jaDYuv6bK1HyhoMqrUXBffH2SSzYAgnUH_Qg&oe=68CDB305",
      description: formData.description || "No description provided.",
      upcoming: true,
    };

    setEvents([newEvent, ...events]);
    setFormData({
      title: "",
      startDate: "",
      endDate: "",
      image: "",
      description: "",
      Time: "",
    });
  };

  const filteredEvents = events.filter((event) => {
    if (filter === "all") return true;
    return filter === "upcoming" ? event.upcoming : !event.upcoming;
  });

  const handleShare = (title: string) => {
    if (navigator.share) {
      navigator
        .share({
          title: `Azakhana e Dr. Manzar Abbas: ${title}`,
          text: `Check this event at Azakhana e Dr. Manzar Abbas: ${title}`,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      console.log("Web Share API not supported");
    }
  };

  return (
    <section id="events" className="py-16 md:py-24 geometric-pattern">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-heading">Events & Programs</h2>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="islamicButton">Upload</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Event</DialogTitle>
              </DialogHeader>

              <div className="space-y-3">
                <div>
                  <Label>Title</Label>
                  <Input
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData({ ...formData, startDate: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) =>
                      setFormData({ ...formData, endDate: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label>Time</Label>
                  <Input
                    type="time"
                    value={formData.Time}
                    onChange={(e) =>
                      setFormData({ ...formData, Time: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Label>Image URL</Label>
                  <Input
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                    placeholder="You can paste any URL of Facebook, Unsplash etc."

                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Input
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    placeholder="Enter short Description about the event"
                  />
                </div>

                <Button className="w-full" onClick={handleAddEvent}>
                  Submit
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {["upcoming", "past", "all"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFilter(type as "all" | "upcoming" | "past")}
                className={`py-2 px-4 text-sm font-medium border ${
                  filter === type
                    ? "bg-islamic-red text-white border-islamic-red"
                    : "bg-white text-islamic-gray border-islamic-gold/30 hover:bg-islamic-cream"
                }`}
              >
                {type === "all"
                  ? "All Events"
                  : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="islamicCard">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {event.upcoming && (
                  <div className="absolute top-0 right-0 bg-islamic-red text-white py-1 px-3 text-sm font-medium">
                    Upcoming
                  </div>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="mb-3 text-sm text-islamic-gray">
                  <div>{event.date}</div>
                  <div>{event.time}</div>
                </div>
                <p className="mb-4">{event.description}</p>

                <div className="flex items-center justify-between">
                  <a
                    href={event.image}
                    className="islamicButton w-full mr-5 text-islamic-black dark:text-white"
                  >
                    View Event
                  </a>
                  <button
                    onClick={() => handleShare(event.title)}
                    className="text-islamic-gray hover:text-islamic-green"
                    title="Share this event"
                  >
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            onClick={() => setFilter("all")}
            className="islamicButtonOutline cursor-pointer"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;

