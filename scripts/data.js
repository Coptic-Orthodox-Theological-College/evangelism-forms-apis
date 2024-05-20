export const activities = [
  {
    _id: "60af884c2f9f9b1d2c8d9e11",
    name: "الروحى",
    description: "الروحى",
  },
  {
    _id: "60af884c2f9f9b1d2c8d9e12",
    name: "الكتاب المقدس و المحفوظات",
    description: "الكتاب المقدس و المحفوظات",
  },
  {
    _id: "60af884c2f9f9b1d2c8d9e13",
    name: "البحوث",
    description: "البحوث",
  },
  {
    _id: "60af884c2f9f9b1d2c8d9e14",
    name: "الالحان و التسبحة",
    description: "الالحان و التسبحة",
  },
  {
    _id: "60af884c2f9f9b1d2c8d9e15",
    name: "اللغة القبطية",
    description: "اللغة القبطية",
  },
  {
    _id: "60af884c2f9f9b1d2c8d9e16",
    name: "الانشطة الكنسية",
    description: "الانشطة الكنسية",
  },
  {
    _id: "60af884c2f9f9b1d2c8d9e17",
    name: "ألادبية",
    description: "ألادبية",
  },
  {
    _id: "60af884c2f9f9b1d2c8d9e18",
    name: "الثقافية",
    description: "الثقافية",
  },
  {
    _id: "60af884c2f9f9b1d2c8d9e19",
    name: "الفنون التشكيلية",
    description: "الفنون التشكيلية",
  },
  {
    _id: "60af884c2f9f9b1d2c8d9e1a",
    name: "الكمبيوتر",
    description: "الكمبيوتر",
  },
  {
    _id: "60af884c2f9f9b1d2c8d9e1b",
    name: "الاعلامية",
    description: "الاعلامية",
  },
  {
    _id: "60af884c2f9f9b1d2c8d9e1c",
    name: "الابتكارية الهندسية و العلمية",
    description: "الابتكارية الهندسية و العلمية",
  },
  {
    _id: "60af884c2f9f9b1d2c8d9e1d",
    name: "قلب واحد",
    description: "قلب واحد",
  },
  {
    _id: "60af884c2f9f9b1d2c8d9e1e",
    name: "الرياضية",
    description: "الرياضية",
  },
];

