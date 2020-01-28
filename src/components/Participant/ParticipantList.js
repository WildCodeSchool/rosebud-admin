import React from 'react';
import {
  Datagrid,
  List,
  EmailField,
  Responsive,
  SimpleList,
  ReferenceField,
  SelectField,
  Filter,
  ReferenceInput,
  AutocompleteInput,
  SelectInput,
  downloadCSV,
  TextField,
  BooleanField,
  Pagination
} from 'react-admin';
import jsonExport from 'jsonexport/dist';

const CustomList = () => {
    const [page, setPage] = useState(1);
    const perPage = 50;
    const { data, total, loading, error } = useQuery({
        type: 'GET_LIST',
        resource: 'posts',
        payload: {
            pagination: { page, perPage },
            sort: { field: 'id', order: 'ASC' },
            filter: {},
        }
    });

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <p>ERROR: {error}</p>
    }

const ParticipantList = props => {
  
  const exporter = (records, fetchRelatedRecords) => {
  fetchRelatedRecords(records, 'id', 'participants').then(participants => {
    const data = records.map(record => ({
              id: participants[record.id].id,
              prenom: participants[record.id].firstName,
              nom: participants[record.id].lastName,
              statut: participants[record.id].status,
              age: participants[record.id].age,
              ville: participants[record.id].city,
              email: participants[record.id].email,
              approve: participants[record.id].isApproved,
      }));
      jsonExport(data, {
          headers: ['id', 'prenom', 'nom', 'statut', 'age', 'ville', 'email', 'approve'],
      }, (err, csv) => {;
          downloadCSV(csv, 'participants');
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
    <SelectInput
      source="isApproved"
      label="État"
      choices={[
        { id: '0', name: 'En attente' },
        { id: '1', name: 'En ligne' },
      ]}
    />
  </Filter>
);

const PostPagination = props => <Pagination rowsPerPageOptions={[2, 5, 16, 22]} {...props} />;
  
  return (
    <List {...props} bulkActionButtons={false} exporter={exporter} filters={<QuestionsFilter />} pagination={<PostPagination />}>
      <Responsive
        small={
          <SimpleList
            linkType={false}
            primaryText={record => `${record.firstName} ${record.lastName}`}
          />
        }
        medium={
          <Datagrid>
          <ReferenceField
            resource="questionnaires"
            source="QuestionnaireId"
            reference="questionnaires"
            label="Questionnaire"
            linkType="show"    
          >
            <TextField source="title" />
          </ReferenceField>
            <TextField label="Prénom" source="firstName" fullWidth />
            <TextField label="Nom" source="lastName" fullWidth />
            <SelectField
              label="Status"
              source="status"
              choices={[
                { id: 'student', name: 'Élève/étudiant' },
                { id: 'teacher', name: 'Enseignant' },
                { id: 'other', name: 'Autre' },
              ]}
            />
            <TextField label="Âge" source="age" fullWidth />
            <TextField label="Ville" source="city" fullWidth />
            <EmailField label="Email" source="email" fullWidth />
            <BooleanField label="En ligne" source="isApproved" fullWidth />
          </Datagrid>
          <Pagination
          page={page}
          perPage={perPage}
          setPage={setPage}
          total={total}>
          </Pagination>
        }
        />
    </List>
  )}
};

export default ParticipantList;
