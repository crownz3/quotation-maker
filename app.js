/* ==========================================================================
   Flow Quotation Studio - Application Core Logic
   ========================================================================== */

// Built-in Flow Infinity Loop SVG
const FLOW_LOGO_SVG = `
<svg width="120" height="48" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M30 12 C16 12 6 21 6 30 C6 39 16 48 30 48 C42 48 50 35 50 30 C50 25 58 12 70 12 C84 12 94 21 94 30 C94 39 84 48 70 48 C58 48 50 35 50 30 C50 25 42 12 30 12 Z" stroke="url(#flowLogoGrad)" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="flowLogoGrad" x1="6" y1="30" x2="94" y2="30" gradientUnits="userSpaceOnUse">
      <stop stop-color="#00B4D8"/>
      <stop offset="1" stop-color="#0D47A1"/>
    </linearGradient>
  </defs>
</svg>
`;

// Initial / Mutton Shop Preset (Exact copy of example-quotations.pdf)
const PRESET_MUTTON_SHOP = {
  id: "quote_mutton_sample",
  title: "Ammar Appa Mutton Shop Quote",
  updatedAt: new Date().toISOString(),
  theme: {
    primaryColor: "#1558a0",
    headerTextColor: "#ffffff",
    manualPageBreaks: true
  },
  company: {
    name: "Flow - Smart Web & Hybrid Apps",
    phone: "+91 8903424281",
    email: "",
    address: "117 Siddiq Nagar,\nMelapalayam, Tirunelveli – 627 005, Tamil Nadu",
    logoType: "builtin", // "builtin" | "custom" | "none"
    customLogoData: ""
  },
  docMeta: {
    title: "PROJECT QUOTATION & SERVICE AGREEMENT",
    ref: "FLOW-AMMA-2026-002",
    agreementDate: "September 20, 2026",
    deliveryDate: "To be confirmed on sign-off"
  },
  client: {
    name: "Ammar Appa Mutton Shop",
    address: "Tirunelveli, Tamil Nadu",
    contact: "Mr. Naseer (Owner)",
    phone: "+91 7094081000"
  },
  deliverablesSection: {
    title: "1. SCOPE OF WORK & DELIVERABLES",
    items: [
      {
        module: "Customer Mobile App\n(Android & iOS)",
        desc: "Full buyer experience: OTP login, location/pincode check, delivery/pickup choice, meat type selection (Goat/Sheep), product browsing, cart, order placement, real-time status tracking, and reorder feature.",
        status: "INCLUDED"
      },
      {
        module: "Goat / Sheep Variety Selector",
        desc: "Animated transparent modal with real breed photos (Velladu – Black Goat, Semmari Aadu – Spotted Goat). Sound synthesis on tap. Product catalogue filtered by selected meat type.",
        status: "INCLUDED"
      },
      {
        module: "Admin Panel\n(Super + Branch Admin)",
        desc: "Two-tier admin access: Super Admin manages all branches; Branch Admin manages assigned shop. Covers orders, payment verification, product/category CRUD, banners, and slot config.",
        status: "INCLUDED"
      },
      {
        module: "UPI Payment & UTR Verification",
        desc: "Direct UPI intent link on Android, QR/UPI ID fallback, customer UTR/screenshot submission, admin manual verification workflow — zero gateway fee model.",
        status: "INCLUDED"
      },
      {
        module: "Delivery & Pickup / Takeaway",
        desc: "Customer selects delivery (address + slot) or pickup (branch + slot). Pickup code verification at shop before handover. Delivery agent assignment by admin.",
        status: "INCLUDED"
      },
      {
        module: "Delivery Agent App Module",
        desc: "Agent login, assigned orders, customer address & call, out-for-delivery status, delivery confirmation, COD collection record.",
        status: "INCLUDED"
      },
      {
        module: "Cutting & Packing Staff Module",
        desc: "Today's accepted order queue, cutting/packing status updates, ready-for-pickup marking, pickup code verification, internal notes.",
        status: "INCLUDED"
      },
      {
        module: "Real-Time Order Status & Notifications",
        desc: "Live push/in-app updates across all stages: Placed → Payment Verified → Cutting → Packed → Out for Delivery / Ready for Pickup → Delivered. In-app notification drawer.",
        status: "INCLUDED"
      },
      {
        module: "Product & Category Management",
        desc: "Admin creates/edits/disables products with images, price, unit, variant, and meatType tag (Goat/Sheep/Both). Categories: Mutton Cuts, Parts, Organs, Combos, Ready-to-Cook.",
        status: "INCLUDED"
      },
      {
        module: "Multi-Shop / Branch Support",
        desc: "Multiple shop branches with individual inventory, pricing, and delivery zone config. Orders auto-routed to correct branch.",
        status: "INCLUDED"
      },
      {
        module: "Offer Banners & Promotions",
        desc: "Admin-configurable banners with coupon codes, discount %, gradient themes, and scheduled visibility on customer home screen.",
        status: "INCLUDED"
      },
      {
        module: "OTP Login & User Profile",
        desc: "Firebase Phone OTP authentication. Customer profile with saved delivery addresses, order history. Role-based secure access for all user types.",
        status: "INCLUDED"
      },
      {
        module: "Tamil / English Bilingual UI",
        desc: "Full UI in Tamil and English. Language toggle persists across sessions. All labels, statuses, and notifications shown in selected language.",
        status: "INCLUDED"
      },
      {
        module: "Cloud Backend & Firebase Hosting",
        desc: "Firestore (real-time DB), Firebase Auth, Cloud Functions (order numbering, notifications, audit logs), Firebase Hosting with SSL — first year FREE.",
        status: "INCLUDED"
      },
      {
        module: "Android APK & Play Store Upload",
        desc: "Production-ready APK/AAB build + Play Store listing guidance. Play Store developer account fee (Rs.2,070 one-time) paid directly by client.",
        status: "SEE NOTE"
      },
      {
        module: "iOS IPA & App Store Submission",
        desc: "iOS build + App Store submission assistance. Apple Developer Program fee (Rs.8,299/year) paid directly by client.",
        status: "SEE NOTE"
      }
    ]
  },
  financialSection: {
    title: "2. FINANCIAL TERMS & COMMERCIAL BREAKDOWN",
    currency: "INR",
    items: [
      {
        title: "End-to-End Application Design, Engineering & Production Deployment",
        desc: "(Customer App, Admin Panel, Delivery Agent, Cutting Staff, Firebase Backend, UPI Flow, Bilingual UI, All 16 Modules above)",
        amountStr: "Rs.60,000",
        numericVal: 60000,
        type: "normal" // normal, free, included, recurring, direct
      },
      {
        title: "First Year Firebase Hosting, Firestore & SSL Provisioning",
        desc: "(Valid from sign-off date through 12 months after delivery)",
        amountStr: "FREE (Rs.0)",
        numericVal: 0,
        type: "free"
      },
      {
        title: "Complimentary 1-Year Bug Fixes, Security Patches & Technical Support",
        desc: "(Valid for 12 months from app delivery date)",
        amountStr: "INCLUDED (Rs.0)",
        numericVal: 0,
        type: "included"
      },
      {
        title: "Annual Maintenance, Hosting Renewal & Continued Support — from Year 2",
        desc: "(See recommended rate justification in Section 3)",
        amountStr: "Rs.8,400 / year",
        numericVal: 0,
        type: "recurring"
      },
      {
        title: "Google Play Store Developer Account Fee",
        desc: "(One-time Rs.2,070 — paid directly by client to Google)",
        amountStr: "Direct by Client",
        numericVal: 0,
        type: "direct"
      },
      {
        title: "Apple Developer Program Annual Fee",
        desc: "(Rs.8,299/year — paid directly by client to Apple)",
        amountStr: "Direct by Client",
        numericVal: 0,
        type: "direct"
      }
    ],
    totalBannerText: "TOTAL PROJECT FEE PAYABLE TO FLOW: Rs.60,000 INR"
  },
  customSections: [
    {
      id: "sec_rationale",
      title: "3. RECOMMENDED ANNUAL MAINTENANCE CHARGE — RATIONALE",
      bullets: [
        {
          prefix: "Suggested Annual Fee from Year 2:",
          text: "Rs.8,400/year (Rs.700/month) — Fair market rate for an app of this complexity (multi-role, real-time, Firebase backend)."
        },
        {
          prefix: "Firebase Hosting & Database:",
          text: "Covers Firestore reads/writes, real-time sync, Cloud Function executions (approx. Rs.2,400–Rs.3,600/year depending on order volume)."
        },
        {
          prefix: "Bug Fixes & Patches (Post-Warranty):",
          text: "Covers Android/iOS OS-level API changes, Firebase SDK upgrades, and minor UI corrections (approx. Rs.3,600/year)."
        },
        {
          prefix: "SSL & Security Renewal:",
          text: "Included within the Firebase Hosting plan — no separate charge."
        },
        {
          prefix: "Market Comparison:",
          text: "Similar multi-role food/delivery apps are typically maintained at Rs.10,000–Rs.18,000/year. Flow's rate of Rs.8,400/year is priced below market as a long-term client benefit."
        },
        {
          prefix: "Payment Flexibility:",
          text: "Annual charge can be paid as a lump sum (Rs.8,400/year) or monthly (Rs.700/month) by mutual agreement."
        }
      ]
    },
    {
      id: "sec_financial_policies",
      title: "4. FINANCIAL TERMS & HOSTING POLICIES SUMMARY",
      bullets: [
        {
          prefix: "Total Project Fee:",
          text: "Rs.60,000 INR, due upon final delivery and handover of the working application."
        },
        {
          prefix: "Payment Schedule:",
          text: "50% advance (Rs.30,000) on agreement sign-off; remaining 50% (Rs.30,000) on delivery & handover."
        },
        {
          prefix: "First Year Hosting:",
          text: "Firebase Hosting & Firestore are FREE for the first 12 months from delivery date, compliments of Flow."
        },
        {
          prefix: "First Year Bug Fixes:",
          text: "All bugs, crashes, and performance issues reported within 12 months of delivery will be fixed at no additional cost."
        },
        {
          prefix: "Play Store & App Store Costs:",
          text: "Google Play (Rs.2,070 one-time) and Apple Developer Program (Rs.8,299/year) fees are paid directly by the client to the respective platforms. Flow assists with account setup and submission at no extra charge."
        },
        {
          prefix: "Post Year-1 Renewal:",
          text: "Annual maintenance & hosting fee of Rs.8,400/year will apply from the 13th month onwards."
        },
        {
          prefix: "Scope Changes:",
          text: "Any new feature additions, major design overhauls, or new modules beyond the agreed scope will be quoted separately."
        }
      ]
    },
    {
      id: "sec_maintenance",
      title: "5. MAINTENANCE, SUPPORT & FUTURE REQUIREMENTS",
      bullets: [
        {
          prefix: "1-Year Complimentary Maintenance:",
          text: "Bug fixes, security patches, Firebase SDK compatibility updates, and performance monitoring from delivery date to delivery date + 12 months."
        },
        {
          prefix: "Priority Support Channel:",
          text: "Direct WhatsApp / phone support via +91 8903424281 during business hours (Mon–Sat, 9 AM – 6 PM IST)."
        },
        {
          prefix: "Future Feature Roadmap (paid additions):",
          text: "Loyalty points, coupon codes, customer ratings & reviews, advanced sales reports, automatic UPI verification, multi-branch inventory transfer, customer wallet, and push notification campaigns."
        },
        {
          prefix: "Additional Requirements Clause:",
          text: "Any new feature requests or major design additions outside the current agreed scope will be discussed and quoted separately upon mutual agreement."
        },
        {
          prefix: "Data Ownership:",
          text: "All app data stored in Firebase Firestore belongs to the client. Flow will provide full data export assistance upon request."
        }
      ]
    }
  ],
  signoff: {
    title: "SIGN-OFF & ACCEPTANCE",
    providerBox: {
      title: "For FLOW - SMART WEB & HYBRID APPS",
      subtitle: "(Service Provider)",
      repName: "Flow Representative",
      date: "September 20, 2026"
    },
    clientBox: {
      title: "For AMMAR APPA MUTTON SHOP",
      subtitle: "(Client Representative)",
      repName: "Mr. Naseer (Owner)",
      phone: "+91 7094081000",
      date: "September 20, 2026"
    },
    legalNote: "Note: This document constitutes a legally binding service agreement upon signature by both parties. All amounts are in Indian Rupees (INR). Flow – Smart Web & Hybrid Apps reserves the right to pause or terminate services in case of non-payment beyond 30 days of the agreed due date."
  }
};

