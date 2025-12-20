import Timeline from "@/components/timeline/Timeline";
import { workData } from "./data";

import { AiOutlineTool } from "react-icons/ai";

export default function Experience() {
    return (
        <div className="timeline-container">
            <Timeline
                Icon = {AiOutlineTool}
                title = "Expérience"
                data = {workData}
            />
        </div>
    );
}