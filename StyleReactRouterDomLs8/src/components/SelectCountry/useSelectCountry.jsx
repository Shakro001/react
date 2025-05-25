

import React, { useEffect, useReducer, useState } from "react";

import service from "../../service/countryApi/countryApi";

import {initialArg, reduce} from '../../store/countrySlice/reducer'
import actionCreator from '../../store/store'
import {GET_COUNTRIES} from '../../store/countrySlice/action'


export default function useSelectCountry(){



    const [countrySelect, setCountrySelect] = useState(null);
    
      const [state, dispatch] = useReducer(reduce, initialArg);
    
      const getCountry = async () => {
        try {
          const response = await service.get();
          dispatch(actionCreator(GET_COUNTRIES, response));
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getCountry();
      }, []);
    
      useEffect(() => {
        if (state.country.length > 0) {
          setCountrySelect(state.country[0].name.common);
        }
      }, [state.country]);


      return {state, countrySelect, setCountrySelect}
    
}