// Preset 2: DeenDesk Madrasa ERP (Full Ownership Buyout Template)
const PRESET_DEENDESK = {
  id: "quote_deendesk_ownership",
  title: "DeenDesk - Software Buyout & Ownership Agreement",
  updatedAt: new Date().toISOString(),
  theme: {
    primaryColor: "#0f766e", // Deep Islamic Emerald
    headerTextColor: "#ffffff",
    manualPageBreaks: true
  },
  company: {
    name: "Flow - Smart Web & Hybrid Apps",
    phone: "+91 8903424281",
    email: "contact@flowapps.in",
    address: "117 Siddiq Nagar, Melapalayam, Tirunelveli – 627 005, Tamil Nadu",
    logoType: "builtin",
    customLogoData: ""
  },
  docMeta: {
    title: "PROJECT QUOTATION & SOFTWARE OWNERSHIP AGREEMENT",
    ref: "FLOW-DEEN-2026-003",
    agreementDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    deliveryDate: "Immediate Deployment & Handover"
  },
  client: {
    name: "DeenDesk Madrasa Management Committee",
    address: "Tamil Nadu, India",
    contact: "Management Executive / In-Charge",
    phone: "+91 9XXXXXXXXX"
  },
  deliverablesSection: {
    title: "1. SCOPE OF WORK & PLATFORM DELIVERABLES",
    items: [
      {
        module: "Organization & Multi-Madrasa Hierarchy",
        desc: "Centralized multi-tier management: Super Admin, Organization Admin, and Madrasa In-Charge scoping. Controls branch profiles, academic terms, and staff assignments.",
        status: "INCLUDED"
      },
      {
        module: "Student & Parent Management Portal",
        desc: "Comprehensive student admissions, demographic records, parent mapping, auto-generated login credentials with printable credential slips, and status controls.",
        status: "INCLUDED"
      },
      {
        module: "Staff & Teacher Management Module",
        desc: "Teacher profiles, permission templates, role-scoped class assignments, subject allocations, and staff communication directories.",
        status: "INCLUDED"
      },
      {
        module: "Courses, Classes & Subjects Academic Engine",
        desc: "Structured Islamic and regular syllabus management, class definitions, subject mapping, and academic hierarchy visualization.",
        status: "INCLUDED"
      },
      {
        module: "Daily Student & Staff Attendance Tracking",
        desc: "Daily session-wise and class-wise attendance register with instant marking (Present/Absent/Late), historical attendance logs, and student summary cards.",
        status: "INCLUDED"
      },
      {
        module: "Student Promotion & Demotion Workflow",
        desc: "Annual academic progression engine: batch promote or demote students between classes with full historical audit trails.",
        status: "INCLUDED"
      },
      {
        module: "Bulk CSV Data Import Engine",
        desc: "Bulk onboarding of students, parents, and staff via CSV with schema validation, duplicate detection, import summaries, and error logs.",
        status: "INCLUDED"
      },
      {
        module: "Academic & People Hierarchy Tree Visualizer",
        desc: "Interactive visual tree charts showing organization structure, campus branches, classrooms, and assigned teachers.",
        status: "INCLUDED"
      },
      {
        module: "Notification Center & Announcement Broadcast",
        desc: "Targeted in-app notifications and alerts filtered by role (all users, teachers only, parents only, or specific madrasas).",
        status: "INCLUDED"
      },
      {
        module: "Reports & Performance Analytics",
        desc: "Role-scoped reporting tables: attendance summaries, student rosters, enrollment stats, and institutional metrics.",
        status: "INCLUDED"
      },
      {
        module: "Cross-Platform Web & Mobile App (Android/Capacitor)",
        desc: "Fast, responsive Progressive Web Application + Android APK/AAB build through Ionic Capacitor for smartphones and desktop browsers.",
        status: "INCLUDED"
      },
      {
        module: "Dedicated Firebase Cloud Infrastructure",
        desc: "Configured on dedicated project (deendesk-290526): Cloud Firestore realtime database, Firebase Auth, Firebase Storage for photo uploads, and SSL Hosting.",
        status: "INCLUDED"
      }
    ]
  },
  financialSection: {
    title: "2. FINANCIAL TERMS & COMMERCIAL BREAKDOWN (OWNERSHIP MODEL)",
    currency: "INR",
    items: [
      {
        title: "DeenDesk Madrasa Management Platform — Engineering & Production Deployment",
        desc: "(Complete 12 modules above, Multi-role hierarchy, Firestore DB, Web + Android app — Previously Agreed & Paid)",
        amountStr: "Rs.55,000 [PAID / CREDITED]",
        numericVal: 0,
        type: "paid"
      },
      {
        title: "Initial Post-Launch 2-Month Free Trial Period",
        desc: "(Complimentary operational cloud usage provided post-launch)",
        amountStr: "FREE (Rs.0) [COMPLETED]",
        numericVal: 0,
        type: "free"
      },
      {
        title: "Transitional 1-Month Cloud Operations Support Fee",
        desc: "(Interim monthly subscription payment — Paid by Client)",
        amountStr: "Rs.5,000 [PAID / CREDITED]",
        numericVal: 0,
        type: "paid"
      },
      {
        title: "Permanent Software Ownership & Lifetime License Buyout",
        desc: "(One-time buyout payment: Permanently eliminates recurring monthly subscription fees of Rs.5,000/month; grants permanent software ownership rights to your organization)",
        amountStr: "Rs.35,000 [DUE ON SIGN-OFF]",
        numericVal: 35000,
        type: "highlight"
      },
      {
        title: "Estimated Annual Google Firebase Cloud Infrastructure & Database Billing",
        desc: "(Direct pay-as-you-go cloud billing directly by Google Firebase based on actual usage; approx. Rs.500–Rs.700/month — Paid directly by client)",
        amountStr: "Rs.6,000 – Rs.8,000 / year (Direct Cloud Billing)",
        numericVal: 0,
        type: "direct"
      },
      {
        title: "Complimentary 1-Year Bug Fixes, Security Patches & Cloud Technical Support",
        desc: "(Direct WhatsApp & Phone priority support during business hours)",
        amountStr: "INCLUDED (Rs.0)",
        numericVal: 0,
        type: "free"
      }
    ],
    totalBannerText: "NET AMOUNT PAYABLE TO FLOW FOR FULL APP OWNERSHIP: Rs.35,000 INR"
  },
  customSections: [
    {
      id: "sec_ownership_rationale",
      title: "3. PERMANENT OWNERSHIP VS MONTHLY SUBSCRIPTION — COST BENEFIT ANALYSIS",
      bullets: [
        {
          prefix: "Permanent Elimination of Monthly Subscription:",
          text: "Under the original SaaS subscription model at approx. Rs.5,000/month, your organization would pay Rs.60,000 every year (Rs.1,80,000 over 3 years). With this ownership buyout, monthly subscription fees are permanently 100% eliminated."
        },
        {
          prefix: "One-Time Ownership Investment:",
          text: "By investing a single buyout balance of Rs.35,000, your organization secures full perpetual software rights, unrestricted usage across all madrasa branches, and complete independence."
        },
        {
          prefix: "Massive Cost Savings (Save ~Rs.52,000+ Every Year):",
          text: "Moving to direct Google Firebase usage billing (estimated at only Rs.6,000 – Rs.8,000 per year for Firestore reads/writes/storage) saves your organization over Rs.52,000 every year compared to recurring monthly subscriptions."
        },
        {
          prefix: "Direct Transparent Billing:",
          text: "Firebase billing is directly connected to the client's payment card. There are no middlemen markups or hidden server fees—you pay Google strictly for what your madrasas actually consume."
        },
        {
          prefix: "100% Data Sovereignty & Privacy:",
          text: "All student records, parent contact details, attendance archives, and madrasa finances remain securely hosted under your own dedicated cloud account with full export and backup privileges."
        }
      ]
    },
    {
      id: "sec_commercial_policies",
      title: "4. FINANCIAL TERMS & PAYMENT SETTLEMENT",
      bullets: [
        {
          prefix: "Historical Payments Acknowledged:",
          text: "The initial engineering sum of Rs.55,000 and the transition month fee of Rs.5,000 are formally credited and acknowledged in this agreement."
        },
        {
          prefix: "Final Settlement Balance:",
          text: "The net payable amount of Rs.35,000 INR is due upon signing of this agreement to finalize complete ownership transfer."
        },
        {
          prefix: "No Recurring Vendor Fees:",
          text: "Flow will not charge any monthly maintenance, per-student, or recurring software licensing fees post-settlement."
        },
        {
          prefix: "Google Cloud Card Configuration:",
          text: "Flow will guide the client in securely linking the madrasa management credit/debit card to the Google Cloud / Firebase console (deendesk-290526) with automated budget alert caps."
        }
      ]
    },
    {
      id: "sec_support_handover",
      title: "5. MAINTENANCE, TECHNICAL SUPPORT & HANDOVER POLICIES",
      bullets: [
        {
          prefix: "1-Year Complimentary Maintenance:",
          text: "Includes routine framework compatibility, security rule audits, and bug fixes for 12 months from the buyout date."
        },
        {
          prefix: "Priority Support Channel:",
          text: "Dedicated WhatsApp and phone support via +91 8903424281 during business hours (Mon–Sat, 9 AM – 6 PM IST)."
        },
        {
          prefix: "Future Custom Modules & Enhancements:",
          text: "Any new custom features outside the current scope (e.g. specialized exam grading cards, automated SMS gateways, biometric machine integrations) will be quoted separately on request."
        },
        {
          prefix: "Data Ownership Guarantee:",
          text: "Flow guarantees that all databases, student files, and backups are the exclusive intellectual and confidential property of the client."
        }
      ]
    }
  ],
  signoff: {
    title: "SIGN-OFF & ACCEPTANCE",
    providerBox: {
      title: "For FLOW - SMART WEB & HYBRID APPS",
      subtitle: "(Service Provider)",
      repName: "Flow Representative",
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    },
    clientBox: {
      title: "For DEENDESK MADRASA MANAGEMENT",
      subtitle: "(Client Representative)",
      repName: "Management Representative",
      phone: "+91 9XXXXXXXXX",
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    },
    legalNote: "Note: This document constitutes a legally binding software ownership and buyout agreement upon signature by both parties. All amounts are in Indian Rupees (INR). Upon receipt of the final Rs.35,000 settlement, full operational ownership is transferred to the client with zero recurring vendor subscription fees."
  }
};

