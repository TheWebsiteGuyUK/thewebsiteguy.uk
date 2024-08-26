import { useState, useEffect } from 'react';

const ThankYou = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userName = params.get("name");
    if (userName) {
      setName(userName);
    }
  }, []);

  return (
    <div>
      <h1>Thank You!</h1>
      <p>{name ? `Thank you for your message, ${name}!` : "Thank you for your message!"}</p>
    </div>
  );
};

export default ThankYou;