import React, { useState, useEffect } from "react";
import "./TributePage.css"; // styling alag file me hogi

export default function TributePage() {
  const [tributes, setTributes] = useState(
    JSON.parse(localStorage.getItem("tributes")) || []
  );
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({
    name: "",
    image: null,
    description: "",
    quote: "",
  });

  useEffect(() => {
    localStorage.setItem("tributes", JSON.stringify(tributes));
  }, [tributes]);

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [id]: value });
    }
  };

  const createOrUpdateTribute = () => {
    const { name, image, description, quote } = form;

    if (!name.trim() || !description.trim() || !quote.trim()) {
      alert("Please fill out all fields (image optional when editing).");
      return;
    }

    if (editIndex !== null) {
      if (image) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const updated = [...tributes];
          updated[editIndex] = {
            ...updated[editIndex],
            name,
            image: e.target.result,
            description,
            quote,
          };
          setTributes(updated);
        };
        reader.readAsDataURL(image);
      } else {
        const updated = [...tributes];
        updated[editIndex] = {
          ...updated[editIndex],
          name,
          description,
          quote,
        };
        setTributes(updated);
      }
      setEditIndex(null);
    } else {
      if (!image) {
        alert("Please upload an image for new tributes.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setTributes([
          ...tributes,
          { name, image: e.target.result, description, quote },
        ]);
      };
      reader.readAsDataURL(image);
    }

    setForm({ name: "", image: null, description: "", quote: "" });
    document.getElementById("image").value = "";
  };

  const deleteTribute = (index) => {
    setTributes(tributes.filter((_, i) => i !== index));
  };

  const editTribute = (index) => {
    const t = tributes[index];
    setForm({
      name: t.name,
      image: null,
      description: t.description,
      quote: t.quote,
    });
    setEditIndex(index);
    document.getElementById("image").value = "";
  };

  return (
    <div className="tribute-container">
      <header className="tribute-header">
        <h1>Tribute Page Creator</h1>
        <p>Create, Edit & Save tributes for people you admire</p>
      </header>

      <div className="container">
        {/* Form */}
        <div className="form-section">
          <input
            type="text"
            id="name"
            placeholder="Enter the person's name"
            value={form.name}
            onChange={handleInputChange}
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleInputChange}
          />
          <textarea
            id="description"
            rows="4"
            placeholder="Write something about them..."
            value={form.description}
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="quote"
            placeholder="Enter a memorable quote"
            value={form.quote}
            onChange={handleInputChange}
          />
          <button onClick={createOrUpdateTribute}>
            {editIndex !== null ? "Update Tribute" : "Add to Wishlist"}
          </button>
        </div>

        {/* Tribute List */}
        <div id="tribute-list" className="tribute-list">
          {tributes.map((t, index) => (
            <div key={index} className="tribute-card">
              <img src={t.image} alt={t.name} />
              <h2>{t.name}</h2>
              <p>{t.description}</p>
              <blockquote>"{t.quote}"</blockquote>
              <div className="card-buttons">
                <button
                  className="edit-btn"
                  onClick={() => editTribute(index)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTribute(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
