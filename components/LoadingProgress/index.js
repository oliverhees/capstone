import { useEffect, useState } from "react";

const phrases = [
  "Fragenkatalog wird analysiert...",
  "Das KI-Monster wir gezähmt...",
  "Trainingsdaten werden zusammengestellt...",
  "Übungen werden geklöppelt...",
  "Antwortmuster werden generiert...",
  "Abstimmung der semantischen Matrix...",
  "Metadaten werden verknüpft...",
  "Kreative Algorithmen werden aktiviert...",
  "Hyperverbundene Denkprozesse werden initialisiert...",
  "Neuronale Schleifen werden optimiert...",
  "Quantenbits werden ausgeglichen...",
  "Kausale Wahrscheinlichkeiten werden abgeglichen...",
  "Algorithmische Magie wird gewirkt...",
  "Intergalaktische Verbindungen werden hergestellt...",
  "Wir sind fast fertig...aber da kommt noch was rein...",
  "Anfrage wird in sprachliche Bausteine umgewandelt...",
  "Antworten aus dem kollektiven Wissen werden extrahiert...",
  "Symbiotische KI-Stränge werden verflochten...",
  "Eine Prise neuronaler Synchronizität wird hinzugefügt...",
  "Letzte Überprüfung der Antwortintegrität...",
  "Der Ladevorgang nähert sich dem Abschluss.",
  "Antwort wird in verständliche Sprache übersetzt...",
  "Semantische Variabilität wird angewandt...",
  "Antwort wird finalisiert und formatiert...",
  "Antwort übermittelt!",
  "Ladevorgang abgeschlossen. Dein Trainingsplan ist fertig!",
];

const LoadingComponent = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    if (currentPhraseIndex < phrases.length - 1) {
      const setTime = Math.round(85000 / phrases.length);
      console.log(setTime);
      const timeout = setTimeout(() => {
        setCurrentPhraseIndex(currentPhraseIndex + 1);
      }, setTime);

      return () => clearTimeout(timeout);
    }
  }, [currentPhraseIndex]);

  return (
    <div>
      <h2>Wir erstellen jetzt deinen Trainingsplan</h2>
      {phrases[currentPhraseIndex]}
    </div>
  );
};

export default LoadingComponent;
