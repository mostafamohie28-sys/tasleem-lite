export const enCompany = {
  header: {
    label: 'Company',
    title: 'Company Profile',
    description:
      'Manage the company identity, contact details, address, business preferences, and branding placeholders.',
    badge: 'UI only',
  },
  sections: {
    companyInformation: {
      title: 'Company Information',
      description: 'Core legal and commercial company details.',
    },
    contactInformation: {
      title: 'Contact Information',
      description: 'Primary communication channels for the company.',
    },
    address: {
      title: 'Address',
      description: 'Main operating address for company records.',
    },
    businessSettings: {
      title: 'Business Settings',
      description: 'Default preferences used across future ERP modules.',
    },
    branding: {
      title: 'Branding',
      description: 'Visual identity placeholders for the company profile.',
    },
  },
  fields: {
    companyName: { label: 'Company Name', placeholder: 'Tasleem Logistics LLC' },
    commercialName: { label: 'Commercial Name', placeholder: 'Tasleem' },
    taxNumber: { label: 'Tax Number', placeholder: 'EG-000000000' },
    registrationNumber: { label: 'Registration Number', placeholder: 'CR-000000' },
    phone: { label: 'Phone', placeholder: '+20 2 0000 0000' },
    mobile: { label: 'Mobile', placeholder: '+20 100 000 0000' },
    email: { label: 'Email', placeholder: 'info@tasleem.local' },
    website: { label: 'Website', placeholder: 'https://tasleem.local' },
    country: { label: 'Country', placeholder: 'Egypt' },
    city: { label: 'City', placeholder: 'Cairo' },
    address: { label: 'Address', placeholder: 'Street, district, building number' },
    defaultCurrency: { label: 'Default Currency', placeholder: 'EGP' },
    defaultLanguage: { label: 'Default Language', placeholder: 'Arabic' },
    timeZone: { label: 'Time Zone', placeholder: 'Africa/Cairo' },
  },
  branding: {
    logo: {
      label: 'Company Logo',
      title: 'Logo upload placeholder',
      description: 'Upload will be connected when backend storage is available.',
      action: 'Upload disabled',
    },
    primaryColor: {
      label: 'Primary Color',
      name: 'Tasleem Orange',
      preview: 'Preview',
    },
  },
  actions: {
    title: 'Actions',
    description:
      'Buttons are visual placeholders until the company module is connected to real data.',
    save: 'Save',
    reset: 'Reset',
  },
}
