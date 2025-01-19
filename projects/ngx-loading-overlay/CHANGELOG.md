# Changelog

This changelog is roughly based on [Keep a Changelog](http://keepachangelog.com/).

## [unreleased] (Breaking 🐱 | Feat 🚀 | Fixed 🐞)

## [2.0.0] 2025-01-19

## Breaking 🐱

- Remove input `ngxSetInertWhenLoading` and always set `inert` and remove scroll / set overflow to *hidden*, for easier centering of loading indicator.
- Add a section with class `ngx-loading-overlay` as overlay.
- Changed provider `provideNgxLoadingComponent` to `provideNgxLoadingIndicator`. Given Component will be centered to container element and inserted after `.ngx-loading-overlay` element.

## Fixed 🐞

- If scrolled, the loading overlay does not cover the scrolled sections.

## [1.0.1] 2025-01-16

### Fixed 🐞

- Publish with Ivy partial compilation mode.
- Fix link to example image in README.md.

## [1.0.0] 2025-01-16

###  Feat 🚀

- Publish first release.
