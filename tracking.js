document.addEventListener('DOMContentLoaded', () => {
    const totalDays = 30;
    const tasks = Array.from({ length: totalDays }, (_, i) => ({
        day: i + 1,
        description: `Complete Task for Day ${i + 1}`,
        completed: false
    }));

    function renderTasks() {
        const container = document.getElementById('trackingContainer');
        container.innerHTML = ''; // Clear container

        tasks.forEach((task, index) => {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            taskDiv.innerHTML = `
                <input type="checkbox" id="task${task.day}" ${task.completed ? 'checked disabled' : ''}>
                <label for="task${task.day}">${task.description}</label>
            `;
            container.appendChild(taskDiv);

            if (index === 0 || tasks[index - 1].completed) {
                const currentCheckbox = document.getElementById(`task${task.day}`);
                if (currentCheckbox) {
                    currentCheckbox.addEventListener('change', () => {
                        if (currentCheckbox.checked) {
                            task.completed = true;
                            if (index < totalDays - 1) {
                                const nextTask = document.getElementById(`task${tasks[index + 1].day}`);
                                if (nextTask) {
                                    nextTask.parentElement.classList.remove('hidden');
                                }
                            } else {
                                alert('Congratulations! You have completed your diet and exercise plan.');
                            }
                        }
                    });
                }
            } else {
                taskDiv.classList.add('hidden');
            }
        });
    }

    // Initial render
    renderTasks();
});
