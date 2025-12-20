import Project from "./Project";

export default function ProjectsList({data}) {
    return (
        <div className="flex flex-col gap-8">
            { 
                data.map(
                    (projectData, index) => (
                        <div key={index}>           
                             { index>0 && <hr className="border-t-2 border-primary w-2/3 mb-8 mx-auto"/>  }
                            <Project data={projectData} />
                        </div>
                    )
                )
            }
        </div>
    );
}