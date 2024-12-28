import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [
  // Female Users
  {
    email: "nayanthara@gmail.com",
    fullName: "Nayanthara",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Nayanthara_at_61st_Filmfare_Awards_South_%28cropped%29.jpg/800px-Nayanthara_at_61st_Filmfare_Awards_South_%28cropped%29.jpg",
  },
  {
    email: "trishakrishnan@gmail.com",
    fullName: "Trisha Krishnan",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Trisha_Krishnan.jpg/800px-Trisha_Krishnan.jpg",
  },
  {
    email: "anushkashetty@gmail.com",
    fullName: "Anushka Shetty",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Anushka_Shetty_at_Bahubali_2_promotion.jpg/800px-Anushka_Shetty_at_Bahubali_2_promotion.jpg",
  },
  {
    email: "keerthysuresh@gmail.com",
    fullName: "Keerthy Suresh",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Keerthy_Suresh_%28cropped%29.jpg/800px-Keerthy_Suresh_%28cropped%29.jpg",
  },
  {
    email: "samantharuthprabhu@gmail.com",
    fullName: "Samantha Ruth Prabhu",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Samantha_Ruth_Prabhu_%28cropped%29.jpg/800px-Samantha_Ruth_Prabhu_%28cropped%29.jpg",
  },
  {
    email: "tamannaahbhattia@gmail.com",
    fullName: "Tamannaah Bhatia",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Tamannaah_Bhatia_at_South_Indian_International_Movie_Awards_%28SIIMA%29_2016.jpg/800px-Tamannaah_Bhatia_at_South_Indian_International_Movie_Awards_%28SIIMA%29_2016.jpg",
  },
  {
    email: "poojahegde@gmail.com",
    fullName: "Pooja Hegde",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pooja_Hegde_at_SIIMA_2019.jpg/800px-Pooja_Hegde_at_SIIMA_2019.jpg",
  },
  {
    email: "rakulpreetsingh@gmail.com",
    fullName: "Rakul Preet Singh",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rakul_Preet_Singh_at_the_press_conference_of_Aye_Sir_2016.jpg/800px-Rakul_Preet_Singh_at_the_press_conference_of_Aye_Sir_2016.jpg",
  },

  // Male Users
  {
    email: "vijay@gmail.com",
    fullName: "Vijay",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Vijay_in_2020.jpg/800px-Vijay_in_2020.jpg",
  },
  {
    email: "ajithkumar@gmail.com",
    fullName: "Ajith Kumar",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Ajith_Kumar.jpg/800px-Ajith_Kumar.jpg",
  },
  {
    email: "suriya@gmail.com",
    fullName: "Suriya",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Suriya_at_Siima_2015.jpg/800px-Suriya_at_Siima_2015.jpg",
  },
  {
    email: "dhanush@gmail.com",
    fullName: "Dhanush",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Dhanush_at_Tamil_Cinema_Conference_2014.jpg/800px-Dhanush_at_Tamil_Cinema_Conference_2014.jpg",
  },
  {
    email: "vikram@gmail.com",
    fullName: "Vikram",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Vikram_%28actor%29_2018.jpg/800px-Vikram_%28actor%29_2018.jpg",
  },
  {
    email: "karthi@gmail.com",
    fullName: "Karthi",
    password: "123456",
    profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Karthi_at_SIIMA_Awards_2016.jpg/800px-Karthi_at_SIIMA_Awards_2016.jpg",
  },
  {
    email: "rajinikanth@gmail.com",
    fullName: "Rajinikanth",
    password: "123456",
    profilePic: "samples/animals/reindehttps://res.cloudinary.com/dmruwyeao/image/upload/v1735419898/Indian-actor-Rajinikanth-2008_bwsg7y.jpghttps://collection.cloudinary.com/dmruwyeao/9fcd1250e8a3c2b9700978287be354bc",
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
