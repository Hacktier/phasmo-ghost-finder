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
        ["Sicherunskasten an => Jinn Fähigkeit => Spieler im selben Raum / 3m Umkreis verlieren 25 Sanity", "Am Sicherungskasten wird ein EMF Level 2/5 erzeugt"],
        ["Kann den Sicherungskasten nicht ausschalten.", "Hunt => Sicherungskasten an + Entfernung mehr als 3m zum Spieler + Line of sight => Speed = 2,5m/s"],
        ["Sicherunskasten einschalten => EMF auf den Sicherunskasten legen "]
    ),
    new Ghost(
        "Mare",
        new Set<Evidence>([Evidence.BOX, Evidence.ORB, Evidence.WRITING, Evidence.SPEED]),
        "40% / 60% (Licht aus)",
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
        ["Hat eine Interaktionreichweite von 5m", "Das Kruzifix hat eine 50% größere Reichweite.", "Minimum Cooldown von 20 Sekunden zwischen Hunts"],
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
    new Ghost(
        "Yokai",
        new Set<Evidence>([Evidence.BOX, Evidence.ORB, Evidence.DOTS, Evidence.SPEED]),
        "50% / 80% (Reden)",
        ["Kann temporär ab 80% jagen wenn in seiner nähe geredet wird."],
        ["Bei der Jagd hört der Yokai nur Stimmen / Spielergeräte in seiner Nähe", "Die Musikbox het eine geringe Funktionsreichweite "],
        ["Während einer Hunt in mindestens 2,5m Entfernung sprechen / Spielergeräte benutzen => Keine Geister Reaktion "]
    ),
    new Ghost(
        "Hantu",
        new Set<Evidence>([Evidence.ULTRAVIOLET, Evidence.ORB, Evidence.FREEZING]),
        "50%",
        ["Kann den Sicherungskasten nicht einschalten, schaltet ihn aber 2x so häufig aus wie andere Geister."],
        ["Tempo abhängig von der Temperatur: >15°C = 1,4m/s / <0°C = 2,7m/s", "Keine Sicht Beschleunigung.", "Wenn es nur 1 oder 2 Beweise gibt => immer Freezing."],
        ["Änderung der Geschwindigkeit in verschiedenen Räumen", "Sicherungskasten aus => Geist hat weiße Atemwolken vor dem Mund"]
    ),
    new Ghost(
        "Goryo",
        new Set<Evidence>([Evidence.EMF, Evidence.ULTRAVIOLET, Evidence.DOTS, Evidence.SPEED]),
        "50%",
        ["Eine D.O.T.S Interaktion kann nur durch eine Videkamera gesehen werden wenn sich kein Spieler im Raum befindet.", "Wenn es nur 1 oder 2 Beweise gibt => immer D.O.T.S"],
        ["Ein Goryo kann niemals selbständig den Raum wechseln."],
        ["Wenn eine D.O.T.S Interaktion nur über die Kamera sichtbar ist und nicht im Raum selbst ohne ist es ein Goryo."]
        ),
    new Ghost(
        "Myling",
        new Set<Evidence>([Evidence.EMF, Evidence.ULTRAVIOLET, Evidence.WRITING, Evidence.SPEED]),
        "50%",
        ["Verursacht häufig Sounds die über das Parabol Mikrofon zu hören sind."],
        ["Während einer Hunt ist ein Myling nur auf 12m hörbar.", "Ist leiser als andere Geister"],
        ["Hunt => Geist ist in der selben Etage => Taschenlampe im Versteck fallenlassen => Flackert nur wenn der Geist hörbar ist"]
    ),
    new Ghost(
        "Onryo",
        new Set<Evidence>([Evidence.BOX, Evidence.ORB, Evidence.FREEZING, Evidence.SPEED]),
        "60% / 100% (Fähigkeit)",
        ["Kann in einem 4m Radius um eine Flamme nicht hunten, die Kerze wird ausgeblasen und die Hunt scheitert."],
        ["Je mehr tote Spieler desto größer ist die Flammen auspust Frequenz.", "Unter 60% Sanity werden mehr Kerzen ausgepustet (scheiternde Hunts)", "Flammen sorgen nicht dafür das der Onryo seinen Raum wechselt!"],
        ["Kruzifix und angezündete Kerze platzieren => Kruzifix wird zuerst ausgelöst => Kein Onryo", "3 Flammen Methode => nach jeder 3. ausgepusteten Flamme wird eine Hunt iniziert (Kruzifix zum Schutz)."]
    ),
    new Ghost(
        "The_Twins",
        new Set<Evidence>([Evidence.EMF, Evidence.BOX, Evidence.FREEZING]),
        "50%",
        ["Eine Interaktion wird in einem Umkreis bis zu 3m ausgelöst. Durch das einsetzten seiner Fähigkeit kann er eine weitere Interaktion, zeitgleich in einem Umkreis bis zu 16m ausführen."],
        ["50% Chance Hunt an der Geist Position zu beginnen (1,5m/s), 50% Chance Hunt an der Position der letzten entfernten Interaktion (1,9m/s) zu beginnen.", "Kruzifix Check erfolgt immer an der Geist Position."],
        ["Auf wechselnde Geschwindigkeit zwischen den hunts achten", "An entfernten Inteaktion können die Beweise Freezing und Spirit Box nicht erkannt werden da der Geist nicht dort ist"]
    ),
    new Ghost(
        "Raiju",
        new Set<Evidence>([Evidence.EMF, Evidence.ORB, Evidence.DOTS]),
        "50% / 65% (mit Geräten)",
        ["Hunt ab 65% Sanity wenn aktive elektronisch Geräte in der Nähe des Geistes sind.", "Hunt / Event => Raiju inteferiert mit Elektronik bis zu 15m entfernt (alle anderen Geister 10m)"],
        ["Hunt => Geschwindigkeit auf 2,5m/s wenn Raiju in der Nähe aktiver elektronisch Geräte (Map Größen: S=6m, M=8m, L=10m)"],
        ["auf hohe Geschwindigkeit bei einer Hunt achten => Sanity Pillen(>60%) => akive Elektronik in den Geistraum legen"]
    ),
    new Ghost(
        "Obake",
        new Set<Evidence>([Evidence.EMF, Evidence.ULTRAVIOLET, Evidence.ORB, Evidence.SPEED]),
        "50%",
        ["Nur 75% Chance bei Interaktion mit Oberflächen Ultraviolet zu hinterlassen", "Kann die Zeit die UV Beweise verbleiben halbieren => Fähigkeit ist stackbar"],
        ["Kann zu einer 1/6 Chance einzigartige Fingerabdrücke hinterlassen: 6 Finger, 2 Lichschalter, 5 Finger Tastaturen und Zellentüren", "Wenn es nur 1 oder 2 Beweise gibt => immer UV", "mind. 1x pro Hunt wechselt er sein Aussehen zusätzlich kann er zu einer 1/16 Chance häufiger wechseln"],
        ["Berührte Oberflächen immer mit UV Licht überprüfen => erst kein UV Beweis => später UV Beweis => Obake"]
    ),
    new Ghost(
        "The_Mimic",
        new Set<Evidence>([Evidence.BOX, Evidence.ULTRAVIOLET, Evidence.FREEZING, Evidence.ORB, Evidence.SPEED]),
        "unbekannt",
        ["Kann jeden anderen Geist imitieren (Events / Interaktionen Häufigkeit + Präferenzen, Hunt Sanity Schwellenwert, Geschwindigkeit, Fähigkeit)"],
        ["Kann auch Obake Handabdruck kopieren.", "Wenn es nur 1 oder 2 Beweise gibt => keine garantierten Hinweise andere Geister", "Wechselt den imitierten Geist alle 30s - 120s.", "Kann nicht während der Hunt wechseln.",  "Zeigt in jedem Schwierigkeitsgrad einen Ghost Orb."],
        ["Auf Verhaltenswechsel achten.", "Auf Aktionen achten, die nicht zu gefundenen Beweisen passen, z.B. Twin Interaktion an 2 entfernten Türen + UV => Twins haben kein UV"]
    ),
    new Ghost(
        "Moroi",
        new Set<Evidence>([Evidence.BOX, Evidence.WRITING, Evidence.FREEZING]),
        "50% ",
        ["Verflucht Spieler die ihn über die Spirit Box oder das Parabolmikrofon gehört haben, der Sanity Verlust wird verdoppelt und beleuchtete Areale verhindern nicht mehr den Verlust von Sanity.", "Kann durch Sanity Pillen geheilt werden."],
        ["Geschiwindigkeit hängt von der Durchschitts Sanity ab (>=45% Sanity = 1,5m/s / <5% = 2,25m/s)", "Max. Geschwindigkeit: 3,71m/s (Sicht Beschleunigung).", "Weihrauch lässt den Moroi 50% länger erblinden."],
        ["Spirit Box Antwort => auf stark erhöhten Sanity Verlust achten", "<45% Sanity => Hunt & Geist in Hörweite => Sanity Pillen => Live auf Geschwindigkeitsänderung achten"]
    ),
    new Ghost(
        "Deogen",
        new Set<Evidence>([Evidence.BOX, Evidence.WRITING, Evidence.DOTS]),
        "40%",
        ["Weiß immer wo sich die Spieler befinden (verstecken ist sinnlos). Während einer Hunt bewegt er sich mit hoher Geschwindigkeit zum nächsten Spieler um kurz vor ihm abzubremsen (>6m = 3m/s / <2,5m = 0,4m/s)."],
        ["Flackert weniger als andere Geister während der Hunt.", "Spirit Box Antwort => Deogen im Umkreis von 1m => 33% Change für ein stierartiges Atmen","Wenn es nur 1 oder 2 Beweise gibt => immer Spirit Box"],
        ["mit Weihrauch verstecken => Geist findet dich in mehreren Verstecken", "Geist Loopen und auf Geschwindigkeitswechsel achten."]
    ),
    new Ghost(
        "Thaye",
        new Set<Evidence>([Evidence.ORB, Evidence.WRITING, Evidence.DOTS]),
        "75% (jung) / 15% (alt)",
        ["Versucht alle 1-2 min zu altern => wenn kein Spieler im Geist Raum scheitert es und wird nach 30s erneut versucht"],
        ["Alter beeinflusst:", "Hunt Schwellenwert (-6% pro Jahr)", "Hunt Geschwindigkeit (0J = 2,75m/s / 10J = 1m/s)", "Interaktions Häufigkeit (0J = 200% / 10J = 50%)" ],
        ["Ouija Brett => mehrfach nach dem Alter fragen", "Geist ist zum Anfang sehr aktiv und wird inaktiver", "Geschwindigkeit des Geistes ist bei späteren Hunts merklich langsamer"]
    )
]);
