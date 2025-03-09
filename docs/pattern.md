# Pattern di Anonimizzazione

Questo documento descrive i principali pattern che intendiamo sostituire per anonimizzare informazioni sensibili.

## Indice dei pattern

1. **IP Address (IPv4)**
2. **MAC Address**
3. **Email Address**
4. **Connection String (SQL)**
5. **Connection String (Service Bus, con Endpoint=)**
6. **PAT (Personal Access Token)**
7. **SAS Token**
8. **JWT (JSON Web Token)**
9. **GUID / UUID**
10. **Certificati / Chiavi**
11. **Azure Key Vault Reference**
12. **Altro** (Pattern personalizzati all’occorrenza)

---

### 1. IP Address (IPv4)

- **Regex**: `\b(?:\d{1,3}\.){3}\d{1,3}\b`
- **Descrizione**: Cattura gli indirizzi IPv4 nella forma `x.x.x.x`.
- **Sostituzione**: `__IP_{COUNTER}__`

### 2. MAC Address

- **Regex**: `\b(?:[A-Fa-f0-9]{2}[:-]){5}[A-Fa-f0-9]{2}\b`
- **Descrizione**: Cattura MAC address in formati comuni (con due punti o trattini).
- **Sostituzione**: `__MAC_{COUNTER}__`

### 3. Email Address

- **Regex**: `[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}`
- **Descrizione**: Cattura email. Potrebbe essere da adattare se ci sono casi più particolari.
- **Sostituzione**: `__EMAIL_{COUNTER}__`

### 4. Connection String (SQL)

- **Regex**: `Server=.*?;Database=.*?;User\sId=.*?;Password=.*?;?`
- **Descrizione**: Cattura i parametri tipici di una connection string SQL.  
- **Sostituzione**: `__SQL_CONN_{COUNTER}__`

### 5. Connection String (Service Bus, con Endpoint=)

- **Regex**: `Endpoint=sb://.*?;SharedAccessKeyName=.*?;SharedAccessKey=.*?;?`
- **Descrizione**: Cattura i parametri di una connection string per Azure Service Bus.
- **Sostituzione**: `__SB_CONN_{COUNTER}__`

### 6. PAT (Personal Access Token)

- **Regex**: `(?<=[:=]|^)[A-Za-z0-9_]{20,}`
- **Descrizione**: Esempio generico di token alfanumerico di lunghezza > 20 (adattare se necessario).
- **Sostituzione**: `__PAT_{COUNTER}__`

### 7. SAS Token

- **Regex**: `se=[^&]+&sig=[^&]+&sp=[^&]+`
- **Descrizione**: Segmento tipico di un SAS token per Storage. (Potrebbe variare in base a parametri).
- **Sostituzione**: `__SAS_{COUNTER}__`

### 8. JWT (JSON Web Token)

- **Regex**: `[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+`
- **Descrizione**: Forma standard `header.payload.signature`.
- **Sostituzione**: `__JWT_{COUNTER}__`

### 9. GUID / UUID

- **Regex**: `[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}`
- **Descrizione**: Cattura un GUID/UUID con trattini.
- **Sostituzione**: `__GUID_{COUNTER}__`

### 10. Certificati / Chiavi

- **Regex**: `(?<=-----BEGIN CERTIFICATE-----)(.*?)(?=-----END CERTIFICATE-----)`
- **Descrizione**: Tra i marker standard dei file PEM. Potresti dover catturare l’intero blocco con multiline e dotall in JS (`s` e `m` flags).
- **Sostituzione**: `__CERT_{COUNTER}__`

> *N.B.* La gestione dei certificati in multiline è più complessa in JavaScript: potresti dover usare `[\s\S]` per matchare su più righe.

### 11. Azure Key Vault Reference

- **Regex**: `@Microsoft\.KeyVault\(SecretUri=.*?\)`
- **Descrizione**: Riferimento tipico a un segreto Key Vault in un App Settings di Azure.
- **Sostituzione**: `__KEYVAULT_SECRET_{COUNTER}__`

