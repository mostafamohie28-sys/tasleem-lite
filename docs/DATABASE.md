# Tasleem Lite Database Notes

## Current State

No database has been implemented.

The current app is frontend-only and uses `localStorage` only for demo
authentication persistence. There is no backend, API, database connection,
schema, migration system, or production data storage.

## Current localStorage Usage

The only persisted value is the demo authentication flag:

- Key: `tasleem-lite-authenticated`
- Purpose: Tracks whether the demo user is logged in.
- Scope: Frontend-only demo flow.

This must not be treated as production authentication or secure storage.

## Future Database Direction

The future database should support a domestic shipping ERP system. Expected
entities include:

- Users.
- Roles.
- Permissions.
- Branches.
- Customers.
- Senders.
- Receivers.
- Shipments.
- Shipment status history.
- Delivery representatives.
- Cash collection records.
- Expenses.
- Notifications.
- Print records or document templates.

## Future Design Rules

- Keep authentication and authorization server-side in production.
- Track shipment status changes historically, not only as a single current field.
- Keep financial records auditable.
- Separate customer, sender, and receiver data where business rules require it.
- Design for multi-branch operations.
- Design for Arabic and English display names where user-facing records require localization.
