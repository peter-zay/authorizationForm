import React, { useState } from "react";

function Contact() {
  const password = "swordfish";
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const enteredPassword = e.target.querySelector(
      'input[type="password"]'
    ).value;
    setAuthorized(enteredPassword === password);
  }

  const login = (
    <form onSubmit={handleSubmit}>
      <input type="password" placeholder="Password" />
      <input type="submit" />
    </form>
  );

  const contactInfo = (
    <ul>
      <li>client@example.com</li>
      <li>555.555.5555</li>
    </ul>
  );

  return (
    <div id="authorization">
      <h1>Contact</h1>
      {authorized ? contactInfo : login}
    </div>
  );
}

export default Contact;
