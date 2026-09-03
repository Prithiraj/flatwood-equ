# Flatwoods Equestrian Center — Implementation Plan

## Goal

Build and publish a polished, image-led, mobile-first website for **Flatwoods Equestrian Center** in Clermont, Florida. The site should feel grounded in the real property and riding experience rather than like a generic template.

## Verified public facts to use

- Business: Flatwoods Equestrian Center
- Address: 9348 Sycamore Rd, Clermont, FL 34714
- Phone: +1 (352) 536-5348
- Public listing category: Horseback riding service
- Public Google listing rating observed during research: 4.8 / 5 from 19 reviews
- Public listing hours observed during research: Monday–Saturday, 9:00 AM–7:00 PM; call before visiting
- Services consistently listed across public directories: English & Western lessons, horse training, boarding, horseback riding, trail riding; riding arena available
- Past Flatwoods Hunter Pace event descriptions confirm on-property riding through cow pastures, water, hills, optional jumps, and trailer space. Event details are historical context, not a promise of a current event schedule.

## Content principles

1. **No invented pricing, instructor bios, policies, or guarantees.** Use “call/text for current availability and pricing.”
2. **Real photography only.** No AI-generated horse/farm imagery.
3. **Do not mislabel representative photography as the Flatwoods property.** Facility-specific public imagery is used where a stable source is available; supporting open-license equestrian photography is explicitly presented as editorial/representative imagery.
4. Keep the primary conversion paths simple: **Call**, **Text**, and **Get directions**.
5. Preserve the center’s public positioning: safe, fun horsemanship and riding for a range of ages/experience levels.

## Visual direction

- Warm Florida ranch palette: bone/cream, pine green, saddle brown, sunlit amber.
- Editorial serif display type paired with a clean sans-serif UI stack.
- Large real-photo crops, natural texture, generous whitespace, thin rules, restrained shadows.
- Mobile-first responsive layout with a sticky navigation bar.
- Motion should be subtle and respect `prefers-reduced-motion`.

## Page structure

1. **Sticky header** — brand, Experience, Services, Gallery, Visit; Call button.
2. **Hero** — strong positioning, immediate Call/Text/Directions CTAs, image-led composition, rating/location summary.
3. **Services** — Lessons, Training, Boarding, Trails; concise and fact-based.
4. **Landscape / experience** — explain the natural Florida riding setting and historical Hunter Pace terrain without presenting a past event as current.
5. **Photo story** — real equestrian photography; source/attribution notes where required.
6. **Why Flatwoods** — practical differentiators based on public sources: English + Western, arena, trail access/experience, trainer on-site, low-friction contact.
7. **Visit** — address, public hours, phone, Google Maps embed, directions CTA.
8. **FAQ** — only questions answerable from verified information; otherwise direct users to call/text.
9. **Footer** — contact details, source/photo note, current year.

## Three.js usage

Three.js is optional and must never replace photography. Use it only as a lightweight ambient visual in the “landscape” section: a slow, low-contrast wireframe terrain that evokes rolling pasture. It must:

- sit behind/alongside real content,
- be non-interactive decoration,
- fail gracefully if WebGL/CDN loading is unavailable,
- pause/reduce motion for users who prefer reduced motion.

## Technical approach

- Static site: `index.html`, `styles.css`, `script.js`.
- No framework or build step; this keeps GitHub Pages deployment simple and fast.
- Progressive enhancement: core content and CTAs work without JavaScript.
- Three.js loaded as an ES module from a pinned CDN version.
- Google Maps place embed uses a standard query URL and needs no API key.
- SEO basics: semantic headings, description, Open Graph metadata, LocalBusiness JSON-LD, accessible alt text.
- Accessibility: keyboard-visible focus, sufficient contrast, reduced-motion support, descriptive links, semantic landmark elements.

## Photo/media policy for this implementation

- Use the Flatwoods public Facebook profile image endpoint surfaced by a public Flatwoods-hosted event listing as facility-specific media where it resolves.
- Use open-license/public-domain Wikimedia Commons real equestrian photographs for supporting/editorial images, with attribution in the page.
- Never claim the supporting images depict the Flatwoods property.
- Replace representative images with owner-supplied Flatwoods originals when available.

## Deployment

Publish with GitHub Pages using the official Pages Actions flow:

- checkout
- configure-pages
- upload-pages-artifact
- deploy-pages

Workflow triggers on pushes to `main` and can also be run manually. The deployment will be verified by checking the workflow run and the public Pages URL.

## Acceptance checklist

- [x] Plan written before implementation.
- [x] Responsive home page implemented locally.
- [x] Only verified business claims used.
- [x] Real photography used; representative images are not misrepresented.
- [x] Three.js is complementary and gracefully optional.
- [x] Call, Text, and Directions CTAs work.
- [x] Google Maps location embed present.
- [x] Metadata + JSON-LD included.
- [x] Reduced-motion and keyboard focus handled.
- [x] README documents local use, sources, and deployment.
- [x] GitHub Pages workflow prepared.
- [x] Repository write access granted to the connected GitHub app.
- [ ] Files pushed to `main`.
- [ ] Deployment run checked and public URL verified.

## Research sources

- Google Maps place supplied for this project
- https://www.boardandstable.com/listings/flatwoods-equestrian-center-clermont-fl
- https://www.equinenow.com/riding/davenport-florida.htm
- https://distinguishedteaching.com/horsemanship-classes/clermont-lake-fl/
- https://happeningnext.com/event/fec-hunter-pace-eid3a0c7p0ae6
- https://commons.wikimedia.org/ (supporting real-photo media and licensing)
