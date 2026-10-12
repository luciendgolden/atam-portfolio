---
title: 'Vom KI-Prototyp zum belastbaren System'
excerpt: 'Ein Modellaufruf ist schnell gebaut. Entscheidend sind klare Schnittstellen, reproduzierbare Prüfungen und ein definierter Umgang mit Fehlern.'
publishDate: '2026-09-14'
isFeatured: true
tags:
  - KI-Engineering
  - Evaluation
seo:
  description: 'Wie aus einem KI-Prototyp ein überprüfbares System wird: mit einfacher Ausgangsbasis, klaren Schnittstellen und gezielten Tests.'
  image:
    src: '/models/saddle-surface.svg'
    alt: 'Mathematische Sattelfläche als pinkes Drahtgitter'
---

Ein KI-Prototyp wird belastbar, wenn sein Verhalten überprüfbar ist. Dazu gehören ein klarer Datenweg, ein sinnvoller Vergleichsmaßstab und festgelegte Reaktionen auf Fehler. Ein überzeugendes Einzelbeispiel sagt noch wenig über den späteren Betrieb aus.

## Mit einer einfachen Ausgangsbasis beginnen

Vor dem komplexeren Modell steht eine einfache Lösung: eine Suchfunktion, eine feste Regel oder ein kleines Vergleichsmodell. Erst der Vergleich zeigt, ob zusätzliche Komplexität einen praktischen Nutzen bringt. Auch Googles [Empfehlungen für ML-Engineering](https://developers.google.com/machine-learning/guides/rules-of-ml) stellen messbare Ziele, einfache erste Modelle und eine funktionierende Verarbeitungskette in den Mittelpunkt.

## Einen prüfbaren Vertrag definieren

Bei einem Wissensassistenten könnte der Vertrag so aussehen: Eine Frage und eine freigegebene Dokumentensammlung gehen hinein; eine Antwort mit passenden Fundstellen oder eine klare Rückmeldung bei fehlenden Belegen kommt heraus.

Daraus entstehen konkrete Tests:

- Eine beantwortbare Frage muss die relevante Passage finden.
- Eine veraltete Dokumentversion darf nicht stillschweigend als aktuell gelten.
- Eine Frage ohne passende Information muss als unbeantwortbar erkennbar bleiben.
- Ein fehlgeschlagener Modellaufruf braucht einen verständlichen Fehlerzustand.

## Änderungen einzeln bewerten

Dokumentenaufbereitung, Suche und Antworterzeugung sind unterschiedliche Fehlerquellen. Für jeden Versuch bleiben Datenstand, Konfiguration und Modellversion festgehalten. Wird eine Komponente verändert, wird derselbe Fragenkatalog erneut ausgeführt.

Neben der fachlichen Qualität gehören Laufzeit und Ressourcenverbrauch in den Vergleich. Eine bessere Antwort kann im vorgesehenen Ablauf trotzdem zu langsam oder zu teuer sein.

## Was zum ersten Stand gehört

Eine nützliche erste Lieferung besteht aus einem Demonstrator, einem kleinen Testkatalog und einem Fehlerbericht. Der Bericht erklärt, welche Fälle funktionieren, welche scheitern und welche Änderung als Nächstes geprüft werden soll. Das macht den nächsten Entwicklungsschritt nachvollziehbar.

Ein passendes Beispiel ist das [Projektkonzept für einen Wissensassistenten](/atam-portfolio/projects/wissensassistent-mit-quellen/).
