import React, { FormEvent, useEffect, useState } from 'react';
import { BsTrash } from 'react-icons/bs';
import { BiSave } from 'react-icons/bi';
import { FaFlag } from 'react-icons/fa';
import { AppTask, NewTask, Task } from './styles';
import api from '../../services/tasksApi';
import { Form, Title } from '../tasks/styles';
import { SearchText, SloganNameText, typeHereText } from '../../assets/strings';
import backgroundImage from '../../assets/images/background_organized_200x200.png';
import { colors } from '../../assets/colors';

interface Task {
    title: string;
    content: string;
    flag: string;
}
const Tasks: React.FC = () => {
    const [TaskTitle, setTaskTitle] = useState('');
    const [TaskContent, setTaskContent] = useState('');
    const [inputError, setInputError] = useState('');
    const [taskSelected, setTaskSelected] = useState<Task[]>([]);
    const [Tasks, setTasks] = useState<Task[]>([]);
    const [showNewTaskButton, setShowNewTaskButton] = useState(false);
    useEffect(() => {
        async function getTasks() {
            try {
                const { data } = await api.get('/tasks');
                setTasks(data);
            } catch (error) {
                alert('ocorreu um erro ao carregar as anotaçoes');
            }
        }
        getTasks();
    }, [Tasks]);
    async function handleAddTask(event: FormEvent<HTMLElement>): Promise<void> {
        event.preventDefault();

        if (TaskContent.length) {
            try {
                const task = {
                    title: TaskTitle,
                    content: TaskContent,
                    flag: 'red',
                };
                const responseTask = await api.post('tasks/create', task);
                // const responseContent = await api.get<Task>(`tasks/${TaskContent}`);

                // setTasks([...Tasks, task]);

                if (!responseTask) {
                    // deixar invisivel no form
                }
                console.log(responseTask);

                setTaskTitle('');
                setTaskContent('');
            } catch (err) {
                setInputError('erro na busca');
            }
        } else {
            alert('digite o conteudo da anotaçao');
            setTaskContent('');
        }
    }
    function handleCkickNew() {
        // setShowNewTaskButton({ mostraState: false });
        if (showNewTaskButton == false) {
            setShowNewTaskButton(true);
        } else {
            setShowNewTaskButton(false);
        }
    }
    function handleDeleteNewTask() {
        setTaskTitle('');
        setTaskContent('');
    }
    function handleDeleteTask() {}
    return (
        <AppTask>
            <Title>{SloganNameText}</Title>

            <Form>
                <button type="submit">{SearchText}</button>
                <input placeholder={typeHereText} />
                <img src={backgroundImage} />
            </Form>

            <NewTask>
                <button onClick={handleCkickNew} type="button">
                    Novo
                </button>
                {showNewTaskButton && (
                    <div id="divNewTask">
                        <form onSubmit={handleAddTask}>
                            <a type="button">
                                <FaFlag size={22} />
                            </a>
                            <input
                                value={TaskTitle}
                                onChange={(e) => {
                                    setTaskTitle(e.target.value);
                                }}
                                id="title"
                                placeholder="titulo"
                            />
                            <textarea
                                value={TaskContent}
                                onChange={(e) => {
                                    setTaskContent(e.target.value);
                                }}
                                id="content"
                                placeholder="conteudo"
                            />
                            <button
                                style={{
                                    backgroundColor: colors.organge1,
                                    border: `solid ${colors.organge1}`,
                                    color: colors.blue1,
                                }}
                                type="button"
                                onClick={handleDeleteNewTask}
                            >
                                <BsTrash size={22} />
                            </button>
                            <button type="submit">
                                <BiSave size={25} />
                            </button>
                        </form>
                    </div>
                )}
            </NewTask>

            <Task>
                {Tasks.map((Task) => (
                    <form onSubmit={handleAddTask}>
                        <button type="button">
                            <FaFlag size={22} />
                        </button>
                        <input
                            value={Task.title}
                            id="title"
                            placeholder="titulo"
                        />
                        <textarea
                            value={Task.content}
                            onChange={(e) => {
                                setTaskContent(e.target.value);
                            }}
                            id="content"
                            placeholder="conteudo"
                        />
                        <button type="button" onClick={handleDeleteTask}>
                            <BsTrash size={22} />
                        </button>
                        <button type="submit">
                            <BiSave size={25} />
                        </button>
                    </form>
                ))}
            </Task>
        </AppTask>
    );
};
export default Tasks;
