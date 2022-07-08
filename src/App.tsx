import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardfVariant } from "./components/Card";
import EventExample from "./components/EventExample";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import UserItem from "./components/UserItem";
import { ITodo, IUser } from "./types/types";
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import UserPage from "./components/UserPage";
import TodoPage from "./components/TodoPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to={"/users"}>Users</NavLink>
                <NavLink to={"/todos"}>Todos</NavLink>
            </div>
            <Routes>
                <Route path={'/users'} element={<UserPage/>} />
                <Route path={'/todos'} element={<TodoPage/>} />
                <Route path={'/users/:id'} element={<UserItemPage/>} />
                <Route path={'/todos/:id'} element={<TodoItemPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
