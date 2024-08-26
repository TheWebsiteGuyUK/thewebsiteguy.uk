import { useState } from "react";
import type { FormEvent } from "react";

export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (response.ok) {
      if (data.name) {
        window.location.href = `/thank-you?name=${encodeURIComponent(data.name)}`;
      } else {
        setResponseMessage(data.message);
      }
    } else {
      setResponseMessage(data.message || "Error sending email. Please try again later.");
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-6 items-center container mx-auto">
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" autoComplete="name" required />
      </label>
      <label htmlFor="email">
        Email
        <input type="email" id="email" name="email" autoComplete="email" required />
      </label>
      <label htmlFor="message">
        Message
        <textarea id="message" name="message" autoComplete="off" required />
      </label>
      <button>Send</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}
