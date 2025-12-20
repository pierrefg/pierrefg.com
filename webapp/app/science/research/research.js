import { researchData } from './data';
import ProjectsList from "@/components/projectsList/ProjectsList";

export default function Research() {
    return (
        <ProjectsList data={researchData} />
    );
}