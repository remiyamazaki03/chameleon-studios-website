import Link from "next/link";

export default function Navbar() {
  const closeMenu = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar?.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top navbar-css">
      <Link className="navbar-brand ms-3" href="/">
        <img src="/logo-small.png" alt="Chameleon Studios logo" width={60} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto navul">
          <li className="nav-item mx-0">
            <Link className="nav-link" href="/about">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="/voicecoach">
              Private voice lessons
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/webdeveloper">
              Website development
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
