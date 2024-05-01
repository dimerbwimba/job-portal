import { Facebook, Timer } from "lucide-react"
import { Button } from "../ui/button"

type  JobCardProps =  {
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
  }

export const JobCard = ({name, location,postedTime, description, company}:JobCardProps)=>{
    return (
        <div className=" w-full shadow-lg rounded-lg  ">
            <div className="py-3 px-6">
                <div className=" grid grid-cols-12">
                    <div className=" col-span-8">
                        <h2 className=" font-bold line-clamp-1">{name}</h2>
                        <p className=" text-muted-foreground">{location}</p>
                    </div>
                    <div className=" col-span-4">
                        <div className=" flex justify-center items-center mt-1">
                            <Timer className=" h-4 w-4 text-muted-foreground"/>
                            <span className=" text-xs font-bold text-muted-foreground">{postedTime}</span>
                        </div>
                    </div>
                </div>
                <hr className="my-5 text-muted-foreground border"/>
                <div className=" mb-4">
                    <p className=" line-clamp-3 text-sm text-muted-foreground font-semibold">
                        {description}
                    </p>
                </div>
                <div className="mb-4">
                    <div className="flex space-x-1 items-center">
                        <div className="  rounded-full">
                            <span className=" text-xs">Logo</span>
                        </div>
                        <span className=" font-bold line-clamp-1">{company}</span>
                    </div>
                </div>
                <div>
                    <Button variant={"outline"} className=" font-bold w-full">
                        Apply Now
                    </Button>
                </div>

                
            </div>
            
        </div>
    )
}