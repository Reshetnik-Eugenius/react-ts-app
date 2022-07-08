import React, { ChangeEvent, FC, MouseEvent, DragEvent, useState } from "react";

const EventExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    }
    const dragHandler = (e: DragEvent<HTMLDivElement>) => {
        console.log('DRAG');
    }
    const dropHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log('DROP');
        setIsDrag(false);
    }
    const dragWithPreventHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    } 
    const leaveHandler = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }
    
    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" />
            <button onClick={clickHandler}>Button</button>

            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div 
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ?'blue':'red', marginTop: 15}}>
            </div>
        </div>
    );
};

export default EventExample;
