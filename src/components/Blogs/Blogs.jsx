import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='md:w-2/3 '>

            {
                blogs.map(blog => <Blog
                    blog={blog}
                    key={blog.id}
                />)
            }
        </div>
    );
};

export default Blogs;