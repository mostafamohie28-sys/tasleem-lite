# Tasleem Lite Changelog

## Sprint 2: Company Module UI

### Added

- Company sidebar item.
- Protected `/company` frontend route.
- Company Profile and Company Settings UI.
- Company Information section.
- Contact Information section.
- Address section.
- Business Settings section.
- Branding section with logo upload placeholder and primary color preview.
- Disabled Save placeholder button.
- Reset placeholder button.
- Arabic and English translations for the Company module.

### Notes

- UI only.
- No backend was added.
- No database was added.
- No API was added.
- No business logic was added.

## Sprint 1: Frontend Foundation

### Added

- React + Vite + TypeScript project setup.
- Tailwind CSS setup.
- shadcn/ui setup.
- Tasleem branding using `public/logo.png`.
- Premium login page.
- ERP-style dashboard layout.
- Sidebar navigation.
- Top navigation bar.
- Frontend-only demo authentication using `localStorage`.
- Demo user credentials: `admin` / `admin123`.
- Protected dashboard route.
- Logout action in the dashboard navbar.
- Arabic and English internationalization with `react-i18next`.
- Arabic as the default language.
- Automatic RTL for Arabic and LTR for English.
- Language switcher in the top navigation.
- Translation namespaces for `common`, `login`, and `dashboard`.

### Changed

- Moved user-facing UI text into translation files.
- Updated project context and UI guidelines for multilingual support.
- Cleaned the project structure.

### Removed

- Unused Vite starter files and assets.
- Dead starter CSS.
- Unused starter public icon sprite.

### Verified

- `npm run lint` passed after implementation milestones.
- `npm run build` passed after implementation milestones.

## Not Yet Implemented

- Backend.
- Database.
- API.
- Production authentication.
- Production authorization.
- Shipment business logic.
- ERP module workflows.
