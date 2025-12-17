import styled from "styled-components";

const Contact = () => {
  const handleChange = (e) => {};

  return (
    <ContactContainer>
      {/* <p className="head-text">Contact me</p> */}
      <img src="/assets/terminal.png" alt="terminal-img" className="terminal-img" />
      <form action="submit">
        <div>
          <p className="head-text">Let's Talk</p>
          <p className="body">
            Whether you're looking to build a new website, improve your existing platform, or bring
            a unique project to life, I'm here to help.
          </p>
        </div>
        <label className="body">
          Full Name
          <input type="text" name="name" placeholder="John" onClick={handleChange}></input>
        </label>
        <label className="body">
          Email Address
          <input
            type="email"
            name="email"
            placeholder="John@mail.com"
            onClick={handleChange}
          ></input>
        </label>
        <label className="body">
          Your Message
          <textarea
            type="text"
            name="message"
            placeholder="Share your thoughts or inquiries..."
            onClick={handleChange}
          ></textarea>
        </label>
        <button type="submit">Send Message</button>
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

  .head-text {
    font-size: 2.5rem;
    font-weight: 600;
    color: #a2a2a2ff;
  }

  .terminal-img {
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -1;
    min-height: 916px;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 570px;
    margin: 0 auto;
    padding: 2rem 2.5rem;
    gap: 2rem;

    div {
      margin-bottom: 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
  }

  .body {
    color: #a2a2a2ff;
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
    background-color: #1c1c21;
    color: #e4e4e6;
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
    min-height: 10rem;
  }

  button {
    display: flex;
    min-height: 3rem;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border-radius: 0.5rem;
    background-color: rgb(58 58 73 / var(--tw-bg-opacity));
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding: 0.5rem 1.25rem;
    color: #ffffff;
    background-color: #3a3a49;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background-color: white;
    color: #1b1b1b;
  }
`;
