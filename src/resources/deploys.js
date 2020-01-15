import React from 'react'
import PropTypes from 'prop-types'
import {
  List, Create, Edit, Filter,
  SimpleForm, required,
  TextInput,
  Datagrid,
  TextField
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
    </SimpleForm>
  </Edit>
)
