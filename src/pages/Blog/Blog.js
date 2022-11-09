import React from 'react';
import useTitle from '../../hook/useTitle';
import BlogsCard from './BlogsCard';

const Blog = () => {
    useTitle('Blog')

     const blogs =[
        {
            id:1,
            question:'Difference between SQL and NoSQL',
            answer:'SQL:RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS) These databases have fixed or static or predefined schema These databases are not suited for hierarchical data storage. These databases are best suited for complex queries Vertically Scalable Follows ACID property Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc NoSQL Non-relational or distributed database system. They have dynamic schema These databases are best suited for hierarchical data storage. These databases are not so good for complex queries Horizontally scalable Follows CAP(consistency, availability, partition tolerance) Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc '
        },
        {
            id:2,
            question:'What is JWT, and how does work?',
            answer:'JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.'
        },
        {
            id:3,
            question:'What is difference between javascript and NodeJS',
            // eslint-disable-next-line no-script-url
            answer:'Javascript:Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. NodeJS:NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.'
        },
        {
            id:4,
            question:'How does NodeJS handle multiple request at the same time',
            answer:'NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.'
        }
     ]

    return (
        <div className='max-w-5xl mx-auto grid grid-cols-1 gap-6 py-20 '>
            {
                blogs.map(blog => <BlogsCard
                key={blog.id}
                blog={blog}
                ></BlogsCard>)
            }
        </div>
    );
};

export default Blog;