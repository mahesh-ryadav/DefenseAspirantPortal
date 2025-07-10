import { FaFilePdf, FaVideo, FaBookOpen } from "react-icons/fa";
import type { ReactElement } from "react";

type ResourceType = "pdf" | "video" | "book";

type Resource = {
  id: number;
  title: string;
  description: string;
  type: ResourceType;
  link: string;
};

const resources: Resource[] = [
  {
    id: 1,
    title: "NDA Mathematics Syllabus PDF",
    description: "Comprehensive NDA math syllabus with solved examples.",
    type: "pdf",
    link: "/resources/nda-math.pdf",
  },
  {
    id: 2,
    title: "SSB Interview Preparation Guide",
    description: "Video walkthrough for all 5 days of SSB.",
    type: "video",
    link: "https://www.youtube.com/watch?v=abc123",
  },
  {
    id: 3,
    title: "Current Affairs - July 2025",
    description: "Monthly current affairs handout useful for exams.",
    type: "pdf",
    link: "/resources/current-july-2025.pdf",
  },
  {
    id: 4,
    title: "English Grammar Booklet",
    description: "Detailed notes to improve your English section score.",
    type: "book",
    link: "/resources/english-grammar.pdf",
  },
];

const iconMap: Record<ResourceType, ReactElement> = {
  pdf: <FaFilePdf className="text-red-500 w-6 h-6" />,
  video: <FaVideo className="text-blue-600 w-6 h-6" />,
  book: <FaBookOpen className="text-green-600 w-6 h-6" />,
};

const ResourcesPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-700 mb-2">Resources</h1>
          <p className="text-gray-600 text-base">
            Download study material, watch preparation videos, and explore useful handouts.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {resources.map((res) => (
            <a
              key={res.id}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 hover:shadow-md rounded-lg p-5 transition group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  {iconMap[res.type]}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition">
                    {res.title}
                  </h3>
                  <p className="text-sm text-gray-600">{res.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ResourcesPage;
