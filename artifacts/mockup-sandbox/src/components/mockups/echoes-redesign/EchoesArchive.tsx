import { useEffect, useMemo, useState } from "react";
import "./_group.css";
import "./EchoesArchive.css";

const essay = `# Echoes of a Wanderer 🌌
*এক মহাজাগতিক মুসাফিরের ব্যক্তিগত সংগ্রহ*

মানুষ ডায়েরি লেখে কেন?

প্রশ্নটা খুব সাধারণ। উত্তরটাও হয়তো সাধারণ। কেউ স্মৃতি ধরে রাখার জন্য লেখে, কেউ নিজের সঙ্গে কথা বলার জন্য। কেউ আবার এমন কিছু কথা লিখে রাখে, যা অন্য কাউকে বলা সম্ভব হয়নি।

তবে একটা সমস্যা আছে।

<mark>মানুষ বদলে যায়।</mark>

আজ যে মানুষটি ডায়েরির পাতায় লিখছে, দশ বছর পর সেই ডায়েরি খুলে দেখলে সে হয়তো নিজের লেখাই চিনতে পারবে না। মনে হবে, লোকটা কে? এত আবেগ নিয়ে কথা বলছে কেন? পৃথিবীটা কি সত্যিই তার কাছে এত গুরুত্বপূর্ণ ছিল?

অথচ লোকটা সে নিজেই।

অন্তত ডায়েরি তাই বলে।

এই ভাণ্ডারে এমন কিছু মানুষের দেখা পাওয়া যাবে। মানুষগুলো আলাদা কেউ নয়। একই মানুষের বিভিন্ন সময়ের সংস্করণ। তাদের কেউ পৃথিবীকে নিয়ে আশাবাদী, কেউ পৃথিবীর ওপর বিরক্ত। কেউ কাউকে চিঠি লিখেছে, কেউ চিঠি লিখেও খামে ভরেনি।

একজন তো চিঠির শুরুতেই লিখেছে—

> **প্রিয় মহাকাল,**

তারপর আর কিছু লেখেনি।

চিঠিটা কেন লেখা হয়েছিল, সেটা জানা যায়নি। হয়তো লেখকের মাথায় আর কিছু আসেনি। হয়তো সে জানত, মহাকালের কাছে চিঠি পাঠানোর কোনো ডাকঘর নেই।

<mark>মানুষ অদ্ভুত প্রাণী। যে ঠিকানায় চিঠি পৌঁছানোর কোনো সম্ভাবনা নেই, সেখানেও সে চিঠি লেখে।</mark> ✉️

---

## ✉️ চিঠি: যার কোনো ঠিকানা নেই

সব চিঠি মানুষের কাছে লেখা হয় না। কিছু চিঠি লেখা হয় কোনো মানুষকে মনে করে, কিছু হারিয়ে যাওয়া সময়ের উদ্দেশে। কিছু লেখা হয় স্মৃতিকে, আর কিছু এমন এক সত্তাকে, যে কখনো উত্তর দেবে না।

কোনো কোনো চিঠির শুরুতে থাকে একটি নাম। কখনো একটি স্থান। কখনো এমন একটি স্মৃতি, যা বহু বছর পরেও অকারণে ফিরে আসে। আবার কখনো কোনো কারণই থাকে না। শুধু কলমের ডগায় এসে জমে কয়েকটি শব্দ।

তারপর শুরু হয়—

> **প্রিয় মহাকাল,**

কিছু কথা কাউকে বলার জন্য নয়। কিছু কথা শুধু একবার লিখে দেখার জন্য—নিজের কাছেও, পৃথিবীর কাছেও।

<mark>প্রতিটি চিঠির একটি প্রাপকের প্রয়োজন হয় না। কখনো কখনো লেখাটাই শেষ গন্তব্য।</mark>

কিন্তু যে কথা চিঠিতে লেখা হলো না, তার কী হয়? যে স্মৃতি ভাষা পেল না, সে কোথায় থাকে?

হয়তো ডায়েরির পাতায়। হয়তো কবিতায়। কিংবা মনের এমন কোনো ঘরে, যেখানে মানুষ নিজেও সচরাচর প্রবেশ করে না।

## 📔 ডায়েরি: নিজের সঙ্গে পুরোনো পরিচয়

ডায়েরির একটা সুবিধা আছে। এখানে মিথ্যা বললেও কেউ প্রতিবাদ করে না।

আজ লিখলাম, আমি খুব সুখী। কাল লিখলাম, পৃথিবীতে আমার চেয়ে অসুখী মানুষ আর নেই। দুটো কথাই সত্যি হতে পারে।

মানুষের মন আবহাওয়ার মতো। সকালে রোদ, দুপুরে বৃষ্টি, বিকেলে ঝড়। অথচ বাইরে থেকে দেখলে মনে হয়, লোকটা দিব্যি আছে।

এই পৃষ্ঠাগুলোতে তারিখ থাকবে, রাতের কথা থাকবে, দিনের কথা থাকবে। থাকবে ছোট ছোট ঘটনা এবং এমন কিছু উপলব্ধি, যেগুলো ঘটার সময় তেমন গুরুত্বপূর্ণ মনে হয়নি। পরে মনে হয়েছে। অথবা মনে হয়নি।

<mark>সবকিছু মনে থাকার প্রয়োজনও নেই।</mark>

আজ যে কথায় বিশ্বাস করি, কয়েক বছর পর হয়তো সেই কথাটিই অবিশ্বাস্য মনে হবে। আজকের কোনো সিদ্ধান্তের বিরোধিতা করতে পারে বহু বছর আগের কোনো লেখা।

তাতে সমস্যা নেই।

মানুষ বদলায়। তার বিশ্বাস বদলায়, দৃষ্টিভঙ্গি বদলায়, এমনকি নিজের পুরোনো সত্তাকেও একসময় অপরিচিত মনে হতে পারে।

<mark>ডায়েরি সেই পরিবর্তনের সাক্ষী হয়ে থাকে।</mark> 🔄

কিন্তু পুরোনো ডায়েরির সব কথা কি সত্যি? মানুষ কি নিজের কাছেও সব সময় সত্যি কথা বলে?

এই প্রশ্নের উত্তর খুঁজতে গেলে কখনো কখনো স্মৃতির কাছে যেতে হয়। আর স্মৃতি এমন এক সাক্ষী, যার ওপর পুরোপুরি বিশ্বাস করা যায় না।

## 🕰️ স্মৃতি: যে সাক্ষী সব মনে রাখে না

স্মৃতিকে আমার খুব বিশ্বাস হয় না।

স্মৃতি নিজের সুবিধামতো ঘটনা সাজায়। যে কথাটা একসময় কষ্ট দিয়েছিল, বহু বছর পর সেটাকে মজার ঘটনা বলে মনে হতে পারে। আবার যে দিনটাকে খুব সাধারণ মনে হয়েছিল, সেই দিনটাই একসময় জীবনের সবচেয়ে গুরুত্বপূর্ণ দিন হয়ে ওঠে।

<mark>অথচ দিনটি তখন কিছুই জানত না।</mark>

দিনের কোনো স্মৃতি থাকে না। স্মৃতি থাকে মানুষের। আর মানুষ নিজের সুবিধামতো অতীতকে সাজিয়ে নেয়।

কোনো পুরোনো কথোপকথন মনে পড়লে আমরা নিশ্চিত থাকি, কথাগুলো ঠিক এভাবেই বলা হয়েছিল। তারপর পুরোনো কোনো চিঠি কিংবা ডায়েরির পাতা খুলে দেখা যায়, স্মৃতি নিজের মতো করে গল্প সাজিয়ে নিয়েছে।

তবু স্মৃতিকে পুরোপুরি অবিশ্বাস করা যায় না। কারণ, সবকিছু ঠিকভাবে মনে না থাকলেও কিছু অনুভূতি থেকে যায়।

এই ভাণ্ডারের স্মৃতিগুলো তাই ইতিহাস নয়। এগুলো একজন মানুষের মনে পড়ে থাকা সময়ের বিবরণ। এখানে ভুল থাকতে পারে, অসম্পূর্ণতা থাকতে পারে, একই ঘটনার একাধিক ব্যাখ্যা থাকতে পারে।

তবু সেগুলো রাখা হবে।

<mark>কারণ, ভুলে যাওয়া আর ভুল মনে রাখা এক জিনিস নয়। কখনো কখনো ভুল স্মৃতিও আমাদের নিজের গল্পের অংশ হয়ে যায়।</mark>

আর স্মৃতির সব কথা কি গদ্যে বলা যায়?

কিছু অনুভূতি আছে, যাদের সামনে দাঁড়ালে বাক্য ছোট হয়ে আসে। কিছু কথা আছে, যাদের ব্যাখ্যা করতে গেলেই তাদের সৌন্দর্য নষ্ট হয়ে যায়।

সেখানেই হয়তো কবিতার শুরু।

## 🎼 কবিতা: কয়েকটি শব্দের আশ্রয়

কবিতা লেখার জন্য কবি হওয়া লাগে কি না, সে বিষয়ে নিশ্চিত নই।

কখনো কখনো একটা বাক্য মাথায় আসে। বাক্যটা ভালো লাগে। লিখে রাখি। তারপর কয়েক বছর পর সেটা পড়ে মনে হয়, এ আবার কী লিখেছিলাম!

তবু ফেলে দিতে ইচ্ছা করে না।

মানুষ পুরোনো জিনিস ফেলে দিতে পারে না কেন? একটা ভাঙা কলম, পুরোনো টিকিট, কারও লেখা ছোট্ট একটা কাগজ—এসবের কোনো ব্যবহার নেই। তবু ফেলে দেওয়ার সময় হাত আটকে যায়।

হয়তো জিনিসটার জন্য নয়। জিনিসটার সঙ্গে জড়িয়ে থাকা মানুষটার জন্য।

কবিতাও কখনো কখনো তেমন। কয়েকটি শব্দ। তাদের কোনো বিশেষ কাজ নেই। শুধু একসময় তারা গুরুত্বপূর্ণ ছিল।

সব অনুভূতির ব্যাখ্যা হয় না। কিছু অনুভূতি কয়েকটি শব্দে থেকে যায়। কিছু আশ্রয় নেয় রূপকে, কিছু ছন্দে, কিছু নীরবতায়। আবার কিছু অনুভূতি আছে, যাদের প্রকাশ করতে গিয়ে মনে হয়—আর একটি শব্দ যোগ করলেই হয়তো সবকিছু নষ্ট হয়ে যাবে।

এই সংগ্রহে তাই এমন কিছু লেখা থাকবে, যাদের ঠিক কোন শ্রেণিতে রাখা উচিত, তা নিয়ে খুব বেশি ভাবা হয়নি। কোনোটি কবিতা, কোনোটি গদ্য, কোনোটি হয়তো দুটির মাঝামাঝি কোথাও দাঁড়িয়ে আছে।

<mark>সব লেখাকে সংজ্ঞায়িত করতে হয় না। কিছু লেখা নিজের মতো থাকলেই ভালো।</mark>

কিন্তু শব্দেরও একটা সীমা আছে। কখনো একটি বাক্য লিখে থেমে যেতে হয়। কখনো গল্পের শুরুটা পাওয়া যায়, অথচ শেষটা আর আসে না।

সেই অসমাপ্ত কথাগুলোর জন্যও এখানে জায়গা থাকবে।

## 🧩 খণ্ডাংশ: যা শেষ হতে পারেনি

কিছু লেখা শেষ হয় না।

লেখক বেঁচে থাকলে মাঝেমধ্যে পুরোনো লেখাগুলো খুলে দেখে। একটি অসমাপ্ত বাক্য পড়ে ভাবে, বাকিটা কী লিখতে চেয়েছিলাম?

মনে পড়ে না।

তখন বাক্যটা আর শেষ করা হয় না।

এই বিভাগে এমন কিছু অসমাপ্ত লেখা থাকবে। কয়েকটি বাক্য, কিছু শিরোনাম, হয়তো একটা গল্পের শুরু—যার শেষ কোনো দিন লেখা হয়নি।

কোনো কোনো ভাবনা কয়েক মুহূর্তের জন্য আসে, তারপর হারিয়ে যায়। কিছু শব্দের পাশে আরও কয়েকটি শব্দ বসানোর কথা ছিল, কিন্তু আর বসানো হয়নি।

এদের নিয়ে কোনো পরিকল্পনা নেই।

<mark>সবকিছুর ভবিষ্যৎ থাকতে হবে, এমন কোনো নিয়ম পৃথিবীতে নেই। কিছু জিনিস বর্তমানেও থাকতে পারে। অসমাপ্ত হয়েও।</mark>

কোনো গল্পের সমাপ্তি না থাকলেই তার শুরুটা অর্থহীন হয়ে যায় না। কোনো প্রশ্নের উত্তর না পেলেও প্রশ্নটি মূল্যহীন হয়ে পড়ে না।

তবে এইসব অসমাপ্ত বাক্য, স্মৃতি আর চিঠি এক জায়গায় জমা হচ্ছে কেন?

হয়তো লেখক সবকিছু হারাতে চায় না। হয়তো সে জানে, সবকিছু ধরে রাখাও সম্ভব নয়।

তাহলে কী রাখা উচিত?

এই প্রশ্নের উত্তর খুঁজতেই হয়তো মানুষ নিজের চিন্তাগুলো লিখে রাখে।

## 💭 চিন্তা: যে প্রশ্নের শেষ নেই

মানুষ সব প্রশ্নের উত্তর চায় না।

কথাটা শুনতে অদ্ভুত লাগলেও সত্যি। কেউ যদি গভীর রাতে জিজ্ঞেস করে, জীবনের অর্থ কী, তাহলে তাকে উত্তর দেওয়ার চেয়ে এক কাপ চা দেওয়া বেশি কার্যকর হতে পারে।

অবশ্য চা খাওয়ার পরও প্রশ্নটা থেকে যেতে পারে।

তাতে ক্ষতি নেই।

<mark>সব প্রশ্নের উত্তর পাওয়া গেলে পৃথিবীটা সম্ভবত খুব বিরক্তিকর হয়ে যেত।</mark>

মানুষ তখন কী নিয়ে ভাবত? অন্য মানুষের কথা?

সেটা আরও বিপজ্জনক।

এই বিভাগে এমন কিছু চিন্তা জমা থাকবে, যেগুলোর কোনো চূড়ান্ত সিদ্ধান্ত নেই। মানুষ, সময়, অস্তিত্ব, বিশ্বাস, ব্যর্থতা, আশা, উচ্চাকাঙ্ক্ষা এবং মানুষ হয়ে বেঁচে থাকার অদ্ভুত সব অভিজ্ঞতা নিয়ে ভাবনাচিন্তা।

কিছু প্রশ্নের উত্তর খোঁজা হবে, কিছু প্রশ্নকে প্রশ্ন হিসেবেই থাকতে দেওয়া হবে।

কারণ, সব দরজা খোলার প্রয়োজন নেই। কিছু দরজার ওপাশে কী আছে, সেটা না জানাই ভালো।

তবু মানুষ দরজার সামনে দাঁড়িয়ে থাকে। ভাবে, ওপাশে কী আছে? খুললে কী দেখা যাবে? আর না খুললে কী হারাবে?

হয়তো এই কৌতূহলই তাকে সামনে এগিয়ে নিয়ে যায়।

হয়তো এই কৌতূহল থেকেই সে পেছনে ফিরে তাকায়।

## 🌌 Echoes of a Wanderer: পেছনে পড়ে থাকা প্রতিধ্বনি

মানুষকে আমার মাঝে মাঝে পথিক মনে হয়।

সে কোথাও যায়। কিছু মানুষকে সঙ্গে পায়। কারও সঙ্গে কিছুদূর হাঁটে, কারও সঙ্গে অনেকটা পথ। তারপর একসময় সবাই আলাদা হয়ে যায়।

কেউ পেছনে তাকায়। কেউ তাকায় না।

কিন্তু পেছনে যা পড়ে থাকে, তা সব সময় মানুষ নয়।

কোনো একটা বিকেল পড়ে থাকে। একটা কথা। একটা চিঠি। এমন একটা স্বপ্ন, যেটা পূরণ হয়নি বলে এখন আর কাউকে বলা হয় না।

আর পড়ে থাকে নিজেরই পুরোনো একটা সংস্করণ।

যে মানুষটি একসময় কিছু বিশ্বাস করত, এখন আর করে না। যে মানুষটি একসময় কাউকে প্রয়োজন মনে করত, এখন তার কথা মনে পড়লেও কিছু করার থাকে না।

সময়ের একটা অদ্ভুত স্বভাব আছে। সে কাউকে সঙ্গে নিয়ে চলে না। শুধু তার রেখে যাওয়া চিহ্নগুলো আমাদের পেছনে পড়ে থাকে।

আমরা সেগুলোকে স্মৃতি বলি। কখনো গল্প বলি। কখনো কবিতা। আর কখনো একটা পুরোনো ডায়েরির পাতায় রেখে দিই।

হয়তো এ কারণেই এই ভাণ্ডারের নাম **Echoes of a Wanderer**।

<mark>একজন পথিকের ফেলে আসা প্রতিধ্বনি।</mark> 🌌

আমরা সবকিছু সঙ্গে নিয়ে বাঁচতে পারি না। সবকিছু মনে রাখাও সম্ভব নয়। তবু কিছু জিনিস মনে রাখার যোগ্য।

এই ভাণ্ডার প্রতিটি মুহূর্ত সংরক্ষণ করার চেষ্টা নয়। বরং এমন কিছু মুহূর্ত ধরে রাখার চেষ্টা, যেগুলো কোনো এক সময়ে গুরুত্বপূর্ণ হয়ে উঠেছিল।

এখানে হারিয়ে যাওয়া বছরের কথা থাকবে। থাকবে অসমাপ্ত গল্প, ভুলে যাওয়া ঘটনা, স্মৃতির সঙ্গে বাস্তবের অমিল এবং এমন কিছু পৃষ্ঠা, যাদের অর্থ হয়তো শুধু লেখকই বুঝতে পারবেন।

কোনো কোনো লেখা পড়ে হয়তো মনে হবে, এর মধ্যে বিশেষ কিছু নেই। কোনো কোনো লেখা হয়তো লেখকের কাছেও একদিন দুর্বোধ্য হয়ে উঠবে।

তাতে আপত্তি নেই।

<mark>একটি ব্যক্তিগত ভাণ্ডারকে তার প্রতিটি জিনিসের ব্যাখ্যা দিতে হয় না। তার কাজ শুধু ধরে রাখা—কিছু কথা, কিছু সময়, কিছু অনুভূতি।</mark>

যত দিন সম্ভব।

## 🌅 শেষ কথা: প্রিয় মহাকাল

হয়তো একদিন এই পৃষ্ঠাগুলো ইন্টারনেটের কোথাও পড়ে থাকা একটি পুরোনো সংগ্রহশালা হয়ে থাকবে। কেউ হয়তো এখানে এসে পড়বে না। কেউ হয়তো ভুল করেও এই পাতাগুলোর ঠিকানা খুঁজে পাবে না।

তাতে কিছু যায় আসে না।

<mark>সব গল্পের পাঠক লাগে না। কিছু গল্প শুধু লেখা হয়ে থাকার জন্য লেখা হয়।</mark>

যে কথাটা কাউকে বলা যায়নি, সেটা কাগজে বলা যায়। যে স্মৃতিটা কাউকে বোঝানো সম্ভব নয়, সেটা নিজের মতো করে লিখে রাখা যায়।

তারপর একদিন ফিরে এসে পড়া যায়।

নিজের পুরোনো লেখার সামনে বসে মনে মনে প্রশ্ন করা যায়—

- লোকটা কে ছিল?
- কেন এমন করে লিখেছিল?
- কী হয়েছিল তার জীবনে?

উত্তর পাওয়া যাবে কি না, জানা নেই। তবে প্রশ্নগুলো থাকবে। আর থাকবে কিছু শব্দ—সময় পেরিয়ে যাওয়া একজন মানুষের রেখে যাওয়া শব্দ।

হয়তো কোনো এক রাতে আবার একটি চিঠি লেখা হবে।

হয়তো এবারও তার কোনো ঠিকানা থাকবে না।

চিঠির শুরুতে লেখা হবে—

> **প্রিয় মহাকাল,**

এই চিঠিগুলো তোমার কাছেই থাক।

উত্তর দেওয়ার দরকার নেই।

<mark>কিছু কথা উত্তর ছাড়াও বেঁচে থাকতে পারে।</mark> ✉️

এই ভাণ্ডারের পৃষ্ঠাগুলো অসমাপ্ত থাকতে পারে। স্মৃতি বদলে যেতে পারে। যে মানুষটি একদিন এই কথাগুলো লিখেছিল, বহু বছর পর সে নিজেই হয়তো আর আগের মানুষটি থাকবে না।

তবু লেখাগুলো থেকে যাবে। কোনো এক সময়ের সাক্ষী হয়ে, কোনো এক পুরোনো সত্তার রেখে যাওয়া চিহ্ন হয়ে।

জীবন এগিয়ে যায়। মানুষ বদলায়। সময় কাউকে অপেক্ষা করতে বলে না।

পেছনে পড়ে থাকে কিছু প্রতিধ্বনি।

আর যদি কোনো একদিন এই শব্দগুলো বেঁচে থাকার একটি নীরব সাক্ষ্য হয়ে থাকে, যদি তারা শুধু এটুকু বলতে পারে যে কেউ একজন এখানে ছিল, তার কিছু কথা ছিল, কিছু স্মৃতি ছিল, কিছু কথা বলা হয়নি—তাহলে হয়তো এই ভাণ্ডারের আর কোনো ব্যাখ্যার প্রয়োজন থাকবে না।

একটি ব্যক্তিগত ভাণ্ডার শেষ পর্যন্ত হয়তো এইটুকুই করতে পারে—বিস্মৃতির স্রোতে হারিয়ে যাওয়ার আগে কিছু ভঙ্গুর চিহ্ন ধরে রাখতে পারে।

নিখুঁতভাবে নয়। সম্পূর্ণভাবে নয়। চিরকালের জন্যও নয়।

শুধু এতটুকু সময়ের জন্য, যতটুকু সময়ের মধ্যে বলা যায়—এই মুহূর্তগুলো একদিন সত্যিই ছিল। তাদের কিছু অর্থ ছিল। কেউ একজন এই সময়ের মধ্য দিয়ে হেঁটে গিয়েছিল, দেখেছিল, অনুভব করেছিল এবং মনে রাখার চেষ্টা করেছিল।

সবকিছু মনে রাখা সম্ভব নয়।

<mark>কিছু জিনিস লিখে রাখা যায়। হয়তো সেটুকুই যথেষ্ট।</mark> 🕯️

> **কিছু জিনিস পাঠানোর জন্য নয়। কিছু কথা উত্তর পাওয়ার জন্যও নয়। কিছু জিনিস শুধু থেকে যাওয়ার জন্য।**

— *এক মহাজাগতিক মুসাফির* ☠️`;

