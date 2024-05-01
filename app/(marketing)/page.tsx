import { JobCard } from "@/components/job/job-card";
import { JobList } from "@/components/job/job-list";
import { Jobs } from "@/data/jobs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <JobList jobs={Jobs}/>
    </div>
  );
}
