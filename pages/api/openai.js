import { OpenAIApi, Configuration } from "openai";
import { ExerciseFormat } from "../../lib/data-format";

export default async function handler(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Du übernimmst die Rolle eines kompetenten Assistenten, der auf personalisierte Anfragen Trainingsempfehlungen gibt. Antworte bitte im angegebenen JSON-Format und beachte die Anweisungen des Benutzers sorgfältig. Deine Antworten sollten präzise, hilfreich und auf die Erstellung eines Trainingsplans mit Eigengewichtsübungen für Anfänger in deutscher Sprache ausgerichtet sein.",
        },
        {
          role: "user",
          content: `Bitte erstelle einen maßgeschneiderten Trainingsplan für Anfänger in deutscher Sprache. Wähle 1 Eigengewichtsübungen aus, die du empfiehlst.
          Für jede dieser Übungen benötige ich folgende Angaben:
          - Übungsname
          - Kurze Übersicht der Übung
          - Anzahl der Wiederholungen pro Satz
          - Anzahl der Sätze
          - YouTube URl zu einem Anleitungs oder Tutorial Video in Deutsch zur Übung (Bitte achte darauf das das video verfügbar ist)
          Deine Antwort sollte genau dem folgenden JSON-Format entsprechen:
          ${JSON.stringify(ExerciseFormat)}
          Bitte beschränke dich auf das angegebene Format und verzichte auf zusätzlichen Text in der Antwort und achte auf eine korrekte Json Syntax! Bitte bennene das Array "exercises"`,
        },
      ],
      temperature: 0,
      max_tokens: 3000,
      top_p: 0,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    const progress = Math.min(
      Math.round((response.data.usage.total_tokens / 3000) * 100), // Annahme: 3000 Tokens pro Anfrage
      100
    );

    res.status(200).json({
      answer: response.data.choices[0].message.content,
      progress: progress,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred." });
  }
}
