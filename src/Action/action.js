
import React from 'react';
var _ = require('lodash');
import { firebaseObject } from "./../firebase/firebase"
import { DATA_LOAD, DATA_LOAD_SUCCESS, DATA_LOAD_FAILED } from './type';

export const getData = () => {
    console.log("call", "getData");
    
    return (dispatch) => {
        dispatch({ type: DATA_LOAD });
        firebaseObject.database().ref("/topic").once("value", snapshot => {
            if (snapshot.exists()) {
                var index = 0;
                const userData = snapshot.val();
                dispatch({ type: DATA_LOAD_SUCCESS, payload: userData });

            } else {
                dispatch({ type: DATA_LOAD_FAILED, payload: "No Data Found" });
            }
        });
    };
};