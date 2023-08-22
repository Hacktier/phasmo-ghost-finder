import Ghost from "~/src/model/Ghost";
import {Evidence} from "~/src/model/Evidence";

export default new Set([
    new Ghost(
        "Spirit",
        new Set<Evidence>([Evidence.EMF, Evidence.BOX, Evidence.WRITING, Evidence.SPEED]),
        "Ein Smudge l\&ouml;st aus, dass der Geist 180 Sekunden nicht mehr jagen kann.",
        "Keine",
        "Das Verwenden von R&auml;ucherst&auml;bchen h&auml;lt ihn f&uumlr l&auml;ngere Zeit davon ab anzugreifen.",
        "Bei niedrieger Sanity smudgen und sehen ob der Geist später jagt als üblich."
    ),
    new Ghost(
        "Wraith",
        new Set<Evidence>([Evidence.EMF, Evidence.BOX, Evidence.DOTS, Evidence.SPEED]),
        "Laufen niemals in Salz. Teleportieren sich zu einem Spieler => EMF2 => laufen dann zurück in ihren Raum",
        "Berührt fast nie den Boden => Keine Fußabdrücke",
        "Angst vor Salz",
        "Eine Reihe aus Salz legen und einen Bewegungssensor hängen und sehen ob der durchläuft. Oder: (gut für größere Maps) Einen Haufen Salz auf den Boden streuen darauf einen Bewegungsmelder legen, drauf stehen bleiben und warten ob EMF2 ausgelöst wird und der Bewegungsmelder triggert. Wenn ja hat sich das Gespenst teleportiert."
    ),
    new Ghost(
        "Phantom",
        new Set<Evidence>([Evidence.BOX, Evidence.ULTRAVIOLET, Evidence.DOTS, Evidence.SPEED]),
        "Wird unsichtbar nach einem Foto. Ist bei der Jagd länger unsichtbar. Folgt gerne Spielern.",
        "Ansehen schwächt die Sanity",
        "Fotos lassen es verschwinden",
        "Foto während eines Events oder einer Jagd machen. Sollte der Geist verschwinden ist es Phantom. Tipp: Auf dem Geisterfoto ist der Geist nicht zu sehen und die Umgebung ist nicht verkriselt oder gestört."
    ),
    new Ghost(
        "Poltergeist",
        new Set<Evidence>([Evidence.ULTRAVIOLET, Evidence.BOX, Evidence.WRITING, Evidence.SPEED]),
        "Kann mehrere Objekte gleichzeiitg werfen => - 2% Sanity pro Objekt 100% Chance (andere 50%) alle 0.5 sekunden ein Objekt während der Jagd zu werfen. Kann Objekte weiter und härter werfen.",
        "Kann mehrere Gegenstände mit großer Kraft werfen",
        "In einem leeren Raum ist er machtlos",
        "Möglichst viele Items auf einen Haufen werfen und sehen ob der Geist den Haufen explodieren lässt.",
    ),
    new Ghost(
        "Banshee",
        new Set<Evidence>([Evidence.ULTRAVIOLET, Evidence.ORB, Evidence.DOTS, Evidence.SPEED]),
        "Nimmt einen Spieler als Ziel. Folgt ihrem Ziel. Ignoriert Spieler, die nicht ihr Ziel sind Erhöhte Chance für Sing-Geisterevents",
        "Banshee schwächt ihr Ziel",
        "Bansheeschrei im Parabolmikrofon",
        "Viel das Parabolmikrofon verwenden und auf den Banshee-Schrei hoffen. Bei der Jagd mit mehreren Spielern verfolgt sie nur den anvisierten Spieler und ignoriert alle anderen."
    ),
    new Ghost(
        "Jinn",
        new Set<Evidence>([Evidence.EMF, Evidence.ULTRAVIOLET, Evidence.FREEZING]),
        "WENN Breaker an ist:\n" + "Schneller als normal. wird aber im 3m Radius um den Spieler langsamer\n" + "Kann einen Spieler um 25% Sanity schwächen => EMF am Breaker",
        "Schnell wenn Opfer weit weg ist",
        "Ohne Strom verliert er seine Fähigkeiten",
        "Breaker einschalten -> EMF auf den Breaker legen -> Wenn der Dschinn sein Ability benutzen will, geht das EMF los!",
    ),
    new Ghost(
        "Mare",
        new Set<Evidence>([Evidence.BOX, Evidence.ORB, Evidence.WRITING, Evidence.SPEED]),
        "\"Schaltet gern Lichter aus.\n" + "Höhere Chance für das Lichter-Zerstören-Event\n" + "Wandert mehr wenn Licht an ist.\n" + "Chance das Licht direkt auszuschalten wenn es eingeschaltet wird",
        "Greift eher im Dunkeln an",
        "Greift seltener im Licht an",
        "Hoffen dass der Geist das Licht direkt ausschaltet. Schaltet der Geist das Licht an, ist es KEIN Mare."
    ),
    new Ghost(
        "Revenant",
        new Set<Evidence>([Evidence.ORB, Evidence.WRITING, Evidence.FREEZING]),
        "Beschleunigt sofort auf Max-Geschwindigkeit wenn er Spieler erblickt\n" + "Nachdem er die letzte bekannte Position des Spielers erreicht hat wird er langsam langsamer",
        "Wird schneller wenn er sein Opfer jagd",
        "Bewegt sich langsam ohne Ziel",
        "Während der Jagd auf die Schritte des Geistes hören.Sollte die Schrittfrequenz super langsam sein, handelt es sich um einen Revenant. Um ganz sicher zu gehen kann man sich dem Rev auch zeigen. ACHTUNG LEBENSGEFAHR! Er wird wie ein verdammter Bulle auf einen zustürmen."
    ),
    new Ghost(
        "Shade",
        new Set<Evidence>([Evidence.EMF, Evidence.WRITING, Evidence.FREEZING, Evidence.SPEED]),
        "Ist der inaktivste Geist.\n" + "Zeigt sich häufiger in Schattenform als andere Geister.\n" + "Schmeißt nur Gegenstände wenn allein im Raum.\n" + "Geister-Event-Chance steigt mit sinkender Sanity",
        "Schüchtern => Weniger Events, Aktivität",
        "Jagd nur wenn alleine in seinem  Raum",
        "Sehr ruhig, lässt nicht viel von sich hören und jagt erst sehr spät. Bringt eure Sanity über 35%. Kommt dann keine Jagd mehr, so könnt ihr sicher sein, dass es ein Shade ist."
    ),
    new Ghost(
        "Demon",
        new Set<Evidence>([Evidence.ULTRAVIOLET, Evidence.WRITING, Evidence.FREEZING, Evidence.SPEED]),
        "Cooldown zwischen Jagden ist 20 statt 25 Sekunden\n" + "Außerhalb der Jagd smudgen schützt für 60 sekunden vor einer Jagd (statt 90)\n" + "Kruzifix hat einen höheren Radius 3m -> 5m",
        "Jagd öfter",
        "Fürchtet das Kruzifix",
        "Außerhalb der Jagd den Geist Smudgen. Sollte er zwischen 60 und 90 Sekunden danach jagen, habt ihr einen Dämon. \n" + "Achtet darauf niedrige Sanity zu haben um die Jagdchance zu erhöhen."
    ),
    new Ghost(
        "Yurei",
        new Set<Evidence>([Evidence.ORB, Evidence.FREEZING, Evidence.DOTS, Evidence.SPEED]),
        "Kann eine Tür in seinem Raum komplett schließen und dabei dem Spieler 15% Sanity rauben. Aber Achtung: Andere Geister können das auch nur ohne den Verlust der Sanity.\n" + "Wir der Geist gesmudged wird er eine Weile in seinem Raum eingesperrt.",
        "Stärkerer Einfluss auf Sanity",
        "Stellt Bewegung nach Räuchern ein",
        "Den Sanitywert prüfen und möglichst 20-30% oberhalb der Jagdchancegrenze haben. Mit einer Kerze in den Raum stellen und darauf warten, dass der Geist die Tür schließt. \n" + "Dann raus in den Truck gehen und die Sanity prüfen ob sie um 15% gesunken ist. Dies kann natürlich auch ein anderer Spieler übernehmen\n" + "ACHTUNG: Geisterevents ziehen trotzdem Sanity."
    ),
    new Ghost(
        "Oni",
        new Set<Evidence>([Evidence.EMF, Evidence.FREEZING, Evidence.DOTS, Evidence.SPEED]),
        "Kann kein HEY-Event (Mist Event)\n" + "Zeigt sich nur in voller Pracht.\n" + "NEU: Er kann sich auch als Schatten oder Geist zeigen!\n" + "Onis verdoppeln den Sanity-Verlust wenn man von einem Event betroffen ist\n" + "Flackert seltener während der Jagd.",
        "Aktiver wenn in Gesellschaft",
        "Verschwinden seltener bei der Jagd",
        "Darauf achten ob HEY-Events kommen und ob der Geist sich mit Schatten oder Geist-Model zeigt oder nicht.\n" + "Ansonsten während der Jagd beobachten ob er seltener flackert als die anderen Geister."
    ),
    new Ghost(
        "Yokai",
        new Set<Evidence>([Evidence.BOX, Evidence.ORB, Evidence.DOTS, Evidence.SPEED]),
        "Kann weder Stimmen noch Ausrüstung auf 2.5 Meter entfernung bemerken.\n" + "Wird aktiver, wenn man in der Nähe redet.\n" + "Die Musik-Box bricht erst wenn sie wesentlich näher beim Geist ist.",
        "Sprechen verärgert den Geist =>Höhere Chance auf Jagd",
        "Bei der Jagd hört der Yokai nur Stimmen in seiner Nähe",
        "Außerhalb der 2.5 Meter Radius des Geistes, während der Jagd stehen und nach ihm Rufen. Ignoriert er euch, habt ihr einen Yokai."
    ),
    new Ghost(
        "Hantu",
        new Set<Evidence>([Evidence.ULTRAVIOLET, Evidence.ORB, Evidence.FREEZING]),
        "\"Erhöht nicht die Geschwindigkeit wenn er einen Spieler sieht.\n" + "Geschwindigkeit während der Jagd: -1.4m/s bei 15°C -> 2.7m/s  ab 0°C\n" + "Der Geist hat während der Jagd Geisteratem vor SEINEM Mund\n" + "Hantu kann den Breaker nicht einschalten\n" + "Im Albtraum-Schwierigkeitsgrad hat er immer Gefriertemperaturen.",
        "Ist schneller wenn es kalt ist.",
        "Ist langsamer wenn es warm ist.",
        "Während der Jagd beobachten, ob er Geisteratem vor seinem Mund hat. Ansonsten auf die Schrittgeschwindkeit lauschen. Wird der Geist in der Nähe des Geisterraums schneller, dann habt ihr einen Hantu. Er wird schneller, weil es im Geisterraum kälter ist als woanders.\n" + "Zum weiteren Test könnt ihr auch den Breaker aus- oder anschalten und sehen ob er schneller bzw. langsamer wird.\n" + "Der Breaker hat Auswirkungen auf die Umgebungstemperatur."
    ),
    new Ghost(
        "Goryo",
        new Set<Evidence>([Evidence.EMF, Evidence.ULTRAVIOLET, Evidence.DOTS]),
        "Zeigt D.O.T.S. nur über die Kamera wenn niemand im Raum ist.\n" + "Verlässt seinen Raum nur selten.\n" + "Kann den Lieblingsraum nicht wechseln\n" + "Im Albtraum-Schwierigkeitsgrad zeigt er immer D.O.T.S",
        "Zeigt sich nur vor der Kamera, wenn niemand da ist.",
        "Sind selten weit von ihrem Todesort entfernt.",
        "Wenn der Geist D.O.T.S zeigt wenn man im Raum ist, dann ist es KEIN Goryo. Zeigt er es allerdings nur vor der Kamera, wenn niemand im Raum ist, dann ist das ein eindeutiger Beweis.\n" + "Außerdem wechselt er nie seinen Raum."
    ),
    new Ghost(
        "Myling",
        new Set<Evidence>([Evidence.EMF, Evidence.ULTRAVIOLET, Evidence.WRITING, Evidence.SPEED]),
        "Schritte und Geister-Geräusche sind während der Jagd auf 12m zu hören (sonst 20m)\n" + "Myling reagiert häufiger auf das Parabolmikrofon",
        "Leise bei der Jagd",
        "Gibt häufiger paranormale Geräusche ab",
        "Hört auf die Geräusche während der Jagd. Ist die Myling während der Jagd  nicht mehr zu hören? Kann sie weiter weg sein als 20m? Wenn Nein, habt ihr wohl eine Myling.\n" + "Ihr könnt euch auch vor das Versteck eine Taschenlampe legen und diese angeschaltet lassen. Wenn sich der Geist dieser auf 10 Meter nähert, beginnt sie zu flackern. Hört ihr den Geist immernoch leise? Wenn ja habt ihr eine Myling."
    ),
    new Ghost(
        "Onryo",
        new Set<Evidence>([Evidence.BOX, Evidence.ORB, Evidence.FREEZING, Evidence.SPEED]),
        "Kann nicht innerhalb von 4m in einem Flammenradius jagen.\n" + "Wenn er 3 Kerzen ausbläst und keine weitere Flamme in der nähe findet, dann wird er eine jagd unabhängig von der Sanity starten.",
        "Das Auslöschen einer Flamme kann ihn angreifen lassen.",
        "Wenn er bedroht wird jagt er weniger gern.",
        "Stellt eine Kerze auf und legt ein Kruzifix daneben. \n" + "Zündet die Kerze an. Ein Onryo wird die Kerze schnell ausblasen. Zündet sie noch 2x wieder an. Nachdem der Geist das dritte Mal die Kerze ausgeblasen hat sucht er nach einer weiteren Kerze. Findet er keine, beginnt die Jagd unabhänggig  von eurer Sanity. Das Kruzifix wird euch dabei beschützen und angeknabbert oder zerstört werden."
    ),
    new Ghost(
        "Twins",
        new Set<Evidence>([Evidence.EMF, Evidence.BOX, Evidence.FREEZING]),
        "Kann mit mehreren Objekten in verschiedenen Reichweiten interagieren.\n" + "Stelle dir einen Kreis um den Geist vor, dies ist sein Interaktionsrahmen und einen größeren Kreis um diesen, welcher der sekundäre Geist darstellen soll. \n" + "Nur der Hauptgeist kann Salz und Bewegungssensoren auslösen.\n" + "Kann von jeder Position innerhalb des gesamten Kreises jagen.\n" + "Jagt der \"\"Hauptgeist\"\" dann ist er 110% schnell.\n" + "Jagt der \"\"Sekundärgeist\"\" dann ist er 90% schnell.\n" + "Technisch ist nur ein Geist da. Er immitiert zwei!",
        "Jeder der Zwillinge kann für sich angreifen.",
        "Sie interagieren oft gleichzeitig (Twinteraction)",
        "Achtet auf die Geschwindigkeit während der Jagd.\n" + "Variiert diese ein wenig von der normalen Geschwindigkeit?\n" + "Hört ihr/Bemerkt ihr dann noch Twinteractions? Dann habt ihr die Zwillinge."
    ),
    new Ghost(
        "Raiju",
        new Set<Evidence>([Evidence.EMF, Evidence.ORB, Evidence.DOTS]),
        "Kann früher jagen, wenn Geräte in der Nähe sind.\n" + "Kann sich nur von eingeschalteten Geräten ernähren.\n" + "Innerhalb von 6m/8m/10m (je nach Mapgröße) zieht er Energie von elektrischen Spielergeräten und wird schneller.\n" + "Innerhalb von 15m (sonst 10m) weisen Geräte Fehlfunktionen auf.",
        "Wird schneller mit elektrischen Geräten in der Nähe",
        "Stört elektronische Geräte während der Jagd.",
        "Erscheint der Geist sehr schnell? Entfernt alle technischen oder schaltet sie aus. Ist der Geist nun langsamer?"
    ),
    new Ghost(
        "Obake",
        new Set<Evidence>([Evidence.EMF, Evidence.ULTRAVIOLET, Evidence.ORB, Evidence.SPEED]),
        "Kann Fingerabdrücken mit 6 Fingern hinterlassen 25% Chance KEINE Fingerabdrücke zu hinterlassen\n" + "Kann die Zeit in der die Fingerabdrücke sichtbar sind reduzieren.\n" + "Im Albtraum-Schwierigkeitsgrad zeigt er immer Fingerabdrücke\n" + "Verändert mindestens 1x pro Jagd sein Aussehen für einen Blink",
        "Hinterlässt weniger Hinweise bei Interaktionen",
        "Manchmal verwandelt sich der Geist",
        "Der Obake hinterlässt möglicherweise einen weiteren \n" + "Fingerabdruck mit 6 Fingern. Außerdem solltet ihr euch merken wo er überall seine Fingerabdrücke hinterlassen hat.\n" + "Er hinterlässt nicht immer welche.\n" + "Zusätzlich wechselt er für einen Flash mindestens 1x die Jagd das Aussehen.",
    ),
    new Ghost(
        "Mimik",
        new Set<Evidence>([Evidence.BOX, Evidence.ULTRAVIOLET, Evidence.FREEZING, Evidence.ORB]),
        "Zeigt zusätzlich zu seinen Beweisen einen Geisterorb.\n" + "Kann die Eigenarten eines beliebigen Geistes annehmen\n" + "Wechselt seinen Form alle 2.5 Minuten, aber nie während einer Jagd.\n" + "Im Albtraum-Schwierigkeitsgrad zeigt er zusätzlich den Orb und hat damit 3 Beweise.",
        "Unterschiedlich",
        "Geisterorb",
        "Beobachtet das Verhalten des Geistes.\n" + "Verhält er sich während der Jagd anders als das letzte Mal?\n" + "Ist ein Orb da?"
    ),
    new Ghost(
        "Moroi",
        new Set<Evidence>([Evidence.BOX, Evidence.WRITING, Evidence.FREEZING]),
        "Verflucht Spieler die eine Antwort aus dem Geisterbuch oder dem \n" + "Parabolmikrofon gehört haben. Dadurch verliert man passiv Sanity.\n" + "Licht und Kerzen können den Abfall nicht stoppen.\n" + "Sanity Pillen lösen den Fluch.\n" + "Smudgen blendet den Geist für 12 Sekunden\n" + "Wird schneller je niedriger die Sanity der Spieler ist (ab 45%). \n" + "Vorher ist er langsamer als üblich.\n" + "Im Abltraum-Schwierigkeitsgrad gibt es immer den Geisterbox-Beweis.",
        "Je schwächer die Opfer, desto stärker der Geist",
        "Stärkerer Geruchssinn was sie schwächt",
        "Ihr benötigt Antwort aus der Geisterbox, damit ihr vom Fluch des Moroi getroffen werdet.\n" + "Prüft eure Sanity. \n" + "Geht mit einer Kerze ins Gebäude und verweilt dort etwas.\n" + "Sinkt die Sanity trotz Kerze und ausbleiben von Geister-Events, so habt ihr einen Moroi!",
    ),
    new Ghost(
        "Deogen",
        new Set<Evidence>([Evidence.BOX, Evidence.WRITING, Evidence.DOTS]),
        "Während der Jagd super schnell solange er weit weg ist und findet den Weg zu einem Spieler. Wird langsam, wenn er sich in der Nähe des Spielers befindet.\n" + "Kann sein Ziel während der Jagd wechseln.\n" + "Hat einen einzigartigen Geisterbox Soundeffekt (Schweres Atmen)\n" + "Im Albtraum-Schwierigkeitsgrad gibt es immer den Geisterbox-Beweis.",
        "Deogen spüren die Lebenden. Verstecken nicht möglich.",
        "Bewegen sich langsam in der Nähe des Ziels",
        "Der Deogen wird mit gewaltiger Geschwindigkeit auf euch zugerannt kommen. Wenn ihr hört, wie er sich euch nähert und kurz vor euch furchtbar langsam wird, dann habt ihr einen Deogen.",
    ),
    new Ghost(
        "Thaye",
        new Set<Evidence>([Evidence.ORB, Evidence.WRITING, Evidence.DOTS]),
        "Der Geist altert.\n" + "Er reduziert seine Geschwindigkeit, je öfter er altert. \n" + "2.7m/s => 1m/s\n" + "Chance auf Geisterevents, Jagden und die allgmeine Aktivität sinken.\n" + "Wird nicht schneller, wenn er den Spieler während der Jagd sieht.\n" + "Erhöhte Chance auf D.O.T.S und Geisterbuch\n" + "Das Ouija-Board wird immer ein anderes Alter anzeigen, je nachdem wie alt der Geist ist.",
        "Defensiv und Agil sobald man ankommt.",
        "Wird mit der Zeit schwächer und ruhiger.",
        "Beobachtet ob der Geist immer ruhiger wird.\n" + "Noch auffälliger ist es, wenn der Geist mit der Zeit immer langsamer beim jagen wird. Falls das Ouija Board vorhanden ist könnt ihr auch zwischendurch nach dem Alter fragen, wenn ihr das Gefühl habt, dass der Geist langsamer geworden ist.\n" + "Er müsste dann älter sein als vorher."
    )
]);