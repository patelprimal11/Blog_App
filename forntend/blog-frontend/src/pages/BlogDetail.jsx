import React, { useEffect, useState } from "react";
import api from "../api";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`blogs/${id}/`)
      .then(res => setBlog(res.data))
      .catch(err => setError("Blog not found."));
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`blogs/${id}/`);
      navigate("/blogs");
    } catch (err) {
      alert("Failed to delete blog.");
    }
  };

  if (error) return <div className="text-red-500 p-6">{error}</div>;
  if (!blog) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl">{blog.title}</h1>
      <p className="text-gray-600">By {blog.author?.username}</p>
      <p className="mt-4">{blog.content}</p>
      <div className="mt-4 space-x-4">
        <button onClick={() => navigate(`/blogs/edit/${id}`)} className="text-yellow-500">Edit</button>
        <button onClick={handleDelete} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default BlogDetail;
