import React from 'react'
import { Admin, Resource, Login, Layout, AppBar } from 'react-admin'
import dataProvider from './data-provider'
import { UserList, UserCreate } from './resources/users'
import { UserGroupCreate, UserGroupEdit, UserGroupList } from './resources/user-groups'
import UserIcon from '@material-ui/icons/Person'
import UserGroupIcon from '@material-ui/icons/Group'
import Dashboard from './forms/dashboard'
import authProvider from './auth-provider'
import MyMenu from './ui/my-menu'
import { Route } from 'react-router-dom'
import { DeployProjectList, DeployProjectCreate, DeployProjectEdit } from './resources/deploys'

const MyLoginPage = () => <Login backgroundImage='https://loremflickr.com/1024/768/city,car' />
const MyAppBar = props => <AppBar {...props} userMenu={<MyMenu />} />
const MyLayout = props => <Layout {...props} appBar={MyAppBar} />
const MyRoutes = [
  <Route key='1' exact path='/signup' component={UserCreate} />
]

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
    loginPage={MyLoginPage}
    layout={MyLayout}
    customRoutes={MyRoutes}
  >
    <Resource
      name='DeployProject'
      options={{ label: 'Deploy Projects' }}
      list={DeployProjectList}
      icon={UserGroupIcon}
      edit={DeployProjectEdit}
      create={DeployProjectCreate}
    />
    <Resource
      name='user'
      options={{ label: 'Users' }}
      list={UserList}
      create={UserCreate}
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
