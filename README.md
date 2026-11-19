# Flow - Professional Quotation Maker Studio

An easy-to-use, fully customizable quotation generator web application designed to produce quotations matching **`example-quotations.pdf`** with 1:1 precision.

---

## 🚀 Quick Start

To launch the studio locally:

```bash
cd /Users/mohamedibrahim/Projects/quotation-maker
./start.sh
```

Or run directly with Python:
```bash
python3 server.py 4500
```
Then open: **[http://localhost:4500](http://localhost:4500)** in any web browser (Chrome, Safari, Edge, Firefox).

---

## 🎯 Features & Capabilities

### 1. 100% Customizable Content
- **Company Branding & Header:**
  - Company name, contact numbers, email, physical address.
  - Logo selector: Built-in Flow Gradient Loop SVG, custom logo upload (PNG/JPG/SVG), or text-only.
- **Document & Client Information:**
  - Document Title, Document Reference (with 1-click auto-generation `FLOW-XXXX-YYYY-NNN`).
  - Agreement date & Delivery / Sign-off date.
  - Client business name, location, contact person & designation, phone number.
- **Scope of Work & Deliverables (Section 1):**
  - Add, edit, remove, and reorder deliverable modules.
  - Rich descriptions & specifications.
  - Status badges (`INCLUDED`, `SEE NOTE`, `OPTIONAL`, `PHASE 2`, or custom status text).
- **Financial Terms & Commercial Breakdown (Section 2):**
  - Add, edit, remove, and reorder commercial line items.
  - Service descriptions and subtext notes.
  - Highlighted status strings (`FREE (Rs.0)`, `INCLUDED (Rs.0)`, `Direct by Client`, etc.).
  - Auto-calculate Total Project Fee banner with 1-click or write custom summary text.
  - Multi-currency support (INR `Rs.`, USD `$`, EUR `€`, GBP `£`, AED, SAR).
- **Dynamic Policies, Rationales & Terms (Sections 3, 4, 5, ...):**
  - Add unlimited policy/terms sections (e.g. *Recommended Annual Maintenance Charge — Rationale*, *Financial Terms & Hosting Policies Summary*, *Maintenance, Support & Future Requirements*).
  - Add, reorder, or remove bullet items with custom bold prefixes.
- **Sign-Off & Legal Agreement:**
  - Two-column acceptance box for Service Provider and Client Representative.
  - Editable signatory lines, names, designations, dates, and phone numbers.
  - Customizable legally binding disclaimer note at bottom.

### 2. Built-in Templates / Presets
- **StockFlow ERP (Shiek Enterprises)**: Complete POS, Multi-Batch Inventory Valuation (FIFO/LIFO/WAC), Bluetooth Thermal Printing & Billing system (Rs.18,000 total - Rs.3,000 offer = Rs.15,000 net).
- **Electrical Vibers (VoltMaster)**: Electrician booking and hardware e-commerce platform.
- **DeenDesk Madrasa ERP**: Full software buyout & multi-branch management agreement.
- **Ammar Appa Mutton Shop**: Complete exact replica of `example-quotations.pdf` (all 16 modules, financial breakdown, annual maintenance rationale, policies, and sign-off).
- **Standard Web & Mobile App**: Pre-configured scope for full-stack software development.
- **E-Commerce & Retail Store**: Tailored for online shop, payment gateways, and delivery tracking.
- **Blank Quotation**: Clean slate for custom proposals.

### 3. Save, Export & Backup
- **Auto-save**: Edits are automatically saved to your browser so you never lose your draft.
- **Quotations Library**: Save multiple named quotations (e.g., "Quote #001 - Mutton Shop", "Quote #002 - Vidhyashram") and switch between them at any time.
- **Export & Import JSON**: Export your complete quotation data as a JSON file to backup or share with team members.
- **1-Click PDF / Print**: Formatted with exact `@media print` rules for A4 multi-page output with crisp borders and colors.