// Preset 3: Electrical Vibers (VoltMaster Electricals)
const PRESET_ELECTRICAL_VIBERS = {
  id: "quote_electrical_vibers",
  title: "Electrical Vibers - Service & E-Commerce Platform",
  updatedAt: new Date().toISOString(),
  theme: {
    primaryColor: "#0284c7", // Electric Cyan / Ocean Blue
    headerTextColor: "#ffffff",
    manualPageBreaks: true,
    page1ItemsCount: 7,
    docLayoutMode: "pages"
  },
  company: {
    name: "Flow - Smart Web & Hybrid Apps",
    phone: "+91 8903424281",
    email: "contact@flowapps.in",
    address: "117 Siddiq Nagar, Melapalayam, Tirunelveli – 627 005, Tamil Nadu",
    logoType: "builtin",
    customLogoData: ""
  },
  docMeta: {
    title: "PROJECT QUOTATION & SERVICE AGREEMENT",
    ref: "FLOW-VIBE-2026-004",
    agreementDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    deliveryDate: "To be confirmed on sign-off"
  },
  client: {
    name: "Electrical Vibers (VoltMaster Electricals)",
    address: "Tirunelveli, Tamil Nadu",
    contact: "Proprietor / Service Lead",
    phone: "+91 9XXXXXXXXX"
  },
  deliverablesSection: {
    title: "1. SCOPE OF WORK & DELIVERABLES",
    items: [
      {
        module: "Customer Web & Mobile App\n(Android & PWA)",
        desc: "Unified customer portal: service booking, electrical product catalog browsing, cart, instant checkout, address & location pincode check, and live service/order tracking.",
        status: "INCLUDED"
      },
      {
        module: "Electrical Service Booking Engine",
        desc: "Intuitive appointment scheduler for home/commercial electrical services (wiring, fan/light fittings, MCB repair, inverters). Slot picker, emergency service toggle, and upfront estimation.",
        status: "INCLUDED"
      },
      {
        module: "Electrical Hardware & Products Store",
        desc: "Product catalog with categories (Switches, Sockets, Wires & Cables, MCBs, LED Lighting, Inverter Batteries, Tools). Product variants, stock status, and specifications sheet.",
        status: "INCLUDED"
      },
      {
        module: "Razorpay Payment Gateway & UPI Flow",
        desc: "Integrated Razorpay checkout: Direct UPI intent (GPay, PhonePe, Paytm), credit/debit cards, net banking, plus Cash on Delivery (COD) / Pay-after-Service workflow.",
        status: "INCLUDED"
      },
      {
        module: "Admin Management Dashboard",
        desc: "Centralized operations portal: incoming service requests queue, technician dispatch & scheduling, product inventory CRUD, banner management, and sales summaries.",
        status: "INCLUDED"
      },
      {
        module: "Electrician / Field Staff Module",
        desc: "Field technician interface: assigned work orders, customer click-to-call, GPS direction navigation, status updates (On the way, In-progress, Completed), and digital signature/receipt.",
        status: "INCLUDED"
      },
      {
        module: "Real-Time Order & Service Tracking",
        desc: "Multi-stage live tracking: Request Placed → Technician Assigned → Work in Progress → Completed / Order Delivered. Automated SMS/WhatsApp notifications.",
        status: "INCLUDED"
      },
      {
        module: "Tamil & English Bilingual UI",
        desc: "Full bilingual support in Tamil and English with instant language toggle. All service labels, categories, and notifications adapt to the selected language.",
        status: "INCLUDED"
      },
      {
        module: "Customer Profile & Saved Addresses",
        desc: "Firebase Phone OTP authentication, profile dashboard, multiple saved service addresses (Home, Office, Shop), and historical booking records with downloadable invoices.",
        status: "INCLUDED"
      },
      {
        module: "Promotional Banners & Coupons Engine",
        desc: "Admin-managed promotional banners, seasonal discounts, festival coupon codes, and announcement tickers across customer screens.",
        status: "INCLUDED"
      },
      {
        module: "Cloud Backend & Firebase Hosting",
        desc: "Cloud Firestore real-time database, Firebase Auth, Cloud Storage for service completion photos, and Firebase Hosting with SSL certificate — first year FREE.",
        status: "INCLUDED"
      },
      {
        module: "Android Production APK / Play Store Build",
        desc: "Production-ready APK/AAB build through Ionic Capacitor. Google Play Store listing guidance (Developer account fee Rs.2,070 paid directly by client).",
        status: "SEE NOTE"
      }
    ]
  },
  financialSection: {
    title: "2. FINANCIAL TERMS & COMMERCIAL BREAKDOWN",
    currency: "INR",
    items: [
      {
        title: "End-to-End Application Design, Engineering & Production Deployment",
        desc: "(Customer App, Electrician Module, Admin Panel, Service Booking Engine, Hardware Store, Razorpay Integration, All 12 Modules above)",
        amountStr: "Rs.40,000",
        numericVal: 40000,
        type: "normal"
      },
      {
        title: "Initial Advance Payment Received",
        desc: "(50% mobilization advance payment — Received and Credited)",
        amountStr: "Rs.20,000 [PAID / CREDITED]",
        numericVal: 0,
        type: "paid"
      },
      {
        title: "Final Balance Due upon Production Delivery & Handover",
        desc: "(Remaining 50% balance payable on final app handover & verification)",
        amountStr: "Rs.20,000 [DUE ON DELIVERY]",
        numericVal: 20000,
        type: "highlight"
      },
      {
        title: "First Year Firebase Hosting, Firestore Database & SSL Provisioning",
        desc: "(Valid from sign-off date through 12 months after production delivery)",
        amountStr: "FREE (Rs.0)",
        numericVal: 0,
        type: "free"
      },
      {
        title: "Complimentary 1-Year Bug Fixes, Security Patches & Technical Support",
        desc: "(Direct WhatsApp & Phone priority assistance during business hours)",
        amountStr: "INCLUDED (Rs.0)",
        numericVal: 0,
        type: "included"
      },
      {
        title: "Annual Maintenance, Hosting Renewal & Continued Support — from Year 2",
        desc: "(Covers framework updates, database backup & OS compatibility — See Section 3)",
        amountStr: "Rs.1,299 / year",
        numericVal: 0,
        type: "recurring"
      },
      {
        title: "Google Play Store Developer Account Fee",
        desc: "(One-time Rs.2,070 — paid directly by client to Google)",
        amountStr: "Direct by Client",
        numericVal: 0,
        type: "direct"
      },
      {
        title: "Payment Gateway Transaction Charges (Razorpay)",
        desc: "(Standard 2% + GST per transaction — deducted automatically by gateway)",
        amountStr: "Direct by Gateway",
        numericVal: 0,
        type: "direct"
      }
    ],
    totalBannerText: "TOTAL PROJECT FEE: Rs.40,000 INR | PAID: Rs.20,000 | BALANCE DUE: Rs.20,000 INR"
  },
  customSections: [
    {
      id: "sec_viber_rationale",
      title: "3. RECOMMENDED ANNUAL MAINTENANCE CHARGE — RATIONALE",
      bullets: [
        {
          prefix: "Nominal Annual Fee from Year 2:",
          text: "Rs.1,299/year (approx. Rs.108/month) — Specially discounted maintenance package structured exclusively for Electrical Vibers."
        },
        {
          prefix: "Firebase Hosting & Database:",
          text: "Covers Firestore reads/writes, real-time booking synchronization, product image hosting, and SSL certificate renewals."
        },
        {
          prefix: "Bug Fixes & System Updates:",
          text: "Covers Android OS compatibility updates, Ionic/Angular security patches, and minor UI adjustments."
        },
        {
          prefix: "Unbeatable Value Comparison:",
          text: "Commercial service-booking platforms typically incur Rs.8,000–Rs.15,000/year in vendor maintenance. Flow's nominal Rs.1,299/year rate represents a long-term partnership commitment."
        },
        {
          prefix: "Payment Flexibility:",
          text: "Annual fee of Rs.1,299 will apply from the 13th month onwards, payable annually."
        }
      ]
    },
    {
      id: "sec_viber_policies",
      title: "4. FINANCIAL TERMS & HOSTING POLICIES SUMMARY",
      bullets: [
        {
          prefix: "Total Project Fee:",
          text: "Rs.40,000 INR for complete design, engineering, and handover of the working application."
        },
        {
          prefix: "Payment Milestones:",
          text: "50% advance (Rs.20,000) received and acknowledged; remaining 50% (Rs.20,000) due upon final delivery & staff handover."
        },
        {
          prefix: "First Year Free Hosting:",
          text: "Firebase cloud hosting and database provisioning are 100% FREE for the first 12 months from delivery date, compliments of Flow."
        },
        {
          prefix: "Post Year-1 Annual Charge:",
          text: "Annual maintenance & cloud renewal fee of Rs.1,299/year will apply from the 13th month onwards."
        },
        {
          prefix: "12 Months Free Bug Fixes:",
          text: "All bugs, crashes, and performance issues reported within 12 months will be resolved at zero additional charge."
        },
        {
          prefix: "Scope Additions:",
          text: "Any new third-party integrations (e.g. automated IVR calling, custom accounting software sync) outside the agreed 12 modules will be quoted separately."
        }
      ]
    },
    {
      id: "sec_viber_support",
      title: "5. MAINTENANCE, SUPPORT & FUTURE REQUIREMENTS",
      bullets: [
        {
          prefix: "1-Year Complimentary Maintenance:",
          text: "Bug fixes, security patches, framework compatibility updates, and monitoring from delivery date to delivery date + 12 months."
        },
        {
          prefix: "Priority Support Channel:",
          text: "Direct WhatsApp and phone assistance via +91 8903424281 during business hours (Mon–Sat, 9 AM – 6 PM IST)."
        },
        {
          prefix: "Future Feature Roadmap (Optional Additions):",
          text: "Customer loyalty points, electrician rating & reviews, recurring AMC electrical service contracts, and automated WhatsApp order alerts."
        },
        {
          prefix: "Data Ownership:",
          text: "All customer profiles, service records, and catalog data belong 100% to Electrical Vibers. Flow provides full data export upon request."
        }
      ]
    }
  ],
  signoff: {
    title: "SIGN-OFF & ACCEPTANCE",
    providerBox: {
      title: "For FLOW - SMART WEB & HYBRID APPS",
      subtitle: "(Service Provider)",
      repName: "Flow Representative",
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    },
    clientBox: {
      title: "For ELECTRICAL VIBERS",
      subtitle: "(Client Representative)",
      repName: "Proprietor / Service Lead",
      phone: "+91 9XXXXXXXXX",
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    },
    legalNote: "Note: This document constitutes a legally binding service agreement upon signature by both parties. All amounts are in Indian Rupees (INR). Flow – Smart Web & Hybrid Apps reserves the right to pause or terminate services in case of non-payment beyond 30 days of the agreed due date."
  }
};

