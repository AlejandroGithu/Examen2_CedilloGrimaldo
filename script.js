// Función para agregar una nueva tarea
function addTask() {
    const container = document.querySelector(".main-container");
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("priority");

    if (taskInput.value.trim()) {
        const card = document.createElement("div");
        card.classList.add("card");

        const priority = prioritySelect.value;
        if (priority === "alta") {
            card.style.backgroundColor = "red";
        } else if (priority === "media") {
            card.style.backgroundColor = "yellow";
        } else if (priority === "baja") {
            card.style.backgroundColor = "green";
        }

        const text = document.createElement("p");
        text.textContent = taskInput.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";

        deleteBtn.onclick = function () {
            if (priority === "alta") {
                showConfirmModal(() => {
                    container.removeChild(card);
                });
            } else {
                container.removeChild(card);
            }
        };

        card.appendChild(text);
        card.appendChild(deleteBtn);
        container.appendChild(card);

        taskInput.value = "";
    }
}

// Función para mostrar el modal de confirmación
function showConfirmModal(onConfirm) {
    const modal = document.getElementById("confirmModal");
    const confirmBtn = document.getElementById("confirmBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    modal.style.display = "flex";

    confirmBtn.onclick = function () {
        modal.style.display = "none";
        onConfirm();
    };

    cancelBtn.onclick = function () {
        modal.style.display = "none";
    };
}

// Oculta el modal al hacer clic fuera del contenido (opcional)
window.onclick = function (event) {
    const modal = document.getElementById("confirmModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
