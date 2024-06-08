import Activity from "../models/activity.model.js";
import FormTemplate from "../models/formTemplate.model.js";
import Submissions from "../models/submissions.model.js";
import Church from "../models/church.model.js";
import fs from 'fs';
import path from 'path';
import { Parser } from 'json2csv';

export const getGeneralNumbers = async (req, res) => {
  /**
   * big table in very top as a couloms i need activites that is the top level of the table then next level of couloms is form templates and the next level is name of the field0
   * in raws the firist level i need the address and next level is the name of the church
   * in each cell i need the number and if priced i need the value of the price 
   * the last row i need the total of numbers and the total of prices
   */

  /**
   * example of church data
   * 
   * {
    _id: new ObjectId("6658f5d42c8234557d1a64e2"),
    name: 'مارجرجس غيط العنب',
    address: 'وسط',
    responsiblePerson: 'كيرلس عاطف فوزى',
    phone: '01274478747',
    userId: new ObjectId("6658f3dc2c8234557d1a64b9"),
    __v: 0
    }

    example of activity data
    {
    _id: new ObjectId("60af884c2f9f9b1d2c8d9e11"),
    name: 'روحى',
    description: 'المسابقة الدراسية',
    __v: 0
  },

  example of form template data
  "formTemplates": [
        {
            "_id": "664b48137565dd25fca12224",
            "name": "روحى جماعى",
            "activityId": "60af884c2f9f9b1d2c8d9e11",
            "description": "استمارة لتسجيل الأنشطة الروحي الجماعي",
            "fields": [
                {
                    "order": 1,
                    "name": "عدد الفرق",
                    "description": "ادخل عدد الفرق",
                    "isRequired": true,
                    "isEnum": false,
                    "values": [],
                    "numberOfChoices": 1,
                    "isNumber": true,
                    "ifNumber": {
                        "isPriced": true,
                        "price": 150,
                        "maxNumber": 50,
                        "minRequiredNames": 0,
                        "maxRequiredNames": 0,
                        "_id": "6664484121f9689d2298e46e"
                    },
                    "_id": "6664484121f9689d2298e46d"
                }
            ],
            "submttedBy": [],
            "__v": 591
        },
        {
            "_id": "664b48137565dd25fca12225",
            "name": "روحى فردى",
            "activityId": "60af884c2f9f9b1d2c8d9e11",
            "description": "استمارة لتسجيل الأنشطة الروحي الفردي",
            "fields": [
                {
                    "order": 1,
                    "name": "الرب نورى و خلاصى",
                    "description": "ادخل عدد المشاركين",
                    "isRequired": false,
                    "isEnum": false,
                    "values": [],
                    "numberOfChoices": 1,
                    "isNumber": true,
                    "ifNumber": {
                        "isPriced": true,
                        "price": 50,
                        "maxNumber": 50,
                        "minRequiredNames": 0,
                        "maxRequiredNames": 0,
                        "_id": "6664484121f9689d2298e47f"
                    },
                    "_id": "6664484121f9689d2298e47e"
                },
                {
                    "order": 2,
                    "name": "هل يمكن ان تطفأ الشمس؟",
                    "description": "ادخل عدد المشاركين",
                    "isRequired": false,
                    "isEnum": false,
                    "values": [],
                    "numberOfChoices": 1,
                    "isNumber": true,
                    "ifNumber": {
                        "isPriced": true,
                        "price": 50,
                        "maxNumber": 50,
                        "minRequiredNames": 0,
                        "maxRequiredNames": 0,
                        "_id": "6664484121f9689d2298e481"
                    },
                    "_id": "6664484121f9689d2298e480"
                },
                {
                    "order": 3,
                    "name": "شخص وسرى جدا",
                    "description": "ادخل عدد المشاركين",
                    "isRequired": false,
                    "isEnum": false,
                    "values": [],
                    "numberOfChoices": 1,
                    "isNumber": true,
                    "ifNumber": {
                        "isPriced": true,
                        "price": 50,
                        "maxNumber": 50,
                        "minRequiredNames": 0,
                        "maxRequiredNames": 0,
                        "_id": "6664484121f9689d2298e483"
                    },
                    "_id": "6664484121f9689d2298e482"
                },
                {
                    "order": 4,
                    "name": "خلقنهما ذكر وانثى",
                    "description": "ادخل عدد المشاركين",
                    "isRequired": false,
                    "isEnum": false,
                    "values": [],
                    "numberOfChoices": 1,
                    "isNumber": true,
                    "ifNumber": {
                        "isPriced": true,
                        "price": 50,
                        "maxNumber": 50,
                        "minRequiredNames": 0,
                        "maxRequiredNames": 0,
                        "_id": "6664484121f9689d2298e485"
                    },
                    "_id": "6664484121f9689d2298e484"
                },
                {
                    "order": 5,
                    "name": "التقليد الكنسى",
                    "description": "ادخل عدد المشاركين",
                    "isRequired": false,
                    "isEnum": false,
                    "values": [],
                    "numberOfChoices": 1,
                    "isNumber": true,
                    "ifNumber": {
                        "isPriced": true,
                        "price": 50,
                        "maxNumber": 50,
                        "minRequiredNames": 0,
                        "maxRequiredNames": 0,
                        "_id": "6664484121f9689d2298e487"
                    },
                    "_id": "6664484121f9689d2298e486"
                },
                {
                    "order": 6,
                    "name": "فردى كرازة",
                    "description": "ادخل عدد المشاركين",
                    "isRequired": false,
                    "isEnum": false,
                    "values": [],
                    "numberOfChoices": 1,
                    "isNumber": true,
                    "ifNumber": {
                        "isPriced": true,
                        "price": 70,
                        "maxNumber": 50,
                        "minRequiredNames": 0,
                        "maxRequiredNames": 0,
                        "_id": "6664484121f9689d2298e489"
                    },
                    "_id": "6664484121f9689d2298e488"
                }
            ],
            "submttedBy": [
                {
                    "userId": "6658f3dc2c8234557d1a64b9",
                    "submissionId": "665cb95de721e8e1595b0537",
                    "submittedAt": "2024-06-02T18:26:37.068Z",
                    "_id": "665cb95de721e8e1595b053a"
                }
            ],
            "__v": 522
        },

        example of submission data (i will care only about the data field and value.split(",")[0] and the price)
        {
            "_id": "66641b25f1b0ade21f0f4b07",
            "userId": "66510a2381925c03f94fac64",
            "formTemplateId": "664b48137565dd25fca12229",
            "data": [
                {
                    "value": "1,1.1:كيرلس",
                    "fieldId": "6663c95bf1b0ade21f0f4704",
                    "_id": "66641b25f1b0ade21f0f4b08"
                },
                {
                    "value": "2,1.1:كيرليس عاطف,2.1:فوزى عزيز",
                    "fieldId": "6663c95bf1b0ade21f0f4706",
                    "_id": "666422f5f1b0ade21f0f4ea3"
                },
                {
                    "value": "3,1.1:كيرلس,2.1:عاطف,3.1:فوزى",
                    "fieldId": "6663c95bf1b0ade21f0f4708",
                    "_id": "6664249af1b0ade21f0f50a3"
                },
                {
                    "value": "2,1.1:سشيب,2.1:شسيب",
                    "fieldId": "6663c95bf1b0ade21f0f470a",
                    "_id": "666424adf1b0ade21f0f5105"
                }
            ],
            "totalPrice": 160,
            "createdAt": "2024-06-08T08:49:41.234Z",
            "updatedAt": "2024-06-08T09:30:21.383Z",
            "__v": 0
        },
        {
            "_id": "66641b9ef1b0ade21f0f4c51",
            "userId": "66510a2381925c03f94fac64",
            "formTemplateId": "664b48137565dd25fca12226",
            "data": [
                {
                    "value": "12",
                    "fieldId": "6663c95bf1b0ade21f0f46db",
                    "_id": "66641b9ef1b0ade21f0f4c52"
                },
                {
                    "value": "12",
                    "fieldId": "6663c95bf1b0ade21f0f46df",
                    "_id": "66641b9ef1b0ade21f0f4c54"
                },
                {
                    "value": "0",
                    "fieldId": "6663c95bf1b0ade21f0f46dd",
                    "_id": "6664223ef1b0ade21f0f4dfa"
                }
            ],
            "totalPrice": 1200,
            "createdAt": "2024-06-08T08:51:42.684Z",
            "updatedAt": "2024-06-08T09:19:58.524Z",
            "__v": 0
        },
        {
            "_id": "66643218f1b0ade21f0f5b6e",
            "userId": "66510a2381925c03f94fac64",
            "formTemplateId": "664b48137565dd25fca12233",
            "data": [
                {
                    "value": "2,1.1:كيرلس,1.2:عاطف,1.3:متاناتم,2.1:عزيز,2.2:عويضة,2.3:عوض,2.4:خمتناا",
                    "fieldId": "6663c95bf1b0ade21f0f473f",
                    "_id": "66643279f1b0ade21f0f5bc8"
                }
            ],
            "totalPrice": 300,
            "createdAt": "2024-06-08T10:27:36.021Z",
            "updatedAt": "2024-06-08T10:29:13.605Z",
            "__v": 0
        },
        {
            "_id": "66643587f1b0ade21f0f5c9f",
            "userId": "66510a2381925c03f94fac64",
            "formTemplateId": "664b48137565dd25fca12232",
            "data": [
                {
                    "value": "3,1.1:123,1.2:1234,1.3:1234,1.4:1234,1.5:2314123,2.1:412341234,2.2:1234123,2.3:41234,3.3:41234123,3.2:12341234,3.1:12341234,1.6:666666666",
                    "fieldId": "6663c95bf1b0ade21f0f4738",
                    "_id": "66643590f1b0ade21f0f5cfa"
                }
            ],
            "totalPrice": 450,
            "createdAt": "2024-06-08T10:42:15.365Z",
            "updatedAt": "2024-06-08T10:42:24.604Z",
            "__v": 0
        }
   */

  const activities = await Activity.find();
  console.log("🚀 ~ getGeneralNumbers ~ activities:", activities)
  const churches = await Church.find();
  console.log("🚀 ~ getGeneralNumbers ~ churches:", churches)
  const formTemplates = await FormTemplate.find();
  console.log("🚀 ~ getGeneralNumbers ~ formTemplates:", formTemplates)
  const submissions = await Submissions.find();
  console.log("🚀 ~ getGeneralNumbers ~ submissions:", submissions)


  res.status(200).json({ success: true, activities, churches, formTemplates, submissions });
}