type Block =
  | { type: "heading"; text: string; id: string; chapter: number }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "divider" };

const emojiPattern = /\p{Extended_Pictographic}/gu;

function cleanDecorativeEmoji(text: string) {
  return text.replace(emojiPattern, "").replace(/[\uFE0E\uFE0F\u200D]/g, "");
}

function parseEssay(markdown: string): Block[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: Block[] = [];
  let index = 0;
  let chapter = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }
    if (/^---+$/.test(line)) {
      blocks.push({ type: "divider" });
      index += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      const text = cleanDecorativeEmoji(line.slice(3)).trim();
      chapter += 1;
      blocks.push({
        type: "heading",
        text,
        chapter,
        id: text.includes("শেষ কথা") ? "featured-letter" : `chapter-${chapter}`,
      });
      index += 1;
      continue;
    }
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("> ")) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      blocks.push({ type: "quote", text: quoteLines.join(" ") });
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    const paragraphLines = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !lines[index].trim().startsWith("## ") &&
      !lines[index].trim().startsWith("> ") &&
      !lines[index].trim().startsWith("- ") &&
      !/^---+$/.test(lines[index].trim())
    ) {
      paragraphLines.push(lines[index].trim());
      index += 1;
    }
    blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
  }
  return blocks;
}

function renderInline(text: string) {
  const parts = text.split(/(<mark>[\s\S]*?<\/mark>|\*\*[\s\S]+?\*\*|\*[\s\S]+?\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("<mark>") && part.endsWith("</mark>")) {
      return <mark key={index}>{cleanDecorativeEmoji(part.slice(6, -7))}</mark>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{cleanDecorativeEmoji(part.slice(2, -2))}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{cleanDecorativeEmoji(part.slice(1, -1))}</em>;
    }
    return cleanDecorativeEmoji(part);
  });
}

