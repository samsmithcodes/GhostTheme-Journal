// Matomo
function loadMatomo() {
    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
        var u=matomoURL;
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', matomoSiteID]);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();
}

if (matomoEnabled) {
    // Load only if cookie already accepted
    if (document.cookie.includes("cookie_consent=all")) {
        loadMatomo();
    }
}
// End Matomo Code