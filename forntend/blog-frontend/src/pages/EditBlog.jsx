import React, { useEffect, useState } from "react";
import api from "../api";
import { useParams, useNavigate } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    api.get(`blogs/${id}/`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await api.put(`blogs/${id}/`, { title, content });
      navigate(`/blogs/${id}`);
    } catch (err) {
      alert("You are not authorized to edit this blog.");
    }
  };

  return (
    <form onSubmit={handleUpdate} className="max-w-2xl mx-auto mt-10 space-y-4">
      <input
        className="w-full p-2 border"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full p-2 border h-40"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="bg-yellow-500 text-white px-4 py-2" type="submit">Update</button>
    </form>
  );
};

export default EditBlog;
