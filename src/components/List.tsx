import React from 'react';
import style from '../App.module.css'
interface IProps {
    todos: string[];

}

const List: React.FunctionComponent<IProps> = ({ todos }) => {
    return (

        <ul className={style.list}>
            {todos.map((item, index) => <li key={index}>{item}</li>)}
        </ul>

    );
};

export default List;