// Preset: StockFlow POS & Inventory ERP (Shiek Enterprises)
const PRESET_STOCKFLOW = {
  id: "quote_stockflow_shiek_enterprises",
  title: "StockFlow - POS & Inventory ERP (Shiek Enterprises)",
  updatedAt: new Date().toISOString(),
  theme: {
    primaryColor: "#1d4ed8", // StockFlow Royal Blue
    headerTextColor: "#ffffff",
    manualPageBreaks: true,
    page1ItemsCount: 7,
    docLayoutMode: "pages"
  },
  company: {
    name: "Flow - Smart Web & Hybrid Apps",
    phone: "+91 8903424281",
    email: "contact@flowapps.in",
    address: "117 Siddiq Nagar, Melapalayam, Tirunelveli – 627 005, Tamil Nadu",
    logoType: "builtin",
    customLogoData: ""
  },
  docMeta: {
    title: "PROJECT QUOTATION & SERVICE AGREEMENT",
    ref: "FLOW-STK-2026-005",
    agreementDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    deliveryDate: "10–14 business days from sign-off"
  },
  client: {
    name: "Shiek Enterprises",
    address: "Tirunelveli, Tamil Nadu",
    contact: "Proprietor / Management Executive",
    phone: "+91 9XXXXXXXXX"
  },
  deliverablesSection: {
    title: "1. SCOPE OF WORK & PLATFORM DELIVERABLES",
    items: [
      {
        module: "High-Speed Floor POS & Dispatch Terminal",
        desc: "Rapid touch & barcode billing terminal, instant product search, discounts, multi-tender payments (Cash, Card, UPI, Customer Khata), instant receipt generation, and real-time inventory deduction.",
        status: "INCLUDED"
      },
      {
        module: "Dynamic Inventory & Multi-Batch Tracking (FIFO / LIFO / WAC)",
        desc: "Inward batch/lot tracking with landed cost (freight, tax). Supports FIFO, LIFO, and Weighted Average Costing (WAC) with low-stock alerts and out-of-stock prevention.",
        status: "INCLUDED"
      },
      {
        module: "Barcode & QR Label Printing Engine & Ledger",
        desc: "Built-in barcode & QR code generator for items and batches. Supports thermal label formats (stickers, tags) and searchable Barcode Audit Ledger for tracking item movement.",
        status: "INCLUDED"
      },
      {
        module: "Purchasing, Supplier Directory & GRN Management",
        desc: "Procurement engine with Goods Received Notes (GRN), vendor records, inward purchase bills, supplier khata ledger, and purchase history tracking.",
        status: "INCLUDED"
      },
      {
        module: "Customer CRM, Khata Credit Ledger & Dues Management",
        desc: "Customer directory with purchase logs, credit limits, khata ledger, partial payment tracking, settlement receipts, and auto-computed outstanding balances printed on receipts.",
        status: "INCLUDED"
      },
      {
        module: "Thermal Bluetooth, USB & Desktop ESC/POS Printing",
        desc: "Direct printing to 58mm & 80mm ESC/POS Bluetooth printers, desktop receipt printers, and full A4/A5 tax invoices with GST tax breakdown and HSN summaries.",
        status: "INCLUDED"
      },
      {
        module: "Daily Cash Drawer, Shift Reconciliation & Expense Tracker",
        desc: "Shift management with opening cash float, real-time sales tally, daily expense categorization (supplies, tea, transport), and day-end drawer reconciliation.",
        status: "INCLUDED"
      },
      {
        module: "Sales Returns, Damage Stock & Broken Inventory Write-Offs",
        desc: "Fast returns against invoice or direct exchange, automated restocking or damage quarantine, credit note generation, and dedicated broken stock ledger.",
        status: "INCLUDED"
      },
      {
        module: "Role-Based Access Control (RBAC) & Staff Security",
        desc: "Granular multi-tier roles: Super Admin, Store Admin, Cashier, and Sales Staff. Protects sensitive purchase costs, margins, and financial reports from floor staff.",
        status: "INCLUDED"
      },
      {
        module: "Business Intelligence, Sales Analytics & GST Reports",
        desc: "Interactive dashboard with daily/monthly sales volume, profit & loss analysis, fast vs dead stock analytics, customer dues, and 1-click GST tax filing export.",
        status: "INCLUDED"
      },
      {
        module: "Cross-Platform Native Android App & Responsive Web PWA",
        desc: "Production Android APK build powered by Ionic Capacitor for handheld POS devices with offline IndexedDB resilience, plus responsive desktop Chrome / iPad web portal.",
        status: "INCLUDED"
      },
      {
        module: "Firebase Cloud Backend, Multi-Device Sync & SSL Hosting",
        desc: "Google Cloud Firestore real-time database, Firebase Auth, automated cloud backups, sub-second multi-device sync, and high-speed SSL hosting — first year 100% FREE.",
        status: "INCLUDED"
      }
    ]
  },
  financialSection: {
    title: "2. FINANCIAL TERMS & COMMERCIAL BREAKDOWN",
    currency: "INR",
    items: [
      {
        title: "End-to-End StockFlow POS & Inventory ERP Platform Engineering",
        desc: "(Complete setup: POS terminal, batch tracking, barcode generator, purchases, khata CRM, Bluetooth printing, expense tracker, RBAC, Android APK & Web portal)",
        amountStr: "Rs.18,000",
        numericVal: 18000,
        type: "normal"
      },
      {
        title: "Special Inaugural Promotional Offer / Commercial Concession",
        desc: "(Exclusive introductory partnership discount extended specifically for Shiek Enterprises)",
        amountStr: "-Rs.3,000 [OFFER APPLIED]",
        numericVal: -3000,
        type: "offer"
      },
      {
        title: "Net Agreed Project Investment (50% Advance | 50% on Handover)",
        desc: "(Payable: 50% advance of Rs.7,500 on sign-off | 50% balance of Rs.7,500 upon delivery & staff training)",
        amountStr: "Rs.15,000 [NET PAYABLE]",
        numericVal: 15000,
        type: "highlight"
      },
      {
        title: "First Year Firebase Cloud Hosting, Database Provisioning & SSL Security",
        desc: "(Valid for 12 full months from production deployment and handover date)",
        amountStr: "FREE (Rs.0)",
        numericVal: 0,
        type: "free"
      },
      {
        title: "Complimentary 1-Year Bug Fixes, Security Updates & Technical Support",
        desc: "(Direct priority WhatsApp & Phone assistance during business hours)",
        amountStr: "INCLUDED (Rs.0)",
        numericVal: 0,
        type: "included"
      },
      {
        title: "Annual Maintenance, Cloud Database Renewal & Continued Support — from Year 2",
        desc: "(Covers cloud database sync, framework updates, automated backups & security patches — See Section 3)",
        amountStr: "Rs.1,299 / year",
        numericVal: 0,
        type: "recurring"
      },
      {
        title: "Optional Google Play Store Developer Registration",
        desc: "(One-time Rs.2,070 paid directly to Google for public store listing; direct Android APK install is FREE)",
        amountStr: "Direct by Client",
        numericVal: 0,
        type: "direct"
      }
    ],
    totalBannerText: "TOTAL PROJECT VALUE: Rs.18,000 INR | SPECIAL OFFER: -Rs.3,000 | NET PAYABLE: Rs.15,000 INR"
  },
  customSections: [
    {
      id: "sec_stockflow_rationale",
      title: "3. RECOMMENDED ANNUAL MAINTENANCE CHARGE — RATIONALE",
      bullets: [
        {
          prefix: "Nominal Annual Fee from Year 2:",
          text: "Rs.1,299/year (approx. Rs.108/month) — Highly discounted maintenance package structured exclusively for Shiek Enterprises."
        },
        {
          prefix: "Firebase Hosting & Real-time Database:",
          text: "Covers Firestore reads/writes, real-time stock sync across multiple terminals, cloud data storage, and automated SSL certificate renewals."
        },
        {
          prefix: "Bug Fixes & Operating System Compatibility:",
          text: "Covers Android updates, Ionic/Angular framework security patches, thermal printer driver updates, and minor UI adjustments."
        },
        {
          prefix: "Unbeatable Value Comparison:",
          text: "Commercial POS/ERP platforms typically charge Rs.12,000–Rs.24,000/year in annual software licensing and cloud subscriptions. Flow's nominal Rs.1,299/year rate represents a long-term partnership commitment."
        },
        {
          prefix: "Payment Flexibility:",
          text: "Annual fee of Rs.1,299 will apply only from the 13th month onwards (first 12 months are 100% free)."
        }
      ]
    },
    {
      id: "sec_stockflow_policies",
      title: "4. FINANCIAL TERMS & IMPLEMENTATION POLICIES SUMMARY",
      bullets: [
        {
          prefix: "Total Project Value & Special Offer:",
          text: "Standard platform fee of Rs.18,000 INR discounted by Rs.3,000 INR as an inaugural partnership offer, establishing a net payable investment of Rs.15,000 INR."
        },
        {
          prefix: "Payment Milestones:",
          text: "50% mobilization advance (Rs.7,500) upon agreement sign-off; remaining 50% (Rs.7,500) payable upon final production deployment, printer verification & staff handover."
        },
        {
          prefix: "12 Months Free Cloud Hosting:",
          text: "Firebase cloud infrastructure, real-time database, and SSL certificate are 100% complimentary for the first 12 months from delivery date, compliments of Flow."
        },
        {
          prefix: "Post Year-1 Nominal Maintenance:",
          text: "Annual cloud maintenance renewal of Rs.1,299/year will apply starting from month 13 onwards."
        },
        {
          prefix: "1-Year Comprehensive Warranty:",
          text: "All software bugs, calculation discrepancies, and system issues reported within 12 months of handover will be rectified promptly with zero additional charges."
        },
        {
          prefix: "Scope Boundaries:",
          text: "Any future custom modules outside the agreed 12 modules (such as e-commerce customer web store or third-party accounting integrations) will be scoped and quoted separately."
        }
      ]
    },
    {
      id: "sec_stockflow_support",
      title: "5. MAINTENANCE, SUPPORT & OPERATIONAL HANDOVER",
      bullets: [
        {
          prefix: "Priority Technical Support:",
          text: "Direct phone and WhatsApp support via +91 8903424281 during business hours (Monday to Saturday, 9:00 AM – 7:00 PM IST)."
        },
        {
          prefix: "Staff Onboarding & Handover:",
          text: "Complete operational walkthrough covering POS billing shortcuts, barcode printing, batch purchase entry, khata ledger management, and day-end shift closing."
        },
        {
          prefix: "Data Ownership & Privacy:",
          text: "100% of product data, pricing, supplier records, customer lists, and financial transactions belong exclusively to Shiek Enterprises. Flow does not store or share customer data."
        },
        {
          prefix: "Hardware Compatibility Guarantee:",
          text: "Pre-tested compatibility with standard 58mm/80mm Bluetooth ESC/POS thermal printers, USB laser barcode scanners, and Android tablets/smartphones."
        }
      ]
    }
  ],
  signoff: {
    title: "SIGN-OFF & ACCEPTANCE",
    providerBox: {
      title: "For FLOW - SMART WEB & HYBRID APPS",
      subtitle: "(Service Provider)",
      repName: "Flow Representative",
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    },
    clientBox: {
      title: "For SHIEK ENTERPRISES",
      subtitle: "(Client Representative)",
      repName: "Proprietor / Authorized Signatory",
      phone: "+91 9XXXXXXXXX",
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    },
    legalNote: "Note: This document constitutes a legally binding service agreement upon signature by both parties. All amounts are in Indian Rupees (INR). Flow – Smart Web & Hybrid Apps reserves the right to pause or terminate services in case of non-payment beyond 30 days of the agreed due date."
  }
};

// Preset 4: Standard Software
const PRESET_SOFTWARE = JSON.parse(JSON.stringify(PRESET_MUTTON_SHOP));
PRESET_SOFTWARE.id = "quote_software";
PRESET_SOFTWARE.title = "Standard Mobile & Web App";
PRESET_SOFTWARE.docMeta.ref = "FLOW-APP-2026-010";
PRESET_SOFTWARE.client.name = "Apex Retailers Ltd.";
PRESET_SOFTWARE.client.contact = "Mr. Rajesh Kumar (Director)";
PRESET_SOFTWARE.client.phone = "+91 9840112233";
PRESET_SOFTWARE.signoff.clientBox.title = "For APEX RETAILERS LTD.";
PRESET_SOFTWARE.signoff.clientBox.repName = "Mr. Rajesh Kumar (Director)";
PRESET_SOFTWARE.signoff.clientBox.phone = "+91 9840112233";

// Preset 3: E-Commerce
const PRESET_ECOMMERCE = JSON.parse(JSON.stringify(PRESET_MUTTON_SHOP));
PRESET_ECOMMERCE.id = "quote_ecommerce";
PRESET_ECOMMERCE.title = "E-Commerce Online Store";
PRESET_ECOMMERCE.docMeta.ref = "FLOW-ECOM-2026-005";
PRESET_ECOMMERCE.client.name = "Royal Fashion Boutique";
PRESET_ECOMMERCE.client.contact = "Ms. Farzana Begum (Managing Partner)";
PRESET_ECOMMERCE.client.phone = "+91 9876543210";
PRESET_ECOMMERCE.signoff.clientBox.title = "For ROYAL FASHION BOUTIQUE";
PRESET_ECOMMERCE.signoff.clientBox.repName = "Ms. Farzana Begum";
PRESET_ECOMMERCE.signoff.clientBox.phone = "+91 9876543210";

