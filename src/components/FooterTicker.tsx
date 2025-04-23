import React from 'react';

const terms = ['Branding', 'Development', 'SEO', 'Digital Marketing'];

const FooterTicker: React.FC = () => (
  <div className="footer-ticker">
    <div className="scrolling-ticker">
      <div className="scrolling-ticker-box">
        {[0, 1].map((_, block) => (
          <div className="scrolling-content" key={block}>
            {terms.concat(terms).map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FooterTicker;