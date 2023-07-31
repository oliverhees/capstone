export default function Exercise({ setFormData, formData }) {
  return (
    <>
      <h2>On This page you see all Data saved in localstorage for check!</h2>
      {Object.entries(formData).map(([key, value]) => (
        <p key={key}>
          {key}: {JSON.stringify(value)}
        </p>
      ))}
    </>
  );
}
