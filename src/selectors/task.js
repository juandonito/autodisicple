const sameDay = (dateOne, dateTwo) => {
    return dateOne.getFullYear() === dateTwo.getFullYear() &&
        dateOne.getMonth() === dateTwo.getMonth() &&
        dateOne.getDate() === dateTwo.getDate();
}

export const getTodayTask = (state) => {
    const today = new Date();
    return state.tasksState.filter(task => sameDay(task.date, today));
}

export const getNotDoneTask = (state) => {
    return state.tasksState.filter(task => task.done == false);
}