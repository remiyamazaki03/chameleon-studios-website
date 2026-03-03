"use client";

import styles from "./form.module.css";

export default function Form() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    await fetch("/contact.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    });
  };
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
