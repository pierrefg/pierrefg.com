import { dataScienceData } from './data';
import ProjectsList from "@/components/projectsList/ProjectsList";
import { BiSolidInfoSquare } from "react-icons/bi";

export default function DataScience() {
    return (
        <div>
            <ProjectsList data={dataScienceData} />
        </div>
    );
}