---
title: 'Visuelle Qualitätsprüfung'
description: 'Beispielkonzept: Auffällige Bauteile in Bildern erkennen und Fehlentscheidungen gezielt auswerten.'
publishDate: '2026-09-14'
isFeatured: true
seo:
  description: 'Konzept einer visuellen Qualitätsprüfung mit Bildklassifikation, sauberer Datentrennung und nachvollziehbarer Fehleranalyse.'
  image:
    src: '/models/gaussian-surface.svg'
    alt: 'Gaußsche Glockenfläche als pinkes Drahtgitter'
---

**Status: Ausgearbeitetes Beispielkonzept.**

Ein Bildmodell soll zwischen unauffälligen und beschädigten Bauteilen unterscheiden. Die eigentliche Engineering-Frage lautet: Unter welchen Aufnahmebedingungen ist die Entscheidung verlässlich, und welche Fehler bleiben bestehen?

## Daten vor Modellkomplexität

Die erste Version beschränkt sich auf eine Bauteilart und klar definierte Fehlerbilder. Zu jedem Bild werden Aufnahmebedingungen und Bauteilkennung dokumentiert. Mehrere Aufnahmen desselben Bauteils bleiben in derselben Datenpartition, damit die Bewertung nicht durch nahezu identische Trainings- und Testbilder verzerrt wird.

## Geplante Umsetzung

- **Vergleichsmodell:** Einfache Bildmerkmale und ein klassischer Klassifikator schaffen eine nachvollziehbare Ausgangsbasis.
- **Bildmodell:** Ein vortrainiertes neuronales Netz wird mit PyTorch an die Aufgabe angepasst.
- **Auswertung:** scikit-learn liefert Kennzahlen und eine Konfusionsmatrix. Eine kleine Oberfläche stellt Bild, Modellscore und Referenzlabel gegenüber.
- **Nachvollziehbarkeit:** Datenstand, Vorverarbeitung und Modellversion werden für jeden Versuch festgehalten.

## Welche Fehler zählen?

Ein übersehener Defekt und ein unnötig aussortiertes Bauteil haben unterschiedliche Folgen. Deshalb werden die Erkennungsrate für Defekte und die Präzision der Defektmeldungen getrennt betrachtet. Ein einzelner Genauigkeitswert wäre bei seltenen Defekten wenig aussagekräftig.

Der Entscheidungsschwellenwert wird anhand der Validierungsdaten gewählt. Der abschließende Testdatensatz bleibt bis zur Bewertung unangetastet. Zusätzliche Testgruppen untersuchen veränderte Beleuchtung, leichte Unschärfe und andere Blickwinkel.

## Geplante Ergebnisse

Das Konzept sieht eine reproduzierbare Trainings- und Auswertungskette sowie einen Bericht mit typischen Fehlentscheidungen vor. Fälle außerhalb der untersuchten Bedingungen werden als offene Grenzen dokumentiert.

Die Grundlagen erklärt der Beitrag [Warum Genauigkeit allein nicht reicht](/atam-portfolio/blog/modelle-sinnvoll-bewerten/).
