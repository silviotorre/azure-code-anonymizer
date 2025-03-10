# 🔒 Azure Code Anonymizer
![GitHub stars](https://img.shields.io/github/stars/silviotorre/azure-code-anonymizer?style=social)
![GitHub issues](https://img.shields.io/github/issues/silviotorre/azure-code-anonymizer)
![GitHub license](https://img.shields.io/github/license/silviotorre/azure-code-anonymizer)
[![pages-build-deployment](https://github.com/silviotorre/azure-code-anonymizer/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/silviotorre/azure-code-anonymizer/actions/workflows/pages/pages-build-deployment)
[![CI Placeholder](https://github.com/silviotorre/azure-code-anonymizer/actions/workflows/ci.yml/badge.svg)](https://github.com/silviotorre/azure-code-anonymizer/actions/workflows/ci.yml)

**Azure Code Anonymizer** is a web-based tool designed to detect and replace sensitive information within code snippets, particularly in **Azure and DevOps environments**. It enables developers and DevOps engineers to **securely share code** for debugging and analysis by anonymizing **connection strings, tokens, secrets, and identity-related data** before exposing it externally.
# ⚠️ Disclaimer – Usage and Liability Limitations

The **Azure Code Anonymizer** is designed to detect and replace sensitive information (e.g., connection strings, IP/MAC addresses, tokens, secrets) within code, reducing the risk of accidental exposure. However, **this tool is provided "as is" without any explicit or implied warranties**, and its use is at the sole discretion of the user.

## 📌 **Key Points**
### 1. **Anonymization ≠ Removal of Intellectual Property**
   - Anonymizing sensitive data **does not mean** that the code is free from proprietary information.
   - Algorithms, data structures, and proprietary logic **may still be identifiable**.

### 2. **No Data Storage or Transmission**
   - All processing occurs **client-side** in the browser.
   - **No data is sent to or stored on external servers**.

### 3. **Use at Your Own Risk**
   - The user is **fully responsible** for reviewing the anonymized code **before sharing**.
   - The development team is **not liable** for any intellectual property violations or security risks resulting from the use of this tool.

### 4. **Risk Assessment Recommendation**
   - Before sharing anonymized code with third-party tools, a **risk assessment** is strongly recommended.
   - For highly sensitive or proprietary code, anonymization **may not be sufficient**, and additional precautions should be taken.

---

**ℹ️ Note:** This tool is provided “as is,” without any guarantee of suitability for a particular purpose. By using it, you agree to these terms.
---

## **🚀 Features:**
 - Client-side anonymization (**no data storage, no backend**).
 - **Regex-based detection** of Azure-related sensitive information.
 - **Customizable rules** via `anonymizer-rules.json`.
 - **Anonymization report** showing replaced items and line numbers.

---

## 📌 **Supported Sensitive Data Types**
Azure Code Anonymizer identifies and replaces the following types of sensitive data:

| **Category**             | **Example Input** | **Anonymized Output** |
|--------------------------|------------------|----------------------|
| **IP Address (IPv4)** | `192.168.0.45` | `__IP_1__` |
| **MAC Address** | `00:1A:2B:3C:4D:5E` | `__MAC_1__` |
| **Email Address** | `azure_user@example.com` | `__EMAIL_1__` |
| **SQL Connection String** | `Server=myserver.database.windows.net;Database=Project1;User Id=someUser;Password=MyPass!;` | `__SQL_CONN_1__` |
| **Azure Service Bus Connection** | `Endpoint=sb://...;SharedAccessKeyName=...;SharedAccessKey=...` | `__SB_CONN_1__` |
| **Personal Access Token (PAT)** | `aZ09_bCdEFGhijklMnop45` | `__PAT_1__` |
| **SAS Token** | `se=2026-10-24T12%3A00%3A00Z&sig=...` | `__SAS_1__` |
| **JWT Token** | `eyJzdWIiOiIxMjM0NTY3ODkwIn0.zxy987` | `__JWT_1__` |
| **GUID / UUID** | `123e4567-e89b-12d3-a456-426614174000` | `__GUID_1__` |
| **Azure Key Vault Reference** | `@Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/dbPassword/abc1234)` | `__KEYVAULT_SECRET_1__` |
| **SSL/TLS Certificate** | `-----BEGIN CERTIFICATE----- ... -----END CERTIFICATE-----` | `__CERT_1__` |
| **Azure DevOps Service Connection** | `serviceConnection: 'myServiceConnection'` | `__SERVICE_CONN_1__` |
| **Azure DevOps Variable Group** | `group: 'myVariableGroup'` | `__VARIABLE_GROUP_1__` |
| **Azure DevOps Secret (Pipeline Variable)** | `$(mySecretVar)` | `__AZDEVOPS_SECRET_1__` |
| **Azure DevOps Agent Pool** | `pool: 'MyAgentPool'` | `__AGENT_POOL_1__` |
| **Azure RBAC Role Definition** | `roleDefinitionId: '/subscriptions/.../roleDefinitions/...'` | `__RBAC_ROLEDEF_1__` |
| **Azure RBAC Principal ID** | `principalId: '12345678-1234-1234-1234-1234567890ab'` | `__RBAC_PRINCIPAL_1__` |

---

## 🛠 **How It Works**
1. **Paste your code** in the input textarea.
2. **Click "Anonymize"** to replace sensitive data with placeholders.
3. **View the anonymized code** in the output box.
4. **(Optional) Enable the report** to see what was replaced and where.

---

## 📦 **Installation & Usage**
Azure Code Anonymizer is a **front-end-only** tool that can be run **locally** or hosted as a **GitHub Pages** or **Azure Static Web App**.

### **Option 1: Use Online (GitHub Pages)**
👉 [Visit Azure Code Anonymizer](https://silviotorre.github.io/azure-code-anonymizer/)

### **Option 2: Run Locally**
#### 1️⃣ Clone the repository
```sh
git clone https://github.com/silviotorre/azure-code-anonymizer.git
cd azure-code-anonymizer
``` 
Or download the ZIP file and extract it
#### 2️⃣ Open `index.html` in your browser
- Double-click on `index.html` or open it with your browser.
- Paste your code in the input box and click "Anonymize".
- View the anonymized code in the output box.
- (Optional) Enable the report to see what was replaced and where.
- Customize the rules in `anonymizer-rules.json` as needed.
- **No data is sent to external servers**; all processing is done client-side.
- **No installation or server setup** is required.
- **No data is stored**; the tool runs entirely in the browser.
- **No external dependencies** are needed.
- **No network connection** is required after the initial page load.
- **No tracking or analytics** are used.
- **No cookies** are stored.
- **No user data** is collected.
- **No ads** are displayed.
- **No user accounts** are needed.
- **No backend** is used.
- **No external scripts** are loaded.
- **No external libraries** are required.
- **No external services** are called.
- **No external APIs** are used.
- **No external databases** are accessed.
- **No external storage** is used.
- **No external authentication** is required.
- **No external plugins** are needed.
- **No external resources** are loaded.
- **No external content** is embedded.
- **Hope** this is sufficient for your needs! 😄
# 📜 License
This project is licensed under the **MIT License**. For more information, see the [LICENSE](LICENSE) file.
# 📧 Contact
For questions, feedback, or suggestions, open an issue or contact me at [silviotorre.com](https://silviotorre.com).
# 🙏 Acknowledgements
Special thanks to [Shields.io](https://shields.io) for the awesome badges and [GitHub Pages](https://pages.github.com) for hosting this project.
# 📚 Resources
- [Azure Code Anonymizer](https://silviotorre.github.io/azure-code-anonymizer/)
- [GitHub Repository](https://github.com/silviotorre/azure-code-anonymizer)
- [MIT License](LICENSE)
- [Privacy Policy](PRIVACY.md)
- [Contributing Guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
# happy-coding
  
