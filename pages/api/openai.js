import { OpenAIApi, Configuration } from "openai";
import { ExerciseFormat } from "../../lib/data-format";

export default async function handler(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  try {
    const { formData } = req.body;
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
          content: `
            Bitte erstelle einen maßgeschneiderten Trainingsplan für Anfänger in deutscher Sprache.
            Anhand der vorgebenen Fragen und Antworten:
            Your Age: ${formData.age}
            What is your gender: ${formData.gender}
            Do you have any health limitations or injuries that might affect training?: ${
              formData.health
            }
            ${
              formData.health === "yes"
                ? "Please explain briefly: " + formData.health_limitations
                : ""
            }
            What is your training goal?: ${formData.training_goal}
            How often do you currently work out per week? (Days): ${
              formData.work_per_week
            }
            What type of training do you usually do?: ${
              formData.training_usually
            }
            What level have you reached in your current training?: ${
              formData.current_training
            }
            What type of exercises do you prefer?: ${formData.exercises}
            Do you have access to a gym or do you work out at home?: ${
              formData.gym
            }
            What muscle groups do you want to target in particular?: ${
              formData.muscle_groups
            }
            Are you willing to participate in rigorous or intense workouts?: ${
              formData.intense_workouts
            }
            Do you have experience training with free weights?: ${
              formData.free_weights
            }
            How much time can you spend per training session?: ${
              formData.spend_time
            } minutes
            Are you willing to participate in cardio exercises as well?: ${
              formData.cardio
            }
            How much rest time can you allow between training days?: ${
              formData.rest_time
            } days
            Wähle 15 Eigengewichtsübungen aus, die du empfiehlst.
            Für jede dieser Übungen benötige ich folgende Angaben:
            - Übungsname
            - Kurze Übersicht der Übung
            - Anzahl der Wiederholungen pro Satz
            - Anzahl der Sätze
            - YouTube URL zu einem Anleitungs- oder Tutorialvideo in Englisch zur Übung (Bitte achte darauf, dass das Video verfügbar ist)
            Deine Antwort sollte genau dem folgenden JSON-Format entsprechen:
            ${JSON.stringify(ExerciseFormat)}
            Bitte beschränke dich auf das angegebene Format und verzichte auf zusätzlichen Text in der Antwort und achte auf eine korrekte JSON-Syntax! Bitte benenne das Array "exercises" und vergib für den key "_id:" einen random id
          `,
        },
      ],
      temperature: 0,
      max_tokens: 3000,
      top_p: 0,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    const responseBody = {
      answer: response.data.choices[0].message.content,
    };

    res.status(200).json(responseBody);
  } catch (error) {
    console.error(error);
    const errorResponse = { error: "An error occurred." };
    res.status(500).json(errorResponse);
  }
}