### 12. Altro (Pattern personalizzati)

- Aggiungere nuove entry all’occorrenza per gestire token o formati specifici di un progetto.

### 13. Azure DevOps Service Connection

- **Regex**: `serviceConnection\s*:\s*['"]([\w\.-]+)['"]`
- **Descrizione**: Cattura riferimenti del tipo `serviceConnection: 'myServiceConn'` in uno YAML.  
- **Sostituzione**: `__SERVICE_CONN_{COUNTER}__`

### 14. Azure DevOps Variable Group

- **Regex**: `group\s*:\s*['"]([\w\.-]+)['"]`
- **Descrizione**: Cattura riferimenti del tipo `group: 'myVariableGroup'` in uno YAML di pipeline.  
- **Sostituzione**: `__VARIABLE_GROUP_{COUNTER}__`

### 15. Azure DevOps Secret (forma $(mySecret))

- **Regex**: `\$\(\w+\)`
- **Descrizione**: Cattura riferimenti a variabili segrete in forma `$(mySecretVar)`.  
- **Sostituzione**: `__AZDEVOPS_SECRET_{COUNTER}__`

### 16. Azure DevOps Agent Pool

- **Regex**: `pool\s*:\s*['"]([\w\.-]+)['"]`
- **Descrizione**: Cattura riferimenti del tipo `pool: 'MyAgentPool'`.  
- **Sostituzione**: `__AGENT_POOL_{COUNTER}__`
### 17. Azure RBAC References

Nei template o nei file YAML/Pipeline, potremmo incontrare riferimenti a RBAC (Role-Based Access Control).  
Ad esempio:

- **roleDefinitionId**: path verso la definizione del ruolo (spesso include un GUID)  
- **roleAssignmentName**: nome simbolico di una role assignment  
- **principalId**: GUID dell’utente/entità di sicurezza a cui assegnare il ruolo  
- **scope**: path della risorsa (subscription, resource group, ecc.)

Di seguito alcune regex di base; occorre adattarle se i formati cambiano.

1. **roleDefinitionId**  
   - **Regex**: `roleDefinitionId\s*:\s*['"][^'"]+['"]`  
   - **Sostituzione**: `__RBAC_ROLEDEF_{counter}__`  
   - Descrizione: intercetta una riga tipo `roleDefinitionId: "/subscriptions/<GUID>/providers/Microsoft.Authorization/roleDefinitions/<GUID>"`.

2. **roleAssignmentName**  
   - **Regex**: `roleAssignmentName\s*:\s*['"][^'"]+['"]`  
   - **Sostituzione**: `__RBAC_ROLEASSIGN_{counter}__`  
   - Descrizione: nome arbitrario assegnato alla role assignment, spesso visibile in un file di configurazione.

3. **principalId**  
   - **Regex**: `principalId\s*:\s*['"]([0-9a-fA-F-]+)['"]`  
   - **Sostituzione**: `__RBAC_PRINCIPAL_{counter}__`  
   - Descrizione: GUID di un utente, gruppo, o Service Principal.

4. **scope**  
   - **Regex**: `scope\s*:\s*['"][^'"]+['"]`  
   - **Sostituzione**: `__RBAC_SCOPE_{counter}__`  
   - Descrizione: può indicare un path come `/subscriptions/<GUID>/resourceGroups/<myRG>` o simili.

> *Attenzione*: i formati di ARM/Bicep possono variare. Se i valori sono su più righe, o se i doppi apici sono sostituiti da singoli, potresti dover adattare la regex.  

---

## Note generali

1. **COUNTER**: ogni volta che un pattern matcha, occorre incrementare un contatore specifico per quel pattern, in modo da avere sostituzioni distinte (`__IP_1__`, `__IP_2__`, ecc.).  
2. **Line Number**: la nostra implementazione in `utils.js` analizzerà il testo riga per riga, registrando in un report il numero di riga e il match originale.  
3. **Priorità**: alcuni pattern potrebbero sovrapporsi; controllare l’ordine di esecuzione o eventuali conflitti tra regex.

---
