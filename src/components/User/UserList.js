import React from 'react';
import {
  Datagrid,
  List,
  Responsive,
  SimpleList,
  EditButton,
  TextField
} from 'react-admin';

const UserList = props => {  
  return (
    <List {...props} bulkActionButtons={false} exporter={false}>
      <Responsive
        key={record => record.id}
        small={
          <SimpleList
            linkType={false}
            primaryText={record => record.username}
          />
        }
        medium={
            <Datagrid>
                <TextField source="username" />
                <TextField source="email" />
                <EditButton />
          </Datagrid>
        }
      />
    </List>
  )
};

export default UserList;
