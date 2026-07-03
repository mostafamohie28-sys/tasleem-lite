export const arCompany = {
  header: {
    label: 'الشركة',
    title: 'ملف الشركة',
    description:
      'إدارة هوية الشركة وبيانات التواصل والعنوان وتفضيلات العمل وعناصر الهوية البصرية.',
    badge: 'واجهة فقط',
  },
  sections: {
    companyInformation: {
      title: 'معلومات الشركة',
      description: 'البيانات القانونية والتجارية الأساسية للشركة.',
    },
    contactInformation: {
      title: 'معلومات التواصل',
      description: 'قنوات التواصل الرئيسية الخاصة بالشركة.',
    },
    address: {
      title: 'العنوان',
      description: 'عنوان التشغيل الرئيسي لسجلات الشركة.',
    },
    businessSettings: {
      title: 'إعدادات العمل',
      description: 'التفضيلات الافتراضية المستخدمة في وحدات ERP المستقبلية.',
    },
    branding: {
      title: 'الهوية البصرية',
      description: 'عناصر مرئية مؤقتة لملف الشركة.',
    },
  },
  fields: {
    companyName: { label: 'اسم الشركة', placeholder: 'تسليم للخدمات اللوجستية' },
    commercialName: { label: 'الاسم التجاري', placeholder: 'تسليم' },
    taxNumber: { label: 'الرقم الضريبي', placeholder: 'EG-000000000' },
    registrationNumber: { label: 'رقم السجل التجاري', placeholder: 'CR-000000' },
    phone: { label: 'الهاتف', placeholder: '+20 2 0000 0000' },
    mobile: { label: 'الموبايل', placeholder: '+20 100 000 0000' },
    email: { label: 'البريد الإلكتروني', placeholder: 'info@tasleem.local' },
    website: { label: 'الموقع الإلكتروني', placeholder: 'https://tasleem.local' },
    country: { label: 'الدولة', placeholder: 'مصر' },
    city: { label: 'المدينة', placeholder: 'القاهرة' },
    address: { label: 'العنوان', placeholder: 'الشارع، الحي، رقم المبنى' },
    defaultCurrency: { label: 'العملة الافتراضية', placeholder: 'EGP' },
    defaultLanguage: { label: 'اللغة الافتراضية', placeholder: 'العربية' },
    timeZone: { label: 'المنطقة الزمنية', placeholder: 'Africa/Cairo' },
  },
  branding: {
    logo: {
      label: 'شعار الشركة',
      title: 'مكان رفع الشعار',
      description: 'سيتم ربط الرفع عند توفر تخزين الخلفية.',
      action: 'الرفع غير مفعل',
    },
    primaryColor: {
      label: 'اللون الأساسي',
      name: 'برتقالي تسليم',
      preview: 'معاينة',
    },
  },
  actions: {
    title: 'الإجراءات',
    description:
      'الأزرار عناصر واجهة مؤقتة حتى يتم ربط وحدة الشركة ببيانات حقيقية.',
    save: 'حفظ',
    reset: 'إعادة تعيين',
  },
}