export const FormTemplates =
  [
    {
      "name": "استمارة الروحى - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e11",
      "description": "استمارة لتسجيل الأنشطة الروحية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "البريد الإلكتروني",
          "description": "الرجاء إدخال البريد الإلكتروني",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "المستوى الروحي",
          "description": "الرجاء اختيار المستوى الروحي",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "مبتدئ",
            "متوسط",
            "متقدم"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12224"
    },
    {
      "name": "استمارة الروحى - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e11",
      "description": "استمارة تقييم النشاط الروحي",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "العمر",
          "description": "الرجاء إدخال العمر",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "مستوى النشاط الروحي",
          "description": "الرجاء اختيار مستوى النشاط الروحي",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ضعيف",
            "جيد",
            "ممتاز"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12225"
    },
    {
      "name": "استمارة الروحى - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e11",
      "description": "استمارة المشاركة في الأنشطة الروحية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "رقم الهاتف",
          "description": "الرجاء إدخال رقم الهاتف",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "نوع النشاط الروحي",
          "description": "الرجاء اختيار نوع النشاط الروحي",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "صلاة",
            "تأمل",
            "دراسة"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12226"
    },
    {
      "name": "استمارة الكتاب المقدس - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e12",
      "description": "استمارة لتسجيل حضور دراسة الكتاب المقدس",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "العمر",
          "description": "الرجاء إدخال العمر",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "نوع الدراسة",
          "description": "الرجاء اختيار نوع الدراسة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "العهد القديم",
            "العهد الجديد"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12227"
    },
    {
      "name": "استمارة الكتاب المقدس - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e12",
      "description": "استمارة تقييم دراسة الكتاب المقدس",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "مستوى الفهم",
          "description": "الرجاء تقييم مستوى الفهم",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ضعيف",
            "متوسط",
            "جيد",
            "ممتاز"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "الموضوع المفضل",
          "description": "الرجاء اختيار الموضوع المفضل",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "قصص الأنبياء",
            "أمثال المسيح",
            "رسائل بولس الرسول"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12228"
    },
    {
      "name": "استمارة الكتاب المقدس - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e12",
      "description": "استمارة مشاركة في محاضرات الكتاب المقدس",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "البريد الإلكتروني",
          "description": "الرجاء إدخال البريد الإلكتروني",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "الموضوع المفضل",
          "description": "الرجاء اختيار الموضوع المفضل",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "الخلاص",
            "القيامة",
            "المحبة"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12229"
    },
    {
      "name": "استمارة البحوث - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e13",
      "description": "استمارة تسجيل بحوث علمية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "الموضوع",
          "description": "الرجاء إدخال موضوع البحث",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "التخصص",
          "description": "الرجاء اختيار التخصص",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "علوم",
            "آداب",
            "تكنولوجيا"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca1222a"
    },
    {
      "name": "استمارة البحوث - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e13",
      "description": "استمارة تقييم بحوث الطلاب",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "الموضوع",
          "description": "الرجاء إدخال موضوع البحث",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "التقييم",
          "description": "الرجاء اختيار التقييم",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ممتاز",
            "جيد جداً",
            "جيد",
            "مقبول"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca1222b"
    },
    {
      "name": "استمارة البحوث - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e13",
      "description": "استمارة تسجيل بحوث متقدمة",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "البريد الإلكتروني",
          "description": "الرجاء إدخال البريد الإلكتروني",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "مجال البحث",
          "description": "الرجاء اختيار مجال البحث",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "علوم الحاسوب",
            "الهندسة",
            "الطب"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca1222c"
    },
    {
      "name": "استمارة الالحان - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e14",
      "description": "استمارة تسجيل في فرقة الالحان",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "العمر",
          "description": "الرجاء إدخال العمر",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "نوع الصوت",
          "description": "الرجاء اختيار نوع الصوت",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "سوپرانو",
            "آلتو",
            "تينور",
            "باس"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca1222d"
    },
    {
      "name": "استمارة الالحان - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e14",
      "description": "استمارة تقييم أداء فرقة الالحان",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "الأداء",
          "description": "الرجاء تقييم الأداء",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ممتاز",
            "جيد جداً",
            "جيد",
            "مقبول"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "الملاحظة",
          "description": "الرجاء كتابة أي ملاحظات إضافية",
          "isRequired": false,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca1222e"
    },
    {
      "name": "استمارة الالحان - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e14",
      "description": "استمارة المشاركة في تدريب الالحان",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "رقم الهاتف",
          "description": "الرجاء إدخال رقم الهاتف",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "مدة التدريب",
          "description": "الرجاء اختيار مدة التدريب",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "شهر",
            "3 أشهر",
            "6 أشهر"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca1222f"
    },
    {
      "name": "استمارة اللغة القبطية - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e15",
      "description": "استمارة تسجيل في دورة اللغة القبطية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "البريد الإلكتروني",
          "description": "الرجاء إدخال البريد الإلكتروني",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "المستوى",
          "description": "الرجاء اختيار المستوى",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "مبتدئ",
            "متوسط",
            "متقدم"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12230"
    },
    {
      "name": "استمارة اللغة القبطية - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e15",
      "description": "استمارة تقييم دورة اللغة القبطية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "العمر",
          "description": "الرجاء إدخال العمر",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "التقييم",
          "description": "الرجاء اختيار التقييم",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ممتاز",
            "جيد جداً",
            "جيد",
            "مقبول"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12231"
    },
    {
      "name": "استمارة اللغة القبطية - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e15",
      "description": "استمارة المشاركة في الأنشطة اللغوية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "رقم الهاتف",
          "description": "الرجاء إدخال رقم الهاتف",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "مجال الاهتمام",
          "description": "الرجاء اختيار مجال الاهتمام",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "اللغة القبطية",
            "اللغة العربية",
            "اللغة الإنجليزية"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12232"
    },
    {
      "name": "استمارة الانشطة الكنسية - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e16",
      "description": "استمارة تسجيل في الأنشطة الكنسية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "رقم الهاتف",
          "description": "الرجاء إدخال رقم الهاتف",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "نوع النشاط",
          "description": "الرجاء اختيار نوع النشاط",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "اجتماعات",
            "رحلات",
            "خدمات"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12233"
    },
    {
      "name": "استمارة الانشطة الكنسية - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e16",
      "description": "استمارة تقييم الأنشطة الكنسية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "التقييم",
          "description": "الرجاء اختيار التقييم",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ممتاز",
            "جيد جداً",
            "جيد",
            "مقبول"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "الأنشطة المفضلة",
          "description": "الرجاء اختيار الأنشطة المفضلة",
          "isRequired": false,
          "isEnum": true,
          "values": [
            "اجتماعات",
            "رحلات",
            "خدمات",
            "ورش عمل"
          ],
          "numberOfChoices": 2
        }
      ],
      "_id": "664b48137565dd25fca12234"
    },
    {
      "name": "استمارة الانشطة الكنسية - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e16",
      "description": "استمارة المشاركة في الأنشطة الكنسية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "العمر",
          "description": "الرجاء إدخال العمر",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "نوع الأنشطة",
          "description": "الرجاء اختيار نوع الأنشطة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "تعليمية",
            "ترفيهية",
            "خيرية"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12235"
    },
    {
      "name": "استمارة ألادبية - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e17",
      "description": "استمارة المشاركة في الأنشطة الأدبية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "المجال الأدبي",
          "description": "الرجاء اختيار المجال الأدبي",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "شعر",
            "نثر",
            "رواية"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "التفضيلات",
          "description": "الرجاء اختيار التفضيلات الأدبية",
          "isRequired": false,
          "isEnum": true,
          "values": [
            "الشعر العربي",
            "الأدب العالمي",
            "الأدب الشعبي"
          ],
          "numberOfChoices": 2
        }
      ],
      "_id": "664b48137565dd25fca12236"
    },
    {
      "name": "استمارة ألادبية - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e17",
      "description": "استمارة تقييم الفعاليات الأدبية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "التقييم",
          "description": "الرجاء اختيار التقييم",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ممتاز",
            "جيد جداً",
            "جيد",
            "مقبول"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "نوع الفعالية",
          "description": "الرجاء اختيار نوع الفعالية",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "قراءة شعرية",
            "ورشة كتابة",
            "محاضرة أدبية"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12237"
    },
    {
      "name": "استمارة ألادبية - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e17",
      "description": "استمارة الاشتراك في الورش الأدبية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "العمر",
          "description": "الرجاء إدخال العمر",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "مجال الورشة",
          "description": "الرجاء اختيار مجال الورشة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "شعر",
            "نثر",
            "كتابة إبداعية"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12238"
    },
    {
      "name": "استمارة الثقافية - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e18",
      "description": "استمارة المشاركة في الأنشطة الثقافية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "المجال الثقافي",
          "description": "الرجاء اختيار المجال الثقافي",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "تاريخ",
            "فن",
            "أدب"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "الأنشطة المفضلة",
          "description": "الرجاء اختيار الأنشطة المفضلة",
          "isRequired": false,
          "isEnum": true,
          "values": [
            "محاضرات",
            "معارض",
            "ندوات"
          ],
          "numberOfChoices": 2
        }
      ],
      "_id": "664b48137565dd25fca12239"
    },
    {
      "name": "استمارة الثقافية - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e18",
      "description": "استمارة تقييم الأنشطة الثقافية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "التقييم",
          "description": "الرجاء اختيار التقييم",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ممتاز",
            "جيد جداً",
            "جيد",
            "مقبول"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "الأنشطة المفضلة",
          "description": "الرجاء اختيار الأنشطة المفضلة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ندوات",
            "معارض",
            "مؤتمرات"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca1223a"
    },
    {
      "name": "استمارة الثقافية - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e18",
      "description": "استمارة التسجيل في الورش الثقافية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "البريد الإلكتروني",
          "description": "الرجاء إدخال البريد الإلكتروني",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "مجال الورشة",
          "description": "الرجاء اختيار مجال الورشة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "تاريخ",
            "أدب",
            "فلسفة"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca1223b"
    },
    {
      "name": "استمارة الفنون التشكيلية - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e19",
      "description": "استمارة تسجيل في دورة الفنون التشكيلية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "نوع الفن",
          "description": "الرجاء اختيار نوع الفن",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "رسم",
            "نحت",
            "خط"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "المواد المفضلة",
          "description": "الرجاء اختيار المواد المفضلة",
          "isRequired": false,
          "isEnum": true,
          "values": [
            "أكريليك",
            "زيت",
            "مائي"
          ],
          "numberOfChoices": 2
        }
      ],
      "_id": "664b48137565dd25fca1223c"
    },
    {
      "name": "استمارة الفنون التشكيلية - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e19",
      "description": "استمارة تقييم دورة الفنون التشكيلية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "التقييم",
          "description": "الرجاء اختيار التقييم",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ممتاز",
            "جيد جداً",
            "جيد",
            "مقبول"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "المواد المستخدمة",
          "description": "الرجاء اختيار المواد المستخدمة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "أكريليك",
            "زيت",
            "مائي"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca1223d"
    },
    {
      "name": "استمارة الفنون التشكيلية - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e19",
      "description": "استمارة المشاركة في المعارض الفنية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "الأعمال الفنية",
          "description": "الرجاء اختيار الأعمال الفنية للمشاركة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "لوحات",
            "تماثيل",
            "رسومات"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "الخامات المستخدمة",
          "description": "الرجاء اختيار الخامات المستخدمة",
          "isRequired": false,
          "isEnum": true,
          "values": [
            "ورق",
            "قماش",
            "خشب"
          ],
          "numberOfChoices": 2
        }
      ],
      "_id": "664b48137565dd25fca1223e"
    },
    {
      "name": "استمارة الكمبيوتر - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e1a",
      "description": "استمارة تسجيل في دورة الكمبيوتر",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "البريد الإلكتروني",
          "description": "الرجاء إدخال البريد الإلكتروني",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "المستوى",
          "description": "الرجاء اختيار المستوى",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "مبتدئ",
            "متوسط",
            "متقدم"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca1223f"
    },
    {
      "name": "استمارة الكمبيوتر - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e1a",
      "description": "استمارة تقييم دورة الكمبيوتر",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "التقييم",
          "description": "الرجاء اختيار التقييم",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ممتاز",
            "جيد جداً",
            "جيد",
            "مقبول"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "البرامج المستخدمة",
          "description": "الرجاء اختيار البرامج المستخدمة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "مايكروسوفت أوفيس",
            "أدوبي فوتوشوب",
            "برمجة"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12240"
    },
    {
      "name": "استمارة الكمبيوتر - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e1a",
      "description": "استمارة الاشتراك في ورش الكمبيوتر",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "العمر",
          "description": "الرجاء إدخال العمر",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "نوع الورشة",
          "description": "الرجاء اختيار نوع الورشة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "برمجة",
            "تصميم",
            "شبكات"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12241"
    },
    {
      "name": "استمارة الإعلامية - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e1b",
      "description": "استمارة المشاركة في الأنشطة الإعلامية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "نوع النشاط",
          "description": "الرجاء اختيار نوع النشاط",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "إعداد",
            "تصوير",
            "مونتاج"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "التجهيزات المطلوبة",
          "description": "الرجاء اختيار التجهيزات المطلوبة",
          "isRequired": false,
          "isEnum": true,
          "values": [
            "كاميرا",
            "مايكروفون",
            "إضاءة"
          ],
          "numberOfChoices": 2
        }
      ],
      "_id": "664b48137565dd25fca12242"
    },
    {
      "name": "استمارة الإعلامية - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e1b",
      "description": "استمارة تقييم الأنشطة الإعلامية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "التقييم",
          "description": "الرجاء اختيار التقييم",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ممتاز",
            "جيد جداً",
            "جيد",
            "مقبول"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "الملاحظات",
          "description": "الرجاء إدخال الملاحظات",
          "isRequired": false,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12243"
    },
    {
      "name": "استمارة الإعلامية - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e1b",
      "description": "استمارة الاشتراك في ورش الإعلام",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "البريد الإلكتروني",
          "description": "الرجاء إدخال البريد الإلكتروني",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "نوع الورشة",
          "description": "الرجاء اختيار نوع الورشة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "إعداد",
            "تصوير",
            "مونتاج"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12244"
    },
    {
      "name": "استمارة الابتكارية الهندسية و العلمية - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e1c",
      "description": "استمارة المشاركة في الأنشطة الابتكارية الهندسية و العلمية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "مجال الابتكار",
          "description": "الرجاء اختيار مجال الابتكار",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "هندسة",
            "علوم",
            "تكنولوجيا"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "المشاريع المفضلة",
          "description": "الرجاء اختيار المشاريع المفضلة",
          "isRequired": false,
          "isEnum": true,
          "values": [
            "روبوتات",
            "تصميمات هندسية",
            "تطبيقات تكنولوجية"
          ],
          "numberOfChoices": 2
        }
      ],
      "_id": "664b48137565dd25fca12245"
    },
    {
      "name": "استمارة الابتكارية الهندسية و العلمية - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e1c",
      "description": "استمارة تقييم الأنشطة الابتكارية الهندسية و العلمية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "التقييم",
          "description": "الرجاء اختيار التقييم",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ممتاز",
            "جيد جداً",
            "جيد",
            "مقبول"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "الأنشطة المفضلة",
          "description": "الرجاء اختيار الأنشطة المفضلة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "تجارب علمية",
            "تصميمات هندسية",
            "برامج تكنولوجية"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12246"
    },
    {
      "name": "استمارة الابتكارية الهندسية و العلمية - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e1c",
      "description": "استمارة التسجيل في ورش الابتكارية الهندسية و العلمية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "البريد الإلكتروني",
          "description": "الرجاء إدخال البريد الإلكتروني",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "مجال الورشة",
          "description": "الرجاء اختيار مجال الورشة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "هندسة",
            "علوم",
            "تكنولوجيا"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12247"
    },
    {
      "name": "استمارة قلب واحد - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e1d",
      "description": "استمارة المشاركة في فعالية قلب واحد",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "نوع المشاركة",
          "description": "الرجاء اختيار نوع المشاركة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "تنظيم",
            "تقديم",
            "مساعدة"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "الفعاليات المفضلة",
          "description": "الرجاء اختيار الفعاليات المفضلة",
          "isRequired": false,
          "isEnum": true,
          "values": [
            "محاضرات",
            "ورش عمل",
            "أنشطة اجتماعية"
          ],
          "numberOfChoices": 2
        }
      ],
      "_id": "664b48137565dd25fca12248"
    },
    {
      "name": "استمارة قلب واحد - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e1d",
      "description": "استمارة تقييم فعالية قلب واحد",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "التقييم",
          "description": "الرجاء اختيار التقييم",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ممتاز",
            "جيد جداً",
            "جيد",
            "مقبول"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "نوع الفعالية",
          "description": "الرجاء اختيار نوع الفعالية",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "محاضرات",
            "ورش عمل",
            "أنشطة اجتماعية"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca12249"
    },
    {
      "name": "استمارة قلب واحد - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e1d",
      "description": "استمارة التسجيل في ورش عمل قلب واحد",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "العمر",
          "description": "الرجاء إدخال العمر",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "نوع الورشة",
          "description": "الرجاء اختيار نوع الورشة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "تنمية ذاتية",
            "مهارات حياتية",
            "تطوير مهني"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca1224a"
    },
    {
      "name": "استمارة الرياضية - النموذج 1",
      "activityId": "60af884c2f9f9b1d2c8d9e1e",
      "description": "استمارة الاشتراك في الأنشطة الرياضية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "نوع الرياضة",
          "description": "الرجاء اختيار نوع الرياضة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "كرة القدم",
            "كرة السلة",
            "السباحة"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "الأوقات المفضلة",
          "description": "الرجاء اختيار الأوقات المفضلة",
          "isRequired": false,
          "isEnum": true,
          "values": [
            "صباحاً",
            "مساءً"
          ],
          "numberOfChoices": 2
        }
      ],
      "_id": "664b48137565dd25fca1224b"
    },
    {
      "name": "استمارة الرياضية - النموذج 2",
      "activityId": "60af884c2f9f9b1d2c8d9e1e",
      "description": "استمارة تقييم الأنشطة الرياضية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "التقييم",
          "description": "الرجاء اختيار التقييم",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "ممتاز",
            "جيد جداً",
            "جيد",
            "مقبول"
          ],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "الرياضة المفضلة",
          "description": "الرجاء اختيار الرياضة المفضلة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "كرة القدم",
            "كرة السلة",
            "السباحة"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca1224c"
    },
    {
      "name": "استمارة الرياضية - النموذج 3",
      "activityId": "60af884c2f9f9b1d2c8d9e1e",
      "description": "استمارة التسجيل في ورش العمل الرياضية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "العمر",
          "description": "الرجاء إدخال العمر",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 3,
          "name": "نوع الورشة",
          "description": "الرجاء اختيار نوع الورشة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "مهارات فردية",
            "لعب جماعي",
            "تدريبات"
          ],
          "numberOfChoices": 1
        }
      ],
      "_id": "664b48137565dd25fca1224d"
    },
    {
      "name": "استمارة الروحى - النموذج 4",
      "activityId": "60af884c2f9f9b1d2c8d9e11",
      "description": "استمارة التسجيل في الأنشطة الروحية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "نوع النشاط",
          "description": "الرجاء اختيار نوع النشاط الروحي",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "صلوات",
            "تأملات",
            "خلوات",
            "دراسات كتابية",
            "ورش عمل روحية"
          ],
          "numberOfChoices": 4
        },
        {
          "order": 3,
          "name": "الأيام المفضلة",
          "description": "الرجاء اختيار الأيام المفضلة للمشاركة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "السبت",
            "الأحد",
            "الإثنين",
            "الثلاثاء",
            "الأربعاء"
          ],
          "numberOfChoices": 4
        }
      ],
      "_id": "664b48137565dd25fca1224e"
    },
    {
      "name": "استمارة الكتاب المقدس و المحفوظات - النموذج 4",
      "activityId": "60af884c2f9f9b1d2c8d9e12",
      "description": "استمارة التسجيل في دراسات الكتاب المقدس و المحفوظات",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "المجال المفضل",
          "description": "الرجاء اختيار المجال المفضل",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "العهد القديم",
            "العهد الجديد",
            "تاريخ الكنيسة",
            "التفاسير",
            "الآثار الكتابية"
          ],
          "numberOfChoices": 4
        },
        {
          "order": 3,
          "name": "الأوقات المفضلة",
          "description": "الرجاء اختيار الأوقات المفضلة للدراسة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "صباحاً",
            "ظهراً",
            "عصراً",
            "مساءً",
            "ليلاً"
          ],
          "numberOfChoices": 4
        }
      ],
      "_id": "664b48137565dd25fca1224f"
    },
    {
      "name": "استمارة البحوث - النموذج 4",
      "activityId": "60af884c2f9f9b1d2c8d9e13",
      "description": "استمارة المشاركة في البحوث",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "مجال البحث",
          "description": "الرجاء اختيار مجال البحث",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "علم النفس",
            "الاجتماع",
            "التربية",
            "اللاهوت",
            "الفلسفة",
            "العلوم الطبيعية"
          ],
          "numberOfChoices": 4
        },
        {
          "order": 3,
          "name": "الخبرة السابقة",
          "description": "الرجاء اختيار مستوى الخبرة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "مبتدئ",
            "متوسط",
            "متقدم",
            "خبير",
            "محترف"
          ],
          "numberOfChoices": 4
        }
      ],
      "_id": "664b48137565dd25fca12250"
    },
    {
      "name": "استمارة الالحان و التسبحة - النموذج 4",
      "activityId": "60af884c2f9f9b1d2c8d9e14",
      "description": "استمارة التسجيل في أنشطة الألحان و التسبحة",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "الآلات المفضلة",
          "description": "الرجاء اختيار الآلات المفضلة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "البيانو",
            "الجيتار",
            "العود",
            "الدف",
            "الطبل",
            "الكمان"
          ],
          "numberOfChoices": 4
        },
        {
          "order": 3,
          "name": "نوع التسبحة المفضل",
          "description": "الرجاء اختيار نوع التسبحة المفضل",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "الترنيم",
            "التسبح",
            "الترانيم المعاصرة",
            "الترانيم التقليدية"
          ],
          "numberOfChoices": 4
        }
      ],
      "_id": "664b48137565dd25fca12251"
    },
    {
      "name": "استمارة اللغة القبطية - النموذج 4",
      "activityId": "60af884c2f9f9b1d2c8d9e15",
      "description": "استمارة التسجيل في دورات اللغة القبطية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "مستوى اللغة",
          "description": "الرجاء اختيار مستوى اللغة الحالي",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "مبتدئ",
            "متوسط",
            "متقدم",
            "خبير",
            "محترف"
          ],
          "numberOfChoices": 4
        },
        {
          "order": 3,
          "name": "المجالات المفضلة",
          "description": "الرجاء اختيار المجالات المفضلة للدراسة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "القواعد",
            "المفردات",
            "التاريخ",
            "الأدب",
            "الترجمة"
          ],
          "numberOfChoices": 4
        }
      ],
      "_id": "664b48137565dd25fca12252"
    },
    {
      "name": "استمارة الانشطة الكنسية - النموذج 4",
      "activityId": "60af884c2f9f9b1d2c8d9e16",
      "description": "استمارة المشاركة في الأنشطة الكنسية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "نوع النشاط الكنسي",
          "description": "الرجاء اختيار نوع النشاط الكنسي",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "خدمات",
            "ورش عمل",
            "دروس دينية",
            "مساعدة في المناسبات",
            "أنشطة اجتماعية"
          ],
          "numberOfChoices": 4
        },
        {
          "order": 3,
          "name": "المهارات المفضلة",
          "description": "الرجاء اختيار المهارات المفضلة",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "التنظيم",
            "التقديم",
            "المساعدة",
            "القيادة",
            "التخطيط"
          ],
          "numberOfChoices": 4
        }
      ],
      "_id": "664b48137565dd25fca12253"
    },
    {
      "name": "استمارة ألادبية - النموذج 4",
      "activityId": "60af884c2f9f9b1d2c8d9e17",
      "description": "استمارة التسجيل في الأنشطة الأدبية",
      "fields": [
        {
          "order": 1,
          "name": "الاسم",
          "description": "الرجاء إدخال الاسم الكامل",
          "isRequired": true,
          "isEnum": false,
          "values": [],
          "numberOfChoices": 1
        },
        {
          "order": 2,
          "name": "نوع الأدب المفضل",
          "description": "الرجاء اختيار نوع الأدب المفضل",
          "isRequired": true,
          "isEnum": true,
          "values": [
            "الشعر",
            "الرواية",
            "القصة القصيرة",
            "المسرح",
            "النقد الأدبي"
          ],
          "numberOfChoices": 4
        }
      ],
      "_id": "664b48137565dd25fca12254"
    }
  ];