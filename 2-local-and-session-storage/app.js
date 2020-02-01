$ = document.querySelector.bind(document);

function handleSubmit(e) {
    e.preventDefault();
    const task = $('#task');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    localStorage.setItem('tasks', JSON.stringify([...tasks, task.value]));
    task.value = '';
}

$('#task-form').addEventListener('submit', handleSubmit);
