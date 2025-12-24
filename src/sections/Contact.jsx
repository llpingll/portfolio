import styled from "styled-components";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Ballpit from "../components/Ballpit.jsx";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await emailjs.send(
        "service_8wz22tb",
        "template_a06hpyk",
        {
          from_name: form.name,
          to_name: "Lui",
          from_email: form.email,
          to_email: "lui.duarte1@gmail.com",
          message: form.message,
        },
        "rkKhAlJTSFg7m3uHU"
      );

      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <ContactContainer id="contact">
      <div className="ball-container">
        <Ballpit
          count={100}
          gravity={0.01}
          friction={0.9975}
          wallBounce={0.95}
          followCursor={false}
        />
      </div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <p className="head-text">Let's Talk</p>
          <p className="body">
            Whether you're looking to build a new website, improve your existing platform, or bring
            a unique project to life, I'm here to help.
          </p>
        </div>
        <label className="body">
          Full Name
          <input
            value={form.name}
            type="text"
            name="name"
            placeholder="John"
            onChange={handleChange}
            required
          ></input>
        </label>
        <label className="body">
          Email Address
          <input
            value={form.email}
            type="email"
            name="email"
            placeholder="John@mail.com"
            onChange={handleChange}
            required
          ></input>
        </label>
        <label className="body">
          Your Message
          <textarea
            value={form.message}
            type="text"
            name="message"
            placeholder="Share your thoughts or inquiries..."
            onChange={handleChange}
            rows={5}
            required
          ></textarea>
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.section`
  padding: 5rem 0;
  margin: 0 2.5rem;
  z-index: 0;
  position: relative;
  margin-bottom: 3rem;
  border: 1px solid #1c1c21;
  border-radius: 0.5rem;
  background-color: #0e0e10;

  .ball-container {
    position: absolute;
    top: 0;
    left: 0;
    height: "100%";
    overflow: "hidden";
    width: 100%;
    height: 100%;
    z-index: -2;

    & canvas {
      border-radius: 0.5rem;
    }
  }

  .head-text {
    font-size: 2.5rem;
    font-weight: 600;
    color: #e4e4e6;
  }

  // .terminal-img {
  //   width: 100%;
  //   position: absolute;
  //   top: 0px;
  //   left: 0;
  //   z-index: -1;
  //   min-height: 916px;
  // }

  form {
    display: flex;
    flex-direction: column;
    max-width: 570px;
    margin: 0 auto;
    padding: 2rem 2.5rem;
    gap: 2rem;

    div {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
  }

  .body {
    color: #e4e4e6;
    font-size: 1.125rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 1.125rem;
  }

  input,
  textarea {
    font-size: 1.125rem;
    border-radius: 0.5rem;
    border: none;
    line-height: 1.75rem;
    background: rgba(255, 255, 255, 0.05);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #afb0b6;
    padding: 0.5rem 1.25rem;
    margin-top: 0.75rem;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }

  input {
    min-height: 3.5rem;
  }

  textarea {
    resize: vertical;
  }

  button {
    display: flex;
    min-height: 3rem;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border-radius: 0.5rem;
    // background-color: rgb(58 58 73 / var(--tw-bg-opacity));
    background: rgba(0, 0, 0, 0.2);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0.5rem 1.25rem;
    color: #ffffff;
    // background-color: #3a3a49;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background-color: white;
    color: #1b1b1b;
  }
`;
