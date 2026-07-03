# Tasleem Lite Changelog

## Sprint 7: Pricing Engine Foundation UI

### Added

- Pricing Engine sidebar item under Master Data.
- Protected `/pricing-engine` frontend route.
- Pricing Engine module using the existing dashboard layout and shared UI
  components.
- Price Lists table with Name, Description, Active, Default List, Number of
  Senders, Created Date, and Actions columns.
- Price List demo records for Default, VIP, Amazon, and Noon.
- Search and filter toolbar for Price Lists.
- Add Price List dialog with disabled Save placeholder.
- Price List Details section with governorate and area collapsible hierarchy.
- Sender Price rows by shipment status with Notes and no Courier Price column.
- Bulk action placeholders for Copy Prices From Area, Apply Prices To
  Governorate, Duplicate Price List, Import Excel, and Export Excel.
- Read-only future placeholder cards for Price Version History, Effective Date,
  Pricing Rules, Courier Pricing, Weight Pricing, COD Pricing, and Advanced
  Conditions.
- Sender dialog Pricing Strategy UI with Default, Pricing Group, and Custom
  Price List options.
- Arabic and English translations for the Pricing Engine module and Sender
  Pricing Strategy fields.

### Changed

- Extended centralized route/navigation configuration for Pricing Engine.
- Extended price list mock data and types for the UI-only pricing foundation.

### Notes

- UI only.
- No backend was added.
- No database was added.
- No API was added.
- No pricing calculations were added.
- No workflow logic was added.
- No business logic was added.
- No new dependencies were added.

## Sprint 6.6: Project Foundation Cleanup

### Added

- Centralized `src/types` layer for reusable TypeScript types covering Company,
  Sender, Courier, Shipment Status, Price List, Governorate, and Area.
- Centralized `src/mocks` layer for existing static Company, Senders, Couriers,
  and Shipment Statuses demo data.
- Centralized `src/constants` layer for reusable UI constants such as supported
  languages, currencies, time zones, and record statuses.

### Changed

- Updated Company, Senders, Couriers, and Shipment Statuses components to import
  existing demo data from the mock layer instead of declaring it inline.
- Kept feature components focused on rendering while preserving their existing
  markup, styling, route behavior, authentication, and translations.
- Updated project context documentation for the new foundation structure.

### Notes

- No UI or UX changes were introduced.
- No routes were changed.
- No new pages or features were added.
- No backend was added.
- No database was added.
- No API was added.
- No business logic was added.
- No new dependencies were added.

## Sprint 6.5: Architecture Cleanup

### Added

- Typed navigation configuration as the single source of truth for route path,
  translation key, icon, sidebar group, protected state, and enabled state.
- Derived sidebar navigation from the shared navigation configuration.
- Derived protected route checks from the shared navigation configuration.
- Shared common translation labels for repeated UI actions and states, including
  Save, Cancel, Edit, View, Search, Reset, Active, Inactive, UI only, and Demo data.

### Changed

- Removed duplicated sidebar navigation definitions from the dashboard layout.
- Updated protected route rendering to use the centralized route configuration.
- Reused common translation keys in Company, Senders, Couriers, and Shipment
  Statuses where wording was already shared.
- Refreshed project documentation to match the current MVP progress.

### Notes

- No UI or UX changes were introduced.
- No new pages or features were added.
- No backend was added.
- No database was added.
- No API was added.
- No business logic was added.
- No new dependencies were added.

## Sprint 6: Shipment Status Management UI

### Added

- Shipment Statuses sidebar item under Settings.
- Protected `/shipment-statuses` frontend route.
- Shipment Statuses page using the shared Sprint 4 design system components.
- Page header with Add Status action.
- Statistics cards for Total Statuses, Active, Final Statuses, and Used In Price Lists.
- Search toolbar with Search, Active / Inactive, Final / Non Final, Used In Price List, and Visible To controls.
- Statuses table with Order, Arabic Name, English Name, Color, Icon Placeholder, Active, Final, Used In Price List, Employee, Courier, Sender, and Actions columns.
- View and Edit action buttons in the Statuses table.
- Add / Edit Status dialog with Basic Information, Appearance, Visibility, Behavior, and Future sections.
- Read-only future placeholder cards for Business Rules, Workflow, and Allowed Next Statuses.
- Arabic and English translations for the Shipment Statuses module and Settings sidebar item.

### Notes

- UI only.
- No backend was added.
- No database was added.
- No API was added.
- No business logic was added.
- No workflow engine was implemented.
- No automation was implemented.

## Sprint 5: Couriers Module UI

### Added

- Couriers sidebar item under Master Data.
- Protected `/couriers` frontend route.
- Couriers page using the shared Sprint 4 design system components.
- Couriers page header with Add Courier action.
- Couriers statistics cards for Total Couriers, Active, Inactive, and Available Today.
- Search toolbar with Search, Governorate, Area, and Status controls.
- Couriers table with Code, Courier Name, Mobile, Governorate, Area, Vehicle Type, Status, and Actions columns.
- View and Edit action buttons in the Couriers table.
- Add / Edit Courier dialog with Basic Information, Contact, Location, Business, and Other sections.
- Arabic and English translations for the Couriers module and sidebar item.

### Notes

- UI only.
- No backend was added.
- No database was added.
- No API was added.
- No business logic was added.
- The module follows the shared Master Data architecture for future module reuse.

## Sprint 4: Tasleem Design System Foundation

### Added

- Shared `PageHeader` component for reusable page titles and actions.
- Shared `StatsGrid` component for responsive statistics layouts.
- Shared `StatCard` component for generic ERP statistics.
- Shared `SearchToolbar` component for search and filter areas.
- Shared `DataTableContainer` component for table framing, scrolling, and empty-state support.
- Shared `EmptyState` component for reusable empty placeholders.
- Shared `FormSection` component for reusable form grouping.

### Changed

- Refactored the Company module to use shared page and form components.
- Refactored the Senders module to use shared page, statistics, toolbar, table, and form components.
- Removed the narrower Master Data-only header and statistic card components after replacing them with shared equivalents.

### Notes

- UI only.
- No backend was added.
- No database was added.
- No API was added.
- No business logic was added.
- Approved branding, layout, authentication, and multilingual behavior were preserved.

## Sprint 3: Master Data Foundation + Senders Module UI

### Added

- Grouped ERP sidebar structure.
- Dashboard navigation group.
- Master Data navigation group with Company and Senders.
- Placeholder groups for Operations, Accounting, Reports, and Settings.
- Protected `/senders` frontend route.
- Professional Senders page header with Add Sender action.
- Senders statistics cards using realistic demo values.
- Search, Status, and City filter controls as UI placeholders.
- Senders table with Code, Sender Name, Company, Mobile, City, Status, and Actions columns.
- View and Edit action buttons in the Senders table.
- Add / Edit Sender dialog with Basic Information, Contact, Address, Business, and Other sections.
- Reusable Master Data page header component.
- Reusable Master Data statistics card component.
- Arabic and English translations for the Senders module and new navigation groups.

### Notes

- UI only.
- No backend was added.
- No database was added.
- No API was added.
- No business logic was added.
- Placeholder sidebar items do not have functionality yet.

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
