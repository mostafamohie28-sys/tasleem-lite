# Tasleem Lite - Project Context

## Project Goal

Tasleem Lite is a modern ERP system for domestic shipping and delivery companies.

The goal is to build a fast, professional, scalable system that can later become a commercial SaaS product.

---

## Current Tech Stack

* React
* Vite
* TypeScript
* Tailwind CSS
* shadcn/ui
* react-i18next
* i18next

---

## Branding

Primary Colors:

* Dark Blue
* White
* Orange

Logo:

* Stored in /public/logo.png

---

## Current Progress

Completed:

* Git initialized
* GitHub connected
* React project created
* Tailwind installed
* shadcn installed
* Premium Login UI
* Dashboard UI
* Sidebar
* Navbar
* Branding applied
* Responsive layout
* Build passing
* Lint passing
* Arabic / English internationalization
* Automatic RTL / LTR layout direction
* Frontend-only authentication
* Dashboard route protection
* Logout flow
* Project cleanup completed
* Company Profile UI module
* Company Settings UI module
* Master Data sidebar foundation
* Senders UI module
* Tasleem shared design system foundation
* Couriers UI module
* Shipment Status Management UI module
* Architecture cleanup with typed navigation and route configuration
* Shared common translation labels for repeated UI actions and states
* Centralized TypeScript types layer
* Centralized mock data layer
* Centralized UI constants layer
* Pricing Engine UI foundation
* Sender Pricing Strategy UI placeholder

Not Started:

* Database
* Backend
* API
* Production authentication
* Business Logic beyond the current UI preview

---

## Development Rules

* Never rebuild existing components.
* Always inspect the current project before changing anything.
* Keep the code modular.
* Reuse components whenever possible.
* Keep all user-facing UI text in translation files.
* Arabic is the default language.
* Support RTL for Arabic and LTR for English.
* Do not implement business logic unless requested.
* Stop after each milestone and wait for approval.

---

## Project Vision

The project should be clean enough to become a complete ERP solution for shipping companies.

Future modules:

* Authentication
* Users
* Roles & Permissions
* Customers
* Senders
* Receivers
* Shipments
* Shipment Tracking
* Delivery Representatives
* Cash Collection
* Expenses
* Branches
* Reports
* Notifications
* Printing
* Mobile Support
* Settings

---

## Current Sprint

Sprint 7:
Pricing Engine Foundation UI

Status:
Completed

Next Sprint:
Shipments Module UI

Project Status:
Frontend foundation approved. The app currently has a polished branded UI,
frontend-only localStorage authentication, Arabic / English translations,
automatic RTL / LTR document direction, cleaned project structure, and a
frontend-only Company module UI. Sprint 3 added the grouped ERP sidebar
foundation for Master Data, Operations, Accounting, Reports, and Settings,
plus a protected `/senders` UI module with demo statistics, filters, table,
and Add / Edit Sender dialog placeholders. Sprint 4 added reusable shared UI
foundations for page headers, statistics, search toolbars, data table wrappers,
empty states, and form sections, then refactored Company and Senders to use
them without redesigning the approved UI. Sprint 5 added the protected
`/couriers` Master Data module using the shared design system, with demo
statistics, search and filters, a courier table, and Add / Edit Courier dialog
placeholders. Sprint 6 added the protected `/shipment-statuses` Settings
module for configuring shipment status visibility, appearance, pricing flags,
and workflow placeholders as UI only. Sprint 6.5 centralized navigation and
protected route metadata in a typed configuration, derives the sidebar and
protected route checks from that single source of truth, and moved repeated
labels such as Save, Cancel, Search, Active, and Inactive into the common
translation namespace. Sprint 6.6 added centralized `src/types`, `src/mocks`,
and `src/constants` layers, then moved existing static Company, Senders,
Couriers, and Shipment Statuses demo data out of UI components without changing
routes, branding, authentication, i18n, RTL / LTR behavior, or page layouts.
Sprint 7 added the protected `/pricing-engine` Master Data module with Price
Lists, Price List Details hierarchy, bulk action placeholders, future-ready
pricing placeholder cards, and a Sender Pricing Strategy UI placeholder. No
backend, database, API, pricing calculations, workflow engine, automation, or
production business logic has been implemented yet.
