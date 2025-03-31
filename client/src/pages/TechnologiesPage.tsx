import { useQuery } from "@tanstack/react-query";
import TechnologyList from "@/components/TechnologyList";

export default function TechnologiesPage() {
  return (
    <div className="bg-slate-50 py-6">
      <div className="container mx-auto px-4 mb-6">
        <h1 className="text-2xl font-bold mb-2">Technologies</h1>
        <p className="text-slate-600">
          Explore all technologies in our radar, filter by quadrant and ring, and search for specific technologies.
        </p>
      </div>
      <TechnologyList />
    </div>
  );
}
