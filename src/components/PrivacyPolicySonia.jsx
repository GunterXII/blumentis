import Footer from "./Footer";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  .sp-root {
    background: #0D0D0D;
    color: #F0EDE8;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    padding-top: 64px;
  }

  .sp-hero {
    position: relative;
    padding: 80px 10% 64px;
    border-bottom: 1px solid #1A1A1A;
    overflow: hidden;
  }

  .sp-hero::before {
    content: "SONIA";
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

  .sp-kicker {
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: #E63946; margin-bottom: 20px;
    display: flex; align-items: center; gap: 10px; position: relative;
  }
  .sp-kicker::before { content: ""; display: block; width: 32px; height: 1px; background: #E63946; }

  .sp-hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(42px, 6vw, 80px);
    line-height: 1; letter-spacing: 1px;
    position: relative; margin-bottom: 16px;
  }

  .sp-updated {
    font-size: 12px; color: #444; font-weight: 300;
    letter-spacing: 1px; position: relative;
  }
  .sp-updated span { color: #E63946; }

  .sp-body {
    max-width: 780px;
    margin: 0 auto;
    padding: 64px 10% 80px;
  }

  .sp-section { margin-bottom: 56px; }

  .sp-section-num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: #E63946; margin-bottom: 12px;
    display: flex; align-items: center; gap: 10px;
  }
  .sp-section-num::after { content: ""; flex: 1; height: 1px; background: #1A1A1A; }

  .sp-section-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(22px, 3vw, 32px);
    letter-spacing: 1px; color: #F0EDE8;
    margin-bottom: 16px; line-height: 1.1;
  }

  .sp-section-text {
    font-size: 15px; line-height: 1.85;
    color: #888; font-weight: 300;
  }

  .sp-section-text a {
    color: #E63946; text-decoration: none;
    border-bottom: 1px solid #E6394633;
    transition: border-color 0.2s;
  }
  .sp-section-text a:hover { border-color: #E63946; }

  .sp-subsection-title {
    font-size: 12px; letter-spacing: 3px; text-transform: uppercase;
    color: #555; margin-top: 28px; margin-bottom: 10px;
    display: flex; align-items: center; gap: 8px;
  }
  .sp-subsection-title::before { content: ""; display: block; width: 20px; height: 1px; background: #333; }

  .sp-list {
    list-style: none; padding: 0; margin: 12px 0 0;
    display: flex; flex-direction: column; gap: 8px;
  }
  .sp-list li {
    font-size: 15px; line-height: 1.7; color: #888; font-weight: 300;
    padding-left: 20px; position: relative;
  }
  .sp-list li::before {
    content: "—"; position: absolute; left: 0;
    color: #E63946; font-size: 12px; top: 3px;
  }

  .sp-divider {
    width: 100%; height: 1px;
    background: linear-gradient(90deg, transparent, #1A1A1A 20%, #1A1A1A 80%, transparent);
    margin: 56px 0;
  }

  .sp-contact-box {
    background: #111;
    border: 1px solid #1A1A1A;
    border-radius: 12px;
    padding: 32px 36px;
    display: flex; align-items: center; justify-content: space-between;
    gap: 24px; flex-wrap: wrap;
    margin-top: 56px;
  }

  .sp-contact-label {
    font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
    color: #444; margin-bottom: 8px;
  }
  .sp-contact-email {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px; color: #E63946; letter-spacing: 1px;
    text-decoration: none; transition: opacity 0.2s;
  }
  .sp-contact-email:hover { opacity: 0.7; }

  .sp-contact-cta {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 24px; border-radius: 100px;
    border: 1px solid #E63946; color: #E63946;
    font-size: 12px; letter-spacing: 2px; text-transform: uppercase;
    text-decoration: none; font-family: 'DM Sans', sans-serif;
    transition: background 0.2s, color 0.2s; white-space: nowrap;
  }
  .sp-contact-cta:hover { background: #E63946; color: #0D0D0D; }

  @media (max-width: 768px) {
    .sp-hero { padding: 72px 6% 48px; }
    .sp-body { padding: 48px 6% 64px; }
    .sp-contact-box { flex-direction: column; align-items: flex-start; }
  }
`;

const PrivacyPolicySonia = () => (
  <>
    <style>{css}</style>
    <div className="sp-root">

      <div className="sp-hero">
        <p className="sp-kicker">Legal — SonIA</p>
        <h1 className="sp-hero-title">SonIA Privacy Policy</h1>
        <p className="sp-updated">Last updated: <span>June 4, 2025</span></p>
      </div>

      <div className="sp-body">

        <div className="sp-section" style={{ marginBottom: 48 }}>
          <p className="sp-section-text">
            This Privacy Policy describes how Blumentis ("we", "us", or "our") collects, uses, and protects
            information when you use the SonIA mobile application ("App"). By using the App, you agree to
            the practices described in this policy.
          </p>
        </div>

        <div className="sp-divider" />

        {/* 01 */}
        <div className="sp-section">
          <div className="sp-section-num">01</div>
          <h2 className="sp-section-title">Who We Are</h2>
          <p className="sp-section-text">
            SonIA is an AI-powered enterprise assistant designed for internal business use. It is operated
            by Blumentis and made available exclusively to authorized company employees and personnel.
          </p>
        </div>

        {/* 02 */}
        <div className="sp-section">
          <div className="sp-section-num">02</div>
          <h2 className="sp-section-title">Information We Collect</h2>

          <div className="sp-subsection-title">2.1 Account Information</div>
          <p className="sp-section-text">When you log in, we collect:</p>
          <ul className="sp-list">
            <li>Username and password (transmitted securely to our servers)</li>
            <li>First name, last name, email address, and phone number</li>
            <li>Role (administrator or technician), language preference, and timezone</li>
          </ul>

          <div className="sp-subsection-title">2.2 Conversation Data</div>
          <p className="sp-section-text">
            When you interact with the AI assistant, your messages and the AI's responses are transmitted
            to and stored on our backend servers. This data is used solely to provide the service and
            improve response quality within your organization.
          </p>

          <div className="sp-subsection-title">2.3 Business Data</div>
          <p className="sp-section-text">
            The App allows you to view and manage tickets, documents, customers, and products within your
            organization. This data is stored on your company's private backend and is not shared with
            third parties.
          </p>

          <div className="sp-subsection-title">2.4 Session Tokens</div>
          <p className="sp-section-text">
            We store an authentication token (JWT) on your device using encrypted local storage. This token
            is used to maintain your session and is deleted when you log out.
          </p>

          <div className="sp-subsection-title">2.5 Device Information</div>
          <p className="sp-section-text">
            We do not collect device identifiers, advertising IDs, precise location, or any hardware
            information beyond what is strictly necessary for the App to function.
          </p>
        </div>

        {/* 03 */}
        <div className="sp-section">
          <div className="sp-section-num">03</div>
          <h2 className="sp-section-title">How We Use Your Information</h2>
          <ul className="sp-list">
            <li>To authenticate your identity and maintain your session</li>
            <li>To provide AI-assisted responses based on your company's knowledge base</li>
            <li>To display and manage business data (tickets, documents, products, customers)</li>
            <li>To send notifications relevant to your support activity</li>
          </ul>
          <p className="sp-section-text" style={{ marginTop: 20 }}>
            We do not use your data for advertising, profiling, or sale to third parties.
          </p>
        </div>

        {/* 04 */}
        <div className="sp-section">
          <div className="sp-section-num">04</div>
          <h2 className="sp-section-title">Data Storage and Security</h2>
          <p className="sp-section-text">
            All data is stored on servers controlled by your organization. We implement industry-standard
            security measures including HTTPS encryption for all data in transit and access control
            mechanisms on our API. Authentication tokens are stored securely on-device and never exposed
            to third-party services.
          </p>
        </div>

        {/* 05 */}
        <div className="sp-section">
          <div className="sp-section-num">05</div>
          <h2 className="sp-section-title">Data Sharing</h2>
          <p className="sp-section-text">
            We do not sell, trade, or rent your personal information to third parties. Data may be shared only:
          </p>
          <ul className="sp-list">
            <li>Within your organization, as necessary to provide the service</li>
            <li>If required by law or legal process</li>
          </ul>
        </div>

        {/* 06 */}
        <div className="sp-section">
          <div className="sp-section-num">06</div>
          <h2 className="sp-section-title">Data Retention</h2>
          <p className="sp-section-text">
            Conversation and business data is retained for the period defined by your organization's data
            retention policy. You may request deletion of your personal account data by contacting your
            system administrator.
          </p>
        </div>

        {/* 07 */}
        <div className="sp-section">
          <div className="sp-section-num">07</div>
          <h2 className="sp-section-title">Your Rights</h2>
          <p className="sp-section-text">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="sp-list">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data ("right to be forgotten")</li>
            <li>Export your data in a portable format</li>
          </ul>
          <p className="sp-section-text" style={{ marginTop: 20 }}>
            To exercise these rights, contact your organization's administrator or reach us at{" "}
            <a href="mailto:frontend@blumentis.ai">frontend@blumentis.ai</a>.
          </p>
        </div>

        {/* 08 */}
        <div className="sp-section">
          <div className="sp-section-num">08</div>
          <h2 className="sp-section-title">Children's Privacy</h2>
          <p className="sp-section-text">
            SonIA is intended exclusively for use by adults in a professional business context. We do not
            knowingly collect information from individuals under 18 years of age.
          </p>
        </div>

        {/* 09 */}
        <div className="sp-section">
          <div className="sp-section-num">09</div>
          <h2 className="sp-section-title">Changes to This Policy</h2>
          <p className="sp-section-text">
            We may update this Privacy Policy from time to time. We will notify users of significant changes
            by updating the "Last updated" date above. Continued use of the App after changes constitutes
            acceptance of the revised policy.
          </p>
        </div>

        {/* 10 */}
        <div className="sp-section">
          <div className="sp-section-num">10</div>
          <h2 className="sp-section-title">Contact Us</h2>
          <p className="sp-section-text">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
        </div>

        <div className="sp-contact-box">
          <div>
            <div className="sp-contact-label">Blumentis — Questions or concerns?</div>
            <a href="mailto:frontend@blumentis.ai" className="sp-contact-email">
              frontend@blumentis.ai
            </a>
          </div>
          <a
            href="https://mail.google.com/mail/?view=cm&to=frontend@blumentis.ai&su=SonIA%20Privacy%20Policy%20Request&body=Ciao,%20ti%20contatto%20per..."
            target="_blank"
            rel="noreferrer"
            className="sp-contact-cta"
          >
            Contact us →
          </a>
        </div>

        <p style={{ fontSize: 12, color: "#333", marginTop: 40, textAlign: "center", fontWeight: 300 }}>
          © 2025 Blumentis. All rights reserved. – SonIA Privacy Policy
        </p>

      </div>

      <Footer />
    </div>
  </>
);

export default PrivacyPolicySonia;
