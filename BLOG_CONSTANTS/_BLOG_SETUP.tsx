import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";


export const Ridwan: IAuthor = {
    name: "Ridwan Abdullahi",
    designation: "Software Engineer",
    bio: "I am a software engineer with previous contracting experience at UnitedHealth Group, specializing in leveraging technology to drive impactful solutions. I hold a bachelor's degree in Computer Information Technology, equipping me with a strong foundation for tackling complex technical challenges.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/Ridwan0A'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/ridwan-a-b62b4a222/'
        },
    ]
}



// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'Knowledge Hub';
export const WEBSITE_URL: string = '';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: 'The Knowledge Hub',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        {
            // to open a link in new tab pass newTab: true
            label: 'Support Typescript',
            path: 'https://www.typescriptlang.org',
            newTab: true
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/Ridwan0A/the-knowledge-hub_blog',
            newTab: true
        },
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Us',
            path: '/about-us'
        },
        {
            label: 'Support Us',
            path: 'https://www.typescriptlang.orgz',
            newTab: true
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/Ridwan0A/the-knowledge-hub_blog',
            newTab: true
        },
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    socials: [
        {
            link: 'https://www.facebook.com/',
            icon: <AiFillFacebook />
        },
        {
            link: 'https://www.instagram.com/',
            icon: <AiFillInstagram />
        },
        {
            link: 'https://twitter.com/',
            icon: <AiOutlineTwitter />
        },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "knowledge hub",
    description: "A blog using NextJS and Typescript.",
    keywords: "Blog, next js, template, next js blog, blog setup, typescript, nextjs typescript, react js blog template, responsive blog template",
    url: WEBSITE_URL,
    author: `${Ridwan.name}}`,
    twitterHandle: '',
    ogImage: '/public/images/og-image.jpg'
}