import Link from "next/link";
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const socials = [
    { icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=61560943522036" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/tonekingdevelopment/" },
]

interface SocialProps {
    containerStyles: string;
    iconStyles: string;
}

export function Social({ containerStyles, iconStyles } : SocialProps) {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}