// Preset 4: Blank
const PRESET_BLANK = {
  id: "quote_blank",
  title: "New Quotation",
  updatedAt: new Date().toISOString(),
  theme: {
    primaryColor: "#1558a0",
    headerTextColor: "#ffffff",
    manualPageBreaks: true
  },
  company: {
    name: "Flow - Smart Web & Hybrid Apps",
    phone: "+91 8903424281",
    email: "",
    address: "117 Siddiq Nagar, Melapalayam, Tirunelveli – 627 005",
    logoType: "builtin",
    customLogoData: ""
  },
  docMeta: {
    title: "PROJECT QUOTATION & SERVICE AGREEMENT",
    ref: "FLOW-" + new Date().getFullYear() + "-001",
    agreementDate: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    deliveryDate: "To be confirmed on sign-off"
  },
  client: {
    name: "Client Business Name",
    address: "City, State",
    contact: "Contact Person",
    phone: "+91 0000000000"
  },
  deliverablesSection: {
    title: "1. SCOPE OF WORK & DELIVERABLES",
    items: [
      {
        module: "Core Web Application",
        desc: "Complete frontend and backend implementation with secure authentication, modern UI, and responsive layout.",
        status: "INCLUDED"
      }
    ]
  },
  financialSection: {
    title: "2. FINANCIAL TERMS & COMMERCIAL BREAKDOWN",
    currency: "INR",
    items: [
      {
        title: "Full Stack Design, Development & Deployment",
        desc: "(Frontend, Backend, Database, Cloud Setup)",
        amountStr: "Rs.45,000",
        numericVal: 45000,
        type: "normal"
      }
    ],
    totalBannerText: "TOTAL PROJECT FEE PAYABLE TO FLOW: Rs.45,000 INR"
  },
  customSections: [
    {
      id: "sec_terms",
      title: "3. PAYMENT & PROJECT POLICIES",
      bullets: [
        {
          prefix: "Payment Milestones:",
          text: "50% advance upon project sign-off; 50% upon final delivery."
        },
        {
          prefix: "Warranty & Support:",
          text: "Complimentary bug fixes and technical assistance for 6 months."
        }
      ]
    }
  ],
  signoff: {
    title: "SIGN-OFF & ACCEPTANCE",
    providerBox: {
      title: "For FLOW - SMART WEB & HYBRID APPS",
      subtitle: "(Service Provider)",
      repName: "Flow Representative",
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    },
    clientBox: {
      title: "For CLIENT BUSINESS NAME",
      subtitle: "(Client Representative)",
      repName: "Authorized Signatory",
      phone: "+91 0000000000",
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    },
    legalNote: "Note: This document constitutes a legally binding service agreement upon signature by both parties. All amounts are in Indian Rupees (INR)."
  }
};

// Current Active State
let currentQuote = null;
let currentZoom = 1.0;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  // Try loading draft from localStorage
  const savedDraft = localStorage.getItem('flow_quote_current_draft');
  if (savedDraft) {
    try {
      currentQuote = JSON.parse(savedDraft);
    } catch (e) {
      currentQuote = JSON.parse(JSON.stringify(PRESET_STOCKFLOW));
    }
  } else {
    currentQuote = JSON.parse(JSON.stringify(PRESET_STOCKFLOW));
  }

  // Populate editor and preview
  populateEditorFromState();
  updateTheme();
  renderPreview();
});

// Update Theme / Colors
function updateTheme() {
  if (!currentQuote) return;
  const primary = document.getElementById('cfg_primaryColor').value || '#1558a0';
  const headerText = document.getElementById('cfg_headerTextColor').value || '#ffffff';

  currentQuote.theme = currentQuote.theme || {};
  currentQuote.theme.primaryColor = primary;
  currentQuote.theme.headerTextColor = headerText;

  document.documentElement.style.setProperty('--primary', primary);
  document.documentElement.style.setProperty('--header-text', headerText);

  // Auto dark tone for primary-dark
  document.documentElement.style.setProperty('--primary-dark', shadeColor(primary, -25));
  document.documentElement.style.setProperty('--primary-light', hexToRgba(primary, 0.12));

  renderPreview();
  saveDraftToStorage();
}

function setColor(hex) {
  document.getElementById('cfg_primaryColor').value = hex;
  updateTheme();
}

// Populate UI Form from State
function populateEditorFromState() {
  if (!currentQuote) return;

  // Header & Company
  document.getElementById('cfg_companyName').value = currentQuote.company.name || '';
  document.getElementById('cfg_companyPhone').value = currentQuote.company.phone || '';
  document.getElementById('cfg_companyEmail').value = currentQuote.company.email || '';
  document.getElementById('cfg_companyAddress').value = currentQuote.company.address || '';
  document.getElementById('cfg_logoType').value = currentQuote.company.logoType || 'builtin';
  onLogoTypeChange();

  // Document & Client
  document.getElementById('cfg_docTitle').value = currentQuote.docMeta.title || '';
  document.getElementById('cfg_docRef').value = currentQuote.docMeta.ref || '';
  document.getElementById('cfg_agreementDate').value = currentQuote.docMeta.agreementDate || '';
  document.getElementById('cfg_deliveryDate').value = currentQuote.docMeta.deliveryDate || '';

  document.getElementById('cfg_clientName').value = currentQuote.client.name || '';
  document.getElementById('cfg_clientAddress').value = currentQuote.client.address || '';
  document.getElementById('cfg_clientContact').value = currentQuote.client.contact || '';
  document.getElementById('cfg_clientPhone').value = currentQuote.client.phone || '';

  // Section 1: Deliverables
  document.getElementById('cfg_s1Title').value = currentQuote.deliverablesSection.title || '1. SCOPE OF WORK & DELIVERABLES';
  renderDeliverablesListInEditor();

  // Section 2: Financial
  document.getElementById('cfg_s2Title').value = currentQuote.financialSection.title || '2. FINANCIAL TERMS & COMMERCIAL BREAKDOWN';
  document.getElementById('cfg_currency').value = currentQuote.financialSection.currency || 'INR';
  document.getElementById('cfg_totalBannerText').value = currentQuote.financialSection.totalBannerText || '';
  renderFinancialListInEditor();

  // Dynamic Sections
  renderCustomSectionsInEditor();

  // Sign-off
  document.getElementById('cfg_signoffTitle').value = currentQuote.signoff.title || 'SIGN-OFF & ACCEPTANCE';
  document.getElementById('cfg_signProviderTitle').value = currentQuote.signoff.providerBox.title || '';
  document.getElementById('cfg_signProviderSubtitle').value = currentQuote.signoff.providerBox.subtitle || '';
  document.getElementById('cfg_signProviderName').value = currentQuote.signoff.providerBox.repName || '';
  document.getElementById('cfg_signProviderDate').value = currentQuote.signoff.providerBox.date || '';

  document.getElementById('cfg_signClientTitle').value = currentQuote.signoff.clientBox.title || '';
  document.getElementById('cfg_signClientSubtitle').value = currentQuote.signoff.clientBox.subtitle || '';
  document.getElementById('cfg_signClientName').value = currentQuote.signoff.clientBox.repName || '';
  document.getElementById('cfg_signClientPhone').value = currentQuote.signoff.clientBox.phone || '';
  document.getElementById('cfg_signClientDate').value = currentQuote.signoff.clientBox.date || '';

  document.getElementById('cfg_legalNote').value = currentQuote.signoff.legalNote || '';

  // Theme settings
  if (currentQuote.theme) {
    if (currentQuote.theme.primaryColor) document.getElementById('cfg_primaryColor').value = currentQuote.theme.primaryColor;
    if (currentQuote.theme.headerTextColor) document.getElementById('cfg_headerTextColor').value = currentQuote.theme.headerTextColor;
    if (currentQuote.theme.manualPageBreaks !== undefined) {
      document.getElementById('cfg_manualPageBreaks').checked = currentQuote.theme.manualPageBreaks;
    }
    if (document.getElementById('cfg_page1ItemsCount')) {
      document.getElementById('cfg_page1ItemsCount').value = currentQuote.theme.page1ItemsCount || 7;
    }
    if (document.getElementById('cfg_docLayoutMode')) {
      document.getElementById('cfg_docLayoutMode').value = currentQuote.theme.docLayoutMode || 'pages';
    }
  }
}

// Read from Form and Update State & Preview
function updateQuotation() {
  if (!currentQuote) return;

  // Header & Company
  currentQuote.company.name = document.getElementById('cfg_companyName').value;
  currentQuote.company.phone = document.getElementById('cfg_companyPhone').value;
  currentQuote.company.email = document.getElementById('cfg_companyEmail').value;
  currentQuote.company.address = document.getElementById('cfg_companyAddress').value;
  currentQuote.company.logoType = document.getElementById('cfg_logoType').value;

  // Document & Client
  currentQuote.docMeta.title = document.getElementById('cfg_docTitle').value;
  currentQuote.docMeta.ref = document.getElementById('cfg_docRef').value;
  currentQuote.docMeta.agreementDate = document.getElementById('cfg_agreementDate').value;
  currentQuote.docMeta.deliveryDate = document.getElementById('cfg_deliveryDate').value;

  currentQuote.client.name = document.getElementById('cfg_clientName').value;
  currentQuote.client.address = document.getElementById('cfg_clientAddress').value;
  currentQuote.client.contact = document.getElementById('cfg_clientContact').value;
  currentQuote.client.phone = document.getElementById('cfg_clientPhone').value;

  // Section 1
  currentQuote.deliverablesSection.title = document.getElementById('cfg_s1Title').value;

  // Section 2
  currentQuote.financialSection.title = document.getElementById('cfg_s2Title').value;
  currentQuote.financialSection.currency = document.getElementById('cfg_currency').value;
  currentQuote.financialSection.totalBannerText = document.getElementById('cfg_totalBannerText').value;

  // Signoff
  currentQuote.signoff.title = document.getElementById('cfg_signoffTitle').value;
  currentQuote.signoff.providerBox.title = document.getElementById('cfg_signProviderTitle').value;
  currentQuote.signoff.providerBox.subtitle = document.getElementById('cfg_signProviderSubtitle').value;
  currentQuote.signoff.providerBox.repName = document.getElementById('cfg_signProviderName').value;
  currentQuote.signoff.providerBox.date = document.getElementById('cfg_signProviderDate').value;

  currentQuote.signoff.clientBox.title = document.getElementById('cfg_signClientTitle').value;
  currentQuote.signoff.clientBox.subtitle = document.getElementById('cfg_signClientSubtitle').value;
  currentQuote.signoff.clientBox.repName = document.getElementById('cfg_signClientName').value;
  currentQuote.signoff.clientBox.phone = document.getElementById('cfg_signClientPhone').value;
  currentQuote.signoff.clientBox.date = document.getElementById('cfg_signClientDate').value;

  currentQuote.signoff.legalNote = document.getElementById('cfg_legalNote').value;

  // Theme
  currentQuote.theme.manualPageBreaks = document.getElementById('cfg_manualPageBreaks').checked;
  if (document.getElementById('cfg_page1ItemsCount')) {
    currentQuote.theme.page1ItemsCount = parseInt(document.getElementById('cfg_page1ItemsCount').value, 10) || 7;
  }
  if (document.getElementById('cfg_docLayoutMode')) {
    currentQuote.theme.docLayoutMode = document.getElementById('cfg_docLayoutMode').value;
  }

  renderPreview();
  saveDraftToStorage();
}

/* ==========================================================================
   Deliverables Module Editor Logic
   ========================================================================== */
