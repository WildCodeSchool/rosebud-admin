import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const Questionnaires = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="title" />
            <TextField source="description" />
        </Datagrid>
    </List>
);
