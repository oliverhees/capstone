const trainingsData = [
  {
    exercises: [
      {
        _id: "e0001",
        name: "Kniebeugen",
        description:
          "Kniebeugen sind eine grundlegende Übung für die Beine. Stelle dich mit den Füßen schulterbreit auseinander und beuge die Knie, als ob du dich hinsetzen würdest. Halte den Rücken gerade und drücke dich dann wieder nach oben.",
        exercise_repetitions: "10-12",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=QKKZ9AGYTi4",
      },
      {
        _id: "e0002",
        name: "Liegestütze",
        description:
          "Liegestütze sind eine effektive Übung für den Oberkörper. Lege dich mit gestreckten Armen auf den Boden und drücke dich dann nach oben, bis die Arme fast gestreckt sind. Senke dich dann wieder ab und wiederhole die Bewegung.",
        exercise_repetitions: "8-10",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=IODxDxX7oi4",
      },
      {
        _id: "e0003",
        name: "Ausfallschritte",
        description:
          "Ausfallschritte sind eine Übung für die Beine und den Po. Stehe aufrecht und mache einen großen Schritt nach vorne. Beuge das vordere Knie, bis das hintere Knie fast den Boden berührt. Drücke dich dann mit dem vorderen Bein wieder nach oben und wechsle die Seite.",
        exercise_repetitions: "10-12",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=QOVaHwm-Q6U",
      },
      {
        _id: "e0004",
        name: "Plank",
        description:
          "Der Plank ist eine Übung für die Rumpfmuskulatur. Lege dich auf den Bauch und stütze dich auf die Unterarme und Zehen. Halte den Körper gerade und spanne die Bauchmuskeln an. Halte diese Position für die angegebene Zeit.",
        exercise_repetitions: "30-60 Sekunden",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=ASdvN_XEl_c",
      },
      {
        _id: "e0005",
        name: "Klimmzüge",
        description:
          "Klimmzüge sind eine anspruchsvolle Übung für den Oberkörper. Hänge dich an eine Stange und ziehe dich hoch, bis das Kinn über der Stange ist. Senke dich dann wieder ab und wiederhole die Bewegung.",
        exercise_repetitions: "6-8",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=2z8JmcrW-As",
      },
      {
        _id: "e0006",
        name: "Crunches",
        description:
          "Crunches sind eine Übung für die Bauchmuskeln. Lege dich auf den Rücken, beuge die Knie und stelle die Füße flach auf den Boden. Lege die Hände hinter den Kopf und hebe den Oberkörper an, bis die Schultern den Boden verlassen. Senke dich dann wieder ab und wiederhole die Bewegung.",
        exercise_repetitions: "12-15",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=Xyd_fa5zoEU",
      },
      {
        _id: "e0007",
        name: "Bergsteiger",
        description:
          "Bergsteiger sind eine Übung für die Bauchmuskeln und den Oberkörper. Gehe in die Liegestützposition und ziehe abwechselnd die Knie zur Brust. Halte den Körper dabei gerade und spanne die Bauchmuskeln an.",
        exercise_repetitions: "10-12",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=nmwgirgXLYM",
      },
      {
        _id: "e0008",
        name: "Trizeps Dips",
        description:
          "Trizeps Dips sind eine Übung für die Arme. Stelle dich mit dem Rücken zu einer Bank oder Stuhl und lege die Hände auf die Kante. Senke den Körper ab, indem du die Arme beugst, und drücke dich dann wieder nach oben.",
        exercise_repetitions: "8-10",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=0326dy_-CzM",
      },
      {
        _id: "e0009",
        name: "Superman",
        description:
          "Superman ist eine Übung für den unteren Rücken. Lege dich auf den Bauch und strecke die Arme nach vorne. Hebe gleichzeitig die Arme, den Kopf und die Beine vom Boden ab. Halte diese Position für die angegebene Zeit.",
        exercise_repetitions: "30-60 Sekunden",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=ccM8zv0Xo3k",
      },
      {
        _id: "e0010",
        name: "Seitliche Ausfallschritte",
        description:
          "Seitliche Ausfallschritte sind eine Übung für die Beine und den Po. Stehe aufrecht und mache einen großen Schritt zur Seite. Beuge das Standbein, bis das Knie fast im rechten Winkel ist. Drücke dich dann mit dem Standbein wieder nach oben und wechsle die Seite.",
        exercise_repetitions: "10-12",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=2z8JmcrW-As",
      },
      {
        _id: "e0011",
        name: "Russian Twist",
        description:
          "Russian Twist ist eine Übung für die seitlichen Bauchmuskeln. Setze dich auf den Boden und lehne dich leicht zurück. Hebe die Beine vom Boden ab und drehe den Oberkörper von einer Seite zur anderen. Berühre dabei den Boden auf jeder Seite.",
        exercise_repetitions: "12-15",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=3VcKaXpzqRo",
      },
      {
        _id: "e0012",
        name: "Beinheben",
        description:
          "Beinheben ist eine Übung für die Bauchmuskeln. Lege dich auf den Rücken und strecke die Beine nach oben. Hebe die Beine langsam an und senke sie dann wieder ab, ohne den Boden zu berühren.",
        exercise_repetitions: "10-12",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=JB2oyawG9KI",
      },
      {
        _id: "e0013",
        name: "Bizeps Curls",
        description:
          "Bizeps Curls sind eine Übung für die Arme. Halte in jeder Hand eine Hantel und beuge die Arme, um die Hanteln zur Schulter zu bringen. Senke die Hanteln dann wieder ab und wiederhole die Bewegung.",
        exercise_repetitions: "8-10",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=kwG2ipFRgfo",
      },
      {
        _id: "e0014",
        name: "Unterarmstütz",
        description:
          "Der Unterarmstütz ist eine Übung für die Rumpfmuskulatur. Lege dich auf den Bauch und stütze dich auf die Unterarme und Zehen. Halte den Körper gerade und spanne die Bauchmuskeln an. Halte diese Position für die angegebene Zeit.",
        exercise_repetitions: "30-60 Sekunden",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=ASdvN_XEl_c",
      },
      {
        _id: "e0015",
        name: "Ausfallschritte mit Kniehebungen",
        description:
          "Ausfallschritte mit Kniehebungen sind eine Übung für die Beine und den Po. Mache einen Ausfallschritt nach vorne und hebe das Knie des hinteren Beins zur Brust. Drücke dich dann mit dem vorderen Bein wieder nach oben und wechsle die Seite.",
        exercise_repetitions: "10-12",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=QOVaHwm-Q6U",
      },
      {
        _id: "e0016",
        name: "Mountain Climber",
        description:
          "Mountain Climber sind eine Übung für die Bauchmuskeln und den Oberkörper. Gehe in die Liegestützposition und ziehe abwechselnd die Knie zur Brust. Halte den Körper dabei gerade und spanne die Bauchmuskeln an.",
        exercise_repetitions: "10-12",
        number_of_sets: "3",
        exercise_video: "https://www.youtube.com/watch?v=nmwgirgXLYM",
      },
    ],
  },
];

export default trainingsData;
