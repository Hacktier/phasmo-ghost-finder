import Ghost from "~/src/model/Ghost";
import {Evidence} from "~/src/model/Evidence";

export default new Set([
    new Ghost(
        "Spirit",
        new Set<Evidence>([Evidence.EMF, Evidence.BOX, Evidence.WRITING, Evidence.SPEED]),
        "50%",
        ["Keine"],
        ["Smudgen lässt ihn 180 Sekunden nicht mehr jagen."],
        ["Zeit messen nach dem Smudgen."]
    ),
    new Ghost(
        "Wraith",
        new Set<Evidence>([Evidence.EMF, Evidence.BOX, Evidence.DOTS, Evidence.SPEED]),
        "50%",
        ["Teleport zu einem Spieler =>", "EMF Level 2 (75% Chance), EMF Level 5 (25% Chance)"],
        ["Laufen niemals in Salz => Keine Fußabdrücke"],
        ["Eine Reihe aus Salz legen und einen Bewegungssensor aufstellen."]
    ),
    new Ghost(
        "Phantom",
        new Set<Evidence>([Evidence.BOX, Evidence.ULTRAVIOLET, Evidence.DOTS, Evidence.SPEED]),
        "50%",
        ["Läuft zu einem Spieler => EMF Level 2", " Ansehen schwächt die Sanity."],
        ["Ist auf Fotos unsichtbar. Wird nur alle 1-2 Sekunden sichtbar bei einer Hunt."],
        ["Foto machen => Geist ist nicht auf dem Foto und es hat keine Interferenzen"]
    ),
    new Ghost(
        "Poltergeist",
        new Set<Evidence>([Evidence.ULTRAVIOLET, Evidence.BOX, Evidence.WRITING, Evidence.SPEED]),
        "50%",
        ["Kann Gegenstände werfen => EMF Level 2", "Gegenstand => EMF Level 3"],
        ["Kann Gegenstände mit großer Kraft werfen.", "Während der Jagt wird alle 0,5 Sekunden ein Gegenstand in Reichweite geworfen."],
        ["Mehrere Haufen von Gegenständen bilden"],
    ),
    new Ghost(
        "Banshee",
        new Set<Evidence>([Evidence.ULTRAVIOLET, Evidence.ORB, Evidence.DOTS, Evidence.SPEED]),
        "50% Ziel",
        ["Wählt ein Ziel und Jagt nur dieses.", "Ziel bei einem Roam im Radius  => 67% Chance sich zum Spieler zu bewegen (Kein EMF)"],
        ["Spieler die nicht ihr Ziel sind haben eine erhöhte Chance für Sing-Geisterevents"],
        ["Viel das Parabolmikrofon verwenden (Banshee Schrei)", "Bei der Jagd mit mehreren Spielern verfolgt sie nur den anvisierten Spieler und ignoriert alle anderen."]
    ),
    new Ghost(
        "Jinn",
        new Set<Evidence>([Evidence.EMF, Evidence.ULTRAVIOLET, Evidence.FREEZING]),
        "50%",
        ["Sicherunskasten an => Jinn Ability => Spieler im selben Raum / 3m Umkreis verlieren 25 Sanity", "Am Sicherungskasten wird ein EMF Level 2/5 erzeugt"],
        ["Kann den Sicherungskasten nicht ausschalten.", "Hunt => Sicherungskasten an + Entfernung mehr als 3m zum Spieler + Line of sight => Speed = 2,5m/s"],
        ["Sicherunskasten einschalten => EMF auf den Sicherunskasten legen "]
    ),
    new Ghost(
        "Mare",
        new Set<Evidence>([Evidence.BOX, Evidence.ORB, Evidence.WRITING, Evidence.SPEED]),
        "50%",
        ["Benutzt der Spieler Elektronik innerhalb von 4m des Geistes, gibt es eine klein Chance, das sie direkt ausgeschaltet wird"],
        ["Kann keine Lichter anmachen.", "Beim Raumwechsel wird eher ein unbeleuchteter Raum gewählt.", "höhere Chance auf Lichter Zerstören Event"],
        ["häufiges wecheln in unbeleuchte Räume", "kaputte Lampen", "direktes Licht auschalten"]
    ),
    new Ghost(
        "Revenant",
        new Set<Evidence>([Evidence.ORB, Evidence.WRITING, Evidence.FREEZING]),
        "50%",
        ["Keine"],
        ["Wenn er den Aufenthaltsort eines Spielers ermittelt beschleunigt er auf 3m/s"],
        ["Super langsame Schrittfrequenz während der Jagt (1m/s), wenn der Aufenthaltsort der Spieler unbekannt ist."]
    ),
    new Ghost(
        "Shade",
        new Set<Evidence>([Evidence.EMF, Evidence.WRITING, Evidence.FREEZING, Evidence.SPEED]),
        "35%",
        ["Schmeißt nur Gegenstände / Startet eine Jagt nur wenn allein im Raum."],
        ["Zeigt sich häufiger in Schattenform als andere Geister.", "Geister-Event-Chance steigt mit sinkender Sanity (Kann kein Event auf 100% Sanity machen)"],
        ["Wenig Interaktion + spätes jagen"]
    ),
    new Ghost(
        "Demon",
        new Set<Evidence>([Evidence.ULTRAVIOLET, Evidence.WRITING, Evidence.FREEZING, Evidence.SPEED]),
        "70% / 100% (Fähigkeit)",
        ["Kann unabhängig der Sanity hunten."],
        ["Hat eine Interaktionreichweite von 5m", "Das Kruizifix hat eine 50% größere Reichweite.", "Minimum Cooldown von 20 Sekunden zwischen Hunts"],
        ["Jagt nach dem Smudgen innerhalb von 60 - 90 Sekunden"]
    ),
    new Ghost(
        "Yurei",
        new Set<Evidence>([Evidence.ORB, Evidence.FREEZING, Evidence.DOTS, Evidence.SPEED]),
        "50%",
        ["Kann eine Tür in seinem Raum komplett schließen und dabei dem Spieler 15% Sanity abziehen.", "Achtung: Andere Geister können das auch, nur ohne den Verlust der Sanity."],
        ["Wird für 60 Sekunden in seinem Raum eingesperrt.", "Events können trotzdem außerhalb stattfinden."],
        ["Mit einer Kerze in den Raum stellen und darauf warten, dass der Geist die Tür schließt. Anschließend überprüfen ob die Sanity um 15% gesunken ist."]),
    new Ghost(
        "Oni",
        new Set<Evidence>([Evidence.EMF, Evidence.FREEZING, Evidence.DOTS, Evidence.SPEED]),
        "50%",
        ["Interagiert mehr wenn Spieler im Geist Raum sind"],
        ["Kann kein Airball Event machen", "Events haben den doppelten Sanity Verlust zur Folge (20%).", "Währen einer Hunt ist ein Oni länger sichtbar."],
        ["Darauf achten ob HEY-Events kommen und ob der Geist sich mit Schatten oder Geist-Model zeigt oder nicht.\n" + "Ansonsten während der Jagd beobachten ob er seltener flackert als die anderen Geister."]
    ),
    // new Ghost(
    //     "Yokai",
    //     new Set<Evidence>([Evidence.BOX, Evidence.ORB, Evidence.DOTS, Evidence.SPEED]),
    //     "50% Sanity / 80% (Reden)",
    //     "Kann weder Stimmen noch Ausrüstung auf 2.5 Meter entfernung bemerken.\n" + "Wird aktiver, wenn man in der Nähe redet.\n" + "Die Musik-Box bricht erst wenn sie wesentlich näher beim Geist ist.",
    //     "Sprechen verärgert den Geist =>Höhere Chance auf Jagd",
    //     "Bei der Jagd hört der Yokai nur Stimmen in seiner Nähe",
    //     "Außerhalb der 2.5 Meter Radius des Geistes, während der Jagd stehen und nach ihm Rufen. Ignoriert er euch, habt ihr einen Yokai."
    // ),
    // new Ghost(
    //     "Hantu",
    //     new Set<Evidence>([Evidence.ULTRAVIOLET, Evidence.ORB, Evidence.FREEZING]),
    //     "50%",
    //     "\"Erhöht nicht die Geschwindigkeit wenn er einen Spieler sieht.\n" + "Geschwindigkeit während der Jagd: -1.4m/s bei 15°C -> 2.7m/s  ab 0°C\n" + "Der Geist hat während der Jagd Geisteratem vor SEINEM Mund\n" + "Hantu kann den Breaker nicht einschalten\n" + "Im Albtraum-Schwierigkeitsgrad hat er immer Gefriertemperaturen.",
    //     "Ist schneller wenn es kalt ist.",
    //     "Ist langsamer wenn es warm ist.",
    //     "Während der Jagd beobachten, ob er Geisteratem vor seinem Mund hat. Ansonsten auf die Schrittgeschwindkeit lauschen. Wird der Geist in der Nähe des Geisterraums schneller, dann habt ihr einen Hantu. Er wird schneller, weil es im Geisterraum kälter ist als woanders.\n" + "Zum weiteren Test könnt ihr auch den Breaker aus- oder anschalten und sehen ob er schneller bzw. langsamer wird.\n" + "Der Breaker hat Auswirkungen auf die Umgebungstemperatur."
    // ),
    // new Ghost(
    //     "Goryo",
    //     new Set<Evidence>([Evidence.EMF, Evidence.ULTRAVIOLET, Evidence.DOTS]),
    //     "50%",
    //     "Zeigt D.O.T.S. nur über die Kamera wenn niemand im Raum ist.\n" + "Verlässt seinen Raum nur selten.\n" + "Kann den Lieblingsraum nicht wechseln\n" + "Im Albtraum-Schwierigkeitsgrad zeigt er immer D.O.T.S",
    //     "Zeigt sich nur vor der Kamera, wenn niemand da ist.",
    //     "Sind selten weit von ihrem Todesort entfernt.",
    //     "Wenn der Geist D.O.T.S zeigt wenn man im Raum ist, dann ist es KEIN Goryo. Zeigt er es allerdings nur vor der Kamera, wenn niemand im Raum ist, dann ist das ein eindeutiger Beweis.\n" + "Außerdem wechselt er nie seinen Raum."
    // ),
    // new Ghost(
    //     "Myling",
    //     new Set<Evidence>([Evidence.EMF, Evidence.ULTRAVIOLET, Evidence.WRITING, Evidence.SPEED]),
    //     "50%",
    //     "Schritte und Geister-Geräusche sind während der Jagd auf 12m zu hören (sonst 20m)\n" + "Myling reagiert häufiger auf das Parabolmikrofon",
    //     "Leise bei der Jagd",
    //     "Gibt häufiger paranormale Geräusche ab",
    //     "Hört auf die Geräusche während der Jagd. Ist die Myling während der Jagd  nicht mehr zu hören? Kann sie weiter weg sein als 20m? Wenn Nein, habt ihr wohl eine Myling.\n" + "Ihr könnt euch auch vor das Versteck eine Taschenlampe legen und diese angeschaltet lassen. Wenn sich der Geist dieser auf 10 Meter nähert, beginnt sie zu flackern. Hört ihr den Geist immernoch leise? Wenn ja habt ihr eine Myling."
    // ),
    // new Ghost(
    //     "Onryo",
    //     new Set<Evidence>([Evidence.BOX, Evidence.ORB, Evidence.FREEZING, Evidence.SPEED]),
    //     "60% / 100% (Fähigkeit)",
    //     "Kann nicht innerhalb von 4m in einem Flammenradius jagen.\n" + "Wenn er 3 Kerzen ausbläst und keine weitere Flamme in der nähe findet, dann wird er eine jagd unabhängig von der Sanity starten.",
    //     "Das Auslöschen einer Flamme kann ihn angreifen lassen.",
    //     "Wenn er bedroht wird jagt er weniger gern.",
    //     "Stellt eine Kerze auf und legt ein Kruzifix daneben. \n" + "Zündet die Kerze an. Ein Onryo wird die Kerze schnell ausblasen. Zündet sie noch 2x wieder an. Nachdem der Geist das dritte Mal die Kerze ausgeblasen hat sucht er nach einer weiteren Kerze. Findet er keine, beginnt die Jagd unabhänggig  von eurer Sanity. Das Kruzifix wird euch dabei beschützen und angeknabbert oder zerstört werden."
    // ),
    // new Ghost(
    //     "The_Twins",
    //     new Set<Evidence>([Evidence.EMF, Evidence.BOX, Evidence.FREEZING]),
    //     "50%",
    //     "Kann mit mehreren Objekten in verschiedenen Reichweiten interagieren.\n" + "Stelle dir einen Kreis um den Geist vor, dies ist sein Interaktionsrahmen und einen größeren Kreis um diesen, welcher der sekundäre Geist darstellen soll. \n" + "Nur der Hauptgeist kann Salz und Bewegungssensoren auslösen.\n" + "Kann von jeder Position innerhalb des gesamten Kreises jagen.\n" + "Jagt der \"\"Hauptgeist\"\" dann ist er 110% schnell.\n" + "Jagt der \"\"Sekundärgeist\"\" dann ist er 90% schnell.\n" + "Technisch ist nur ein Geist da. Er immitiert zwei!",
    //     "Jeder der Zwillinge kann für sich angreifen.",
    //     "Sie interagieren oft gleichzeitig (Twinteraction)",
    //     "Achtet auf die Geschwindigkeit während der Jagd.\n" + "Variiert diese ein wenig von der normalen Geschwindigkeit?\n" + "Hört ihr/Bemerkt ihr dann noch Twinteractions? Dann habt ihr die Zwillinge."
    // ),
    // new Ghost(
    //     "Raiju",
    //     new Set<Evidence>([Evidence.EMF, Evidence.ORB, Evidence.DOTS]),
    //     "50% / 65% (mit Geräten)",
    //     "Kann früher jagen, wenn Geräte in der Nähe sind.\n" + "Kann sich nur von eingeschalteten Geräten ernähren.\n" + "Innerhalb von 6m/8m/10m (je nach Mapgröße) zieht er Energie von elektrischen Spielergeräten und wird schneller.\n" + "Innerhalb von 15m (sonst 10m) weisen Geräte Fehlfunktionen auf.",
    //     "Wird schneller mit elektrischen Geräten in der Nähe",
    //     "Stört elektronische Geräte während der Jagd.",
    //     "Erscheint der Geist sehr schnell? Entfernt alle technischen oder schaltet sie aus. Ist der Geist nun langsamer?"
    // ),
    // new Ghost(
    //     "Obake",
    //     new Set<Evidence>([Evidence.EMF, Evidence.ULTRAVIOLET, Evidence.ORB, Evidence.SPEED]),
    //     "50%",
    //     "Kann Fingerabdrücken mit 6 Fingern hinterlassen 25% Chance KEINE Fingerabdrücke zu hinterlassen\n" + "Kann die Zeit in der die Fingerabdrücke sichtbar sind reduzieren.\n" + "Im Albtraum-Schwierigkeitsgrad zeigt er immer Fingerabdrücke\n" + "Verändert mindestens 1x pro Jagd sein Aussehen für einen Blink",
    //     "Hinterlässt weniger Hinweise bei Interaktionen",
    //     "Manchmal verwandelt sich der Geist",
    //     "Der Obake hinterlässt möglicherweise einen weiteren \n" + "Fingerabdruck mit 6 Fingern. Außerdem solltet ihr euch merken wo er überall seine Fingerabdrücke hinterlassen hat.\n" + "Er hinterlässt nicht immer welche.\n" + "Zusätzlich wechselt er für einen Flash mindestens 1x die Jagd das Aussehen.",
    // ),
    // new Ghost(
    //     "The_Mimic",
    //     new Set<Evidence>([Evidence.BOX, Evidence.ULTRAVIOLET, Evidence.FREEZING, Evidence.ORB]),
    //     "unbekannt",
    //     "Zeigt zusätzlich zu seinen Beweisen einen Geisterorb.\n" + "Kann die Eigenarten eines beliebigen Geistes annehmen\n" + "Wechselt seinen Form alle 2.5 Minuten, aber nie während einer Jagd.\n" + "Im Albtraum-Schwierigkeitsgrad zeigt er zusätzlich den Orb und hat damit 3 Beweise.",
    //     "Unterschiedlich",
    //     "Geisterorb",
    //     "Beobachtet das Verhalten des Geistes.\n" + "Verhält er sich während der Jagd anders als das letzte Mal?\n" + "Ist ein Orb da?"
    // ),
    // new Ghost(
    //     "Moroi",
    //     new Set<Evidence>([Evidence.BOX, Evidence.WRITING, Evidence.FREEZING]),
    //     "50% Sanity",
    //     "Verflucht Spieler die eine Antwort aus dem Geisterbuch oder dem \n" + "Parabolmikrofon gehört haben. Dadurch verliert man passiv Sanity.\n" + "Licht und Kerzen können den Abfall nicht stoppen.\n" + "Sanity Pillen lösen den Fluch.\n" + "Smudgen blendet den Geist für 12 Sekunden\n" + "Wird schneller je niedriger die Sanity der Spieler ist (ab 45%). \n" + "Vorher ist er langsamer als üblich.\n" + "Im Abltraum-Schwierigkeitsgrad gibt es immer den Geisterbox-Beweis.",
    //     "Je schwächer die Opfer, desto stärker der Geist",
    //     "Stärkerer Geruchssinn was sie schwächt",
    //     "Ihr benötigt Antwort aus der Geisterbox, damit ihr vom Fluch des Moroi getroffen werdet.\n" + "Prüft eure Sanity. \n" + "Geht mit einer Kerze ins Gebäude und verweilt dort etwas.\n" + "Sinkt die Sanity trotz Kerze und ausbleiben von Geister-Events, so habt ihr einen Moroi!",
    // ),
    // new Ghost(
    //     "Deogen",
    //     new Set<Evidence>([Evidence.BOX, Evidence.WRITING, Evidence.DOTS]),
    //     "40%",
    //     "Während der Jagd super schnell solange er weit weg ist und findet den Weg zu einem Spieler. Wird langsam, wenn er sich in der Nähe des Spielers befindet.\n" + "Kann sein Ziel während der Jagd wechseln.\n" + "Hat einen einzigartigen Geisterbox Soundeffekt (Schweres Atmen)\n" + "Im Albtraum-Schwierigkeitsgrad gibt es immer den Geisterbox-Beweis.",
    //     "Deogen spüren die Lebenden. Verstecken nicht möglich.",
    //     "Bewegen sich langsam in der Nähe des Ziels",
    //     "Der Deogen wird mit gewaltiger Geschwindigkeit auf euch zugerannt kommen. Wenn ihr hört, wie er sich euch nähert und kurz vor euch furchtbar langsam wird, dann habt ihr einen Deogen.",
    // ),
    // new Ghost(
    //     "Thaye",
    //     new Set<Evidence>([Evidence.ORB, Evidence.WRITING, Evidence.DOTS]),
    //     "75% (jung) / 15% (alt)",
    //     "Der Geist altert.\n" + "Er reduziert seine Geschwindigkeit, je öfter er altert. \n" + "2.7m/s => 1m/s\n" + "Chance auf Geisterevents, Jagden und die allgmeine Aktivität sinken.\n" + "Wird nicht schneller, wenn er den Spieler während der Jagd sieht.\n" + "Erhöhte Chance auf D.O.T.S und Geisterbuch\n" + "Das Ouija-Board wird immer ein anderes Alter anzeigen, je nachdem wie alt der Geist ist.",
    //     "Defensiv und Agil sobald man ankommt.",
    //     "Wird mit der Zeit schwächer und ruhiger.",
    //     "Beobachtet ob der Geist immer ruhiger wird.\n" + "Noch auffälliger ist es, wenn der Geist mit der Zeit immer langsamer beim jagen wird. Falls das Ouija Board vorhanden ist könnt ihr auch zwischendurch nach dem Alter fragen, wenn ihr das Gefühl habt, dass der Geist langsamer geworden ist.\n" + "Er müsste dann älter sein als vorher."
    // )
]);
