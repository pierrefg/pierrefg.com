import Timeline from "@/components/timeline/Timeline";
import { volunteeringData } from "./data";

import { MdOutlineVolunteerActivism } from "react-icons/md";

export default function Volunteering() {
    return (
        <div className="timeline-container">
            <Timeline
                Icon = {MdOutlineVolunteerActivism}
                title = "Bénévolat"
                data = {volunteeringData}
            />
        </div>
    );
}