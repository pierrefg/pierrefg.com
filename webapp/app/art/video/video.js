'use client';

import { videoData } from "./data";

export default function Video() {
    return (
        <div className="flex flex-col gap-10 mx-auto px-4 w-full max-w-screen-md">
            {/* <div className="video-container max-w-md mx-auto">
                <div className="flex flex-col p-2 text-base text-center">
                    <h3 
                        className="inline-block"
                    >
                        Full (+25 pts)
                    </h3>
                    <p className="inline-block text-small text-primary-muted">
                        3D Motion Design
                        <br />
                        Réalisée sur Blender et After Effects
                        <br />
                        Musique faite maison
                    </p>
                </div>
                <video className="w-full h-auto" controls>
                    <source src="https://of5ylsz4mar7xvsj.public.blob.vercel-storage.com/video/des.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="video-container max-w-md mx-auto">
                <div className="flex flex-col p-2 text-base text-center">
                    <h3 
                        className="inline-block"
                    >
                        Bulle grainée
                    </h3>
                    <p className="inline-block text-small text-primary-muted">
                        Animation réactive au son
                        <br />
                        Réalisée sur TouchDesigner (temps-réel)
                        <br />
                        Musique faite maison
                    </p>
                </div>
                <video className="w-full h-auto" controls>
                    <source src="https://of5ylsz4mar7xvsj.public.blob.vercel-storage.com/video/S0b.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className="video-container max-w-md mx-auto">
                <div className="flex flex-col p-2 text-base text-center">
                    <h3 
                        className="inline-block"
                    >
                        Cube grainé
                    </h3>
                    <p className="inline-block text-small text-primary-muted">
                        Animation réactive au son 
                        <br/>
                        Réalisée sur Python et After Effects
                        <br />
                        Musique faite maison
                    </p>
                </div>
                <video className="w-full h-auto" controls>
                    <source src="https://of5ylsz4mar7xvsj.public.blob.vercel-storage.com/video/cube.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}

            <div className="flex flex-col gap-2">
                {
                    videoData.map(
                        (item, index) => (
                            <div key={index}>
                                {item.year} - [{item.type}] - <i>{item.title}</i><> </>
                                <a
                                    href={item.link} 
                                    className="btn btn-secondary" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Voir
                                </a>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}