function renderDeliverablesListInEditor() {
  const container = document.getElementById('deliverablesList');
  const items = currentQuote.deliverablesSection.items;
  document.getElementById('deliverablesCountBadge').innerText = items.length;

  container.innerHTML = '';
  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-card-header">
        <span class="item-number">#${index + 1}</span>
        <div class="item-actions">
          <button type="button" class="btn-icon" onclick="moveDeliverable(${index}, -1)" title="Move Up" ${index === 0 ? 'disabled style="opacity:0.3"' : ''}>↑</button>
          <button type="button" class="btn-icon" onclick="moveDeliverable(${index}, 1)" title="Move Down" ${index === items.length - 1 ? 'disabled style="opacity:0.3"' : ''}>↓</button>
          <button type="button" class="btn-icon danger" onclick="removeDeliverable(${index})" title="Delete Module">✕</button>
        </div>
      </div>
      <div class="form-group">
        <label>Module Title</label>
        <input type="text" value="${escapeHtml(item.module)}" oninput="onDeliverableChange(${index}, 'module', this.value)">
      </div>
      <div class="form-group">
        <label>Description & Scope</label>
        <textarea rows="2" oninput="onDeliverableChange(${index}, 'desc', this.value)">${escapeHtml(item.desc)}</textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Status / Inclusion</label>
          <select onchange="onDeliverableChange(${index}, 'status', this.value)">
            <option value="INCLUDED" ${item.status === 'INCLUDED' ? 'selected' : ''}>INCLUDED</option>
            <option value="SEE NOTE" ${item.status === 'SEE NOTE' ? 'selected' : ''}>SEE NOTE</option>
            <option value="OPTIONAL" ${item.status === 'OPTIONAL' ? 'selected' : ''}>OPTIONAL</option>
            <option value="PHASE 2" ${item.status === 'PHASE 2' ? 'selected' : ''}>PHASE 2</option>
            <option value="CUSTOM" ${!['INCLUDED', 'SEE NOTE', 'OPTIONAL', 'PHASE 2'].includes(item.status) ? 'selected' : ''}>Custom Status...</option>
          </select>
        </div>
        ${!['INCLUDED', 'SEE NOTE', 'OPTIONAL', 'PHASE 2'].includes(item.status) ? `
          <div class="form-group">
            <label>Custom Status Text</label>
            <input type="text" value="${escapeHtml(item.status)}" oninput="onDeliverableChange(${index}, 'status', this.value)">
          </div>
        ` : ''}
      </div>
    `;
    container.appendChild(card);
  });
}

function onDeliverableChange(index, field, value) {
  if (field === 'status' && value === 'CUSTOM') {
    value = 'PENDING';
  }
  currentQuote.deliverablesSection.items[index][field] = value;
  renderPreview();
  saveDraftToStorage();
  if (field === 'status') {
    renderDeliverablesListInEditor();
  }
}

function addDeliverableItem() {
  currentQuote.deliverablesSection.items.push({
    module: "New Module / Feature",
    desc: "Detailed technical specifications and user workflows for this component.",
    status: "INCLUDED"
  });
  renderDeliverablesListInEditor();
  renderPreview();
  saveDraftToStorage();
}

function removeDeliverable(index) {
  currentQuote.deliverablesSection.items.splice(index, 1);
  renderDeliverablesListInEditor();
  renderPreview();
  saveDraftToStorage();
}

function moveDeliverable(index, direction) {
  const items = currentQuote.deliverablesSection.items;
  const target = index + direction;
  if (target < 0 || target >= items.length) return;
  const temp = items[index];
  items[index] = items[target];
  items[target] = temp;
  renderDeliverablesListInEditor();
  renderPreview();
  saveDraftToStorage();
}

/* ==========================================================================
   Financial Items Editor Logic
   ========================================================================== */
function renderFinancialListInEditor() {
  const container = document.getElementById('financialList');
  const items = currentQuote.financialSection.items;
  document.getElementById('financialCountBadge').innerText = items.length;

  container.innerHTML = '';
  items.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <div class="item-card-header">
        <span class="item-number">#${index + 1}</span>
        <div class="item-actions">
          <button type="button" class="btn-icon" onclick="moveFinancial(${index}, -1)" title="Move Up" ${index === 0 ? 'disabled style="opacity:0.3"' : ''}>↑</button>
          <button type="button" class="btn-icon" onclick="moveFinancial(${index}, 1)" title="Move Down" ${index === items.length - 1 ? 'disabled style="opacity:0.3"' : ''}>↓</button>
          <button type="button" class="btn-icon danger" onclick="removeFinancial(${index})" title="Delete Item">✕</button>
        </div>
      </div>
      <div class="form-group">
        <label>Service Description</label>
        <input type="text" value="${escapeHtml(item.title)}" oninput="onFinancialChange(${index}, 'title', this.value)">
      </div>
      <div class="form-group">
        <label>Detailed Subtext (Optional in parentheses)</label>
        <textarea rows="2" oninput="onFinancialChange(${index}, 'desc', this.value)">${escapeHtml(item.desc || '')}</textarea>
      </div>
      <div class="form-row">
        <div class="form-group flex-2">
          <label>Display Amount / Status</label>
          <input type="text" value="${escapeHtml(item.amountStr)}" oninput="onFinancialChange(${index}, 'amountStr', this.value)" placeholder="e.g. Rs.60,000 or FREE (Rs.0)">
        </div>
        <div class="form-group">
          <label>Type / Color Style</label>
          <select onchange="onFinancialChange(${index}, 'type', this.value)">
            <option value="normal" ${item.type === 'normal' ? 'selected' : ''}>Standard (Black)</option>
            <option value="offer" ${item.type === 'offer' ? 'selected' : ''}>Special Offer / Concession (Red)</option>
            <option value="paid" ${item.type === 'paid' ? 'selected' : ''}>Paid / Credited (Green)</option>
            <option value="highlight" ${item.type === 'highlight' ? 'selected' : ''}>Buyout / Highlight (Bold Blue)</option>
            <option value="free" ${item.type === 'free' ? 'selected' : ''}>Free / Included (Green)</option>
            <option value="direct" ${item.type === 'direct' ? 'selected' : ''}>Direct by Client (Red)</option>
            <option value="recurring" ${item.type === 'recurring' ? 'selected' : ''}>Recurring / Annual</option>
          </select>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function onFinancialChange(index, field, value) {
  currentQuote.financialSection.items[index][field] = value;
  renderPreview();
  saveDraftToStorage();
}

function addFinancialItem() {
  currentQuote.financialSection.items.push({
    title: "Additional Milestone / Service",
    desc: "(Specifications and timeline for this phase)",
    amountStr: "Rs.15,000",
    numericVal: 15000,
    type: "normal"
  });
  renderFinancialListInEditor();
  renderPreview();
  saveDraftToStorage();
}

function removeFinancial(index) {
  currentQuote.financialSection.items.splice(index, 1);
  renderFinancialListInEditor();
  renderPreview();
  saveDraftToStorage();
}

function moveFinancial(index, direction) {
  const items = currentQuote.financialSection.items;
  const target = index + direction;
  if (target < 0 || target >= items.length) return;
  const temp = items[index];
  items[index] = items[target];
  items[target] = temp;
  renderFinancialListInEditor();
  renderPreview();
  saveDraftToStorage();
}

function autoCalculateTotalBanner() {
  let gross = 0;
  let offer = 0;
  let hasOffer = false;
  currentQuote.financialSection.items.forEach(item => {
    if (item.type === 'normal') {
      const match = (item.amountStr || '').replace(/,/g, '').match(/\d+(\.\d+)?/);
      if (match) {
        gross += parseFloat(match[0]);
      }
    } else if (item.type === 'offer' || item.type === 'discount') {
      const match = (item.amountStr || '').replace(/,/g, '').match(/\d+(\.\d+)?/);
      if (match) {
        offer += parseFloat(match[0]);
        hasOffer = true;
      }
    }
  });
  const curr = currentQuote.financialSection.currency || 'INR';
  const prefix = curr === 'INR' ? 'Rs.' : curr + ' ';
  const suffix = curr === 'INR' ? ' INR' : '';
  
  let banner = '';
  if (hasOffer && offer > 0) {
    const net = Math.max(0, gross - offer);
    banner = `TOTAL PROJECT VALUE: ${prefix}${gross.toLocaleString('en-IN')}${suffix} | SPECIAL OFFER: -${prefix}${offer.toLocaleString('en-IN')} | NET PAYABLE: ${prefix}${net.toLocaleString('en-IN')}${suffix}`;
  } else {
    const formatted = gross.toLocaleString('en-IN');
    banner = `TOTAL PROJECT FEE PAYABLE TO FLOW: ${prefix}${formatted}${suffix}`;
  }

  document.getElementById('cfg_totalBannerText').value = banner;
  currentQuote.financialSection.totalBannerText = banner;
  renderPreview();
  saveDraftToStorage();
}

/* ==========================================================================
   Dynamic Custom Sections (Rationale, Terms, Maintenance) Editor Logic
   ========================================================================== */
function renderCustomSectionsInEditor() {
  const container = document.getElementById('customSectionsList');
  const sections = currentQuote.customSections || [];
  document.getElementById('customSectionsBadge').innerText = sections.length;

  container.innerHTML = '';
  sections.forEach((sec, sIdx) => {
    const card = document.createElement('div');
    card.className = 'custom-section-card';
    card.innerHTML = `
      <div class="item-card-header">
        <span class="item-number">Section ${sIdx + 3}</span>
        <div class="item-actions">
          <button type="button" class="btn-icon" onclick="moveCustomSection(${sIdx}, -1)" title="Move Up" ${sIdx === 0 ? 'disabled style="opacity:0.3"' : ''}>↑</button>
          <button type="button" class="btn-icon" onclick="moveCustomSection(${sIdx}, 1)" title="Move Down" ${sIdx === sections.length - 1 ? 'disabled style="opacity:0.3"' : ''}>↓</button>
          <button type="button" class="btn-icon danger" onclick="removeCustomSection(${sIdx})" title="Delete Section">✕</button>
        </div>
      </div>
      <div class="form-group">
        <label>Section Title</label>
        <input type="text" value="${escapeHtml(sec.title)}" oninput="onCustomSectionTitleChange(${sIdx}, this.value)">
      </div>
      <div class="form-group">
        <label>Policy & Bullet Items</label>
        <div id="secBullets_${sIdx}" class="items-list">
          ${(sec.bullets || []).map((b, bIdx) => `
            <div class="bullet-item-row">
              <div style="flex:1; display:flex; flex-direction:column; gap:4px;">
                <input type="text" placeholder="Bold Title Prefix (e.g. Payment Schedule:)" value="${escapeHtml(b.prefix || '')}" oninput="onBulletChange(${sIdx}, ${bIdx}, 'prefix', this.value)" style="font-weight:600; font-size:0.78rem;">
                <textarea rows="2" placeholder="Policy details or text..." oninput="onBulletChange(${sIdx}, ${bIdx}, 'text', this.value)">${escapeHtml(b.text)}</textarea>
              </div>
              <button type="button" class="btn-icon danger" onclick="removeBullet(${sIdx}, ${bIdx})" title="Remove bullet">✕</button>
            </div>
          `).join('')}
        </div>
        <button type="button" class="btn btn-outline" style="margin-top:6px; font-size:0.75rem;" onclick="addBullet(${sIdx})">
          + Add Policy Bullet
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function onCustomSectionTitleChange(sIdx, title) {
  currentQuote.customSections[sIdx].title = title;
  renderPreview();
  saveDraftToStorage();
}

function onBulletChange(sIdx, bIdx, field, val) {
  currentQuote.customSections[sIdx].bullets[bIdx][field] = val;
  renderPreview();
  saveDraftToStorage();
}

function addBullet(sIdx) {
  currentQuote.customSections[sIdx].bullets.push({
    prefix: "Terms Clause:",
    text: "Details and stipulations regarding this clause."
  });
  renderCustomSectionsInEditor();
  renderPreview();
  saveDraftToStorage();
}

function removeBullet(sIdx, bIdx) {
  currentQuote.customSections[sIdx].bullets.splice(bIdx, 1);
  renderCustomSectionsInEditor();
  renderPreview();
  saveDraftToStorage();
}

function addCustomSection() {
  const nextNum = (currentQuote.customSections || []).length + 3;
  currentQuote.customSections.push({
    id: "sec_" + Date.now(),
    title: `${nextNum}. ADDITIONAL PROJECT CLAUSES`,
    bullets: [
      {
        prefix: "Clause 1:",
        text: "Full terms and specifications described clearly."
      }
    ]
  });
  renderCustomSectionsInEditor();
  renderPreview();
  saveDraftToStorage();
}

function removeCustomSection(sIdx) {
  currentQuote.customSections.splice(sIdx, 1);
  renderCustomSectionsInEditor();
  renderPreview();
  saveDraftToStorage();
}

function moveCustomSection(sIdx, direction) {
  const secs = currentQuote.customSections;
  const target = sIdx + direction;
  if (target < 0 || target >= secs.length) return;
  const temp = secs[sIdx];
  secs[sIdx] = secs[target];
  secs[target] = temp;
  renderCustomSectionsInEditor();
  renderPreview();
  saveDraftToStorage();
}

/* ==========================================================================
   Logo Handling & Ref Generation
   ========================================================================== */
function onLogoTypeChange() {
  const type = document.getElementById('cfg_logoType').value;
  const group = document.getElementById('customLogoGroup');
  if (type === 'custom') {
    group.style.display = 'flex';
  } else {
    group.style.display = 'none';
  }
  if (currentQuote) {
    currentQuote.company.logoType = type;
    renderPreview();
    saveDraftToStorage();
  }
}

function onCustomLogoUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    currentQuote.company.customLogoData = e.target.result;
    currentQuote.company.logoType = 'custom';
    document.getElementById('cfg_logoType').value = 'custom';
    renderPreview();
    saveDraftToStorage();
  };
  reader.readAsDataURL(file);
}

