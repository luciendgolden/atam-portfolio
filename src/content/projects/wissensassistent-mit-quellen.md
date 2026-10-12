---
title: 'Wissensassistent mit Quellen'
description: 'Beispielkonzept: Technische Dokumente durchsuchen und Antworten mit überprüfbaren Fundstellen erstellen.'
publishDate: '2026-09-14'
isFeatured: true
seo:
  description: 'Konzept für einen KI-Wissensassistenten mit Dokumentensuche, Quellenbelegen und systematischer Qualitätsprüfung.'
  image:
    src: '/models/lorenz-attractor.svg'
    alt: 'Lorenz-Attraktor mit pinken Trajektorien auf dunklem Hintergrund'
---

**Status: Ausgearbeitetes Beispielkonzept.**

Technische Informationen verteilen sich oft auf Handbücher, Projektnotizen und Spezifikationen. Eine Suchfunktion liefert Dokumente; die gesuchte Antwort muss anschließend noch zusammengesucht werden. Dieses Konzept verbindet Dokumentensuche mit einem Sprachmodell und macht die verwendeten Fundstellen sichtbar.

## Ziel und Umfang

Der Assistent soll Fragen zu einer abgegrenzten Dokumentensammlung beantworten. Jede fachliche Aussage braucht eine passende Fundstelle. Wenn die Sammlung eine Frage nicht beantwortet, soll das System diese Grenze benennen. Eine überzeugende Formulierung allein reicht als Qualitätsmerkmal nicht aus.

## Geplante Architektur

1. **Dokumente aufbereiten:** Text extrahieren, in sinnvolle Abschnitte teilen und Dokumentkennung, Version sowie Seitenbezug erhalten.
2. **Passagen finden:** Suchbegriffe und semantische Ähnlichkeit kombinieren. Zugriffsrechte bereits bei der Suche berücksichtigen.
3. **Antwort erzeugen:** Nur die gefundenen Passagen als fachlichen Kontext übergeben und Quellenkennungen mitführen.
4. **Belege anzeigen:** Antwort und Originalpassagen nebeneinander darstellen, damit die Aussage überprüfbar bleibt.

Als technische Grundlage sind Python, FastAPI und PostgreSQL mit pgvector vorgesehen. Die Anbindung des Sprachmodells bleibt hinter einer eigenen Schnittstelle, damit sich Modelle mit demselben Fragenkatalog vergleichen lassen.

## Die entscheidenden Prüfungen

Der Testkatalog enthält eindeutig beantwortbare Fragen, widersprüchliche Dokumentstände und Fragen ohne passende Quelle. Gemessen werden die Trefferqualität der Suche, die tatsächliche Unterstützung der Antwort durch ihre Belege und die Häufigkeit unbelegter Aussagen. Laufzeit und Kosten pro Anfrage werden getrennt erfasst.

Ein besonders wichtiger Fehlerfall: Das richtige Dokument wird gefunden, aber die falsche Passage als Beleg verwendet. Deshalb werden Suche und Antwortqualität getrennt ausgewertet.

## Geplante Ergebnisse

Vorgesehen sind ein kleiner Demonstrator, ein reproduzierbarer Fragenkatalog und ein Auswertungsbericht mit konkreten Fehlerbeispielen.

Zum Vorgehen passt der Beitrag [Vom KI-Prototyp zum belastbaren System](/atam-portfolio/blog/ki-prototyp-zum-system/).
