# Tasleem Lite UI Guidelines

## Branding

Tasleem Lite uses a dark blue, white, and orange visual system based on the
logo in `/public/logo.png`.

## Internationalization

The UI supports Arabic and English through `react-i18next`.

- Arabic is the default language.
- Arabic must render with `dir="rtl"`.
- English must render with `dir="ltr"`.
- Do not hardcode user-facing text inside components.
- Add new copy to the translation files under `src/i18n/locales`.
- Keep translation namespaces organized by feature, such as `common`, `login`,
  and `dashboard`.

## Layout

Preserve the approved premium login and ERP dashboard layout unless a milestone
explicitly requests a redesign.
