import React from 'react'
import { Filter, TextInput, BooleanInput, List, Datagrid, TextField, EmailField, BooleanField } from 'react-admin'

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Name" source="name" />
        <TextInput label="E-mail" source="email" />
        <BooleanInput label="Disabled" source="disabled" />
    </Filter>
)

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
