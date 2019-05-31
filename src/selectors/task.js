const sameDay = (dOne, dTwo) => {
    //makes sure that we have the same date format
    const dateOne = new Date(dOne);
    const dateTwo = new Date(dTwo);
    
    return dateOne.getFullYear() === dateTwo.getFullYear() &&
        dateOne.getMonth() === dateTwo.getMonth() &&
        dateOne.getDate() === dateTwo.getDate();
}

export const getTodayTask = (state) => {
    const today = new Date();
    return state.tasksState.filter(task => sameDay(task.date, today));
}

export const getNotDoneTask = (state) => {
    return state.tasksState.filter(task => task.done === false);
}