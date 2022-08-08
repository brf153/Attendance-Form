/* eslint-disable*/
import React from 'react'
import { Paper } from '@material-ui/core'
import {Tab} from '@material-ui/core'
import {Tabs} from '@material-ui/core'
import {makeStyles} from '@mui/styles'
    const useStyles= makeStyles({
        root:{
            flexGrow:1,
        },
        tab:{
            fontSize:12,
            color:"#5f6368",
            textTransform:"capitalize",
            height:10,
            fontweight:"600",
            fontFamily:"Google Sans,Roboto,Arial,sans-serif",
        },
        tabs:{
            height:10
        }
    });
    function Centredtabs() {
        const classes=useStyles();
  return (
    <Paper className={classes.root}>
        <Tabs
        className={classes.tabs}
        textColor='primary'
        indicateColoe='primary'
        centered
        >

            <Tab label='Question' className={classes.tab}>

            </Tab>
            <Tab label='Response' className={classes.tab}>

            </Tab>

        </Tabs>
    </Paper>
  )
}

export default Centredtabs
