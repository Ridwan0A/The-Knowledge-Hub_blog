/**These are necessary imports / components for the page */
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";

const javascript = () => {
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogwithsidebar>
            {/* Replace the below content with your content */}
            <div className="container mx-auto p-4">
  <h1 className="text-4xl font-bold mb-4">JavaScript Tutorial</h1>
  <br/>
  <p className="text-lg">Welcome to our JavaScript tutorial series!</p>
  <br/>
  <p className="text-lg">In this tutorial, we will cover the fundamentals of JavaScript programming language.</p>
  <br/>
  <h2 className="text-2xl font-bold">Introduction to JavaScript</h2>
  <p className="text-lg">JavaScript is a high-level, interpreted programming language that is primarily used for adding interactivity to web pages.</p>
  <p className="text-lg">It is often referred to as the "language of the web" as it is supported by all modern web browsers.</p>
  <h2 className="text-2xl font-bold">Variables and Data Types</h2>
  <p className="text-lg">In JavaScript, variables are used to store data. They can hold various types of values such as numbers, strings, booleans, arrays, and objects.</p>
  <p className="text-lg">Here's an example of declaring and initializing a variable:</p>
  <pre className="bg-gray-200 p-4 rounded-lg">
    <code>{`let message = 'Hello, World!';`}</code>
  </pre>
  <h2 className="text-2xl font-bold">Control Flow and Loops</h2>
  <p className="text-lg">JavaScript provides control flow statements such as if-else statements and loops like for and while loops to control the execution of code based on certain conditions.</p>
  <p className="text-lg">Here's an example of an if-else statement:</p>
  <pre className="bg-gray-200 p-4 rounded-lg">
    <code>{`let age = 18;
if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}`}</code>
  </pre>
  <h2 className="text-2xl font-bold">Functions and Modules</h2>
  <p className="text-lg">Functions in JavaScript allow you to encapsulate reusable blocks of code. They can be defined and invoked as needed.</p>
  <p className="text-lg">JavaScript also supports modules, which enable you to organize your code into separate files and import/export functionality between them.</p>
  <h2 className="text-2xl font-bold">DOM Manipulation</h2>
  <p className="text-lg">The Document Object Model (DOM) represents the structure of an HTML document. JavaScript can be used to manipulate the DOM, allowing you to dynamically update the content and behavior of web pages.</p>
  <h2 className="text-2xl font-bold">Conclusion</h2>
  <p className="text-lg">JavaScript is a powerful programming language that plays a crucial role in web development. It enables you to create interactive and dynamic web pages.</p>
  <p className="text-lg">In this tutorial, we covered the basics of JavaScript, including variables, control flow, functions, modules, and DOM manipulation.</p>
  <p className="text-lg">Stay tuned for more tutorials in our JavaScript series!</p>
</div>

            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
                For anything related to this project feel free to connect with me at <u>ridwan0abdullahi@gmail.com</u>.
            </div>
            {/* Replace the above content with your content */}
        </PageLayout>
    )
}

export default javascript;