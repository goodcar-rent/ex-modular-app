import React from 'react'
import { Admin, Resource, Login } from 'react-admin'
import dataProvider from './ra-data-goodcar-rent'
import { UserList } from './resources/users'
import { UserGroupCreate, UserGroupEdit, UserGroupList } from './resources/user-groups'
import UserIcon from '@material-ui/icons/Person'
import UserGroupIcon from '@material-ui/icons/Group'
import Dashboard from './dashboard'
import authProvider from './auth-provider'

const MyLoginPage = () => <Login backgroundImage='https://loremflickr.com/1024/768/city,car' />

const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} loginPage={MyLoginPage}>
    <Resource
      name='user'
      options={{ label: 'Users' }}
      list={UserList}
      icon={UserIcon}
    />
    <Resource
      name='usergroup'
      options={{ label: 'User groups' }}
      list={UserGroupList}
      icon={UserGroupIcon}
      edit={UserGroupEdit}
      create={UserGroupCreate}
    />
  </Admin>
)

export default App