function ThemeIcon({ dark }: { dark: boolean }) {
  return (
    <>
      <svg className={dark ? "ea-sun" : "ea-moon"} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {dark ? (
          <>
            <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
            <path d="M12 2.5v2M12 19.5v2M4.8 4.8l1.4 1.4m11.6 11.6 1.4 1.4M2.5 12h2m15 0h2M4.8 19.2l1.4-1.4M17.8 6.2l1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </>
        ) : (
          <path d="M20.1 15.5A8.5 8.5 0 0 1 8.4 3.8 8.6 8.6 0 1 0 20.1 15.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
      <span className="ea-sr-only">{dark ? "লাইট মোড চালু করুন" : "ডার্ক মোড চালু করুন"}</span>
    </>
  );
}

export function EchoesArchive() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const saved = localStorage.getItem("echoes-theme");
      if (saved === "light" || saved === "dark") return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } catch {
      return "light";
    }
  });
  const blocks = useMemo(() => parseEssay(essay), []);
  const chapters = useMemo(
    () => blocks.filter((block): block is Extract<Block, { type: "heading" }> => block.type === "heading"),
    [blocks],
  );

  useEffect(() => {
    try {
      localStorage.setItem("echoes-theme", theme);
    } catch {
      // The visual theme remains usable if storage is unavailable.
    }
  }, [theme]);

  return (
    <div className="echoes-archive" data-theme={theme} id="top">
      <a className="ea-skip" href="#essay-content">মূল লেখায় যান</a>
      <header className="ea-header ea-shell">
        <a className="ea-brand" href="#top" aria-label="Echoes of a Wanderer — শুরুতে ফিরুন">
          <span className="ea-brand-mark" aria-hidden="true" />
          <span className="ea-brand-copy">
            <strong>Echoes of a Wanderer</strong>
            <small>এক মহাজাগতিক মুসাফির</small>
          </span>
        </a>
        <nav className="ea-header-actions" aria-label="প্রধান নেভিগেশন">
          <a className="ea-header-link" href="#essay-content">আর্কাইভ</a>
          <a className="ea-header-link" href="#featured-letter">প্রিয় মহাকাল</a>
          <button
            className="ea-theme-button"
            type="button"
            aria-label={theme === "dark" ? "লাইট মোড চালু করুন" : "ডার্ক মোড চালু করুন"}
            aria-pressed={theme === "dark"}
            onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
          >
            <ThemeIcon dark={theme === "dark"} />
          </button>
        </nav>
      </header>

      <main>
        <section className="ea-cover ea-shell" aria-labelledby="cover-title">
          <div className="ea-cover-copy">
            <p className="ea-overline">একটি ব্যক্তিগত লেখার আর্কাইভ</p>
            <h1 className="ea-title" id="cover-title">Echoes of <span>a Wanderer</span></h1>
            <p className="ea-subtitle">এক মহাজাগতিক মুসাফিরের ব্যক্তিগত সংগ্রহ</p>
            <p className="ea-meta">shaonkabir8 <span aria-hidden="true">/</span> ব্যক্তিগত নোটের ভাণ্ডার</p>
          </div>
          <div className="ea-orbit-art" aria-hidden="true">
            <span className="ea-orbit-ring" />
            <span className="ea-orbit-center">এ</span>
            <span className="ea-orbit-caption">কোথাও যাওয়ার পথে</span>
          </div>
        </section>

        <aside className="ea-reading-strip" aria-label="সংগ্রহের একটি কথা">
          <div className="ea-shell ea-strip-inner">
            <p className="ea-strip-label">এই আর্কাইভের কথা</p>
            <p className="ea-strip-quote">“কিছু স্মৃতি মিলিয়ে যায়। <span>কিছু শব্দ থেকে যায়।</span>”</p>
          </div>
        </aside>

        <div className="ea-shell ea-reading-layout">
          <aside className="ea-rail" aria-label="লেখার সূচি">
            <p className="ea-aside-label">এই লেখায় / সূচি</p>
            <nav aria-label="অধ্যায়">
              <ol className="ea-toc">
                {chapters.map((chapter, index) => (
                  <li key={chapter.id}>
                    <a href={`#${chapter.id}`}>
                      <span className="ea-toc-index">{String(index + 1).padStart(2, "0")}</span>
                      <span>{chapter.text}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <article className="ea-featured" aria-label="বিশেষ চিঠি: প্রিয় মহাকাল">
              <p className="ea-featured-label">বিশেষ চিঠি / শেষের দিকে</p>
              <h2 className="ea-featured-title">প্রিয় মহাকাল</h2>
              <blockquote>“এই চিঠিগুলো তোমার কাছেই থাক। উত্তর দেওয়ার দরকার নেই।”</blockquote>
              <a className="ea-featured-link" href="#featured-letter">
                চিঠির কাছে যান
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </article>
          </aside>

          <article className="ea-essay" id="essay-content" aria-label="এক মহাজাগতিক মুসাফিরের ব্যক্তিগত সংগ্রহ">
            <h2 className="ea-essay-title">Echoes of a Wanderer</h2>
            <p className="ea-essay-subtitle">এক মহাজাগতিক মুসাফিরের ব্যক্তিগত সংগ্রহ</p>
            {blocks.slice(2).map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`${block.id}-${index}`}
                    id={block.id}
                    data-featured={block.id === "featured-letter" ? "true" : undefined}
                  >
                    <span className="ea-chapter-number">অধ্যায় / {String(block.chapter).padStart(2, "0")}</span>
                    {renderInline(block.text)}
                  </h2>
                );
              }
              if (block.type === "paragraph") return <p key={index}>{renderInline(block.text)}</p>;
              if (block.type === "quote") return <blockquote key={index}><p>{renderInline(block.text)}</p></blockquote>;
              if (block.type === "list") return <ul key={index}>{block.items.map((item, itemIndex) => <li key={itemIndex}>{renderInline(item)}</li>)}</ul>;
              return <div className="ea-divider" key={index} aria-hidden="true">সংরক্ষিত শব্দ</div>;
            })}
          </article>
        </div>
      </main>

      <section className="ea-bottom">
        <div className="ea-shell ea-bottom-inner">
          <p className="ea-bottom-note"><strong>shaonkabir8</strong>এক মহাজাগতিক মুসাফিরের ব্যক্তিগত ভাণ্ডার</p>
          <a className="ea-top-link" href="#top">আবার শুরুতে ↑</a>
        </div>
      </section>
      <footer className="ea-shell ea-footer">
        <span className="ea-footer-meta">Echoes of a Wanderer · ব্যক্তিগত নোটের আর্কাইভ</span>
        <span>All rights reserved.</span>
      </footer>
    </div>
  );
}
