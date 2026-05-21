# 🛍️ Sisay Store — Ethiopian Fashion Marketplace

> A modern, full-featured e-commerce platform built for Ethiopian fashion sellers and buyers. Built with HTML, CSS, JavaScript and Firebase — hosted on GitHub Pages.

🌐 **Live Site:** [kallzth.github.io/Sis-store-website](https://kallzth.github.io/Sis-store-website/)

---

## 📸 Pages

| Page | URL |
|------|-----|
| 🏪 Store | `/index.html` |
| 🔧 Admin Dashboard | `/admin.html` |
| 🏬 Seller Portal | `/seller-register.html` |
| 📖 Seller Guide | `/seller-guide.html` |
| ❓ FAQ | `/faq.html` |
| 🚚 Shipping & Returns | `/shipping.html` |
| 📏 Size Guide | `/size-guide.html` |

---

## ✨ Features

### 🛒 Store (index.html)
- Product grid with category filters (Men, Women, Accessories, Shoes)
- Live search across all products
- Product modal with size selector and image gallery
- **Shopping cart** with quantity controls, localStorage persistence
- **Discount code field** in cart — validates against Firebase, shows savings
- **Order via WhatsApp** — full cart details sent automatically
- Wishlist with localStorage persistence
- **Flash sale countdown** — shows only when flash products exist
- **Deal of the Day** section for featured products
- **Active discount codes section** — shows all public codes with one-click copy & apply
- **Newsletter subscription** — generates unique 10% welcome discount code per subscriber
- Subscriber **early access banner** — shown on return visits
- **Announcement banner** — controlled by admin in real time
- **Ad slots** — between sections, supports image, text and Google AdSense ads
- **AI-powered chatbot** — 7 conversation flows (ordering, payment, delivery, returns, sizes, seller, contact)
- Contact Us popup — saves to Firebase messages collection
- Secret admin access — type "admin" on keyboard or tap logo 5× on mobile

### 🔧 Admin Dashboard (admin.html)
**Secure login** — username + password, stored in localStorage

#### Overview
- 6 stat cards: Products, Active Sellers, Total Orders, Subscribers, Pending Sellers, Unread Messages
- Each card is clickable → navigates to that section
- **Low stock alert banner** — lists products running low automatically
- Recent orders table with customer, items, ETB amount, date and status
- **Revenue & orders charts** (Chart.js)

#### Products
- Full CRUD — add, edit, delete products
- **Image upload** via Firebase Storage with real progress bar
- Drag & drop image upload or paste URL with live preview
- Category, price, original price, sizes, stock quantity, featured, flash sale flags
- Seller assignment dropdown
- Category display: "Men's Clothing", "Women's Clothing" etc.
- Stock color coding: green (ok), yellow (≤5), red (0)

#### Sellers
- Search by name, owner, phone, city
- Filter by status: All / Active / Pending / Suspended
- Seller cards show: phone, email, city, product count, commission %
- Approve, edit, delete sellers
- Categories field synced from registration

#### Orders
- Filter by status: All / Pending / Confirmed / Shipped / Completed
- Shows full item names with sizes and quantities
- ETB currency throughout
- Mark completed / cancelled

#### Pipeline (Kanban)
- 4-column board: New → Confirmed → Shipped → Completed
- Move orders forward or back with buttons
- Order count badge per column

#### Payouts & Commission
- **Commission Submissions tab** — sellers submit Telebirr transaction IDs
- Pending badge count
- View transaction ID, screenshot link, seller contact
- **Verify** → marks paid + opens WhatsApp with confirmation message to seller
- **Reject** → enter reason + opens WhatsApp notifying seller to resubmit
- **Seller Summary tab** — commission owed per seller based on completed orders
- Mark as Paid → records in Firebase + WhatsApp notification

#### Customers
- Auto-built from order history
- Shows name, phone, order count, total spent, last order date
- Search + Export CSV

#### Discounts
- Create / edit / delete codes
- Percentage or fixed ETB discount
- Min order, max uses, expiry date
- Active/Inactive/Expired status with color-coded cards
- Copy code button
- Used / Remaining / Expiry stats per card

#### Bulk Import
- Download CSV template
- Upload CSV → preview with validation (valid ✓ / invalid ✗)
- Import all valid products at once

#### Subscribers
- View all newsletter emails with date
- Search by email
- Export CSV

#### Messages Inbox
- Two-panel layout (list + detail)
- Unread dot + badge in sidebar
- Reply via WhatsApp or Email buttons
- Mark all read, filter by read/unread, delete

#### Announcements & Ads
- Announcement banner — text, color, active toggle → appears on store instantly
- Ad Slot 1 & 2 — between product sections
- Supports: Image ad, Text/Link ad, Google AdSense
- Active ads table with delete

#### Settings
- Store name, WhatsApp number, email, city, description
- Admin username + password change
- Share links: store URL + seller registration URL (copy + open)
- Danger zone: clear all orders or messages

### 🏬 Seller Portal (seller-register.html)
**3 screens in one file:**

#### Registration (3-step form)
- Step 1: Personal info (name, phone, email, city, password)
- Step 2: Shop details (name, description, categories, product range, social)
- Step 3: Review + seller agreement
- Success screen with login prompt

#### Seller Login
- Phone number + password authentication
- Auto-login from localStorage on return visits
- **Show/hide password** toggle
- **Forgot password** flow with WhatsApp admin contact

#### Seller Dashboard
- **Overview** — 4 stats (products, orders, pending, revenue), recent orders, top products
- **My Products** — add, edit, delete own products with Firebase Storage image upload
- **My Orders** — shows only their products' orders, commission amount per order, filter by status, confirm orders
- **Commission submission** — after completing an order, seller submits Telebirr transaction ID for admin verification
- Commission status per order: Unpaid / Under Review / Verified / Rejected
- **My Profile** — update all shop details, change password

### 📖 Seller Guide (seller-guide.html)
- Hero with animated floating dashboard cards
- Stats strip (visitors, free to join, approval time)
- 4-step timeline with tips
- **Live earnings calculator** with sliders (price × orders × commission)
- Features grid (6 features)
- FAQ accordion (6 questions)
- CTA with WhatsApp contact button

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Database | Firebase Firestore (v11 ES modules) |
| Storage | Firebase Storage |
| Hosting | GitHub Pages |
| Charts | Chart.js |
| Icons | Font Awesome 6.5 |
| Fonts | Syne + DM Sans (Google Fonts) |
| Orders | WhatsApp API (wa.me) |

---

## 🔥 Firebase Collections

| Collection | Purpose |
|-----------|---------|
| `products` | All store products |
| `sellers` | Seller accounts + status |
| `orders` | Customer orders |
| `messages` | Contact form submissions |
| `subscribers` | Newsletter emails |
| `discounts` | Discount codes |
| `announcements` | Store announcement banner |
| `ads` | Ad slot content |
| `payouts` | Seller payout records |
| `commissions` | Commission verification submissions |

---

## 🔐 Security

- Admin dashboard protected by username + password
- Secret access: type `admin` on keyboard or tap logo 5× on mobile
- Firestore rules: open read/write (security handled by admin login layer)
- Firebase API key is a public web identifier — standard practice for client-side Firebase
- Browser autocomplete disabled on login forms

---

## 🚀 Getting Started

```bash
git clone https://github.com/kallzth/Sis-store-website.git
cd Sis-store-website
```

Open any `.html` file in your browser or push to GitHub Pages.

### Firebase Setup
The project uses Firebase project `sisay-store-593a9`. To use your own:
1. Create a Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Firestore and Storage
3. Replace the `firebaseConfig` object in each HTML file
4. Set Firestore rules to allow read/write

---

## 📱 Admin Access

- **URL:** `https://kallzth.github.io/Sis-store-website/admin.html`
- **Username:** `sisay-admin`
- **Password:** Set in localStorage or via Settings page

---

## 👤 Author

**Kaleab Zelalem** — [@kallzth](https://github.com/kallzth)

---

## 📄 License

Private project — all rights reserved © 2025 Sisay Store
