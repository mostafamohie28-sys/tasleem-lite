export const enCouriers = {
  header: {
    label: 'Master Data',
    title: 'Couriers',
    description:
      'Manage courier records used by daily distribution, shipment updates, and settlement workflows.',
    badge: 'UI only',
    addCourier: 'Add Courier',
  },
  stats: {
    totalCouriers: 'Total Couriers',
    active: 'Active',
    inactive: 'Inactive',
    availableToday: 'Available Today',
  },
  filters: {
    search: {
      label: 'Search',
      placeholder: 'Search by code, courier name, or mobile',
    },
    governorate: {
      label: 'Governorate',
      placeholder: 'Select governorate',
      all: 'All governorates',
    },
    area: {
      label: 'Area',
      placeholder: 'Select area',
      all: 'All areas',
    },
    status: {
      label: 'Status',
      placeholder: 'Select status',
      all: 'All statuses',
    },
  },
  status: {
    active: 'Active',
    inactive: 'Inactive',
  },
  governorates: {
    cairo: 'Cairo',
    giza: 'Giza',
    alexandria: 'Alexandria',
    dakahlia: 'Dakahlia',
  },
  areas: {
    nasrCity: 'Nasr City',
    dokki: 'Dokki',
    sidiGaber: 'Sidi Gaber',
    mansoura: 'Mansoura',
  },
  vehicleTypes: {
    motorcycle: 'Motorcycle',
    car: 'Car',
    van: 'Van',
  },
  table: {
    title: 'Couriers List',
    description: 'Realistic demo records for the courier master data module.',
    badge: 'Demo data',
    columns: {
      code: 'Code',
      courierName: 'Courier Name',
      mobile: 'Mobile',
      governorate: 'Governorate',
      area: 'Area',
      vehicleType: 'Vehicle Type',
      status: 'Status',
      actions: 'Actions',
    },
    actions: {
      view: 'View',
      edit: 'Edit',
    },
    rows: {
      ahmed: {
        name: 'Ahmed Samir',
      },
      mahmoud: {
        name: 'Mahmoud Nabil',
      },
      karim: {
        name: 'Karim Fouad',
      },
      mostafa: {
        name: 'Mostafa Adel',
      },
    },
  },
  dialog: {
    addTitle: 'Add Courier',
    editTitle: 'Edit Courier',
    description:
      'This form is a UI placeholder. Save is disabled until real data storage is added.',
    sections: {
      basicInformation: 'Basic Information',
      contact: 'Contact',
      location: 'Location',
      business: 'Business',
      other: 'Other',
    },
    fields: {
      courierCode: { label: 'Courier Code', placeholder: 'CR-2005' },
      fullName: { label: 'Full Name', placeholder: 'Courier full name' },
      mobile: { label: 'Mobile', placeholder: '+20 100 000 0000' },
      phone: { label: 'Phone', placeholder: '+20 2 0000 0000' },
      governorate: { label: 'Governorate', placeholder: 'Cairo' },
      area: { label: 'Area', placeholder: 'Nasr City' },
      address: { label: 'Address', placeholder: 'Street, district, building number' },
      nationalId: { label: 'National ID', placeholder: '00000000000000' },
      vehicleType: { label: 'Vehicle Type', placeholder: 'Motorcycle' },
      notes: { label: 'Notes', placeholder: 'Internal notes for operations team' },
      active: { label: 'Active' },
    },
    actions: {
      save: 'Save',
      cancel: 'Cancel',
    },
  },
}
