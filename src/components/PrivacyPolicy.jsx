import Footer from "./Footer";

const today = new Date();
const lastUpdated = today.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  .pp-root {
    background: #0D0D0D;
    color: #F0EDE8;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    padding-top: 64px;
  }

  .pp-hero {
    position: relative;
    padding: 80px 10% 64px;
    border-bottom: 1px solid #1A1A1A;
    overflow: hidden;
  }

  .pp-hero::before {
    content: "PRIVACY";
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

  .pp-kicker {
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: #E63946; margin-bottom: 20px;
    display: flex; align-items: center; gap: 10px; position: relative;
  }
  .pp-kicker::before { content: ""; display: block; width: 32px; height: 1px; background: #E63946; }

  .pp-hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(42px, 6vw, 80px);
    line-height: 1; letter-spacing: 1px;
    position: relative; margin-bottom: 16px;
  }

  .pp-updated {
    font-size: 12px; color: #444; font-weight: 300;
    letter-spacing: 1px; position: relative;
  }
  .pp-updated span { color: #E63946; }

  .pp-body {
    max-width: 780px;
    margin: 0 auto;
    padding: 64px 10% 80px;
  }

  .pp-section { margin-bottom: 56px; }

  .pp-section-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: #E63946; margin-bottom: 12px;
    display: flex; align-items: center; gap: 10px;
  }
  .pp-section-num::after { content: ""; flex: 1; height: 1px; background: #1A1A1A; }

  .pp-section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(22px, 3vw, 32px);
    letter-spacing: 1px; color: #F0EDE8;
    margin-bottom: 16px; line-height: 1.1;
  }

  .pp-section-text {
    font-size: 15px; line-height: 1.85;
    color: #888; font-weight: 300;
  }

  .pp-section-text a {
    color: #E63946; text-decoration: none;
    border-bottom: 1px solid #E6394633;
    transition: border-color 0.2s;
  }
  .pp-section-text a:hover { border-color: #E63946; }

  .pp-divider {
    width: 100%; height: 1px;
    background: linear-gradient(90deg, transparent, #1A1A1A 20%, #1A1A1A 80%, transparent);
    margin: 56px 0;
  }

  .pp-contact-box {
    background: #111;
    border: 1px solid #1A1A1A;
    border-radius: 12px;
    padding: 32px 36px;
    display: flex; align-items: center; justify-content: space-between;
    gap: 24px; flex-wrap: wrap;
    margin-top: 56px;
  }

  .pp-contact-label {
    font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
    color: #444; margin-bottom: 8px;
  }
  .pp-contact-email {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px; color: #E63946; letter-spacing: 1px;
    text-decoration: none; transition: opacity 0.2s;
  }
  .pp-contact-email:hover { opacity: 0.7; }

  .pp-contact-cta {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 24px; border-radius: 100px;
    border: 1px solid #E63946; color: #E63946;
    font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
    text-decoration: none; font-family: 'DM Sans', sans-serif;
    transition: background 0.2s, color 0.2s; white-space: nowrap;
  }
  .pp-contact-cta:hover { background: #E63946; color: #0D0D0D; }

  @media (max-width: 768px) {
    .pp-hero { padding: 72px 6% 48px; }
    .pp-body { padding: 48px 6% 64px; }
    .pp-contact-box { flex-direction: column; align-items: flex-start; }
  }
`;

const SECTIONS = [
  {
    num: "01",
    title: "Information We Collect",
    text: `We may collect personal information such as your name, email address, contact details, and other relevant information when you sign up for our newsletter, request information, or use our services. We may also collect non-personal data related to your website interactions and browsing activities for analytical purposes.`,
  },
  {
    num: "02",
    title: "Use of Information",
    text: `We use the collected information to provide you with the requested services, respond to your inquiries, and inform you about updates or new services that may be of interest to you. We may also use non-personal data to analyze website traffic and improve our website and services.`,
  },
  {
    num: "03",
    title: "Sharing of Information",
    text: `We do not sell, trade, or rent your personal information to third parties. We may share your personal information with trusted third-party service providers who assist us in operating our website, providing services, or for legal compliance purposes. These third parties are required to maintain the confidentiality of your information and are prohibited from using it for any other purpose.`,
  },
  {
    num: "04",
    title: "Data Security",
    text: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, disclosure, or misuse. However, please note that no data transmission over the internet or storage system can be guaranteed to be 100% secure.`,
  },
  {
    num: "05",
    title: "Third-Party Links",
    text: `Our website may contain links to third-party websites or services. This Privacy Policy does not apply to those external websites or services, and we cannot control or be held responsible for their privacy practices. We encourage you to review the privacy policies of those third parties before providing any personal information.`,
  },
  {
    num: "06",
    title: "Cookies & Tracking Technologies",
    text: `Our website uses cookies and other tracking technologies to enhance your experience and provide relevant content. You can find more information about our use of cookies and how to manage them in our Cookie Policy.`,
  },
  {
    num: "07",
    title: "Your Rights",
    text: `You have the right to access, update, or request the deletion of your personal information. If you have any questions or concerns about our Privacy Policy or the personal information we hold about you, please contact us at admin.blumentis@blumentis.ai.`,
  },
];

const PrivacyPolicy = () => (
  <>
    <style>{css}</style>
    <div className="pp-root">

      <div className="pp-hero">
        <p className="pp-kicker">Legal</p>
        <h1 className="pp-hero-title">Privacy Policy</h1>
        <p className="pp-updated">Last updated: <span>{lastUpdated}</span></p>
      </div>

      <div className="pp-body">

        <div className="pp-section" style={{ marginBottom: 48 }}>
          <p className="pp-section-text">
            At BluMentis, we are committed to protecting your privacy and safeguarding your personal information.
            This Privacy Policy outlines how we collect, use, and secure the personal data you provide when using
            our website and services. By accessing our website, you consent to the data practices described in this policy.
          </p>
        </div>

        <div className="pp-divider" />

        {SECTIONS.map((s) => (
          <div className="pp-section" key={s.num}>
            <div className="pp-section-num">{s.num}</div>
            <h2 className="pp-section-title">{s.title}</h2>
            <p className="pp-section-text">{s.text}</p>
          </div>
        ))}

        <div className="pp-contact-box">
          <div>
            <div className="pp-contact-label">Questions or concerns?</div>
            <a href="mailto:admin.blumentis@blumentis.ai" className="pp-contact-email">
              admin.blumentis@blumentis.ai
            </a>
          </div>
          <a 
  href="https://mail.google.com/mail/?view=cm&to=admin.blumentis@blumentis.ai&su=Richiesta&body=Ciao,%20ti%20contatto%20per..."
  target="_blank"className="pp-contact-cta">
            Contact us →
          </a>
        </div>

      </div>

      <Footer />
    </div>
  </>
);

export default PrivacyPolicy;