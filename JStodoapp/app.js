let todos = ["eat", "sleep"]

let demand = prompt("enter your choice ")

while (true) {

    if (demand == "quit") {
        console.log("here we quit the task")
        break;
    }


    if (demand == "list") {

        console.log("----------------list of todos---------------")
        for (i = 0; i < todos.length; i++) {
            console.log(i, todos[i]);
        }
    }

    else if (demand == "add") {
        console.log("--------------------------")
        let dalo = prompt("Add a new task")
        todos.push(dalo)
        console.log("task added")
        
    }

    if (demand == "delete") {
        console.log("-------------------------");
        let del = prompt("enter the index to delete")
        todos.splice(del, 1)
        console.log(`the ${todos[del]} is deleted`)

    }

    demand = prompt("enter your choice ")

}
