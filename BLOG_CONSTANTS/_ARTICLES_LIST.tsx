import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { Ridwan } from "./_BLOG_SETUP";

const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/tutorial/api.tsx",
    featureArticle: true,
    preview: {
      author: Ridwan,
      date: "May 12 2023",
      articleTitle: "RESTful API",
      tags: "API, REST",
      thumbnail: "/public/imp_assets/tutorials/api.png",
      shortIntro: "Introductions to API's",
      category: "tutorial",
    },
    seo: {
      title: "restful api",
      description: "restful api",
      keywords: "API",
      ogImage: "/public/imp_assets/tutorials/api.png",
      twitterHandle: "",
      author: Ridwan.name,
    },
  },
  {
    path: "/pages/tutorial/github.tsx",
    featureArticle: true,
    preview: {
      author: Ridwan,
      date: "May 11 2023",
      articleTitle: "Git tips ",
      tags: "git",
      thumbnail: "/public/imp_assets/tutorials/github.png",
      shortIntro:
        "github tips",
      category: "tutorial",
    },
    seo: {
      keywords:
        "GIT",
      ogImage: "/public/imp_assets/tutorials/github.png",
    },
  },
  {
    path: "/pages/tutorial/webdev.tsx",
    featureArticle: true,
    preview: {
      author: Ridwan,
      date: "May 10 2023",
      articleTitle: "Web developer tips",
      tags: "web-dev",
      thumbnail: "/public/imp_assets/tutorials/webdev.jpg",
      shortIntro:
        "web-dev tips",
      category: "tutorial",
    },
    seo: {
      ogImage: "/public/imp_assets/tutorials/webdev.jpg",
    },
  },
  {
    path: "/pages/tutorial/nextjs.tsx",
    preview: {
      author: Ridwan,
      date: "May 08 2023",
      articleTitle: "Next.js",
      tags: "next.js, web-dev",
      thumbnail: "/public/imp_assets/tutorials/next-js.png",
      shortIntro: "Next.js facts",
      category: "tutorials",
    },
    seo: {
      title: "nextjs",
      description: "NEXTJS",
      keywords:
        "next js, tailwind css, typescript",
      ogImage: "/public/imp_assets/tutorials/next-js.png",
      author: Ridwan.name,
    },
  },
  {
    path: "/pages/tutorial/angular.tsx",
    preview: {
      author: Ridwan,
      date: "May 07 2023",
      articleTitle: "Angular",
      tags: "angular, web-dev, tutorial",
      thumbnail: "/public/imp_assets/tutorials/Angular.jpg",
      shortIntro:
        "Angular tutorial",
      category: "tutorials",
    },
    seo: {
      keywords:
        "angular, demo, webdev",
      ogImage: "/public/imp_assets/tutorials/Angular.jpg",
    },
  },
 
  {
    path: "/pages/tutorial/javascript.tsx",
    preview: {
      author: Ridwan,
      date: "May 04 2023",
      articleTitle: "Javascript",
      tags: "demo, javascript, web-dev",
      thumbnail: "/public/imp_assets/tutorials/javascipt.jpg",
      shortIntro: "Introduction to Javascript",
      category: "tutorial",
    },
    seo: {
      keywords: "Javascript",
      ogImage: "/public/imp_assets/tutorials/javascipt.jpg",
    },
  },
  {
    path: "/pages/tutorial/style-guide.tsx",
    preview: {
      author: Ridwan,
      date: "May 03 2023",
      articleTitle: "Tailwind CSS",
      tags: "css, tutorial, web-dev",
      thumbnail: "/public/imp_assets/tutorials/tailwind.jpg",
      shortIntro: "What is Tailwind CSS?",
      category: "tutorial",
    },
    seo: {
      keywords:
        "css",
      ogImage: "/public/imp_assets/tutorials/tailwind.jpg",
    },
  },
  {
    path: "/pages/tutorial/icons.tsx",
    preview: {
      author: Ridwan,
      date: "May 02 2023",
      articleTitle: "React Icons",
      tags: "react, icons",
      thumbnail: "/public/imp_assets/tutorials/react.png",
      shortIntro: "react",
      category: "tutorial",
    },
    seo: {
      keywords:
        "html, tutorial",
      ogImage: "/public/imp_assets/tutorials/how-to-use-icons.svg",
    },
  },
  {
    path: "/pages/blog/your-first-article.tsx",
    preview: {
      author: Ridwan,
      date: "May 01 2023",
      articleTitle: "First official blog",
      shortIntro:
        "introduction",
      tags: "demo, blog",
      thumbnail: "/public/imp_assets/tutorials/blog.png",
      category: "tutorial",
    },
    seo: {
      keywords:
        "demo, blog",
      ogImage: "/public/imp_assets/tutorials/blog.png",
    },
  },
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
