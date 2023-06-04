/**These are necessary imports / components for the page */
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";

const nextjs = () => {

    return (
        <PageLayout blogwithsidebar>
            <div className="container mx-auto p-4">
  <h1 className="text-4xl font-bold mb-4">Next.js Tutorial</h1>
  <br/>
  <p className="text-lg">Welcome to our Next.js tutorial series!</p>
  <br/>
  <p className="text-lg">In this tutorial, we will cover the fundamentals of Next.js framework for building server-side rendered React applications.</p>
  <br/>
  <h2 className="text-2xl font-bold">Introduction to Next.js</h2>
  <p className="text-lg">Next.js is a popular open-source framework built on top of React. It allows you to build modern web applications with server-side rendering, static site generation, and other powerful features.</p>
  <p className="text-lg">With Next.js, you can create dynamic and performant web applications that are optimized for search engines and provide excellent user experiences.</p>
  <h2 className="text-2xl font-bold">Key Features of Next.js</h2>
  <ul className="list-disc pl-8">
    <li className="text-lg">Server-side Rendering: Next.js enables server-side rendering by default, allowing your React components to be rendered on the server and delivered to the client as HTML.</li>
    <li className="text-lg">Static Site Generation: Next.js supports static site generation, where pages are pre-rendered at build time and served as static HTML files. This results in fast-loading static websites.</li>
    <li className="text-lg">Routing: Next.js provides a powerful routing system that allows you to define dynamic routes and handle navigation between different pages.</li>
    <li className="text-lg">API Routes: Next.js allows you to create serverless API routes, enabling you to build backend functionality directly within your Next.js application.</li>
    <li className="text-lg">CSS-in-JS: Next.js has built-in support for CSS-in-JS libraries like styled-components and CSS modules, making it easy to style your components.</li>
    <li className="text-lg">Code Splitting: Next.js automatically performs code splitting, ensuring that only the necessary JavaScript is loaded for each page, optimizing performance.</li>
  </ul>
  <h2 className="text-2xl font-bold">Getting Started with Next.js</h2>
  <p className="text-lg">To get started with Next.js, follow these steps:</p>
  <ol className="list-decimal pl-8">
    <li className="text-lg">Create a new Next.js project using the following command in your terminal:</li>
    <pre className="bg-gray-200 p-4 rounded-lg">
      <code>npx create-next-app my-next-app</code>
    </pre>
    <li className="text-lg">Change into the project directory:</li>
    <pre className="bg-gray-200 p-4 rounded-lg">
      <code>cd my-next-app</code>
    </pre>
    <li className="text-lg">Start the development server:</li>
    <pre className="bg-gray-200 p-4 rounded-lg">
      <code>npm run dev</code>
    </pre>
    <li className="text-lg">Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a>. You should see the default Next.js app running.</li>
  </ol>
            <div className="container px-3">
                <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded mt-5 !text-lg leading-relaxed ">
                    For any any queries related to this project feel free to connect with me at <u>ridwan0abdullahi@gmail.com</u>.
                </div>
            </div>
            </div>
        </PageLayout>
    )
}

export default nextjs