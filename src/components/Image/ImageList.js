import React from 'react';
import {
  Datagrid,
  List,
  Responsive,
  SimpleList,
  ImageField,
  TextField,
  Filter,
  ReferenceInput,
  AutocompleteInput,
  downloadCSV
} from 'react-admin';
import jsonExport from 'jsonexport/dist';

const exporter = (records, fetchRelatedRecords) => {
  fetchRelatedRecords(records, 'id', 'images').then(images => {
    const data = records.map(record => ({
              id: images[record.id].id,
              title: images[record.id].title,
              image_url: images[record.id].image_url,
      }));
      jsonExport(data, {
          headers: ['id', 'title', 'image_url'],
      }, (err, csv) => {;
          downloadCSV(csv, 'images');
      });
  });
};

const ImagesFilter = (props) => (
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

const ImageList = props => (
  <List {...props} bulkActionButtons={false} exporter={exporter} filters={<ImagesFilter />}>
    <Responsive
      small={
        <SimpleList
          linkType={false}
          primaryText={record => record.title}
        />
      }
      medium={
        <Datagrid>
          <ImageField label="Image" source="image_url" />
          <TextField label="Titre" source="title" fullWidth />
        </Datagrid>
      }
    />
  </List>
);

export default ImageList;
