/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { HowToUseImageCode, HowToUseList, HowToUseSeperator, HowToUseTextCode, rightSideAdCode } from "../../src/constants/codeBlocks";

const Article = () => {
    const ads = [
        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestor02-21&language=en_IN&marketplace=amazon&region=IN&placement=B09N3ZNHTY&asins=B09N3ZNHTY&linkId=4105a64f5c32e42007f83bd7a9e20fbb&show_border=true&link_opens_in_new_window=true"></iframe>',
        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestor02-21&language=en_IN&marketplace=amazon&region=IN&placement=B08CHZ3ZQ7&asins=B08CHZ3ZQ7&linkId=8a8653c24dc89b1ee6a3ac2a85c7208b&show_border=true&link_opens_in_new_window=true"></iframe>',
        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestor02-21&language=en_IN&marketplace=amazon&region=IN&placement=B099ZYBSWB&asins=B099ZYBSWB&linkId=b285d1699f1620641c1636f1bc296761&show_border=true&link_opens_in_new_window=true"></iframe>',
        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestor02-21&language=en_IN&marketplace=amazon&region=IN&placement=B09FK2639V&asins=B09FK2639V&linkId=53a2b52b7d82b6c9bb5cf6e61d9a63f3&show_border=true&link_opens_in_new_window=true"></iframe>',
        '<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin" style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=webexpestor02-21&language=en_IN&marketplace=amazon&region=IN&placement=B09FKBQ3JM&asins=B09FKBQ3JM&linkId=6d5e15d321246d0b37229f1c9d74aa30&show_border=true&link_opens_in_new_window=true"></iframe>',
        `<script type="text/javascript" src="https://ap.lijit.com/www/delivery/fpi.js?z=1066288&width=300&height=250"></script>`
    ]
    return (
        // pass blogwithsidebar as show below for article page with sidebar layout
        <PageLayout blogwithsidebar>
            {/* Replace the below content with your content */}
            <div className="container mx-auto p-4">
  <h1 className="text-4xl font-bold mb-4">Angular Tutorial</h1>
  <br/>
  <p className="text-lg">Welcome to our Angular tutorial series!</p>
  <br/>
  <p className="text-lg">In this tutorial, we will cover the fundamentals of Angular framework for building web applications.</p>
  <br/>
  <h2 className="text-2xl font-bold">Introduction to Angular</h2>
  <p className="text-lg">Angular is a popular open-source framework developed and maintained by Google. It allows you to build scalable and maintainable web applications.</p>
  <p className="text-lg">Angular follows a component-based architecture, where the application is built by combining reusable components.</p>
  <h2 className="text-2xl font-bold">Key Features of Angular</h2>
  <ul className="list-disc pl-8">
    <li className="text-lg">TypeScript: Angular is built using TypeScript, a statically-typed superset of JavaScript. TypeScript adds features like static typing, classes, and modules to JavaScript.</li>
    <li className="text-lg">Dependency Injection: Angular provides a built-in dependency injection system that helps manage dependencies between different parts of the application.</li>
    <li className="text-lg">Templates and Directives: Angular uses HTML templates with additional syntax and directives to define the user interface of the application.</li>
    <li className="text-lg">Routing: Angular has a powerful routing module that enables navigation between different views and components within the application.</li>
    <li className="text-lg">Forms: Angular provides robust form handling capabilities with features like data binding, validation, and form submission.</li>
    <li className="text-lg">Testing: Angular comes with built-in testing tools and utilities, making it easier to write unit tests and perform end-to-end testing.</li>
  </ul>
  <h2 className="text-2xl font-bold">Getting Started with Angular</h2>
  <p className="text-lg">To get started with Angular, follow these steps:</p>
  <ol className="list-decimal pl-8">
    <li className="text-lg">Install Node.js and npm (Node Package Manager) on your machine.</li>
    <li className="text-lg">Install Angular CLI globally by running the following command in your terminal:</li>
    <pre className="bg-gray-200 p-4 rounded-lg">
      <code>npm install -g @angular/cli</code>
    </pre>
    <li className="text-lg">Create a new Angular project using the Angular CLI:</li>
    <pre className="bg-gray-200 p-4 rounded-lg">
      <code>ng new my-angular-app</code>
    </pre>
    <li className="text-lg">Change into the project directory:</li>
    <pre className="bg-gray-200 p-4 rounded-lg">
      <code>cd my-angular-app</code>
    </pre>
    <li className="text-lg">Start the development server:</li>
    <pre className="bg-gray-200 p-4 rounded-lg">
      <code>ng serve</code>
    </pre>
    <li className="text-lg">Open your browser and navigate to <a href="http://localhost:4200">http://localhost:4200</a>. You should see the default Angular app running.</li>
  </ol>
  </div>
            <div className="px-4 py-3 dark:bg-slate-900 bg-blue-200 rounded mt-5 !text-lg leading-relaxed">
                For anything related to this project feel free to connect with me at <u>ridwan0abdullahi@gmail.com</u>.
            </div>
            {/* Replace the above content with your content */}
        </PageLayout>
    )
}

export default Article;