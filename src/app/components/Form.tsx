export default function Form() {
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true" className="w-100">
        <input type="hidden" name="form-name" value="contact" />

        <div className="mb-3">
          <label>Full name・フルネーム </label>
          <input type="text" name="name" required className="form-control" />
        </div>

        <div className="mb-3">
          <label>Email・メールアドレス</label>
          <input type="email" name="email" required className="form-control" />
        </div>

        <div className="mb-3">
          <label>Confirm Email・メールアドレス確認</label>
          <input
            type="email"
            name="confirm-email"
            required
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label>
            Location (e.g. Tokyo, Japan / CA, USA)・お住まい（例：札幌、東京）
          </label>
          <input type="text" name="location" className="form-control" />
        </div>

        <div className="mb-3">
          <label>Message・お問合せ内容</label>
          <textarea name="message" required className="form-control" rows={4} />
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}
