export const arSenders = {
  header: {
    label: 'البيانات الأساسية',
    title: 'الراسلون',
    description:
      'إدارة سجلات الراسلين المستخدمة في عمليات الشحن اليومية والتسويات.',
    badge: 'واجهة فقط',
    addSender: 'إضافة راسل',
  },
  stats: {
    totalSenders: 'إجمالي الراسلين',
    active: 'نشط',
    inactive: 'غير نشط',
    newThisMonth: 'جدد هذا الشهر',
  },
  filters: {
    search: {
      label: 'بحث',
      placeholder: 'ابحث بالكود أو الراسل أو الشركة أو الموبايل',
    },
    status: {
      label: 'الحالة',
      placeholder: 'اختر الحالة',
      all: 'كل الحالات',
    },
    city: {
      label: 'المدينة',
      placeholder: 'اختر المدينة',
      all: 'كل المدن',
    },
  },
  status: {
    active: 'نشط',
    inactive: 'غير نشط',
  },
  cities: {
    cairo: 'القاهرة',
    giza: 'الجيزة',
    alexandria: 'الإسكندرية',
    mansoura: 'المنصورة',
  },
  table: {
    title: 'قائمة الراسلين',
    description: 'سجلات تجريبية واقعية لوحدة بيانات الراسلين الأساسية.',
    badge: 'بيانات تجريبية',
    columns: {
      code: 'الكود',
      senderName: 'اسم الراسل',
      company: 'الشركة',
      mobile: 'الموبايل',
      city: 'المدينة',
      status: 'الحالة',
      actions: 'الإجراءات',
    },
    actions: {
      view: 'عرض',
      edit: 'تعديل',
    },
    rows: {
      delta: {
        name: 'أحمد حسن',
        company: 'دلتا للتوريدات التجارية',
      },
      nile: {
        name: 'فريق نور اللوجستي',
        company: 'نايل للأدوات المنزلية',
      },
      orbit: {
        name: 'منى عادل',
        company: 'أوربت للإلكترونيات',
      },
      madina: {
        name: 'مكتب فرع المدينة',
        company: 'متاجر المدينة للأزياء',
      },
    },
  },
  dialog: {
    addTitle: 'إضافة راسل',
    editTitle: 'تعديل راسل',
    description:
      'هذا النموذج واجهة مؤقتة فقط. الحفظ غير مفعل حتى تتم إضافة تخزين بيانات حقيقي.',
    sections: {
      basicInformation: 'المعلومات الأساسية',
      contact: 'التواصل',
      address: 'العنوان',
      business: 'الأعمال',
      other: 'أخرى',
    },
    fields: {
      senderCode: { label: 'كود الراسل', placeholder: 'SND-1005' },
      senderName: { label: 'اسم الراسل', placeholder: 'اسم جهة التواصل' },
      companyName: { label: 'اسم الشركة', placeholder: 'اسم الشركة أو المتجر' },
      mobile: { label: 'الموبايل', placeholder: '+20 100 000 0000' },
      phone: { label: 'الهاتف', placeholder: '+20 2 0000 0000' },
      email: { label: 'البريد الإلكتروني', placeholder: 'sender@example.com' },
      governorate: { label: 'المحافظة', placeholder: 'القاهرة' },
      city: { label: 'المدينة', placeholder: 'مدينة نصر' },
      address: { label: 'العنوان', placeholder: 'الشارع، الحي، رقم المبنى' },
      taxNumber: { label: 'الرقم الضريبي', placeholder: 'EG-000000000' },
      commercialRegistration: {
        label: 'السجل التجاري',
        placeholder: 'CR-000000',
      },
      notes: { label: 'ملاحظات', placeholder: 'ملاحظات داخلية لفريق التشغيل' },
      active: { label: 'نشط' },
    },
    actions: {
      save: 'حفظ',
      cancel: 'إلغاء',
    },
  },
}
