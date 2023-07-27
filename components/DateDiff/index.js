export default function DateDiff({ sDate, eDate }) {
  // Wandele die übergebenen Strings in Date-Objekte um
  const startDate = new Date(formatDate(sDate));
  const endDate = new Date(formatDate(eDate));

  // Berechne die Differenz in Millisekunden
  const differenzInMS = endDate - startDate;

  // Umwandlung der Millisekunden in Tage
  const differenzInTage = differenzInMS / (1000 * 60 * 60 * 24);
  return differenzInTage;
}

function formatDate(string) {
    const [tag, monat, jahr] = string.split(".");
    console.log(string);
    return new Date(`${jahr}-${monat}-${tag}`);
}
