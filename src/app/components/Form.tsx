"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./form.module.css";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const confirm = (
      form.elements.namedItem("confirm-email") as HTMLInputElement
    ).value;
    if (email !== confirm) {
      alert("Emails do not match");
      return;
    }

    const formData = new FormData(form);
    try {
      await fetch("/contact.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      setSubmitted(true);
    } catch (error) {
      alert("Submission failed. Please try again.");
    }
  };
  if (submitted) {
    return (
      <div className="p-5 w-75 text-center">
        <p>
          Thank you for your inquiry! We'll be in touch soon. <br />
          (Please check your spam folder if you don't see a reply within a few
          days.)
        </p>
        <Image
          src="/logo-small.png"
          alt="Chameleon Studios logo"
          width={60}
          height={60}
          className="mb-3"
        />
        <p>
          お問合せありがとうございます！ご返信まで今しばらくお待ちください。
          <br />
          （数日内に返信が届かない場合は、迷惑メールフォルダもご確認ください。）
        </p>
      </div>
    );
  }
  return (
    <div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className={`w-100 ${styles.form}`}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out if you’re human:{" "}
            <input name="bot-field" type="text" />
          </label>
        </p>
        <div className="mb-3">
          <label htmlFor="name">Full name・フルネーム</label>
          <input
            type="text"
            name="name"
            required
            className={`form-control ${styles.formBox}`}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email・メールアドレス </label>
          <input
            type="email"
            name="email"
            required
            className={`form-control ${styles.formBox}`}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirm-email">
            Confirm Email・メールアドレス確認{" "}
          </label>
          <input
            type="email"
            name="confirm-email"
            required
            className={`form-control ${styles.formBox}`}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="location">
            Location (e.g. Tokyo, Japan / CA,
            USA)・お住まい（例：札幌、東京）{" "}
          </label>
          <input
            type="text"
            name="location"
            className={`form-control ${styles.formBox}`}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message">Message・お問合せ内容 </label>
          <textarea
            name="message"
            required
            className={`form-control ${styles.formBox}`}
            rows={4}
          />
        </div>

        <button type="submit" className={`btn ${styles.submitButton}`}>
          Send
        </button>
      </form>
    </div>
  );
}
