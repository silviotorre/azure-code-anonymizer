(() => {
    'use strict';
  
    // Elementi dell'interfaccia
    const codeInput = document.getElementById('codeInput');
    const anonymizeBtn = document.getElementById('anonymizeBtn');
    const output = document.getElementById('output');
  
    // Per mostrare un eventuale report in un div / pre (aggiungilo in index.html se vuoi)
    // Esempio:
    // <section>
    //   <h2>Anonymization Report</h2>
    //   <pre id="report"></pre>
    // </section>
    const reportEl = document.getElementById('report');
  
    let anonymizerRules = [];
    let appSettings = {};
  
    window.addEventListener('DOMContentLoaded', async () => {
      try {
        anonymizerRules = await fetchJSON('config/anonymizer-rules.json');
        appSettings = await fetchJSON('config/settings.json');
        console.log('Anonymizer rules loaded:', anonymizerRules);
        console.log('Settings loaded:', appSettings);
      } catch (err) {
        console.error('Error loading config files:', err);
      }
    });
  
    anonymizeBtn.addEventListener('click', () => {
      const originalText = codeInput.value;
      // Chiamiamo la funzione che gestisce la sostituzione riga per riga
      const { anonymizedText, report } = anonymizeTextWithReport(originalText, anonymizerRules);
  
      output.textContent = anonymizedText;
  
      // Se vuoi mostrare il report
      if (reportEl) {
        reportEl.textContent = JSON.stringify(report, null, 2);
      }
    });
  
    async function fetchJSON(url) {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.status} ${response.statusText}`);
      }
      return response.json();
    }
  
  })();
  