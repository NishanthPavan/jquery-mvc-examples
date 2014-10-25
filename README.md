Exempel MVC med jQuery och RequireJS.
===============
Inspirerad av AngularJS och Spring MVC.

	admin-jobad/
		Riot-inspirerade kommandon som skulle kunna användas i admin-jobad vyn.
	todo/
		En todo-app med lägg-till och ta-bort funktionalitet.

# Hur fungerar det?

Fyra lager. Som våra java applikationer (utom repositories).

Model, View, Controller och Service

## Model
Dataobjekt, ungefär som våran domänmodell. Modellen får läsas av vy lagret och redigeras av service-lagret.

## View
Lyssnar både på användarevents och applikationevents och uppdaterar vyn som reaktion på dessa genom icke-js klasser, redigering av DOM-element och effekter.

## Controller
Lyssnar på användarevents, läser av data från DOMen och anropar service-lagret som reaktion på dessa. Tillåts mindre vyförändringar, som att nollställa formulär och hantera .js- klasser.

## Service
Redigerar modellen och kommunicerar med utomstående tjänster, som ajax-anrop till backend.


# Möjliga anpassningar
## Ihopslagning av Controller och Service

Controller hanterar både användarevents, DOM-avläsning, businesslogik och AJAX kommunikation.

\+ Mindre lasagne

\- Möjligtvis grötigare kod

## Utbrytning av AJAX-kommunkation från service i nytt lager (likt repositories/DAOs)
Service lagret hanterar nu bara businesslogik och modelluppdateringar. Nya lagret hanterar all AJAX kommunikation.

\+ Mer separerad kod ger lättare underhåll och mer återanvändbar kod

\- Mer boilerplate, förmodligen oftast i onödan