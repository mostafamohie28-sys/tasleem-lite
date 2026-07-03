export const arShipmentStatuses = {
  header: {
    label: 'الإعدادات',
    title: 'حالات الشحنات',
    description:
      'إعداد حالات الشحنات والظهور وسلوك التسعير وإعدادات سير العمل.',
    badge: 'واجهة فقط',
    addStatus: 'إضافة حالة',
  },
  stats: {
    totalStatuses: 'إجمالي الحالات',
    active: 'نشطة',
    finalStatuses: 'حالات نهائية',
    usedInPriceLists: 'مستخدمة في قوائم الأسعار',
  },
  filters: {
    search: {
      label: 'بحث',
      placeholder: 'ابحث بالاسم العربي أو الإنجليزي أو الترتيب',
    },
    active: {
      label: 'نشط / غير نشط',
      placeholder: 'اختر النشاط',
      all: 'كل حالات النشاط',
    },
    final: {
      label: 'نهائي / غير نهائي',
      placeholder: 'اختر الحالة النهائية',
      all: 'كل الحالات النهائية',
    },
    priceList: {
      label: 'مستخدم في قائمة الأسعار',
      placeholder: 'اختر استخدام التسعير',
      all: 'كل استخدامات التسعير',
    },
    visibleTo: {
      label: 'ظاهر إلى',
      placeholder: 'اختر الجمهور',
      all: 'كل الجماهير',
    },
  },
  common: {
    active: 'نشط',
    inactive: 'غير نشط',
    final: 'نهائي',
    nonFinal: 'غير نهائي',
    used: 'مستخدم',
    notUsed: 'غير مستخدم',
    yes: 'نعم',
    no: 'لا',
  },
  visibility: {
    employee: 'الموظف',
    courier: 'المندوب',
    sender: 'الراسل',
  },
  icons: {
    package: 'طرد',
    route: 'مسار',
    check: 'تأكيد',
    return: 'مرتجع',
  },
  table: {
    title: 'قائمة حالات الشحنات',
    description: 'معاينة إعدادات ثابتة لحالات سير عمل الشحنات.',
    badge: 'بيانات تجريبية',
    columns: {
      order: 'الترتيب',
      arabicName: 'الاسم العربي',
      englishName: 'الاسم الإنجليزي',
      color: 'اللون',
      iconPlaceholder: 'مكان الأيقونة',
      active: 'نشط',
      final: 'نهائي',
      usedInPriceList: 'مستخدم في قائمة الأسعار',
      employee: 'الموظف',
      courier: 'المندوب',
      sender: 'الراسل',
      actions: 'الإجراءات',
    },
    actions: {
      view: 'عرض',
      edit: 'تعديل',
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
    addTitle: 'إضافة حالة',
    editTitle: 'تعديل حالة',
    description:
      'هذا النموذج واجهة مؤقتة فقط. الحفظ غير مفعل حتى تتم إضافة تخزين إعدادات حقيقي.',
    sections: {
      basicInformation: 'المعلومات الأساسية',
      appearance: 'المظهر',
      visibility: 'الظهور',
      behavior: 'السلوك',
      future: 'قسم مستقبلي',
    },
    fields: {
      arabicName: { label: 'الاسم العربي', placeholder: 'تم التسليم' },
      englishName: { label: 'الاسم الإنجليزي', placeholder: 'Delivered' },
      description: {
        label: 'الوصف',
        placeholder: 'صف متى يجب استخدام هذه الحالة',
      },
      displayOrder: { label: 'ترتيب العرض', placeholder: '30' },
      visibleToEmployee: { label: 'ظاهر للموظف' },
      visibleToCourier: { label: 'ظاهر للمندوب' },
      visibleToSender: { label: 'ظاهر للراسل' },
      showInShipmentTracking: { label: 'إظهار في تتبع الشحنة' },
      active: { label: 'نشط' },
      finalStatus: { label: 'حالة نهائية' },
      useInPriceLists: { label: 'استخدام في قوائم الأسعار' },
      requireReason: { label: 'يتطلب سبب' },
      requireNotes: { label: 'يتطلب ملاحظات' },
      requirePhoto: { label: 'يتطلب صورة' },
      requireSignature: { label: 'يتطلب توقيع' },
      requireGpsLocation: { label: 'يتطلب موقع GPS' },
    },
    appearance: {
      color: {
        label: 'مكان اختيار اللون',
        title: 'معاينة لون الحالة',
        description: 'اختيار اللون التفاعلي غير منفذ في MVP.',
      },
      icon: {
        label: 'مكان الأيقونة',
        placeholder: 'مكان اختيار الأيقونة',
      },
    },
    future: {
      businessRules: {
        title: 'قواعد العمل',
        description: 'غير منفذة في MVP',
      },
      workflow: {
        title: 'سير العمل',
        description: 'عنصر قراءة فقط. ميزة مستقبلية.',
      },
      allowedNextStatuses: {
        title: 'الحالات التالية المسموحة',
        description: 'غير منفذة',
      },
    },
    actions: {
      save: 'حفظ',
      cancel: 'إلغاء',
    },
  },
}
