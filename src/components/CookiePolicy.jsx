import Footer from "./Footer";

const today = new Date();
const lastUpdated = today.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  .cp-root {
    background: #0D0D0D;
    color: #F0EDE8;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    padding-top: 64px;
  }

  .cp-hero {
    position: relative;
    padding: 80px 10% 64px;
    border-bottom: 1px solid #1A1A1A;
    overflow: hidden;
  }

  .cp-hero::before {
    content: "COOKIES";
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(60px, 14vw, 200px);
    color: #111;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    pointer-events: none;
    letter-spacing: 8px;
    user-select: none;
  }

  .cp-kicker {
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: #E63946; margin-bottom: 20px;
    display: flex; align-items: center; gap: 10px; position: relative;
  }
  .cp-kicker::before { content: ""; display: block; width: 32px; height: 1px; background: #E63946; }

  .cp-hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(42px, 6vw, 80px);
    line-height: 1; letter-spacing: 1px;
    position: relative; margin-bottom: 16px;
  }

  .cp-updated {
    font-size: 12px; color: #444; font-weight: 300;
    letter-spacing: 1px; position: relative;
  }
  .cp-updated span { color: #E63946; }

  .cp-body {
    max-width: 780px;
    margin: 0 auto;
    padding: 64px 10% 80px;
  }

  .cp-intro {
    font-size: 15px; line-height: 1.85;
    color: #888; font-weight: 300;
    margin-bottom: 56px;
  }

  .cp-divider {
    width: 100%; height: 1px;
    background: linear-gradient(90deg, transparent, #1A1A1A 20%, #1A1A1A 80%, transparent);
    margin: 48px 0;
  }

  .cp-cookie-types { display: flex; flex-direction: column; gap: 2px; margin-bottom: 56px; }

  .cp-cookie-card {
    background: #111;
    border: 1px solid #1A1A1A;
    border-radius: 10px;
    padding: 28px 32px;
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 0 24px;
    align-items: start;
    transition: border-color 0.2s;
  }
  .cp-cookie-card:hover { border-color: #222; }

  .cp-cookie-index {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 32px; line-height: 1;
    color: #E63946; padding-top: 2px;
  }

  .cp-cookie-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 20px; letter-spacing: 1px;
    color: #F0EDE8; margin-bottom: 8px;
  }

  .cp-cookie-text {
    font-size: 14px; line-height: 1.8;
    color: #666; font-weight: 300;
  }

  .cp-section { margin-bottom: 48px; }

  .cp-section-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: #E63946; margin-bottom: 12px;
    display: flex; align-items: center; gap: 10px;
  }
  .cp-section-num::after { content: ""; flex: 1; height: 1px; background: #1A1A1A; }

  .cp-section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(22px, 3vw, 32px);
    letter-spacing: 1px; color: #F0EDE8;
    margin-bottom: 16px;
  }

  .cp-section-text {
    font-size: 15px; line-height: 1.85;
    color: #888; font-weight: 300;
  }

  .cp-section-text a {
    color: #E63946; text-decoration: none;
    border-bottom: 1px solid #E6394633;
    transition: border-color 0.2s;
  }
  .cp-section-text a:hover { border-color: #E63946; }

  .cp-contact-box {
    background: #111;
    border: 1px solid #1A1A1A;
    border-radius: 12px;
    padding: 32px 36px;
    display: flex; align-items: center; justify-content: space-between;
    gap: 24px; flex-wrap: wrap;
    margin-top: 56px;
  }

  .cp-contact-label {
    font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
    color: #444; margin-bottom: 8px;
  }
  .cp-contact-email {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px; color: #E63946; letter-spacing: 1px;
    text-decoration: none; transition: opacity 0.2s;
  }
  .cp-contact-email:hover { opacity: 0.7; }

  .cp-contact-cta {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 24px; border-radius: 100px;
    border: 1px solid #E63946; color: #E63946;
    font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
    text-decoration: none; font-family: 'DM Sans', sans-serif;
    transition: background 0.2s, color 0.2s; white-space: nowrap;
  }
  .cp-contact-cta:hover { background: #E63946; color: #0D0D0D; }

  .cp-consent-bar {
    background: #0F0F0F;
    border: 1px solid #1A1A1A;
    border-radius: 10px;
    padding: 20px 28px;
    margin-top: 40px;
    font-size: 13px;
    color: #555;
    line-height: 1.7;
    font-style: italic;
  }

  @media (max-width: 768px) {
    .cp-hero { padding: 72px 6% 48px; }
    .cp-body { padding: 48px 6% 64px; }
    .cp-cookie-card { grid-template-columns: 1fr; gap: 8px; }
    .cp-contact-box { flex-direction: column; align-items: flex-start; }
  }
`;

const COOKIE_TYPES = [
  {
    title: "Essential Cookies",
    text: "Strictly necessary for the operation of our website. They enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions.",
  },
  {
    title: "Analytics Cookies",
    text: "We use analytics cookies to collect information about how users interact with our website. This data is compiled into anonymous reports to help us improve the site — including visitor counts, traffic sources, and page activity.",
  },
  {
    title: "Advertising Cookies",
    text: "Used to deliver relevant advertising content based on your interests. They may track browsing activity across different websites and enable us to measure the effectiveness of our advertising campaigns.",
  },
  {
    title: "Social Media Cookies",
    text: "These cookies are set when you share content or interact with social media features on our website. The social network will record that you have engaged with specific content on our site.",
  },
];

const CookiePolicy = () => (
  <>
    <style>{css}</style>
    <div className="cp-root">

      <div className="cp-hero">
        <p className="cp-kicker">Legal</p>
        <h1 className="cp-hero-title">Cookie Policy</h1>
        <p className="cp-updated">Last updated: <span>{lastUpdated}</span></p>
      </div>

      <div className="cp-body">

        <p className="cp-intro">
          Our website uses cookies to enhance your browsing experience. Cookies are small text files placed
          on your device by websites you visit. They are widely used to make websites work more efficiently
          and to provide information to website owners.
        </p>

        <div className="cp-section-num">Types of Cookies We Use</div>

        <div className="cp-cookie-types">
          {COOKIE_TYPES.map((c, i) => (
            <div className="cp-cookie-card" key={c.title}>
              <div className="cp-cookie-index">0{i + 1}</div>
              <div>
                <div className="cp-cookie-title">{c.title}</div>
                <p className="cp-cookie-text">{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cp-divider" />

        <div className="cp-section">
          <div className="cp-section-num">Managing Cookies</div>
          <h2 className="cp-section-title">How to Control Your Cookies</h2>
          <p className="cp-section-text">
            You can control and manage cookies in various ways. Please keep in mind that removing or blocking
            cookies can negatively impact your user experience and parts of our website may no longer be fully
            accessible. Most web browsers automatically accept cookies, but you can choose to accept or reject
            them through your browser's settings or preferences menu. You may also delete cookies from your
            device at any time.
          </p>
        </div>

        <div className="cp-section">
          <div className="cp-section-num">Third-Party Cookies</div>
          <h2 className="cp-section-title">Partners & Affiliates</h2>
          <p className="cp-section-text">
            Please note that our partners and affiliates may also use cookies on our website. We do not have
            direct control over these third-party cookies. We encourage you to review their respective privacy
            policies for more information on how they handle your data.
          </p>
        </div>

        <div className="cp-consent-bar">
          By continuing to use our website, you consent to our use of cookies in accordance with this Cookie Policy.
        </div>

        <div className="cp-contact-box">
          <div>
            <div className="cp-contact-label">Questions about cookies?</div>
            <a href="mailto:admin.blumentis@blumentis.ai" className="cp-contact-email">
              admin.blumentis@blumentis.ai
            </a>
          </div>
          <a href="mailto:admin.blumentis@blumentis.ai" className="cp-contact-cta">
            Contact us →
          </a>
        </div>

      </div>

      <Footer />
    </div>
  </>
);

export default CookiePolicy;