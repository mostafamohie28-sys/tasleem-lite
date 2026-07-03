export const enPricingEngine = {
  header: {
    label: 'Master Data',
    title: 'Pricing Engine',
    description:
      'Configure UI foundations for sender price lists used by operations, settlements, and future accounting modules.',
    addPriceList: 'Add Price List',
  },
  filters: {
    search: {
      placeholder: 'Search by name, description, or code',
    },
    status: {
      label: 'Status',
      placeholder: 'Select status',
      all: 'All statuses',
    },
    type: {
      label: 'Type',
      placeholder: 'Select type',
      all: 'All types',
      default: 'Default List',
      custom: 'Custom List',
    },
  },
  priceLists: {
    title: 'Price Lists',
    description: 'Static demo price lists for the pricing engine foundation.',
    columns: {
      name: 'Name',
      description: 'Description',
      active: 'Active',
      defaultList: 'Default List',
      senders: 'Number of Senders',
      createdDate: 'Created Date',
      actions: 'Actions',
    },
    rows: {
      default: {
        name: 'Default',
        description: 'Standard sender pricing used when no custom list is assigned.',
      },
      vip: {
        name: 'VIP',
        description: 'Preferred sender pricing for high-volume accounts.',
      },
      amazon: {
        name: 'Amazon',
        description: 'Dedicated marketplace pricing placeholder.',
      },
      noon: {
        name: 'Noon',
        description: 'Dedicated marketplace pricing placeholder.',
      },
    },
  },
  actions: {
    duplicate: 'Duplicate',
  },
  bulk: {
    copyFromArea: 'Copy Prices From Area',
    applyToGovernorate: 'Apply Prices To Governorate',
    duplicatePriceList: 'Duplicate Price List',
    importExcel: 'Import Excel',
    exportExcel: 'Export Excel',
  },
  details: {
    title: 'Price List Details',
    description:
      'Expand governorates and areas to review sender prices by shipment status.',
    columns: {
      status: 'Shipment Status',
      senderPrice: 'Sender Price',
      notes: 'Notes',
    },
    empty: {
      title: 'Select a price list',
      description: 'Open any price list from the table to preview its details.',
    },
  },
  governorates: {
    cairo: 'Cairo',
    giza: 'Giza',
    alexandria: 'Alexandria',
  },
  areas: {
    nasrCity: 'Nasr City',
    heliopolis: 'Heliopolis',
    dokki: 'Dokki',
    sidiGaber: 'Sidi Gaber',
  },
  statusRows: {
    created: 'Created',
    delivered: 'Delivered',
    returned: 'Returned',
  },
  notes: {
    standard: 'Standard entry price',
    delivery: 'Delivery completion price',
    return: 'Return handling price',
  },
  future: {
    title: 'Future Ready Placeholders',
    description: 'Read-only cards reserved for later pricing capabilities.',
    planned: 'Planned for future versions',
    cards: {
      versionHistory: 'Price Version History',
      effectiveDate: 'Effective Date',
      pricingRules: 'Pricing Rules',
      courierPricing: 'Courier Pricing',
      weightPricing: 'Weight Pricing',
      codPricing: 'COD Pricing',
      advancedConditions: 'Advanced Conditions',
    },
  },
  dialog: {
    addTitle: 'Add Price List',
    description:
      'This form is a UI placeholder. Save is disabled until real data storage is added.',
    sections: {
      basic: 'Basic Information',
      settings: 'Settings',
    },
    fields: {
      name: { label: 'Name', placeholder: 'VIP Cairo' },
      code: { label: 'Code', placeholder: 'PL-0001' },
      description: {
        label: 'Description',
        placeholder: 'Internal description for this price list',
      },
      active: { label: 'Active' },
      defaultList: { label: 'Default List' },
    },
  },
  common: {
    yes: 'Yes',
    no: 'No',
  },
}
