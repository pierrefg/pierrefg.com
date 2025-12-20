import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub, AiOutlineYoutube   } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { SlSocialSoundcloud } from "react-icons/sl";

export default function SocialIcons() {
    var socialIcons = [
        [AiOutlineInstagram, "https://www.instagram.com/pierre_fg/"],
        [SlSocialSoundcloud, "https://soundcloud.com/p1ps_music"],
        // [AiOutlineYoutube, "https://www.youtube.com/@pierrefg"],
        [HiOutlineAcademicCap, "https://scholar.google.com/citations?user=vl3UIQoAAAAJ"],
        [AiOutlineLinkedin, "https://www.linkedin.com/in/pierrefg/"],
        // [AiOutlineGithub, "https://github.com/PierreFG"],
    ]

    return (
        <div className="flex flex-row gap-4 pt-2 pb-4">
            {
                socialIcons.map(
                    ([Icon, link], index) => (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon icon-link"
                        >
                            <Icon />
                        </a>
                    )
                )
            }
        </div>
    )
}