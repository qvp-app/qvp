import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableRow,
  TableCell,
  TextRun,
} from "docx";
import { saveAs } from "file-saver";

export function exportDocx(lessonName, date, rows) {
  const tableRows = rows.map(
    (r) =>
      new TableRow({
        children: [
          new TableCell({ children: [new Paragraph(r.col1 || "")] }),
          new TableCell({ children: [new Paragraph(r.col2 || "")] }),
        ],
      })
  );

  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [new TextRun({ text: `Lesson: ${lessonName}`, bold: true })],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Date: ${date}`,
                bold: true,
              }),
            ],
          }),
          new Paragraph(" "),
          new Table({
            rows: [
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph("Word")] }),
                  new TableCell({ children: [new Paragraph("Meaning")] }),
                ],
              }),
              ...tableRows,
            ],
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "QVB-Vocabulary.docx");
  });
}
