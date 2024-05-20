import Activity from "../models/activity.model.js";
import { ObjectId } from 'mongodb';

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

export const checkAndCreateActivities = async () => {
  try {
    for (let i = 0; i < activities.length; i++) {
      const activityId = new ObjectId(activities[i]._id);
      const activity = await Activity.findOne({ _id: activityId });
      if (!activity) {
        const newActivity = new Activity({
          _id: activityId,
          name: activities[i].name,
          description: activities[i].description,
        });
        console.log("🚀 ~ checkAndCreateActivities ~ newActivity:", `${activities[i].name} created successfully`)
        await newActivity.save();
      } else {
        if (activity.name !== activities[i].name || activity.description !== activities[i].description) {
          activity.name = activities[i].name;
          activity.description = activities[i].description;
          console.log("🚀 ~ checkAndCreateActivities ~ activity updated successfully")
          await activity.save();
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
}
