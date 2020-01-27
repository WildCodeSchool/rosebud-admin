import React from 'react';
import {
  Datagrid,
  List,
  Responsive,
  SimpleList,
  TextField,
  Filter,
  ReferenceInput,
  AutocompleteInput,
  ReferenceField,
  FormDataConsumer,
  downloadCSV,
} from 'react-admin';
import jsonExport from 'jsonexport/dist';

const AnswerList = props => {

  const exporter = (records, fetchRelatedRecords) => {
    fetchRelatedRecords(records, 'id', 'answers').then(answers => {
      const data = records.map(record => ({
                id: answers[record.id].id,
                image_url: answers[record.id].image_url,
                commentaire: answers[record.id].comment,
        }));
        jsonExport(data, {
            headers: ['id', 'image_url', 'commentaire'],
        }, (err, csv) => {;
            downloadCSV(csv, 'answers');
        });
    });
  };
  
  const AnswersFilter = (props) => (
    <Filter {...props}>
      <ReferenceInput
        resource="questions"
        source="QuestionId"
        reference="questions"
        label="Question"
      >
        <AutocompleteInput optionText="title" optionValue="id" />
      </ReferenceInput>
    </Filter>
  );
  
  const baseURL = process.env.REACT_APP_API_URL || '';

  return (
    <List {...props} bulkActionButtons={false} exporter={exporter} filters={<AnswersFilter />}>
      <Responsive
        small={
          <SimpleList
            linkType={false}
            primaryText={record => record.comment}
          />
        }
        medium={
          <Datagrid>
            <ReferenceField label="Question" source="QuestionId" reference="questions" target="id" linkType={false}>
               <TextField source="title" />
            </ReferenceField>
            <FormDataConsumer>
                {({ record }) =>
                  <img src={baseURL + record.image_url} alt="Answer" width="200px" />
                }
            </FormDataConsumer>
            <TextField label="Commentaire" source="comment" />
          </Datagrid>
        }
      />
    </List>
  )
};

export default AnswerList;
