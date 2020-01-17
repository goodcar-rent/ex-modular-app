import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter,
  SimpleForm, required,
  TextInput,
  Datagrid,
  TextField,
  ReferenceField,
  SelectField,
  DateField,
  EditButton,
  DateInput,
  ReferenceInput,
  NumberInput,
  SelectInput
} from 'react-admin'

const DeployProjectFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Name' source='name' />
    <TextInput label='Full name' source='fullName' />
  </Filter>
)

export const DeployProjectList = props => (
  <List {...props} title='Deploy Projects' filters={<DeployProjectFilter />}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='fullName' />
    </Datagrid>
  </List>
)

export const DeployProjectCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled label='Id' source='id' />
      <TextInput source='name' validate={required()} />
      <TextInput source='fullName' validate={required()} />
      <TextInput source='script' validate={required()} />
      <NumberInput source='scriptTimeout' />
    </SimpleForm>
  </Create>
)

const DeployProjectEditTitle = ({ record }) => {
  return <span>Deploy Project {record ? `"${record.name}"` : ''}</span>
}

DeployProjectEditTitle.propTypes = {
  record: PropTypes.shape({
    name: PropTypes.string
  })
}

export const DeployProjectEdit = props => (
  <Edit title={<DeployProjectEditTitle />} {...props}>
    <SimpleForm fullWide>
      <TextInput disabled label='Id' source='id' />
      <TextInput source='name' validate={required()} />
      <TextInput source='fullName' options={{ fullWide: true }} validate={required()} />
      <TextInput source='script' validate={required()} />
      <NumberInput source='scriptTimeout' />
    </SimpleForm>
  </Edit>
)

// ------- EVENT ---------
const DeployEventTypes = [
  { id: 0, name: '(unknown)' },
  { id: 1, name: '(ERROR)' },
  { id: 2, name: 'Github' },
  { id: 3, name: 'Webhook' }
]

export const DeployEventList = props => (
  <List {...props} title='Deploy events' filters={<DeployProjectFilter />}>
    <Datagrid rowClick='edit'>
      <DateField source='createdAt' label='CreatedAt' />
      <SelectField source='type' choices={DeployEventTypes} />
      <TextField source='caption' label='Caption' />
      <TextField source='commit' label='Commit' />
      <TextField source='branch' label='Branch' />
      <ReferenceField label='Project' source='projectId' reference='DeployProject'>
        <TextField source='name' />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
)

const DeployProjectEventTitle = ({ record }) => {
  return <span>Deploy event {record ? `"${record.caption}"` : ''}</span>
}

DeployProjectEventTitle.propTypes = {
  record: PropTypes.shape({
    caption: PropTypes.string
  })
}

export const DeployEventEdit = props => (
  <Edit title={<DeployProjectEventTitle />} {...props}>
    <SimpleForm>
      <TextInput source='id' label='Id' disabled />
      <DateInput source='createdAt' />
      <SelectInput source='type' choices={DeployEventTypes} />
      <TextInput source='caption' />
      <TextInput source='commit' />
      <TextInput source='branch' />
      <ReferenceInput label='Project' source='projectId' reference='DeployProject'>
        <SelectInput source='name' />
      </ReferenceInput>
      <TextInput source='stdout' multiline />
      <TextInput source='stderr' multiline />
    </SimpleForm>
  </Edit>
)
