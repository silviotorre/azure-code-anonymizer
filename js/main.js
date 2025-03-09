// main.js
(() => {
  'use strict';

  const codeInput = document.getElementById('codeInput');
  const anonymizeBtn = document.getElementById('anonymizeBtn');
  const output = document.getElementById('output');
  const showReportCheck = document.getElementById('showReport');
  const reportSection = document.getElementById('reportSection');
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
    const { anonymizedText, report } = anonymizeTextWithReport(originalText, anonymizerRules);

    // Mettiamo il testo anonimizzato nel box di output
    output.value = anonymizedText;

    // Se la checkbox "showReport" è selezionata, mostriamo il report
    if (showReportCheck.checked) {
      reportSection.style.display = 'block';
      reportEl.value = JSON.stringify(report, null, 2);
    } else {
      reportSection.style.display = 'none';
      reportEl.value = '';
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
