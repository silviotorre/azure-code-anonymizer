# Azure Code Anonymizer Documentation

## Table of Contents
- [Azure Code Anonymizer Documentation](#azure-code-anonymizer-documentation)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Technology Stack](#technology-stack)
  - [How It Works](#how-it-works)
  - [Anonymization Process](#anonymization-process)
  - [User Interface](#user-interface)
  - [Regex Patterns \& Configuration](#regex-patterns--configuration)
  - [Data Handling \& Privacy](#data-handling--privacy)
  - [Disclaimer \& Usage Guidelines](#disclaimer--usage-guidelines)
  - [Contribution \& License](#contribution--license)

---

## Overview

🔹 **Azure Code Anonymizer** is a **client-side web tool** designed to **identify and replace sensitive information** in source code before sharing or debugging.  
🔹 Supports **Azure-specific** and **generic** patterns (e.g., connection strings, secrets, tokens, IPs).  
🔹 **No server-side processing**: all operations run **in-browser**, ensuring privacy and compliance.  

---

## Technology Stack

- **Frontend-only**:
  - HTML, CSS, JavaScript
  - Uses Regex-based matching for detection
  - No backend, no database

- **Hosting Options**:
  - Azure Static Web Apps (recommended)
  - GitHub Pages (alternative)

- **Configuration**:
  - JSON-based pattern definitions (`config/anonymizer-rules.json`)
  - Customizable settings (`config/settings.json`)

---

## How It Works

1. **User pastes code** into a textarea.
2. The script scans for **predefined patterns** (stored in JSON).
3. Matches are **replaced with placeholders** (e.g., `ANON_AZ_CONN_#`).
4. **Optionally**, a **detailed report** of replacements is generated.
5. The anonymized code is displayed for **copy/download**.

🚀 **All processing happens in the browser**—no data leaves the client.

---

## Anonymization Process

| Step | Action | Example |
|------|--------|---------|
| **1** | Scan input for sensitive data | `AccountKey=XYZ123` |
| **2** | Match Regex pattern | `AccountKey=.*?;` |
| **3** | Replace with placeholder | `AccountKey=ANON_AZ_STORAGE_1;` |
| **4** | Log entry in report (optional) | `Line 5: Azure Storage Key → ANON_AZ_STORAGE_1` |

---

## User Interface

🖥 **Main Components**:
- **Input Box**: User pastes code here.
- **Anonymize Button**: Triggers processing.
- **Output Box**: Displays anonymized code.
- **Report Toggle**: Shows/hides replacement log.

📌 **Additional Features**:
- Syntax highlighting (future enhancement)
- Download anonymized code (planned feature)

---

## Regex Patterns & Configuration

📄 **Pattern Definitions** (stored in `config/anonymizer-rules.json`):

```json
{
  "patterns": [
    {
      "name": "Azure Storage Connection String",
      "regex": "AccountName=.*?;AccountKey=.*?(;|$)",
      "placeholder": "ANON_AZ_STORAGE_#"
    },
    {
      "name": "Azure DevOps PAT",
      "regex": "[a-zA-Z0-9]{52}",
      "placeholder": "ANON_AZ_DEVOPS_PAT_#"
    }
  ]
}
```
🔹 **Customizable via JSON**---new patterns can be added easily.

* * * * *

Data Handling & Privacy
-----------------------

🔒 **Security Considerations**:

-   ✅ **No Data Stored**: Code remains in memory only during the session.
-   ✅ **No Server Calls**: Anonymization is entirely **client-side**.
-   ✅ **User-Controlled Process**: Only anonymized data is available for export.

⚠️ **Limitations**:

-   This tool **does not detect proprietary logic**---users must manually review anonymized code.
-   **Regex-based matching** may not catch all sensitive elements.

* * * * *

Disclaimer & Usage Guidelines
-----------------------------

🚨 **⚠️ Important Notice** 🚨

> **Azure Code Anonymizer** is provided **"as is"** without warranties.\
> It **helps remove sensitive data** but **does not guarantee full anonymization**.\
> Users **must review** output before sharing.

📌 **Key Guidelines**:

1.  **No Intellectual Property Removal**: Algorithmic logic is not altered.
2.  **User Responsibility**: Validate anonymized code before external sharing.
3.  **No Server-Side Storage**: No data is saved or transmitted.

* * * * *

Contribution & License
----------------------

🛠 **Want to contribute?** Follow these steps:

1.  Fork the repository.
2.  Submit a **Pull Request** with new patterns or fixes.
3.  Add test cases for any new pattern added.

📜 **License**:\
This project is released under the **MIT License**.

* * * * *

💙 Developed by **Silvio Torre** and the open-source community.
