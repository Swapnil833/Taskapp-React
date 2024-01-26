export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {

    const handleEdit = (ID) => {
        const seletedTask = tasklist.find(todo => todo.id === ID);
        setTask(seletedTask);
    }

    const handleDelete = (ID) => {
        const updatedTasklist = tasklist.filter(todo => todo.id !== ID);         //2
        setTasklist(updatedTasklist);
    }


    return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">{tasklist.length}</span>
            </div>
            <button onClick={() => setTasklist([])} className="clearAll">Clear All</button>
        </div>
        <ul>
            { tasklist.map((task) => (                        //1 & 3
                <li key={task.id}>
                    <p>
                        <span className="name">{task.name}</span>
                        <span className="time">{task.time}</span>
                    </p>
                <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
                <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>         
                </li>
            ))}
        </ul>
    </section>
  )
}


/********************************************** COMMENT BOX ********************************************
1) We first created a array named tasks. Phir uske upar humne map lagaya to traverse thr every element aur we created
    a key called task (or anything as you wish), aur vahi keyname use krke we access every elements in key.element form.
2) Yaha pe humne filter lagaya to all the Tasklist elements, aur jiss jiss element ki id != to the clicked id, humne 
    unn sare tasks ko new array form krke usmein rakhte hai. (hum todo ki jagah koi aur naam bhi dal sakte hai, same with ID).
3) Yaha pe task is not the one that we have imported in the beginning but the one which we have named manually in map.
4)


*/
