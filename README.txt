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

HOW TO PUT IT ONLINE (free, ~10 minutes, no coding)
  1. Go to github.com and create a free account.
  2. Click "+" -> "New repository". Name it e.g.  ukemi-trainer.  Create.
  3. Click "uploading an existing file" and drag ALL files in this
     folder into the page. Commit.
  4. Repository Settings -> Pages -> Branch: main -> Save.
  5. Wait ~1 minute. Your app is live at:
       https://YOUR-USERNAME.github.io/ukemi-trainer/

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
