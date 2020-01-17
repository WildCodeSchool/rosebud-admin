import React from 'react';
import {
  Datagrid,
  List,
  Responsive,
  ShowButton,
  DeleteButton,
  SimpleList,
  ImageField,
  TextField
} from 'react-admin';

const ImageList = props => (
  <List {...props}>
    <Responsive
      small={
        <SimpleList
          linkType="show"
          primaryText={record => record.title}
        />
      }
      medium={
        <Datagrid>
          <TextField label="Titre" source="title" fullWidth />
          <ImageField label="Image" source="image_url" />
          <ShowButton />
          <DeleteButton undoable={false} redirect="" />
        </Datagrid>
      }
    />
  </List>
);

export default ImageList;
