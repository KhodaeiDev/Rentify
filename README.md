<h1 align="center">
⭐در حال توسعه ( In the development phase )⭐
</h1>

# رنتی فای (Rentify) ❤️ 



<h3 align="center">
 <a href="https://rentify-nqd6.onrender.com/docs" > لینک مشاهده انلاین Swagger apiDocument </a>
</h3>

---


# 📌 قوانین کار تیمی با Git – پروژه تیمی

این فایل شامل قوانین و روند کاری تیم برای استفاده از Git و مدیریت برنچ‌هاست.  
تمام اعضا موظف به رعایت این موارد هستند.

---

## 1️⃣ ساختار برنچ‌ها

تمام برنچ‌ها از **main** ساخته می‌شوند:

main
└── dev
├── front-abtin
├── front-mahdi
├── front-mrcodee
└── backend

هیچ‌کس مستقیم روی **main** یا **dev** کد نمی‌زند.

هر نفر فقط روی برنچ خودش کار می‌کند.

---

## 2️⃣ شروع کار هر نفر

قبل از شروع هر کاری، **حتماً pull بگیرید**:

```bash
git checkout <branch-name>
git pull origin dev
```

## 3️⃣ قوانین توسعه روی برنچ شخصی

فقط روی فایل‌ها و بخش‌های مربوط به خودتان کار کنید

کامیت‌های کوچک و مکرر بزنید

پوش مرتب انجام دهید

```bash
git add .
git commit -m "توضیح کوتاه تغییرات"
git push
```

## 4️⃣ ارسال Pull Request (PR)

وقتی کار روی برنچ شخصی تمام شد:

```bash
Pull Request → به dev
```

هیچ PR مستقیماً به main زده نمی‌شود.

## 5️⃣ ادغام (Merge)

<ul style="text-align: right;">
  <li> ابتدا همهٔ PRها به dev ادغام می‌شوند</li>
  <li> dev تست و بررسی می‌شود</li>
  <li>پس از اطمینان از پایدار بودن، یک PR از dev → main ایجاد می‌شود</li>
  <li>main همیشه نسخهٔ نهایی و پایدار پروژه را نگه می‌دارد </li>
</ul>

## 6️⃣ جلوگیری از کانفلیکت

<ul style="text-align: right;">
  <li>هر بار قبل از شروع کار → pull</li>
  <li>روی فایل‌های مشترک بدون هماهنگی کار نکنید</li>
  <li>پوش و PRهای کوچک بزنید</li>
  <li>نام فایل و فولدر را تغییر ندهید مگر با هماهنگی</li>
</ul>

## 7️⃣ قوانین پروژه Frontend

<ul style="text-align: right;">
  <li>پوشه frontend فقط یک بار توسط اولین نفر ساخته می‌شود</li>
  <li>دیگر اعضای فرانت روی همان ساختار کار می‌کنند</li>
  <li>هر نفر روی بخش خاص خودش کار کند (Navbar / Footer / Product / Auth / ...)<li>
  
</ul>
# Rentify
