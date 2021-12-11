import { createContext, useReducer } from "react";

export const ThemeContext=createContext();

const INITIAL_STATE={darkMode:false};

const ThemeReducer=(state,action)=>{
switch(action.type)
{
    case "TOGGLE":{
        return {darkMode: !state.darkMode};
    }
    default:
        return state;
}
};

export const ThemeProvider=(props)=>{
    const [state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);

    return(
        <ThemeContext.Provider value={{state,dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
