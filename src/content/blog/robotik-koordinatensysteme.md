---
title: 'Koordinatensysteme in der Robotik verstehen'
excerpt: 'Warum Bezugssysteme und Zeitstempel zusammengehören und wie sich Fehler zwischen Sensorik, Lokalisierung und Navigation eingrenzen lassen.'
publishDate: '2026-09-14'
isFeatured: true
tags:
  - Robotik
  - Softwareentwicklung
seo:
  description: 'Die Rolle von map, odom und base_link: Koordinatensysteme und Zeitbezüge als Grundlage nachvollziehbarer Robotik-Systeme.'
  image:
    src: '/models/harmonic-trajectory.svg'
    alt: 'Dreidimensionale Lissajous-Trajektorie aus harmonischen Bewegungen'
---

Eine Position ist erst dann eindeutig, wenn Bezugssystem und Zeitpunkt bekannt sind. Für mobile Roboter ist diese Zuordnung eine grundlegende Schnittstelle: Sensoren, Lokalisierung und Navigation müssen dieselbe Beobachtung räumlich und zeitlich zusammenbringen können.

## Drei Bezugssysteme mit unterschiedlichen Aufgaben

Die ROS-Konvention [REP 105](https://github.com/ros-infrastructure/rep/blob/master/rep-0105.rst) beschreibt unter anderem:

- **`base_link`:** Das am Roboter befestigte Bezugssystem.
- **`odom`:** Eine kontinuierliche lokale Referenz. Die geschätzte Position soll ohne Sprünge verlaufen, darf sich aber mit der Zeit vom tatsächlichen Verlauf entfernen.
- **`map`:** Eine globale Referenz innerhalb der Karte. Lokalisierungskorrekturen können hier zu Positionssprüngen führen.

Die übliche Verbindung lautet `map → odom → base_link`. Ein Sensorrahmen wird passend zur Montage ergänzt. Durch die Trennung können lokale Bewegung und globale Korrekturen unterschiedliche Eigenschaften behalten.

## Der Zeitpunkt ist Teil der Messung

Ein einfaches Rechenbeispiel: Bei geradliniger Fahrt mit einem Meter pro Sekunde entsprechen 300 Millisekunden Verzögerung bereits 30 Zentimetern Weg. Wird eine alte Sensormessung mit der aktuellen Roboterposition kombiniert, kann ein Hindernis an der falschen Stelle erscheinen.

tf2 unterstützt Abfragen von Transformationen zu bestimmten Zeitpunkten. Die [ROS-2-Dokumentation zur zeitlichen Transformation](https://docs.ros.org/en/ros2_documentation/kilted/Tutorials/Intermediate/Tf2/Time-Travel-With-Tf2-Cpp.html) zeigt, weshalb der gewünschte Zeitbezug ausdrücklich zur Abfrage gehört.

## Fehler systematisch eingrenzen

Für einen ersten Diagnoseablauf bieten sich vier Fragen an:

1. In welchem Bezugssystem wurde die Beobachtung erfasst?
2. Gibt es eine vollständige Transformationskette zum Zielsystem?
3. Passen Messzeitpunkt und verwendete Transformation zusammen?
4. Lassen sich dieselben Daten erneut abspielen und dieselben Abweichungen beobachten?

Eine aufgezeichnete Sequenz ist dafür hilfreicher als ein einzelner Bildschirmstand. Mit ihr lässt sich eine Änderung an Lokalisierung oder Zeitbehandlung unter vergleichbaren Bedingungen prüfen.

Das [Projektkonzept für mobile Robotik in der Simulation](/atam-portfolio/projects/robotik-in-der-simulation/) baut auf dieser Trennung auf.
