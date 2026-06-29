'use client';

import { videoLinkData, videoData } from "./data";

export default function Video() {
    return (
        <div className="flex flex-col gap-10 mx-auto px-4 w-full max-w-screen-md">
            {
                videoData.map(
                    (item, _) => (
                        <div key={`${item.title}-${item.year}`} className="video-container max-w-md mx-auto">
                            <div className="flex flex-col p-2 text-base text-center">
                                <h3 
                                    className="inline-block"
                                >
                                    {item.title}
                                </h3>
                                <p className="inline-block text-small text-primary-muted">
                                    {item.description}
                                </p>
                            </div>
                            <video className="w-full h-auto" controls>
                                <source src={item.link} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )
                )
            }

            <div className="flex flex-col gap-2">
                {
                    videoLinkData.map(
                        (item, _) => (
                            <div key={`${item.title}-${item.year}`}>
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
