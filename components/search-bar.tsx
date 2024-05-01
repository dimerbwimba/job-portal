import { Home, MapPin, Search, XCircle } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export const SearchBar = () => {
    return (
        <div className=" bg-blue-200 shadow-md p-16 rounded-xl">
            <section className=" p-6 rounded-xl bg-white shadow-lg">
                <div className=" grid grid-cols-12 gap-x-4">
                    <div className=" col-span-3 relative">
                        <XCircle className=" text-muted-foreground h-5 w-5 absolute top-1/4 right-3 bg-white z-30" />
                        <Input type="search" placeholder="Search job here" className=" placeholder-slate-800 text-md font-semibold relative pl-10" />
                        <Search className=" text-muted-foreground absolute top-1/4 left-2 h-5 w-5" />
                    </div>
                    <div className=" col-span-4 relative">
                        <XCircle className=" text-muted-foreground h-5 w-5 absolute top-1/4 right-3 bg-white z-30" />
                        <Input type="search" placeholder="Search by company" className=" placeholder-slate-800 text-md font-semibold relative pl-10" />
                        <Home className=" text-muted-foreground absolute top-1/4 left-2 h-5 w-5" />
                    </div>
                    <div className=" col-span-3 relative">
                        <XCircle className=" text-muted-foreground h-5 w-5 absolute top-1/4 right-3 bg-white z-30" />
                        <Input type="search" placeholder="Search by location" className=" placeholder-slate-800 text-md font-semibold relative pl-10" />
                        <MapPin className=" text-muted-foreground absolute top-1/4 left-2 h-5 w-5" />
                    </div>
                    <div className=" col-span-2 relative">
                        <Button variant={"secondary"} className=" w-full">
                            Search
                        </Button>
                    </div>
                </div>
            </section>
            <section>
                <div className=" pt-8 space-x-8 flex justify-center">
                    <div className=" font-semibold">
                        Sort by : <select className=" px-3 py-1 rounded-md w-30">
                            <option className="px-3">Relevant</option>
                            <option className="px-3">More Options</option>
                        </select>
                    </div>
                    <div className=" font-semibold">
                        Type : <select className=" px-3 py-1 rounded-md w-30">
                            <option className="px-3">Full-time</option>
                            <option className="px-3">More Options</option>
                        </select>
                    </div>
                    <div className=" font-semibold">
                        Level : <select className=" px-3 py-1 rounded-md w-30">
                            <option className="px-3">Senior</option>
                            <option className="px-3">More Options</option>
                        </select>
                    </div>
                    <div className=" text-md">
                        Clear All
                    </div>
                </div>
            </section>
        </div>
    )
}