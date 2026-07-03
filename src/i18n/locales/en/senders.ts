export const enSenders = {
  header: {
    label: 'Master Data',
    title: 'Senders',
    description:
      'Manage sender records used by daily shipment operations and settlement workflows.',
    badge: 'UI only',
    addSender: 'Add Sender',
  },
  stats: {
    totalSenders: 'Total Senders',
    active: 'Active',
    inactive: 'Inactive',
    newThisMonth: 'New This Month',
  },
  filters: {
    search: {
      label: 'Search',
      placeholder: 'Search by code, sender, company, or mobile',
    },
    status: {
      label: 'Status',
      placeholder: 'Select status',
      all: 'All statuses',
    },
    city: {
      label: 'City',
      placeholder: 'Select city',
      all: 'All cities',
    },
  },
  status: {
    active: 'Active',
    inactive: 'Inactive',
  },
  cities: {
    cairo: 'Cairo',
    giza: 'Giza',
    alexandria: 'Alexandria',
    mansoura: 'Mansoura',
  },
  table: {
    title: 'Senders List',
    description: 'Realistic demo records for the sender master data module.',
    badge: 'Demo data',
    columns: {
      code: 'Code',
      senderName: 'Sender Name',
      company: 'Company',
      mobile: 'Mobile',
      city: 'City',
      status: 'Status',
      actions: 'Actions',
    },
    actions: {
      view: 'View',
      edit: 'Edit',
    },
    rows: {
      delta: {
        name: 'Ahmed Hassan',
        company: 'Delta Trade Supplies',
      },
      nile: {
        name: 'Nour Logistics Team',
        company: 'Nile Home Goods',
      },
      orbit: {
        name: 'Mona Adel',
        company: 'Orbit Electronics',
      },
      madina: {
        name: 'Madina Branch Office',
        company: 'Madina Fashion Stores',
      },
    },
  },
  dialog: {
    addTitle: 'Add Sender',
    editTitle: 'Edit Sender',
    description:
      'This form is a UI placeholder. Save is disabled until real data storage is added.',
    sections: {
      basicInformation: 'Basic Information',
      contact: 'Contact',
      address: 'Address',
      business: 'Business',
      pricing: 'Pricing Strategy',
      other: 'Other',
    },
    pricingStrategy: {
      options: {
        default: 'Default',
        pricingGroup: 'Pricing Group',
        customPriceList: 'Custom Price List',
      },
      pricingGroup: {
        label: 'Pricing Group',
        placeholder: 'Select pricing group',
      },
      priceList: {
        label: 'Price List',
        placeholder: 'Select price list',
      },
      groups: {
        bronze: 'Bronze',
        silver: 'Silver',
        gold: 'Gold',
        vip: 'VIP',
      },
    },
    fields: {
      senderCode: { label: 'Sender Code', placeholder: 'SND-1005' },
      senderName: { label: 'Sender Name', placeholder: 'Sender contact name' },
      companyName: { label: 'Company Name', placeholder: 'Company or store name' },
      mobile: { label: 'Mobile', placeholder: '+20 100 000 0000' },
      phone: { label: 'Phone', placeholder: '+20 2 0000 0000' },
      email: { label: 'Email', placeholder: 'sender@example.com' },
      governorate: { label: 'Governorate', placeholder: 'Cairo' },
      city: { label: 'City', placeholder: 'Nasr City' },
      address: { label: 'Address', placeholder: 'Street, district, building number' },
      taxNumber: { label: 'Tax Number', placeholder: 'EG-000000000' },
      commercialRegistration: {
        label: 'Commercial Registration',
        placeholder: 'CR-000000',
      },
      notes: { label: 'Notes', placeholder: 'Internal notes for operations team' },
      active: { label: 'Active' },
    },
    actions: {
      save: 'Save',
      cancel: 'Cancel',
    },
  },
}
