UKEMI SONIFICATION TRAINER — PHONE / WEB DEPLOYMENT
====================================================

This folder is everything needed to put the app online and install
it on phones like a real app (a "PWA" — Progressive Web App).

WHAT'S IN HERE
  index.html            the complete app (self-contained)
  manifest.webmanifest  app name, colors, icons (what makes it installable)
  sw.js                 service worker: makes it work offline after first visit
  icon-192.png          app icon (home screen)
  icon-512.png          app icon (splash screen)
  icon-maskable.png     app icon (Android adaptive shape)


INSTALL ON A PHONE
  Android:  open the link in Chrome -> menu (⋮) -> "Add to Home screen"
            (or the "Install app" banner). Launches full-screen with icon.
  iPhone:   open the link in Safari -> Share button -> "Add to Home Screen".
  Mac:      just open the link in any browser, or Chrome -> Install icon
            in the address bar for a dock app.

NOTES
  * The camera works because GitHub Pages serves over HTTPS.
  * First time someone opens the Live Trainer, the pose model (~10 MB)
    downloads once; the service worker then caches it for offline use.
  * Data exports (CSV/JSON) download to the phone/computer normally.
