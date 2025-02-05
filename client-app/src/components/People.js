import React,{useState, useEffect} from "react";
import { connect } from "react-redux";
import * as actions from '../actions/person';
import { Grid,Paper,TableContainer,Table,TableHead,TableBody,TableRow,TableCell} from "@mui/material";
import PeopleForm from "./PeopleForm";




const People = ({classes,...props}) => {
    useEffect(() => {
        props.fetchAllPeople()
    }, []);


    return (
        <Paper>
            <Grid container>
                <Grid item xs={6}>
                    <PeopleForm />
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Full Name</TableCell>
                                    <TableCell>Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.peopleList.map((record,index) => {
                                        return (<TableRow key = {index}>
                                            <TableCell>{record.fullName}</TableCell>
                                            <TableCell>{record.email}</TableCell>
                                        </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
};

const mapStateToProps = state => ({
        peopleList: state.person.list
});

const mapActionToProps = {
    fetchAllPeople : actions.fetchAll
};

export default connect(mapStateToProps, mapActionToProps)(People);