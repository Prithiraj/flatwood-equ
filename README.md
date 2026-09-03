# Flatwoods Equestrian Center

A static, responsive website for Flatwoods Equestrian Center in Clermont, Florida.

## What is included

- Image-led home page built with semantic HTML and responsive CSS
- Call, text, and Google Maps direction CTAs
- Services based only on cross-checked public listings
- Real-photo editorial gallery with source transparency
- Lightweight Three.js wireframe-pasture enhancement that complements, rather than replaces, photography
- LocalBusiness/SportsActivityLocation structured data
- Accessible mobile navigation, focus states, and `prefers-reduced-motion` handling
- GitHub Pages deployment workflow

The implementation decisions and research guardrails are documented in [`IMPLEMENTATION_PLAN.md`](IMPLEMENTATION_PLAN.md).

## Run locally

No build step is required.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

The workflow in `.github/workflows/pages.yml` deploys the repository root to GitHub Pages on every push to `main` and can also be run manually.

Expected Pages URL:

`https://prithiraj.github.io/flatwood-equ/`

## Public business facts used

Research was cross-checked in September 2026 using the Google Maps listing provided for the project and these public equestrian/event sources:

- https://www.boardandstable.com/listings/flatwoods-equestrian-center-clermont-fl
- https://www.equinenow.com/riding/davenport-florida.htm
- https://distinguishedteaching.com/horsemanship-classes/clermont-lake-fl/
- https://happeningnext.com/event/fec-hunter-pace-eid3a0c7p0ae6

No pricing, instructor biography, age/weight policy, or other operating policy has been invented. Visitors are directed to call/text for current details.

## Photography

The site intentionally uses real photography rather than generated imagery.

- Hero trail image: **Florida Black Bear Scenic Byway — Trail Rider in Tiger Bay State Forest**, National Archives / Florida Division of Forestry, public domain, via Wikimedia Commons.
- Trail image: **Horseback rider on Mt Muller Horse Trail**, U.S. Forest Service, public domain, via Wikimedia Commons.
- Instruction image: **Therapeutic horseback riding 2.JPG**, Karakal, CC BY-SA, via Wikimedia Commons.
- Arena image: **Three participants riding their wild horse equestrian style in the arena**, Jeremy T. Dyer / BLM Utah, via Wikimedia Commons.
- Small facility-specific hero image: public Flatwoods profile image endpoint surfaced by a Flatwoods-hosted event listing.

Supporting editorial photos are explicitly labeled on the page and are **not represented as photographs of the Flatwoods property**. Replace them with owner-supplied originals when a facility photo library is available.

## Notes

The Three.js enhancement loads from a pinned jsDelivr module URL. If WebGL or the CDN is unavailable, a CSS-only visual fallback remains and all site content still works.
