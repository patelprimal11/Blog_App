import React, { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

    // const handleCreate = async (e) => {
    //     e.preventDefault();
    //     try {
    //     await api.post("blogs/", { title, content });
    //     navigate("/blogs");
    //     } catch (err) {
    //     alert(err);
    //     }
    // };

    const handleCreate = async (e) => {
        e.preventDefault();
        try {
          await api.post("blogs/", { title, content });
          navigate("/blogs");
        } catch (err) {
          const errorMsg = err.response?.data?.message || "Failed to create blog.";
          alert(errorMsg);
        }
      };
      

  return (
    <form onSubmit={handleCreate} className="max-w-2xl mx-auto mt-10 space-y-4">
      <input
        className="w-full p-2 border"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border h-40"
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2" type="submit">Create</button>
    </form>
  );
};

export default CreateBlog;


