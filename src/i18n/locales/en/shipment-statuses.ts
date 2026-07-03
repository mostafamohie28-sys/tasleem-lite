export const enShipmentStatuses = {
  header: {
    label: 'Settings',
    title: 'Shipment Statuses',
    description:
      'Configure shipment statuses, visibility, pricing behavior, and workflow settings.',
    badge: 'UI only',
    addStatus: 'Add Status',
  },
  stats: {
    totalStatuses: 'Total Statuses',
    active: 'Active',
    finalStatuses: 'Final Statuses',
    usedInPriceLists: 'Used In Price Lists',
  },
  filters: {
    search: {
      label: 'Search',
      placeholder: 'Search by Arabic name, English name, or order',
    },
    active: {
      label: 'Active / Inactive',
      placeholder: 'Select activity',
      all: 'All activity',
    },
    final: {
      label: 'Final / Non Final',
      placeholder: 'Select final state',
      all: 'All final states',
    },
    priceList: {
      label: 'Used In Price List',
      placeholder: 'Select pricing use',
      all: 'All pricing use',
    },
    visibleTo: {
      label: 'Visible To',
      placeholder: 'Select audience',
      all: 'All audiences',
    },
  },
  common: {
    active: 'Active',
    inactive: 'Inactive',
    final: 'Final',
    nonFinal: 'Non final',
    used: 'Used',
    notUsed: 'Not used',
    yes: 'Yes',
    no: 'No',
  },
  visibility: {
    employee: 'Employee',
    courier: 'Courier',
    sender: 'Sender',
  },
  icons: {
    package: 'Package',
    route: 'Route',
    check: 'Check',
    return: 'Return',
  },
  table: {
    title: 'Shipment Statuses List',
    description: 'Static configuration preview for shipment workflow statuses.',
    badge: 'Demo data',
    columns: {
      order: 'Order',
      arabicName: 'Arabic Name',
      englishName: 'English Name',
      color: 'Color',
      iconPlaceholder: 'Icon Placeholder',
      active: 'Active',
      final: 'Final',
      usedInPriceList: 'Used In Price List',
      employee: 'Employee',
      courier: 'Courier',
      sender: 'Sender',
      actions: 'Actions',
    },
    actions: {
      view: 'View',
      edit: 'Edit',
    },
    rows: {
      created: {
        arabicName: 'تم الإنشاء',
        englishName: 'Created',
      },
      assigned: {
        arabicName: 'تم التعيين',
        englishName: 'Assigned',
      },
      delivered: {
        arabicName: 'تم التسليم',
        englishName: 'Delivered',
      },
      returned: {
        arabicName: 'مرتجع',
        englishName: 'Returned',
      },
    },
  },
  dialog: {
    addTitle: 'Add Status',
    editTitle: 'Edit Status',
    description:
      'This form is a UI placeholder. Save is disabled until real configuration storage is added.',
    sections: {
      basicInformation: 'Basic Information',
      appearance: 'Appearance',
      visibility: 'Visibility',
      behavior: 'Behavior',
      future: 'Future Section',
    },
    fields: {
      arabicName: { label: 'Arabic Name', placeholder: 'تم التسليم' },
      englishName: { label: 'English Name', placeholder: 'Delivered' },
      description: {
        label: 'Description',
        placeholder: 'Describe when this status should be used',
      },
      displayOrder: { label: 'Display Order', placeholder: '30' },
      visibleToEmployee: { label: 'Visible To Employee' },
      visibleToCourier: { label: 'Visible To Courier' },
      visibleToSender: { label: 'Visible To Sender' },
      showInShipmentTracking: { label: 'Show In Shipment Tracking' },
      active: { label: 'Active' },
      finalStatus: { label: 'Final Status' },
      useInPriceLists: { label: 'Use In Price Lists' },
      requireReason: { label: 'Require Reason' },
      requireNotes: { label: 'Require Notes' },
      requirePhoto: { label: 'Require Photo' },
      requireSignature: { label: 'Require Signature' },
      requireGpsLocation: { label: 'Require GPS Location' },
    },
    appearance: {
      color: {
        label: 'Color Picker Placeholder',
        title: 'Status color preview',
        description: 'Interactive color selection is not implemented in MVP.',
      },
      icon: {
        label: 'Icon Placeholder',
        placeholder: 'Icon selection placeholder',
      },
    },
    future: {
      businessRules: {
        title: 'Business Rules',
        description: 'Not implemented in MVP',
      },
      workflow: {
        title: 'Workflow',
        description: 'Read-only placeholder. Future feature.',
      },
      allowedNextStatuses: {
        title: 'Allowed Next Statuses',
        description: 'Not implemented',
      },
    },
    actions: {
      save: 'Save',
      cancel: 'Cancel',
    },
  },
}
