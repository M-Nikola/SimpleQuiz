import React from 'react';
import { DATA_LOAD, DATA_LOAD_SUCCESS, DATA_LOAD_FAILED } from "./../Action/type";

const INITIAL_STATE = {
	loading: false,
    error: '',
    subjectList: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case DATA_LOAD:
			return { ...state, loading: true, error: ''}
        case DATA_LOAD_SUCCESS:
        console.log(" action.payload", action.payload);
        
			return { ...state, ...INITIAL_STATE, subjectList: action.payload}
        case DATA_LOAD_FAILED:
        console.log(" action.error", action.payload);
			return { ...state, loading: false, error: action.payload}
		default:
			return state;
	}
};
