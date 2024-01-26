export const AddTask = ({tasklist, setTasklist, task, setTask}) => {
  const handleSubmit = (e) => {
    e.preventDefault();         //1
  
    if(task.id)                   //5
    {
      const date = new Date();
      const updatedTasklist = tasklist.map((todo) => (
        todo.id === task.id ? {id: task.id, name: e.target.task.value, time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`} : {id: todo.id, name: todo.name, time: todo.time}    //or todo      //6, 7
      ));
      setTasklist(updatedTasklist);
      setTask({});        //9
    }else
    {
      const date = new Date();
      const newTask = {
        id:date.getTime(),                           //3
        name: e.target.task.value,                     //2 
        time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`
      }
      setTasklist([...tasklist, newTask]);
      setTask({});              //4(b)           //e.target.task.value = ""; //4(a)
    }
  }
  
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="add task" maxLength="25" onChange={e => setTask({...task, name: e.target.value})}/>         {/* 8, 10 */}
            <button type="submit">{ task.id? "Update" : "Add"}</button>
        </form>
    </section>
  )
}



/********************************************** COMMENT BOX ********************************************
1) Yah pe, we prevented the reloading of the page itself by applying prevent default function to the received event.
2) e.target.task i.e., task is the name given to my input field (check the input tag) aur .value se we get the value
   entered by the user in the field.
3) Usss din k date aur time ko time maain convert kr diya.
4.a) Har baar ek input dene k baad we have to clear the input box for next input, so we cleared it.
4.b) Lec 51 & 52: main humne value ko task.name pe dependent kr diya, toh we can't clear the value as in 4.a, so 
    to clear the input box, we have to type setTask({}) as we have to clear the input/the entered task.
5) Ya pr, we either edit an existing id (if task.id already exists) or create a new id. 
6) Yaha we can write just todo as it is also an object.
7) So the condition if I have found the selected item, our data is new. 
    If we haven't found the selected item, I should store the normal information, the previous information
8) Yaha, we access the event we are typing in, phir setTask mai previous task ko on screen rakh k, 
    hum e.target.value krke user k diye gaye input ko setTask maain update krte hai.
9) Yaha pr, humne data update k bbaad setTask ko empty kr diya so that humara input bpx empty rahe for next input.
10) value={task.name || ""}, yaha jab taskname main kuch na mile, tab we have to keep the value as null kyuki piche tasks r nulled.
    setTask main jab koi element ho, toh we get its name.
11)


** Remember when we try to add a new task, our id is empty, but when we edit any task, our id is filled. **



*/