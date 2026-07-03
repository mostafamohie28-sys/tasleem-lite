# Tasleem Lite Business Rules

## Current State

No production business logic has been implemented.

The current application contains only:

- Static UI screens.
- Frontend-only demo authentication.
- Demo dashboard data.
- Arabic and English translations.
- Demo Master Data and Settings configuration data.
- UI placeholders for future forms, actions, and workflow settings.

## Demo Authentication

The current login flow is for frontend demonstration only.

- Username: `admin`
- Password: `admin123`
- Persistence: `localStorage`
- Protected routes: `/dashboard`, `/company`, `/senders`, `/couriers`,
  `/shipment-statuses`
- Unauthenticated users are redirected to `/`.
- Logout clears the local authentication flag.

This is not production authentication and must be replaced with backend-backed
authentication before real use.

Protected route metadata is centralized in the typed navigation configuration
and is reused by both route handling and the sidebar.

## Current UI Data

Dashboard statistics, Company settings, Senders, Couriers, and Shipment Statuses
are static demo data. They are used only to validate layout, branding,
responsiveness, reusable components, and multilingual UI.

Disabled Save buttons, Reset buttons, View actions, Edit actions, filters, and
dialogs are UI placeholders only. They do not persist, validate, calculate, or
change production data.

## Future Business Domains

The future ERP should define rules for:

- Shipment creation.
- Shipment status transitions.
- Shipment status update visibility and requirements.
- Price list configuration.
- Pickup and delivery assignment.
- Delivery representative workflows.
- Customer, sender, and receiver management.
- Branch-level operations.
- Cash collection.
- Expenses.
- Courier settlement.
- Treasury.
- Sender settlement.
- Reporting.
- Notifications.
- Printing.

## Future Rule Guidelines

- Business rules should live outside presentational components.
- UI components should remain reusable and translation-driven.
- Financial and shipment status changes should be auditable.
- Role and permission checks should be enforced by the backend in production.
- Arabic and English labels should be handled through the translation system.
