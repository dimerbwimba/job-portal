import { JobCard } from "./job-card";

interface JobProps {
  jobs: {
    name: string;
    postedTime: string;
    company: string;
    companyLogo: string;
    location: string;
    salary: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits: string[];
  }[];
}

export const JobList = ({ jobs }:JobProps) => {
  return (
    <section className="p-10">
      <div className="grid grid-cols-4 gap-x-6 gap-y-6">
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            {...job}
          />
        ))}
      </div>
    </section>
  );
};