export const getGeneralNumbersCSV = async (req, res) => {
  try {
    // Fetch data from the database
    const activities = await Activity.find();
    const churches = await Church.find();
    const formTemplates = await FormTemplate.find();
    const submissions = await Submissions.find();

    // Create a mapping of form templates to activities
    const activityMap = activities.reduce((acc, activity) => {
      acc[activity._id] = activity.name;
      return acc;
    }, {});

    // Create a mapping of churches
    const churchMap = churches.reduce((acc, church) => {
      if (!acc[church.address]) {
        acc[church.address] = [];
      }
      acc[church.address].push(church.name);
      return acc;
    }, {});

    // Prepare data structure for CSV
    const rows = [];

    // Iterate through each church
    for (const address in churchMap) {
      const churchNames = churchMap[address];

      churchNames.forEach(churchName => {
        const row = {
          'القطاع': address,
          'اسم الكنيسة': churchName,
        };

        // Iterate through each activity
        activities.forEach(activity => {
          // Get form templates for the activity
          const activityFormTemplates = formTemplates.filter(ft => ft.activityId.toString() === activity._id.toString());

          activityFormTemplates.forEach(ft => {
            // Get submissions for the form template
            const ftSubmissions = submissions.filter(sub => sub.formTemplateId.toString() === ft._id.toString());

            ft.fields.forEach(field => {
              const fieldName = `${activityMap[activity._id]}-${ft.name}-${field.name}`;

              // Calculate total number and total price for the field
              let totalNumber = 0;
              let totalPrice = 0;

              ftSubmissions.forEach(sub => {
                const fieldData = sub.data.find(d => d.fieldId.toString() === field._id.toString());
                if (fieldData) {
                  const [number, ...names] = fieldData.value.split(",");
                  const parsedNumber = parseInt(number, 10);
                  if (!isNaN(parsedNumber)) {
                    totalNumber += parsedNumber;
                    if (field.ifNumber && field.ifNumber.isPriced) {
                      totalPrice += parsedNumber * field.ifNumber.price;
                    }
                  }
                }
              });

              // Add data to the row
              if (totalNumber > 0) {
                row[fieldName] = `${totalNumber} - ${totalPrice} جنية`;
              } else {
                row[fieldName] = totalNumber.toString();
              }
            });
          });
        });

        rows.push(row);
      });
    }

    // Calculate totals
    const totalRow = {
      'العنوان': "المجموع",
      'اسم الكنيسة': "",
    };

    rows.forEach(row => {
      for (const key in row) {
        if (key !== 'العنوان' && key !== 'اسم الكنيسة') {
          const value = row[key].split(" - ")[0];
          const number = parseInt(value, 10);
          if (!totalRow[key]) {
            totalRow[key] = 0;
          }
          totalRow[key] += number;
        }
      }
    });

    rows.push(totalRow);

    // Convert data to CSV
    const fields = Object.keys(rows[0]);
    const opts = { fields };
    const parser = new Parser(opts);
    const csv = parser.parse(rows);

    const __dirname = path.resolve();
    // Write CSV to file and send as response
    const filePath = path.join(__dirname, '/exports/general_numbers.csv');
    fs.writeFileSync(filePath, csv);

    res.download(filePath, 'general_numbers.csv', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Failed to download the file.' });
      } else {
        console.log('File downloaded successfully');
        // fs.unlinkSync(filePath); // Delete the file after download
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};