/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'About Us',
        description: `Hello this is the knowledge hub.`,
        keywords: 'knowledge, contact us, ridwan0abdullahi@gmail.com, next js',
        author: 'Ridwan Abdullahi'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>
                <div className="">
                    <a href="" target="_blank" rel="noopener noreferrer" className="block md:w-[15%] w-[50%] ">
                        <img src="/images/hub.png" alt="" className="rounded-lg overflow-hidden" />
                    </a>
                    <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                        Hello this is Ridwan!
                    </Text>
                    <Text subtitle className='text-xl mb-5'>
                        This is an open source blog web development.
                    </Text>

                    <Text p className='text-lg'>
                    At the Knowledge Hub Blog, we are passionate about web development and dedicated to providing you with valuable insights, resources, and knowledge to fuel your growth in this ever-evolving field. 
                    Whether you're a beginner taking your first steps or an experienced developer seeking to expand your expertise, our goal is to be your go-to resource for all things web development.
                    </Text>

                    <div className="flex flex-wrap justify-between">
                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                <b>Why this blog?</b>
                            </Text>
                            We created the Knowledge Hub Blog with a clear vision and purpose in mind.  We believe in the power of knowledge sharing and the positive impact it can have on individuals and the web development community as a whole. 
                                    By providing a platform dedicated to web development, 
                                    we aim to contribute to the collective knowledge and help others in their learning journey.
                                    Web development is a rapidly evolving field with new technologies, frameworks, and best practices emerging constantly. It can be challenging for developers to stay up-to-date and navigate through the vast amount of information available.
                                    Our blog aims to bridge the gap by curating and presenting relevant and reliable content in a concise and accessible manner.
                                    We are passionate about empowering developers to excel in their craft. 
                                    Through our articles, tutorials, and resources, we strive to provide developers with the knowledge, skills, and tools they need to overcome challenges, build innovative solutions, and advance their careers.
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                
                            </Text>
                        
                        </div>

                        <div className="md:w-auto w-full my-5">
                            <Text subtitle className='text-3xl font-medium'>
                                
                            </Text>
                            <List type={ListType.disc}>
                            
                            </List>
                        </div>
                    </div>
                    <Seperator />
                    <Text p className='text-lg'>
                        This is an open source project everyone is welcome to contribute. Feel free to open an issue, if you have any questions or incase you find a bug. Create your versions of this template and help the community, also if you are using our template a little credit will be much appreciated.
                    </Text>
                    <Seperator />
                    <Text p className='text-lg'>
                        Created by <LinkTo href="https://www.linkedin.com/in/ridwan-a-b62b4a222/" external className="font-semibold">Ridwan Abdullahi</LinkTo>
                    </Text>
    
                    <div className="px-4 py-3 dark:bg-slate-800 bg-blue-200 rounded my-5">
                        <Text p className="!text-lg leading-relaxed mb-0">
                            For any any queries related to this project feel free to connect with me at <u>ridwan0abdullahi@gmail.com</u>.
                        </Text>
                    </div>
                </div>
            </section>
        </PageLayout>
    )
}

export default AboutUs