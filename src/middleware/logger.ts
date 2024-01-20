import { Middleware } from '@reduxjs/toolkit'

const logger : Middleware = (store) => (next) => (action) => {
    console.log("Current State" , store.getState().counter.count)
    console.log("Action" , action)
    next(action)
    console.log( "updated store" ,store.getState().counter.count)

}

export default logger;