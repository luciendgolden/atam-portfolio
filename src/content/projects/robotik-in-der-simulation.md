---
title: 'Mobile Robotik in der Simulation'
description: 'Beispielkonzept: Einen mobilen Roboter lokalisieren, Wege planen und wiederholbar in der Simulation testen.'
publishDate: '2026-09-14'
isFeatured: true
seo:
  description: 'Konzept einer ROS-2-Simulation für mobile Robotik mit Lokalisierung, Navigation und reproduzierbaren Testszenarien.'
  image:
    src: '/models/torus-manifold.svg'
    alt: 'Parametrischer Torus als pinkes Drahtgitter'
---

**Status: Ausgearbeitetes Beispielkonzept.**

Ein mobiler Roboter soll in einer simulierten Innenraumumgebung vorgegebene Ziele erreichen. Im Mittelpunkt stehen die Schnittstellen zwischen Sensorik, Lokalisierung und Navigation sowie die Frage, wie sich Fehler reproduzierbar untersuchen lassen.

## Ein begrenzter erster Aufbau

Die erste Umgebung besteht aus wenigen Räumen, festen Hindernissen und einem bekannten Grundriss. Das hält die Zahl der Einflussfaktoren überschaubar. Neue Hindernisse und verrauschte Messungen kommen erst als gezielte Testvarianten hinzu.

## Geplante Architektur

- **ROS 2** verbindet die Komponenten über definierte Nachrichten und Schnittstellen.
- **Gazebo** stellt die Umgebung, das Robotermodell und simulierte Sensordaten bereit.
- **Nav2** übernimmt die geplante Navigationsintegration mit Wegplanung und lokaler Bewegungsausführung.
- **Python** steuert Testabläufe und fasst die protokollierten Ergebnisse zusammen.

Der Transformationsbaum zwischen `map`, `odom`, `base_link` und Sensorrahmen wird als eigene Schnittstelle dokumentiert. Zeitstempel gehören zu jeder Messung; eine passende Position mit einem unpassenden Zeitpunkt kann bereits zu einem falschen Hindernisbild führen.

## Wiederholbare Versuche

Jeder Test definiert Startposition, Ziel, Umgebung und Abbruchbedingungen. Die Auswertung betrachtet Zielerreichung, Fahrzeit, zurückgelegte Strecke, Kollisionen innerhalb der Simulation und notwendige Neuplanungen.

Für Fehlerfälle werden Sensordaten und Transformationen aufgezeichnet. So lässt sich prüfen, ob ein Problem aus der Lokalisierung, der Planung oder dem zeitlichen Zusammenspiel der Komponenten stammt.

## Geplante Ergebnisse

Vorgesehen sind eine startbare Simulationsumgebung, ein kleiner Szenariokatalog und ein Vergleichsbericht. Ergebnisse aus der Simulation gelten zunächst nur für diese Umgebung. Tests auf echter Hardware wären ein eigener Entwicklungsschritt.

Den Hintergrund behandelt der Beitrag [Koordinatensysteme in der Robotik verstehen](/atam-portfolio/blog/robotik-koordinatensysteme/).
