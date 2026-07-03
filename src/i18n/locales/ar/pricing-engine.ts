export const arPricingEngine = {
  header: {
    label: 'البيانات الأساسية',
    title: 'محرك التسعير',
    description:
      'تهيئة أساس واجهة قوائم أسعار الراسلين المستخدمة في التشغيل والتسويات ووحدات الحسابات المستقبلية.',
    addPriceList: 'إضافة قائمة أسعار',
  },
  filters: {
    search: {
      placeholder: 'ابحث بالاسم أو الوصف أو الكود',
    },
    status: {
      label: 'الحالة',
      placeholder: 'اختر الحالة',
      all: 'كل الحالات',
    },
    type: {
      label: 'النوع',
      placeholder: 'اختر النوع',
      all: 'كل الأنواع',
      default: 'القائمة الافتراضية',
      custom: 'قائمة مخصصة',
    },
  },
  priceLists: {
    title: 'قوائم الأسعار',
    description: 'قوائم أسعار تجريبية ثابتة لتأسيس محرك التسعير.',
    columns: {
      name: 'الاسم',
      description: 'الوصف',
      active: 'نشط',
      defaultList: 'القائمة الافتراضية',
      senders: 'عدد الراسلين',
      createdDate: 'تاريخ الإنشاء',
      actions: 'الإجراءات',
    },
    rows: {
      default: {
        name: 'Default',
        description: 'التسعير القياسي المستخدم عند عدم تعيين قائمة مخصصة.',
      },
      vip: {
        name: 'VIP',
        description: 'تسعير مفضل لحسابات الراسلين عالية الحجم.',
      },
      amazon: {
        name: 'Amazon',
        description: 'تسعير مخصص مؤقت للمتجر الإلكتروني.',
      },
      noon: {
        name: 'Noon',
        description: 'تسعير مخصص مؤقت للمتجر الإلكتروني.',
      },
    },
  },
  actions: {
    duplicate: 'نسخ',
  },
  bulk: {
    copyFromArea: 'نسخ الأسعار من منطقة',
    applyToGovernorate: 'تطبيق الأسعار على المحافظة',
    duplicatePriceList: 'نسخ قائمة الأسعار',
    importExcel: 'استيراد Excel',
    exportExcel: 'تصدير Excel',
  },
  details: {
    title: 'تفاصيل قائمة الأسعار',
    description:
      'افتح المحافظات والمناطق لمراجعة أسعار الراسلين حسب حالة الشحنة.',
    columns: {
      status: 'حالة الشحنة',
      senderPrice: 'سعر الراسل',
      notes: 'ملاحظات',
    },
    empty: {
      title: 'اختر قائمة أسعار',
      description: 'افتح أي قائمة أسعار من الجدول لمعاينة تفاصيلها.',
    },
  },
  governorates: {
    cairo: 'القاهرة',
    giza: 'الجيزة',
    alexandria: 'الإسكندرية',
  },
  areas: {
    nasrCity: 'مدينة نصر',
    heliopolis: 'مصر الجديدة',
    dokki: 'الدقي',
    sidiGaber: 'سيدي جابر',
  },
  statusRows: {
    created: 'تم الإنشاء',
    delivered: 'تم التسليم',
    returned: 'مرتجع',
  },
  notes: {
    standard: 'سعر إدخال قياسي',
    delivery: 'سعر إتمام التسليم',
    return: 'سعر معالجة المرتجع',
  },
  future: {
    title: 'بطاقات جاهزة للمستقبل',
    description: 'بطاقات قراءة فقط محجوزة لقدرات التسعير اللاحقة.',
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
    addTitle: 'إضافة قائمة أسعار',
    description:
      'هذا النموذج واجهة مؤقتة فقط. الحفظ غير مفعل حتى تتم إضافة تخزين بيانات حقيقي.',
    sections: {
      basic: 'المعلومات الأساسية',
      settings: 'الإعدادات',
    },
    fields: {
      name: { label: 'الاسم', placeholder: 'VIP Cairo' },
      code: { label: 'الكود', placeholder: 'PL-0001' },
      description: {
        label: 'الوصف',
        placeholder: 'وصف داخلي لقائمة الأسعار',
      },
      active: { label: 'نشط' },
      defaultList: { label: 'القائمة الافتراضية' },
    },
  },
  common: {
    yes: 'نعم',
    no: 'لا',
  },
}
