import React from 'react'
import PropTypes from 'prop-types'
import {
  Filter,
  TextInput,
  BooleanInput,
  List,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  Create, SimpleForm, required, PasswordInput
} from 'react-admin'

const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Search' source='q' alwaysOn />
    <TextInput label='Name' source='name' />
    <TextInput label='E-mail' source='email' />
    <BooleanInput label='Disabled' source='disabled' />
  </Filter>
)

export const UserCreate = (props) => (
  <Create resource={props.resource || 'user'} basePath={props.basePath || '/user'} {...props}>
    <SimpleForm>
      <TextInput disabled label='Id' source='id' />
      <TextInput source='name' validate={required()} />
      <TextInput source='email' validate={required()} />
      <PasswordInput source='password' validate={required()} />
    </SimpleForm>
  </Create>
)

UserCreate.propTypes = {
  resource: PropTypes.string,
  basePath: PropTypes.string
}

export const UserList = props => (
  <List {...props} filters={<UserFilter />}>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <EmailField source='email' />
      <BooleanField source='disabled' />
    </Datagrid>
  </List>
)