function generateDocRef() {
  const client = (currentQuote.client.name || 'FLOW').substring(0, 4).toUpperCase().replace(/[^A-Z]/g, 'X');
  const year = new Date().getFullYear();
  const num = String(Math.floor(Math.random() * 900) + 100);
  const ref = `FLOW-${client}-${year}-${num}`;
  document.getElementById('cfg_docRef').value = ref;
  currentQuote.docMeta.ref = ref;
  renderPreview();
  saveDraftToStorage();
}

/* ==========================================================================
   Document Live Preview Renderer (Matches example-quotations.pdf Exactly)
   ========================================================================== */
function renderPreview() {
  if (!currentQuote) return;
  const container = document.getElementById('quotationDoc');
  const q = currentQuote;
  const isMultiPage = (!q.theme || q.theme.docLayoutMode !== 'continuous');
  const page1Limit = (q.theme && q.theme.page1ItemsCount) ? parseInt(q.theme.page1ItemsCount, 10) : 7;

  // Determine Logo HTML
  let logoHtml = '';
  if (q.company.logoType === 'builtin') {
    logoHtml = FLOW_LOGO_SVG;
  } else if (q.company.logoType === 'custom' && q.company.customLogoData) {
    logoHtml = `<img src="${q.company.customLogoData}" class="doc-logo-img" alt="Logo">`;
  }

  const allItems = q.deliverablesSection.items || [];

  // Deliverable Table Row Helper
  function renderDeliverableRows(items, offsetIndex = 0) {
    return items.map((item, idx) => {
      let statusClass = 'status-included';
      if (item.status === 'SEE NOTE') statusClass = 'status-note';
      else if (item.status === 'OPTIONAL' || item.status === 'PHASE 2') statusClass = 'status-direct';
      return `
        <tr>
          <td class="col-num">${offsetIndex + idx + 1}</td>
          <td class="col-module">${formatMultiline(escapeHtml(item.module))}</td>
          <td class="col-desc">${formatMultiline(escapeHtml(item.desc))}</td>
          <td class="col-status ${statusClass}">${escapeHtml(item.status)}</td>
        </tr>
      `;
    }).join('');
  }

  // Financial Rows Helper
  const financialRows = (q.financialSection.items || []).map((item, idx) => {
    let typeClass = '';
    if (item.type === 'free' || item.type === 'included') typeClass = 'status-free';
    else if (item.type === 'paid') typeClass = 'status-paid';
    else if (item.type === 'highlight') typeClass = 'status-highlight';
    else if (item.type === 'direct') typeClass = 'status-direct';
    else if (item.type === 'offer' || item.type === 'discount') typeClass = 'status-offer';

    return `
      <tr>
        <td class="col-num">${idx + 1}</td>
        <td class="col-scope">
          <div>${escapeHtml(item.title)}</div>
          ${item.desc ? `<div class="col-scope-desc">${formatMultiline(escapeHtml(item.desc))}</div>` : ''}
        </td>
        <td class="col-amount ${typeClass}">${escapeHtml(item.amountStr)}</td>
      </tr>
    `;
  }).join('');

  const totalRowHtml = q.financialSection.totalBannerText ? `
    <tr class="table-total-row">
      <td colspan="3">${escapeHtml(q.financialSection.totalBannerText)}</td>
    </tr>
  ` : '';

  // Custom Sections Helper
  const customSectionsHtml = (q.customSections || []).map(sec => `
    <section class="doc-section">
      <h3 class="doc-section-heading">${escapeHtml(sec.title)}</h3>
      <ul class="doc-bullet-list">
        ${(sec.bullets || []).map(b => `
          <li>
            ${b.prefix ? `<span class="doc-bullet-prefix">${escapeHtml(b.prefix)}</span> ` : ''}
            ${escapeHtml(b.text)}
          </li>
        `).join('')}
      </ul>
    </section>
  `).join('');

  // Signoff Box Helper
  const signoffHtml = `
    <section class="doc-section" style="margin-top:10px;">
      <h3 class="doc-section-heading">${escapeHtml(q.signoff.title)}</h3>
      <div class="doc-signoff-box">
        <div class="doc-signoff-col">
          <div class="doc-signoff-company">${escapeHtml(q.signoff.providerBox.title)}</div>
          <div class="doc-signoff-subtitle">${escapeHtml(q.signoff.providerBox.subtitle)}</div>
          <div class="doc-signoff-line">Authorized Signatory: ___________________________</div>
          <div class="doc-signoff-field">Name: ${escapeHtml(q.signoff.providerBox.repName)}</div>
          <div class="doc-signoff-field">Date: ${escapeHtml(q.signoff.providerBox.date)}</div>
        </div>
        <div class="doc-signoff-col">
          <div class="doc-signoff-company">${escapeHtml(q.signoff.clientBox.title)}</div>
          <div class="doc-signoff-subtitle">${escapeHtml(q.signoff.clientBox.subtitle)}</div>
          <div class="doc-signoff-line">Authorized Signatory: ___________________________</div>
          <div class="doc-signoff-field">Name: ${escapeHtml(q.signoff.clientBox.repName)}</div>
          <div class="doc-signoff-field">Phone: ${escapeHtml(q.signoff.clientBox.phone)}</div>
          <div class="doc-signoff-field">Date: ${escapeHtml(q.signoff.clientBox.date)}</div>
        </div>
      </div>
      ${q.signoff.legalNote ? `
        <div class="doc-legal-note">
          ${escapeHtml(q.signoff.legalNote)}
        </div>
      ` : ''}
    </section>
  `;

  if (isMultiPage) {
    container.classList.remove('continuous-mode');
    const p1Items = allItems.slice(0, page1Limit);
    const p2Items = allItems.slice(page1Limit);
    const totalPages = 4;
    const pageBadge = document.getElementById('pageCountInfo');
    if (pageBadge) pageBadge.innerText = `4 Distinct Pages (A4 Standard)`;

    container.innerHTML = `
      <!-- PAGE 1: Scope of Work Part 1 -->
      <article class="a4-page" id="docPage1">
        <div class="page-badge-header no-print">
          <span>Flow Document Studio</span>
          <span><strong>Page 1 of ${totalPages}</strong> • Executive Scope</span>
        </div>

        <header class="doc-header">
          <div class="doc-brand-info">
            <div class="doc-brand-title">${escapeHtml(q.company.name)}</div>
            <div class="doc-brand-contact">
              Phone: ${escapeHtml(q.company.phone)} ${q.company.email ? `| Email: ${escapeHtml(q.company.email)}` : ''} | Address: ${formatInline(escapeHtml(q.company.address))}
            </div>
          </div>
          <div class="doc-logo-container">
            ${logoHtml}
          </div>
        </header>

        <h2 class="doc-main-title">${escapeHtml(q.docMeta.title)}</h2>

        <div class="doc-meta-grid">
          <div class="doc-meta-box">
            <div class="doc-meta-label">DOCUMENT REF</div>
            <div class="doc-meta-val">${escapeHtml(q.docMeta.ref)}</div>
          </div>
          <div class="doc-meta-box">
            <div class="doc-meta-label">AGREEMENT DATE</div>
            <div class="doc-meta-val">${escapeHtml(q.docMeta.agreementDate)}</div>
          </div>
          <div class="doc-meta-box">
            <div class="doc-meta-label">DELIVERY DATE</div>
            <div class="doc-meta-val">${escapeHtml(q.docMeta.deliveryDate)}</div>
          </div>
        </div>

        <div class="doc-parties-box">
          <div class="doc-party-col">
            <div class="doc-party-role">SERVICE PROVIDER</div>
            <div class="doc-party-name">${escapeHtml(q.company.name)}</div>
            <div class="doc-party-line">Phone: ${escapeHtml(q.company.phone)}</div>
            <div class="doc-party-line">${formatMultiline(escapeHtml(q.company.address))}</div>
          </div>
          <div class="doc-party-col">
            <div class="doc-party-role">CLIENT</div>
            <div class="doc-party-name">${escapeHtml(q.client.name)}</div>
            <div class="doc-party-line">${escapeHtml(q.client.address)}</div>
            <div class="doc-party-line" style="margin-top:4px;">Contact: <strong>${escapeHtml(q.client.contact)}</strong></div>
            <div class="doc-party-phone">Phone: ${escapeHtml(q.client.phone)}</div>
          </div>
        </div>

        <section class="doc-section">
          <h3 class="doc-section-heading">${escapeHtml(q.deliverablesSection.title)}</h3>
          <table class="doc-table">
            <thead>
              <tr>
                <th class="col-num">#</th>
                <th class="col-module">Deliverable Module</th>
                <th class="col-desc">Description & Specifications</th>
                <th class="col-status">Status</th>
              </tr>
            </thead>
            <tbody>
              ${renderDeliverableRows(p1Items, 0)}
            </tbody>
          </table>
        </section>

        <footer class="page-badge-footer">
          <span>Ref: ${escapeHtml(q.docMeta.ref)}</span>
          <span>Confidential & Proprietary</span>
          <span>Page 1 of ${totalPages}</span>
        </footer>
      </article>

      <!-- PAGE 2: Scope Part 2 & Financial Breakdown -->
      <article class="a4-page" id="docPage2">
        <div class="page-badge-header no-print">
          <span>Flow Document Studio</span>
          <span><strong>Page 2 of ${totalPages}</strong> • Commercial Terms</span>
        </div>

        <div class="doc-continuation-header">
          <span>${escapeHtml(q.company.name)} — Project Quotation</span>
          <span>Ref: ${escapeHtml(q.docMeta.ref)}</span>
        </div>

        ${p2Items.length > 0 ? `
          <section class="doc-section">
            <h3 class="doc-section-heading">${escapeHtml(q.deliverablesSection.title)} (Continued)</h3>
            <table class="doc-table">
              <thead>
                <tr>
                  <th class="col-num">#</th>
                  <th class="col-module">Deliverable Module</th>
                  <th class="col-desc">Description & Specifications</th>
                  <th class="col-status">Status</th>
                </tr>
              </thead>
              <tbody>
                ${renderDeliverableRows(p2Items, p1Items.length)}
              </tbody>
            </table>
          </section>
        ` : ''}

        <section class="doc-section" style="margin-top:16px;">
          <h3 class="doc-section-heading">${escapeHtml(q.financialSection.title)}</h3>
          <table class="doc-table">
            <thead>
              <tr>
                <th class="col-num">#</th>
                <th>Service Description & Commercial Scope</th>
                <th class="col-amount">Amount (${escapeHtml(q.financialSection.currency)})</th>
              </tr>
            </thead>
            <tbody>
              ${financialRows}
              ${totalRowHtml}
            </tbody>
          </table>
        </section>

        <footer class="page-badge-footer">
          <span>Ref: ${escapeHtml(q.docMeta.ref)}</span>
          <span>Confidential & Proprietary</span>
          <span>Page 2 of ${totalPages}</span>
        </footer>
      </article>

      <!-- PAGE 3: Terms & Policies -->
      <article class="a4-page" id="docPage3">
        <div class="page-badge-header no-print">
          <span>Flow Document Studio</span>
          <span><strong>Page 3 of ${totalPages}</strong> • Policies & Rationale</span>
        </div>

        <div class="doc-continuation-header">
          <span>${escapeHtml(q.company.name)} — Policies & Terms</span>
          <span>Ref: ${escapeHtml(q.docMeta.ref)}</span>
        </div>

        ${customSectionsHtml}

        <footer class="page-badge-footer">
          <span>Ref: ${escapeHtml(q.docMeta.ref)}</span>
          <span>Confidential & Proprietary</span>
          <span>Page 3 of ${totalPages}</span>
        </footer>
      </article>

      <!-- PAGE 4: Sign-off & Acceptance -->
      <article class="a4-page" id="docPage4">
        <div class="page-badge-header no-print">
          <span>Flow Document Studio</span>
          <span><strong>Page 4 of ${totalPages}</strong> • Sign-Off & Acceptance</span>
        </div>

        <div class="doc-continuation-header">
          <span>${escapeHtml(q.company.name)} — Service Agreement</span>
          <span>Ref: ${escapeHtml(q.docMeta.ref)}</span>
        </div>

        ${signoffHtml}

        <footer class="page-badge-footer">
          <span>Ref: ${escapeHtml(q.docMeta.ref)}</span>
          <span>Legally Binding Agreement</span>
          <span>Page 4 of ${totalPages}</span>
        </footer>
      </article>
    `;
  } else {
    // Continuous Single Page View
    container.classList.add('continuous-mode');
    const pageBadge = document.getElementById('pageCountInfo');
    if (pageBadge) pageBadge.innerText = `Continuous Document View`;
    container.innerHTML = `
      <article class="a4-page">
        <header class="doc-header">
          <div class="doc-brand-info">
            <div class="doc-brand-title">${escapeHtml(q.company.name)}</div>
            <div class="doc-brand-contact">
              Phone: ${escapeHtml(q.company.phone)} ${q.company.email ? `| Email: ${escapeHtml(q.company.email)}` : ''} | Address: ${formatInline(escapeHtml(q.company.address))}
            </div>
          </div>
          <div class="doc-logo-container">
            ${logoHtml}
          </div>
        </header>

        <h2 class="doc-main-title">${escapeHtml(q.docMeta.title)}</h2>

        <div class="doc-meta-grid">
          <div class="doc-meta-box">
            <div class="doc-meta-label">DOCUMENT REF</div>
            <div class="doc-meta-val">${escapeHtml(q.docMeta.ref)}</div>
          </div>
          <div class="doc-meta-box">
            <div class="doc-meta-label">AGREEMENT DATE</div>
            <div class="doc-meta-val">${escapeHtml(q.docMeta.agreementDate)}</div>
          </div>
          <div class="doc-meta-box">
            <div class="doc-meta-label">DELIVERY DATE</div>
            <div class="doc-meta-val">${escapeHtml(q.docMeta.deliveryDate)}</div>
          </div>
        </div>

        <div class="doc-parties-box">
          <div class="doc-party-col">
            <div class="doc-party-role">SERVICE PROVIDER</div>
            <div class="doc-party-name">${escapeHtml(q.company.name)}</div>
            <div class="doc-party-line">Phone: ${escapeHtml(q.company.phone)}</div>
            <div class="doc-party-line">${formatMultiline(escapeHtml(q.company.address))}</div>
          </div>
          <div class="doc-party-col">
            <div class="doc-party-role">CLIENT</div>
            <div class="doc-party-name">${escapeHtml(q.client.name)}</div>
            <div class="doc-party-line">${escapeHtml(q.client.address)}</div>
            <div class="doc-party-line" style="margin-top:4px;">Contact: <strong>${escapeHtml(q.client.contact)}</strong></div>
            <div class="doc-party-phone">Phone: ${escapeHtml(q.client.phone)}</div>
          </div>
        </div>

        <section class="doc-section">
          <h3 class="doc-section-heading">${escapeHtml(q.deliverablesSection.title)}</h3>
          <table class="doc-table">
            <thead>
              <tr>
                <th class="col-num">#</th>
                <th class="col-module">Deliverable Module</th>
                <th class="col-desc">Description & Specifications</th>
                <th class="col-status">Status</th>
              </tr>
            </thead>
            <tbody>
              ${renderDeliverableRows(allItems, 0)}
            </tbody>
          </table>
        </section>

        <section class="doc-section" style="margin-top:24px;">
          <h3 class="doc-section-heading">${escapeHtml(q.financialSection.title)}</h3>
          <table class="doc-table">
            <thead>
              <tr>
                <th class="col-num">#</th>
                <th>Service Description & Commercial Scope</th>
                <th class="col-amount">Amount (${escapeHtml(q.financialSection.currency)})</th>
              </tr>
            </thead>
            <tbody>
              ${financialRows}
              ${totalRowHtml}
            </tbody>
          </table>
        </section>

        ${customSectionsHtml}
        ${signoffHtml}
      </article>
    `;
  }
}

