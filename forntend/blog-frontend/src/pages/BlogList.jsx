// import React, { useEffect, useState } from "react";
// import api from "../api";
// import { Link } from "react-router-dom";

// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [next, setNext] = useState(null);
//   const [prev, setPrev] = useState(null);

//   const fetchBlogs = async (url = "blogs/") => {
//     const res = await api.get(url);
//     setBlogs(res.data.results);
//     setNext(res.data.next);
//     setPrev(res.data.previous);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl mb-4">Blogs</h1>
//       {blogs.map((blog) => (
//         <div key={blog.id} className="border-b py-2">
//           <Link to={`/blogs/${blog.id}`} className="text-lg text-blue-600">{blog.title}</Link>
//           <p>By {blog.author}</p>
//         </div>
//       ))}
//       <div className="mt-4 space-x-4">
//         {prev && <button onClick={() => fetchBlogs(prev)} className="text-blue-600">Previous</button>}
//         {next && <button onClick={() => fetchBlogs(next)} className="text-blue-600">Next</button>}
//       </div>
//     </div>
//   );
// };

// export default BlogList;


import React, { useEffect, useState } from "react";
import api from "../api"; // axios instance
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get("blogs/");
        setBlogs(res.data);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading blogs...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="border-b py-4">
            <Link to={`/blogs/${blog._id}`} className="text-xl text-blue-600 font-semibold">
              {blog.title}
            </Link>
            <p className="text-gray-600">By {blog.author?.username || "Unknown"}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
