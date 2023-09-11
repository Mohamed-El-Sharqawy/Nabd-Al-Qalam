import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Subscribe to Our Newsletter</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input required type="email" placeholder="Enter Email Address..." />
        <button>Subscribe</button>
        <p>
          Dar Nabd Al-Qalam is a cultural institution concerned with the
          investigation and publication of Arabic books at the highest
          scientific and knowledge levels.
        </p>
      </form>
    </div>
  );
};

export default Newsletter;
