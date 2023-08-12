export default function ExerciseFormResult({ formData, setFormData }) {
  return (
    <>
      {formData ? (
        <>
          Your Age: {formData.age}
          What is your gender: {formData.gender}
          Do you have any health limitations or injuries that might affect
          training?: {formData.health}
          {formData.health === "yes"
            ? "Please explain briefly: " + formData.health_limitations
            : ""}
          What is your training goal?: {formData.training_goal}
          How often do you currently work out per week? (Days):{" "}
          {formData.work_per_week}
          What type of training do you usually do?: {formData.training_usually}
          What level have you reached in your current training?:{" "}
          {formData.current_training}
          What type of exercises do you prefer?: {formData.exercises}
          Do you have access to a gym or do you work out at home?:{" "}
          {formData.gym}
          What muscle groups do you want to target in particular?:{" "}
          {formData.muscle_groups}
          Are you willing to participate in rigorous or intense workouts?:{" "}
          {formData.intense_workouts}
          Do you have experience training with free weights?:{" "}
          {formData.free_weights}
          How much time can you spend per training session?:{" "}
          {formData.spend_time} minutes Are you willing to participate in cardio
          exercises as well?: {formData.cardio}
          How much rest time can you allow between training days?:
          {" " + formData.rest_time + "days"}
        </>
      ) : (
        "No form data found!"
      )}
    </>
  );
}
