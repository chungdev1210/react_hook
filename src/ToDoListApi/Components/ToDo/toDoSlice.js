import React, {useContext, useEffect} from 'react';
import { StateContext } from '../../Context/StateProvider';
import config from './../Config/Config.json';
const { SERVER_API } = config;
const todoApi = SERVER_API + '/todos';
