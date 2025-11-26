import { Input, DatePicker, Space, Select, Card, Typography } from "antd";

const { Title } = Typography;

const QvbHeader = ({
  lessonName,
  setLessonName,
  date,
  setDate,
  fromLang,
  setFromLang,
  toLang,
  setToLang,
  languages,
}) => {
  return (
    <Card style={{ marginBottom: 20, padding: 20 }}>
      <Title level={3}>QVB – Quick Vocabulary Builder</Title>

      <Space direction="vertical" size="large" style={{ width: "100%", marginTop: 20 }}>
        <Input
          placeholder="Lesson Name"
          value={lessonName}
          onChange={(e) => setLessonName(e.target.value)}
        />

        <DatePicker
          style={{ width: "100%" }}
          value={date}
          onChange={(value) => setDate(value)}
        />

        <Space size="large" style={{ width: "100%", justifyContent: "space-between" }}>
          <Select
            style={{ width: "100%" }}
            value={fromLang}
            options={languages}
            onChange={setFromLang}
          />
          <Select
            style={{ width: "100%" }}
            value={toLang}
            options={languages}
            onChange={setToLang}
          />
        </Space>
      </Space>
    </Card>
  );
};

export default QvbHeader;
