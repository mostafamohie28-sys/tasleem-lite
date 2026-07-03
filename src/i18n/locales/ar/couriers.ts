export const arCouriers = {
  header: {
    label: 'البيانات الأساسية',
    title: 'المندوبون',
    description:
      'إدارة سجلات المندوبين المستخدمة في التوزيع اليومي وتحديثات الشحنات والتسويات.',
    badge: 'واجهة فقط',
    addCourier: 'إضافة مندوب',
  },
  stats: {
    totalCouriers: 'إجمالي المندوبين',
    active: 'نشط',
    inactive: 'غير نشط',
    availableToday: 'متاح اليوم',
  },
  filters: {
    search: {
      label: 'بحث',
      placeholder: 'ابحث بالكود أو اسم المندوب أو الموبايل',
    },
    governorate: {
      label: 'المحافظة',
      placeholder: 'اختر المحافظة',
      all: 'كل المحافظات',
    },
    area: {
      label: 'المنطقة',
      placeholder: 'اختر المنطقة',
      all: 'كل المناطق',
    },
    status: {
      label: 'الحالة',
      placeholder: 'اختر الحالة',
      all: 'كل الحالات',
    },
  },
  status: {
    active: 'نشط',
    inactive: 'غير نشط',
  },
  governorates: {
    cairo: 'القاهرة',
    giza: 'الجيزة',
    alexandria: 'الإسكندرية',
    dakahlia: 'الدقهلية',
  },
  areas: {
    nasrCity: 'مدينة نصر',
    dokki: 'الدقي',
    sidiGaber: 'سيدي جابر',
    mansoura: 'المنصورة',
  },
  vehicleTypes: {
    motorcycle: 'دراجة نارية',
    car: 'سيارة',
    van: 'فان',
  },
  table: {
    title: 'قائمة المندوبين',
    description: 'سجلات تجريبية واقعية لوحدة بيانات المندوبين الأساسية.',
    badge: 'بيانات تجريبية',
    columns: {
      code: 'الكود',
      courierName: 'اسم المندوب',
      mobile: 'الموبايل',
      governorate: 'المحافظة',
      area: 'المنطقة',
      vehicleType: 'نوع المركبة',
      status: 'الحالة',
      actions: 'الإجراءات',
    },
    actions: {
      view: 'عرض',
      edit: 'تعديل',
    },
    rows: {
      ahmed: {
        name: 'أحمد سمير',
      },
      mahmoud: {
        name: 'محمود نبيل',
      },
      karim: {
        name: 'كريم فؤاد',
      },
      mostafa: {
        name: 'مصطفى عادل',
      },
    },
  },
  dialog: {
    addTitle: 'إضافة مندوب',
    editTitle: 'تعديل مندوب',
    description:
      'هذا النموذج واجهة مؤقتة فقط. الحفظ غير مفعل حتى تتم إضافة تخزين بيانات حقيقي.',
    sections: {
      basicInformation: 'المعلومات الأساسية',
      contact: 'التواصل',
      location: 'الموقع',
      business: 'الأعمال',
      other: 'أخرى',
    },
    fields: {
      courierCode: { label: 'كود المندوب', placeholder: 'CR-2005' },
      fullName: { label: 'الاسم الكامل', placeholder: 'اسم المندوب الكامل' },
      mobile: { label: 'الموبايل', placeholder: '+20 100 000 0000' },
      phone: { label: 'الهاتف', placeholder: '+20 2 0000 0000' },
      governorate: { label: 'المحافظة', placeholder: 'القاهرة' },
      area: { label: 'المنطقة', placeholder: 'مدينة نصر' },
      address: { label: 'العنوان', placeholder: 'الشارع، الحي، رقم المبنى' },
      nationalId: { label: 'الرقم القومي', placeholder: '00000000000000' },
      vehicleType: { label: 'نوع المركبة', placeholder: 'دراجة نارية' },
      notes: { label: 'ملاحظات', placeholder: 'ملاحظات داخلية لفريق التشغيل' },
      active: { label: 'نشط' },
    },
    actions: {
      save: 'حفظ',
      cancel: 'إلغاء',
    },
  },
}
