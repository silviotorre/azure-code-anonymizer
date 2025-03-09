// utils.js
'use strict';

const counters = {};

function getNextCounter(patternId) {
  if (!counters[patternId]) counters[patternId] = 0;
  counters[patternId]++;
  return counters[patternId];
}

/**
 * Anonymize text line by line, returning both the anonymized text and a report.
 */
function anonymizeTextWithReport(text, rules) {
  // Reset counters a ogni chiamata
  Object.keys(counters).forEach(k => delete counters[k]);

  const lines = text.split('\n');
  const report = [];

  const processedLines = lines.map((line, lineIndex) => {
    let processedLine = line;

    rules.forEach(rule => {
      const regex = new RegExp(rule.pattern, 'g');
      let match;
      while ((match = regex.exec(processedLine)) !== null) {
        const matchedValue = match[0];
        const currentCount = getNextCounter(rule.id);
        const replacement = rule.replacement.replace('{counter}', currentCount);

        const before = processedLine.slice(0, match.index);
        const after = processedLine.slice(match.index + matchedValue.length);
        processedLine = before + replacement + after;

        // Teniamo traccia nel report
        report.push({
          line: lineIndex + 1,
          patternId: rule.id,
          original: matchedValue,
          replaced: replacement
        });

        // aggiorniamo l'indice per continuare la ricerca dopo la sostituzione
        regex.lastIndex = match.index + replacement.length;
      }
    });

    return processedLine;
  });

  return { anonymizedText: processedLines.join('\n'), report };
}

// Rendi globali le due funzioni (per poterle usare in main.js)
window.anonymizeTextWithReport = anonymizeTextWithReport;