/* ==========================================================================
   Presets & Storage Management
   ========================================================================== */
function loadPreset(presetKey) {
  if (confirm("Load this template? Any unsaved edits will be replaced.")) {
    if (presetKey === 'stockflow') currentQuote = JSON.parse(JSON.stringify(PRESET_STOCKFLOW));
    else if (presetKey === 'electrical') currentQuote = JSON.parse(JSON.stringify(PRESET_ELECTRICAL_VIBERS));
    else if (presetKey === 'deendesk') currentQuote = JSON.parse(JSON.stringify(PRESET_DEENDESK));
    else if (presetKey === 'mutton') currentQuote = JSON.parse(JSON.stringify(PRESET_MUTTON_SHOP));
    else if (presetKey === 'software') currentQuote = JSON.parse(JSON.stringify(PRESET_SOFTWARE));
    else if (presetKey === 'ecommerce') currentQuote = JSON.parse(JSON.stringify(PRESET_ECOMMERCE));
    else if (presetKey === 'blank') currentQuote = JSON.parse(JSON.stringify(PRESET_BLANK));

    populateEditorFromState();
    updateTheme();
    renderPreview();
    saveDraftToStorage();

    // Close dropdown
    const menu = document.getElementById('templateMenu');
    menu.classList.remove('show');
  }
}

// Dropdown toggle
document.getElementById('templateBtn').addEventListener('click', (e) => {
  e.stopPropagation();
  const menu = document.getElementById('templateMenu');
  menu.classList.toggle('show');
});

document.addEventListener('click', () => {
  const menu = document.getElementById('templateMenu');
  if (menu) menu.classList.remove('show');
});

function saveDraftToStorage() {
  if (!currentQuote) return;
  currentQuote.updatedAt = new Date().toISOString();
  localStorage.setItem('flow_quote_current_draft', JSON.stringify(currentQuote));
}

// Saved Quotes Library
function getLibrary() {
  const raw = localStorage.getItem('flow_quote_library');
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveToLibrary() {
  const lib = getLibrary();
  const quoteName = prompt("Enter a name for this saved quotation:", currentQuote.title || (currentQuote.client.name + " Quotation"));
  if (!quoteName) return;

  const copy = JSON.parse(JSON.stringify(currentQuote));
  copy.id = "quote_" + Date.now();
  copy.title = quoteName;
  copy.updatedAt = new Date().toISOString();

  lib.unshift(copy);
  localStorage.setItem('flow_quote_library', JSON.stringify(lib));
  alert(`Saved "${quoteName}" to your Quotations Library!`);
}

function openLibraryModal() {
  renderLibraryModal();
  document.getElementById('libraryModal').style.display = 'flex';
}

function closeLibraryModal() {
  document.getElementById('libraryModal').style.display = 'none';
}

function renderLibraryModal() {
  const list = document.getElementById('savedQuotesList');
  const lib = getLibrary();

  if (lib.length === 0) {
    list.innerHTML = `<div style="text-align:center; padding:20px; color:#64748b; font-size:0.85rem;">No saved quotes in library yet. Click "Save" in the top bar to save your current quote.</div>`;
    return;
  }

  list.innerHTML = lib.map((item, idx) => `
    <div class="saved-quote-item">
      <div>
        <div class="saved-quote-title">${escapeHtml(item.title)}</div>
        <div class="saved-quote-meta">Ref: ${escapeHtml(item.docMeta?.ref || 'N/A')} • ${new Date(item.updatedAt).toLocaleDateString()}</div>
      </div>
      <div style="display:flex; gap:6px;">
        <button class="btn btn-secondary btn-mini" onclick="loadFromLibrary(${idx})">Open</button>
        <button class="btn btn-secondary btn-mini" onclick="deleteFromLibrary(${idx})" style="color:#ef4444;">Delete</button>
      </div>
    </div>
  `).join('');
}

function loadFromLibrary(index) {
  const lib = getLibrary();
  if (!lib[index]) return;
  if (confirm(`Open "${lib[index].title}"? Your current changes will be replaced.`)) {
    currentQuote = JSON.parse(JSON.stringify(lib[index]));
    populateEditorFromState();
    updateTheme();
    renderPreview();
    saveDraftToStorage();
    closeLibraryModal();
  }
}

function deleteFromLibrary(index) {
  const lib = getLibrary();
  if (confirm(`Delete "${lib[index].title}" from library?`)) {
    lib.splice(index, 1);
    localStorage.setItem('flow_quote_library', JSON.stringify(lib));
    renderLibraryModal();
  }
}

function createNewQuoteFromCurrent() {
  saveToLibrary();
  renderLibraryModal();
}

// JSON Backup / Restore
function exportJSON() {
  if (!currentQuote) return;
  const jsonStr = JSON.stringify(currentQuote, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const filename = (currentQuote.docMeta?.ref || 'quotation') + '.json';
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data && data.company && data.docMeta && data.deliverablesSection) {
        currentQuote = data;
        populateEditorFromState();
        updateTheme();
        renderPreview();
        saveDraftToStorage();
        alert('Quotation imported successfully!');
      } else {
        alert('Invalid quotation JSON format.');
      }
    } catch (err) {
      alert('Error parsing JSON file: ' + err.message);
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

// View Mode Toggles
function setViewMode(mode) {
  const layout = document.getElementById('appLayout');
  document.getElementById('splitViewBtn').classList.remove('active');
  document.getElementById('previewOnlyBtn').classList.remove('active');
  document.getElementById('editorOnlyBtn').classList.remove('active');

  layout.classList.remove('preview-mode', 'editor-mode');

  if (mode === 'preview') {
    layout.classList.add('preview-mode');
    document.getElementById('previewOnlyBtn').classList.add('active');
  } else if (mode === 'editor') {
    layout.classList.add('editor-mode');
    document.getElementById('editorOnlyBtn').classList.add('active');
  } else {
    document.getElementById('splitViewBtn').classList.add('active');
  }
}

// Zoom Controls
function zoomDoc(delta) {
  currentZoom = Math.max(0.4, Math.min(1.8, currentZoom + delta));
  applyZoom();
}

function resetZoom() {
  currentZoom = 1.0;
  applyZoom();
}

function applyZoom() {
  const doc = document.getElementById('quotationDoc');
  if (doc) {
    doc.style.transform = `scale(${currentZoom})`;
  }
  document.getElementById('zoomLevelText').innerText = Math.round(currentZoom * 100) + '%';
}

// Helpers
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatMultiline(str) {
  if (!str) return '';
  return str.replace(/\n/g, '<br>');
}

function formatInline(str) {
  if (!str) return '';
  return str.replace(/\n/g, ', ');
}

function shadeColor(color, percent) {
  let num = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = (num >> 8 & 0x00FF) + amt,
    G = (num & 0x0000FF) + amt;
  return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
}

function hexToRgba(hex, alpha) {
  let c = hex.substring(1).split('');
  if (c.length === 3) {
    c = [c[0], c[0], c[1], c[1], c[2], c[2]];
  }
  let num = parseInt(c.join(''), 16);
  return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${alpha})`;
}

