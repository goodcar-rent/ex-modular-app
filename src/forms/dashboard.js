import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { CHANGE_THEME, ThemeName } from '../core/actions'

const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: theme
})

const useStyles = makeStyles({
  label: { width: '10em', display: 'inline-block' },
  button: { margin: '1em' }
})

const Dashboard = () => {
  const theme = useSelector((state) => state.theme)
  const dispatch = useDispatch()
  const classes = useStyles()

  return (
    <Card>
      <CardHeader title='Welcome to GoodCar.rent APP!' />
      <CardContent>
        <div className={classes.label}>
          Theme:
        </div>
        <Button
          variant='contained'
          className={classes.button}
          color={theme === 'light' ? 'primary' : 'default'}
          onClick={() => dispatch(changeTheme(ThemeName.light))}
        >
          Light
        </Button>
        <Button
          variant='contained'
          className={classes.button}
          color={theme === 'dark' ? 'primary' : 'default'}
          onClick={() => dispatch(changeTheme(ThemeName.dark))}
        >
          Dark
        </Button>
      </CardContent>
    </Card>
  )
}

export default Dashboard
