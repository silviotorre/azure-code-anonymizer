# 🔒 Azure Code Anonymizer

**Azure Code Anonymizer** is a web-based tool designed to detect and replace sensitive information within code snippets, particularly in **Azure and DevOps environments**. It enables developers and DevOps engineers to **securely share code** for debugging and analysis by anonymizing **connection strings, tokens, secrets, and identity-related data** before exposing it externally.

> **🚀 Features:**
> - Client-side anonymization (**no data storage, no backend**).
> - **Regex-based detection** of Azure-related sensitive information.
> - **Customizable rules** via `anonymizer-rules.json`.
> - **Anonymization report** showing replaced items and line numbers.

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

