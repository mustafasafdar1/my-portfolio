import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  payload: {
    commits?: { message: string }[];
    action?: string;
  };
}

export default function GitHubActivity() {
  const [events, setEvents] = useState<GitHubEvent[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/mustafasafdar1/events")
      .then((res) => res.json())
      .then((data) => setEvents(data.slice(0, 5)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Github className="w-5 h-5" /> Latest GitHub Activity
      </h2>
      <ul className="space-y-4">
        {events.map((event) => (
          <motion.li
            key={event.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-gray-700 pb-2"
          >
            <p className="text-sm">
              <span className="font-semibold">{event.type}</span> in{" "}
              <a
                href={`https://github.com/${event.repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {event.repo.name}
              </a>
            </p>
            {event.payload.commits &&
              event.payload.commits.map((commit, index) => (
                <p key={index} className="text-gray-400 text-xs">
                  • {commit.message}
                </p>
              ))}
            <span className="text-gray-500 text-xs">
              {new Date(event.created_at).toLocaleString()}
            </span>
          </motion.li>
        ))}
      </ul>

      {/* ✅ Updated button with GitHub profile link */}
      <motion.a
        href="https://github.com/mustafasafdar1"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-blue-600 px-5 py-2 mt-5 font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative">View Full Profile</span>
      </motion.a>
    </div>
  );
}
