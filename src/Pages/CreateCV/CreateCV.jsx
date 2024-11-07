import React, { useState } from "react";
import "./CreateCV.css";

const CreateCV = () => {
  const [formData, setFormData] = useState({
    personal: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
    education: [
      {
        degree: "",
        institution: "",
        startDate: "",
        endDate: "",
      },
    ],
    projects: [
      {
        title: "",
        description: "",
        technologies: "",
        link: "",
      },
    ],
  });

  const handleInputChange = (section, index, field, value) => {
    if (section === "personal") {
      setFormData((prev) => ({
        ...prev,
        personal: {
          ...prev.personal,
          [field]: value,
        },
      }));
    } else {
      const updatedSection = [...formData[section]];
      updatedSection[index][field] = value;
      setFormData((prev) => ({
        ...prev,
        [section]: updatedSection,
      }));
    }
  };

  const addSection = (section) => {
    const newItem =
      section === "education"
        ? { degree: "", institution: "", startDate: "", endDate: "" }
        : { title: "", description: "", technologies: "", link: "" };

    setFormData((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="create-cv-page">
      <h2>Create Your CV</h2>
      <form onSubmit={handleSubmit} className="cv-form">
        <fieldset>
          <legend>Personal Information</legend>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={formData.personal.fullName}
              onChange={(e) => handleInputChange("personal", null, "fullName", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={formData.personal.email}
              onChange={(e) => handleInputChange("personal", null, "email", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              value={formData.personal.phone}
              onChange={(e) => handleInputChange("personal", null, "phone", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea
              value={formData.personal.address}
              onChange={(e) => handleInputChange("personal", null, "address", e.target.value)}
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>Educational Background</legend>
          {formData.education.map((edu, index) => (
            <div key={index} className="form-group">
              <label>Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleInputChange("education", index, "degree", e.target.value)}
              />
              <label>Institution</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) =>
                  handleInputChange("education", index, "institution", e.target.value)
                }
              />
              <label>Start Date</label>
              <input
                type="date"
                value={edu.startDate}
                onChange={(e) =>
                  handleInputChange("education", index, "startDate", e.target.value)
                }
              />
              <label>End Date</label>
              <input
                type="date"
                value={edu.endDate}
                onChange={(e) =>
                  handleInputChange("education", index, "endDate", e.target.value)
                }
              />
            </div>
          ))}
          <button type="button" onClick={() => addSection("education")}>
            Add Education
          </button>
        </fieldset>

        <fieldset>
          <legend>Projects</legend>
          {formData.projects.map((proj, index) => (
            <div key={index} className="form-group">
              <label>Title</label>
              <input
                type="text"
                value={proj.title}
                onChange={(e) => handleInputChange("projects", index, "title", e.target.value)}
              />
              <label>Description</label>
              <textarea
                value={proj.description}
                onChange={(e) =>
                  handleInputChange("projects", index, "description", e.target.value)
                }
              />
              <label>Technologies Used</label>
              <input
                type="text"
                value={proj.technologies}
                onChange={(e) =>
                  handleInputChange("projects", index, "technologies", e.target.value)
                }
              />
              <label>Project Link</label>
              <input
                type="url"
                value={proj.link}
                onChange={(e) => handleInputChange("projects", index, "link", e.target.value)}
              />
            </div>
          ))}
          <button type="button" onClick={() => addSection("projects")}>
            Add Project
          </button>
        </fieldset>

        <button type="submit" className="submit-btn">
          Submit CV
        </button>
      </form>
    </div>
  );
};

export default CreateCV;
