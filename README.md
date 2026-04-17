# 👥 KeenKeeper — Keep Your Friendships Alive

KeenKeeper একটি React ভিত্তিক ফ্রেন্ডশিপ ম্যানেজমেন্ট ও ট্র্যাকিং অ্যাপ। এই অ্যাপের মাধ্যমে ব্যবহারকারীরা তাদের বন্ধুদের সাথে যোগাযোগের ইতিহাস ট্র্যাক করতে পারে, টিমলাইন দেখতে পারে এবং ফ্রেন্ডশিপ অ্যানালিটিক্স বিশ্লেষণ করতে পারে।

---

## 📌 প্রকল্পের উদ্দেশ্য

আজকের ব্যস্ত জীবনে আমরা অনেক বন্ধুর সাথে নিয়মিত যোগাযোগ রাখতে পারি না। KeenKeeper এই সমস্যার সমাধান করে তোমার বন্ধুদের সাথে সম্পর্ক ট্র্যাক এবং ম্যানেজ করতে সাহায্য করে।

---

## 🚀 ব্যবহৃত প্রযুক্তি

- ⚛️ React.js
- 🌐 React Router DOM
- 🎨 Tailwind CSS
- 📊 Recharts
- 🔔 React Toastify (toast notification)
- ⚡ Vite

---

## ✨ প্রধান ফিচারসমূহ

### 🏠 Home Page
- সুন্দর Navbar ও Banner সেকশন
- ৪টি summary card
- JSON ডেটা থেকে বন্ধুদের লিস্ট দেখানো
- Responsive friend cards grid layout

### 👥 Friend Cards
- প্রতিটি বন্ধুর ছবি, নাম, ট্যাগ ও স্ট্যাটাস দেখানো
- Card click করলে Details page-এ নিয়ে যায়

### 👤 Friend Details Page
- দুই কলাম লেআউট
- Friend এর সম্পূর্ণ তথ্য
- Action buttons (Snooze, Archive, Delete)
- Quick Check-in (Call, Text, Video)
- ক্লিক করলে Timeline-এ নতুন এন্ট্রি যোগ হয়
- Toast notification দেখানো হয়

### 📜 Timeline Page
- Call, Text, Video interaction history দেখানো হয়
- ফিল্টার (Call/Text/Video) সুবিধা

### 📊 Stats / Analytics Page
- Recharts দিয়ে Pie Chart
- Call / Text / Video এর তুলনামূলক ডাটা

### ⚠️ 404 Page
- ভুল URL হলে সুন্দর 404 পেজ দেখায়

### 🔄 Loading State
- ডাটা লোড হওয়ার সময় loading animation দেখানো হয়

---

## 📱 Responsive Design

এই প্রজেক্টটি সম্পূর্ণ responsive:
- 📱 Mobile
- 📟 Tablet
- 💻 Desktop

---

## 📂 Project Features Summary

- JSON ফাইল থেকে friend data লোড
- React Router দিয়ে navigation
- Dynamic friend details page
- Timeline tracking system
- Interactive analytics chart
- Toast notification system
- Fully responsive UI

---

## 🛠️ কিভাবে রান করবে

```bash
npm install
npm run dev