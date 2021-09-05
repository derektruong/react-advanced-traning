// import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
    const { isLoading, error, sendRequest: pushTasks } = useHttp();
    const createdTask = (taskText, taskData) => {
        const generatedId = taskData.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };

        props.onAddTask(createdTask);
    };
    const enterTaskHandler = async (taskText) => {
        pushTasks(
            {
                url: "https://react-http-63d69-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: { text: taskText },
            },
            createdTask.bind(null, taskText)
        );
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
