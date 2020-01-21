import React from 'react';
import {
  Datagrid,
  List,
  ReferenceInput,
  Responsive,
  downloadCSV,
  SimpleList,
  Filter,
  AutocompleteInput,
  TextField
} from 'react-admin';
import jsonExport from 'jsonexport/dist';

const QuestionList = props => {

  const exporter = (records, fetchRelatedRecords) => {
    fetchRelatedRecords(records, 'id', 'questions').then(questions => {
      const data = records.map(record => ({
                id: questions[record.id].id,
                title: questions[record.id].title,
        }));
        jsonExport(data, {
            headers: ['id', 'title'],
        }, (err, csv) => {;
            downloadCSV(csv, 'questions');
        });
    });
  };
  
  const QuestionsFilter = (props) => (
    <Filter {...props}>
      <ReferenceInput
        resource="questionnaires"
        source="QuestionnaireId"
        reference="questionnaires"
        label="Questionnaire"
      >
        <AutocompleteInput optionText="title" optionValue="id" />
      </ReferenceInput>
    </Filter>
);
  
  return (
    <List {...props} bulkActionButtons={false} exporter={exporter} filters={<QuestionsFilter />}>
      <Responsive
        key={record => record.id}
        small={
          <SimpleList
            linkType={false}
            primaryText={record => record.title}
          />
        }
        medium={
          <Datagrid>
            <TextField label="Question" source="title" />
          </Datagrid>
        }
      />
    </List>
  )
};

export default QuestionList;
