// Service
import TaskService from "./api.js";


// Functions shorthands
const $ = document.querySelector.bind(document);
const e = document.createElement.bind(document);
const t = document.createTextNode.bind(document);


// UI elements
const taskForm = $('#task-form');
const taskInput = $('#task');
const taskFilter = $('#filter');
const taskList = $('.collection');
const clearTasksButton = $('.clear-tasks');


// UI

const state = {
    tasks: []
};

function renderTask(task) {
    const li = e('li');
    li.appendChild(t(`${task}`));
    li.classList.add('collection-item');
    const link = e('a');
    link.href = '#';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    link.classList.add('delete-item', 'secondary-content');
    li.appendChild(link);
    taskList.appendChild(li);
}

function renderTasks() {
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    state.tasks.forEach(task => renderTask(task));
}

function createTask(e) {
    e.preventDefault();
    if (e.target.checkValidity()) {
        TaskService.create(state.tasks, taskInput.value);
        state.tasks = TaskService.list();
        renderTasks();
        taskInput.value = '';
    } else {
        alert('Enter something!');
    }
}

function deleteTask(e) {
    e.preventDefault();
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure?')) {
            TaskService.delete(state.tasks, e.target.parentElement.parentElement.innerText);
            state.tasks = TaskService.list();
            renderTasks();
        }
    }
}

function filterTask() {
    if (!taskFilter.value) {
        state.tasks = TaskService.list();
        renderTasks();
    } else if (taskFilter.checkValidity()) {
        state.tasks = TaskService.search(taskFilter.value);
        renderTasks();
    }
}

function clearTasks(e) {
    e.preventDefault();
    TaskService.clear();
    state.tasks = TaskService.list();
    renderTasks();
}

function setupEventListeners() {
    taskForm.addEventListener('submit', createTask);
    taskList.addEventListener('click', deleteTask);
    taskFilter.addEventListener('keyup', filterTask);
    clearTasksButton.addEventListener('click', clearTasks);
    document.addEventListener('DOMContentLoaded', () => {
        state.tasks = TaskService.list();
        renderTasks();
    });
}

function init() {
    setupEventListeners();
}

init();
