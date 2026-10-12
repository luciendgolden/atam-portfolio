---
title: 'Warum Genauigkeit allein nicht reicht'
excerpt: 'Welche Metriken bei seltenen Fehlerfällen helfen und warum Datentrennung genauso wichtig ist wie das Modell selbst.'
publishDate: '2026-09-14'
isFeatured: true
tags:
  - Maschinelles Lernen
  - Evaluation
seo:
  description: 'Modelle sinnvoll bewerten: Präzision, Erkennungsrate und saubere Datentrennung am Beispiel einer visuellen Qualitätsprüfung.'
  image:
    src: '/models/gradient-descent.svg'
    alt: 'Gradientenabstieg entlang der Höhenlinien einer quadratischen Verlustfunktion'
---

Eine hohe Genauigkeit kann ein unbrauchbares Modell verdecken. Entscheidend ist, welche Fehler hinter der Zahl stehen und ob die Auswertung den späteren Einsatz realistisch abbildet.

## Ein einfaches Rechenbeispiel

Angenommen, 990 von 1.000 Bauteilen sind fehlerfrei. Ein Modell, das jedes Bauteil als fehlerfrei einstuft, erreicht 99 Prozent Genauigkeit. Trotzdem erkennt es keinen einzigen der zehn Defekte.

Für diese Aufgabe sind mindestens zwei Sichtweisen wichtig:

- **Erkennungsrate für Defekte (Recall):** Welcher Anteil der tatsächlich defekten Bauteile wird erkannt?
- **Präzision der Defektmeldungen (Precision):** Welcher Anteil der als defekt gemeldeten Bauteile ist tatsächlich defekt?

Eine Konfusionsmatrix zeigt die zugrunde liegenden Fallzahlen. Die [Metrik-Dokumentation von scikit-learn](https://scikit-learn.org/stable/modules/model_evaluation.html) erläutert diese Kennzahlen und ihre unterschiedlichen Aussagen.

## Die Datentrennung gehört zur Messung

Mehrere Bilder desselben Bauteils in Trainings- und Testdaten können das Ergebnis zu günstig erscheinen lassen. Die Aufteilung sollte deshalb zur späteren Anwendung passen, etwa getrennt nach Bauteil, Charge oder Aufnahmezeitpunkt.

Auch gelernte Vorverarbeitungsschritte dürfen keine Informationen aus dem Testdatensatz erhalten. Skalierung und Merkmalsauswahl werden auf den Trainingsdaten angepasst. scikit-learn beschreibt solche Informationslecks und den Einsatz von Verarbeitungsketten in seinen [Hinweisen zu typischen Fehlern](https://scikit-learn.org/stable/common_pitfalls.html).

## Fehler einzeln ansehen

Nach der Gesamtauswertung lohnt sich die Aufteilung nach Beleuchtung, Perspektive und Fehlerart. Ein Mittelwert kann verdecken, dass das Modell unter einer bestimmten Bedingung fast immer scheitert.

Der Entscheidungsschwellenwert wird mit Validierungsdaten gewählt. Erst danach folgt die abschließende Prüfung auf zurückgehaltenen Testdaten. Ein brauchbarer Ergebnisbericht nennt daher nicht nur Kennzahlen, sondern auch Datenaufteilung, Fallzahlen, Schwellenwert und typische Fehlentscheidungen.

Diese Überlegungen sind Teil des [Beispielkonzepts zur visuellen Qualitätsprüfung](/atam-portfolio/projects/visuelle-qualitaetspruefung/).
