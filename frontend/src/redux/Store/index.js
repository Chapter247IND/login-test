import { createStore, applyMiddleware } from "redux";
import { createLogicMiddleware } from "redux-logic";
import { logger } from "redux-logger";

import { RootReducer } from "../../redux";
import { allLogics } from "../../redux";

const LogicMiddleware = createLogicMiddleware(allLogics)

export const store = createStore(RootReducer, applyMiddleware(logger,LogicMiddleware))