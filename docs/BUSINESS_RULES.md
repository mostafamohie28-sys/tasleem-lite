# Tasleem Lite Business Rules

## Current State

No production business logic has been implemented.

The current application contains only:

- Static UI screens.
- Frontend-only demo authentication.
- Demo dashboard data.
- Arabic and English translations.

## Demo Authentication

The current login flow is for frontend demonstration only.

- Username: `admin`
- Password: `admin123`
- Persistence: `localStorage`
- Protected route: `/dashboard`
- Unauthenticated users are redirected to `/`.
- Logout clears the local authentication flag.

This is not production authentication and must be replaced with backend-backed
authentication before real use.

## Current UI Data

Dashboard statistics and shipment rows are static placeholder data. They are
used only to validate layout, branding, responsiveness, and multilingual UI.

## Future Business Domains

The future ERP should define rules for:

- Shipment creation.
- Shipment status transitions.
- Pickup and delivery assignment.
- Delivery representative workflows.
- Customer, sender, and receiver management.
- Branch-level operations.
- Cash collection.
- Expenses.
- Reporting.
- Notifications.
- Printing.

## Future Rule Guidelines

- Business rules should live outside presentational components.
- UI components should remain reusable and translation-driven.
- Financial and shipment status changes should be auditable.
- Role and permission checks should be enforced by the backend in production.
- Arabic and English labels should be handled through the translation system.
