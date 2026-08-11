import React, { useEffect, useRef, useState } from 'react';
import './Page.css';

const NEON_ORIGIN = 'https://goodworkinstituteprojects.app.neoncrm.com';
const EMBED_IFRAME_ID = 'neon-form-embed-43';
const TOKEN_KEY = 'neon-frt-goodworkinstituteprojects-embed-token';

function Donate() {
  const [iframeSrc, setIframeSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef(null);

  useEffect(() => {
    const currentUrl = new URL(window.location.href);
    const neonCrmResult = currentUrl.searchParams.get('neonCrmResult');
    const embedIframeIdParam = currentUrl.searchParams.get('embedIframeId');
    const neonCrmResultReloaded = sessionStorage.getItem(EMBED_IFRAME_ID);

    if (neonCrmResultReloaded && neonCrmResult) {
      sessionStorage.removeItem(EMBED_IFRAME_ID);
      currentUrl.searchParams.delete('neonCrmResult');
      currentUrl.searchParams.delete('embedIframeId');
      window.location.replace(currentUrl.toString());
      return;
    }

    const embedToken = localStorage.getItem(TOKEN_KEY) || '';
    let src = `${NEON_ORIGIN}/forms/free-youth-services?hideTheme=0&from=iframe&sharingType=formEmbed&embedIframeDomainUrl=${encodeURIComponent(
      window.location.href
    )}&embedIframeId=${EMBED_IFRAME_ID}&embedToken=${embedToken}&utm_source=embed`;

    if (neonCrmResult && embedIframeIdParam === EMBED_IFRAME_ID) {
      const resultUrl = new URL(`${NEON_ORIGIN}/forms/result/${neonCrmResult}?hideTheme=1&sharingType=formEmbed`);
      resultUrl.searchParams.set('embedToken', embedToken);
      src = resultUrl.toString();
      sessionStorage.setItem(EMBED_IFRAME_ID, 'true');
    }

    setIframeSrc(src);
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== NEON_ORIGIN || event.data?.embedIframeId !== EMBED_IFRAME_ID) return;
      const iframe = iframeRef.current;
      if (!iframe) return;

      if (event.data.type === 'iframeHeight') {
        iframe.style.height = `${event.data.height}px`;
      } else if (event.data.type === 'scrollToTop') {
        iframe.scrollIntoView({ behavior: 'smooth' });
      } else if (event.data.type === 'DOMContentLoaded') {
        iframe.contentWindow.postMessage(
          {
            domainUrl: window.location.href,
            sharingType: 'formEmbed',
            embedIframeId: EMBED_IFRAME_ID,
            embedToken: localStorage.getItem(TOKEN_KEY) || '',
            topUrl: window.location.href,
          },
          NEON_ORIGIN
        );
        setLoading(false);
      } else if (
        event.data.type === 'neonFntEmbedToken' &&
        sessionStorage.getItem('triggerLoginNeonIframeId') === EMBED_IFRAME_ID
      ) {
        localStorage.setItem(event.data.neonFntEmbedTokenKey, event.data.neonFntEmbedToken);
        sessionStorage.removeItem('triggerLoginNeonIframeId');
        iframe.contentWindow.postMessage(
          {
            domainUrl: window.location.href,
            sharingType: 'formEmbed',
            embedIframeId: EMBED_IFRAME_ID,
            embedToken: event.data.neonFntEmbedToken,
            topUrl: window.location.href,
          },
          NEON_ORIGIN
        );
        const iframeUrl = new URL(iframe.src);
        iframeUrl.searchParams.set('embedToken', event.data.neonFntEmbedToken);
        setLoading(true);
        setIframeSrc(iframeUrl.toString());
      } else if (event.data.type === 'triggerLoginIframe') {
        sessionStorage.setItem('triggerLoginNeonIframeId', EMBED_IFRAME_ID);
        window.open(event.data.loginUrl, '_blank');
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const handleIframeLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    iframe.contentWindow.postMessage(
      {
        domainUrl: window.location.href,
        sharingType: 'formEmbed',
        embedIframeId: EMBED_IFRAME_ID,
        initNotify: true,
        embedToken: localStorage.getItem(TOKEN_KEY) || '',
        topUrl: window.location.href,
      },
      NEON_ORIGIN
    );
  };

  return (
    <div className="page">
      <div className="page-content">
        <p className="page-description">
          Your support helps us continue to offer free programs for incarcerated youth. Every dollar raised gives youth direct access to rehabilitative and life changing programs.
        </p>
        <div className="donate-form-embed">
          {loading && (
            <div className="donate-form-loading">
              <div className="donate-form-spinner" />
            </div>
          )}
          {iframeSrc && (
            <iframe
              ref={iframeRef}
              id={EMBED_IFRAME_ID}
              title="Donation form"
              src={iframeSrc}
              onLoad={handleIframeLoad}
              className="donate-form-iframe"
              style={{ display: loading ? 'none' : 'block' }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Donate;
