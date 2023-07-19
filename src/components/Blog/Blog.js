import React from 'react';


const Blog = () => {

    return (
        <section className="text-gray-800 pe-20">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">NEW BLOG </p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Explore Blog  Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-300">
                    <details className="py-4">
                        <summary className="py-2 outline-none cursor-pointer focus:underline">what is cors?</summary>
                        <div className="px-4 pb-4">
                            <p>CORS (Cross-Origin Resource Sharing) is a security mechanism that permits web browsers to make requests
                                from one domain to another. It enables controlled sharing of resources between different origins,
                                ensuring secure interaction between web applications while preventing unauthorized data access and cross-site scripting attacks.</p>
                        </div>
                    </details>
                    <details className="py-4">
                        <summary className="py-2 outline-none cursor-pointer focus:underline"> Why are you using firebase? What other options do you have to implement authentication?</summary>
                        <div className="px-4 pb-4">
                            <p> Yes, I am using Firebase. Firebase is a popular choice for developers due to its ease of use and comprehensive set of features. It offers a ready-to-use authentication service,
                                Firebase Authentication, which provides secure user authentication and integration with various identity providers.
                                There are several options available to implement authentication in web and mobile applications. Some popular alternatives to Firebase Authentication include: OAuth, AuthO etc</p>
                        </div>
                    </details>
                    <details className="py-4">
                        <summary className="py-2 outline-none cursor-pointer focus:underline">How does the private route work?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Private routes are a mechanism used in web development to control access to specific routes or pages that require authentication. When a user tries to access a private route,
                                the application checks if they are authenticated and authorized. If the user is not authenticated, they are typically redirected to a login page. If the user is authenticated
                                and authorized, they are granted access to the protected content or functionality. This is often achieved through middleware or higher-order components that intercept requests,
                                perform authentication and authorization checks, and handle routing accordingly. Private routes enhance security by ensuring that only authorized users can access sensitive
                                information or perform restricted actions within an application.</p>
                        </div>
                    </details>
                    <details className="py-4">
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is Node? How does Node work?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>
                                Node.js is an open-source JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, enabling them to build scalable and high-performance network applications.
                                <br />
                                Node.js follows an event-driven, non-blocking I/O model, which means it can handle concurrent connections efficiently. It uses an event loop to process incoming requests asynchronously, allowing it to handle many simultaneous connections without blocking other operations. This asynchronous, non-blocking approach makes Node.js well-suited for building real-time applications, chat systems, APIs, and other network-intensive applications.
                                <br />
                                Node.js leverages the JavaScript language to enable server-side scripting and provides a rich ecosystem of libraries and modules through the npm (Node Package Manager). It has gained popularity for its speed, scalability, and the ability to share code between the server and the client in web development.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;