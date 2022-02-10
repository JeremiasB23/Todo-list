import "./style.css";
import topBar from "./topBar";

const leftBar = document.createElement("div");
const home = document.createElement("h1");
const allTasks = document.createElement("h2");
const today = document.createElement("h2");
const thisWeek = document.createElement("h2");
const projects = document.createElement("h1");
const addProjects = document.createElement("h2");

function Execution() {
  topBar();

  //!CLASS
  const classElements = [
    home,
    allTasks,
    today,
    thisWeek,
    projects,
    addProjects,
  ];
  const classNames = [
    "home",
    "allTasksStyle",
    "todayStyle",
    "thisWeekStyle",
    "projects",
    "addProjectsStyle",
  ];
  const textContents = [
    "Home",
    "All Tasks",
    "Today",
    "This Week",
    "Projects",
    "Add Proyects",
  ];
  leftBar.className = "leftbar"; //!THIS ISN'T IN THE ARRAY BCS IS THE PRINCIPAL AND IT NEED TO BE ALONE

  for (let i = 0; i < classElements.length; i++) {
    classElements[i].className = classNames[i]; // & The ClassNames
    classElements[i].textContent = textContents[i]; //^The TextContent
    leftBar.appendChild(classElements[i]); //*The AppendChilds
  }

  //*BUTTON PRESS

  const emergentWindow = document.createElement("div"); //!Here i create a window to get all the info from the user

  const task = document.createElement("h3");
  const description = document.createElement("h3");
  const dueDate = document.createElement("h3");
  const priority = document.createElement("h3");

  //
  let taskInput = document.createElement("input");
  let descriptionInput = document.createElement("input");
  let dueDateInput = document.createElement("input");
  let priorityInputHigh = document.createElement("input");
  let priorityInputMedium = document.createElement("input");
  let priorityInputLow = document.createElement("input");
  //

  let priorityInputHighLabel = document.createElement("label");
  let priorityInputMediumLabel = document.createElement("label");
  let priorityInputLowLabel = document.createElement("label");

  const insertButton = document.createElement("button");

  //!SETEO LOS TRES NOMBRES IGUALES PARA QUE EL RADIO
  priorityInputHigh.name = "importance";
  priorityInputMedium.name = "importance";
  priorityInputLow.name = "importance";
  //!BUTON FUNCIONE Y DESSELECIONE OTRO RADIO AL PRECIONAR UN RADIO

  priorityInputHigh.setAttribute("type", "radio");
  priorityInputMedium.setAttribute("type", "radio");
  priorityInputLow.setAttribute("type", "radio"); //^Set the Input as a radio element

  dueDateInput.setAttribute("type", "date"); //^Set the Input as a Date element

  const emergentWindowElements = [
    task,
    taskInput,
    description,
    descriptionInput,
    dueDate,
    dueDateInput,
    priority,
    priorityInputHigh,
    priorityInputHighLabel,
    priorityInputMedium,
    priorityInputMediumLabel,
    priorityInputLow,
    priorityInputLowLabel,
    insertButton,
  ];
  const emergentWindowClass = [
    "task",
    "taskInput",
    "description",
    "descriptionInput",
    "dueDate",
    "dueDateInput",
    "priority",
    "priorityInputHigh",
    "priorityInputHighLabel",
    "priorityInputMedium",
    "priorityInputMediumLabel",
    "priorityInputLow",
    "priorityInputLowLabel",
    "insertButton",
  ];
  const emergentWindowText = [
    "TASK",
    "TASK INPUT",
    "DESCRIPTION",
    "DESCRIPTION INPUT",
    "DUE DATE",
    "DUE DATE INPUT",
    "PRIORITY",
    "PRIORITY HIGH",
    "HIGH PRIORITY", //LABEL
    "PRIORITY MEDIUM",
    "MEDIUM PRIORITY", //LABEL
    "PRIORITY LOW",
    "LOW PRIORITY", //LABEL
    "SUBMIT",
  ];

  addProjects.addEventListener("click", function () {
    insertButton.style.display = "inline";

    emergentWindow.className = "emergentWindow";

    document.body.appendChild(emergentWindow);

    emergentWindow.style.display = "inline";

    for (let i = 0; i < emergentWindowElements.length; i++) {
      emergentWindow.appendChild(emergentWindowElements[i]);
      emergentWindowElements[i].className = emergentWindowClass[i];
      emergentWindowElements[i].textContent = emergentWindowText[i];
    }
  });

  insertButton.addEventListener("click", function () {
    let tasks = taskInput.value;
    let desc = descriptionInput.value;
    let date = dueDateInput.value;

    const Notes = document.createElement("div");

    const taskNotes = document.createElement("div");
    const descNotes = document.createElement("div");
    const dateNotes = document.createElement("div");

    //!CLASS
    taskNotes.classList = "taskNotes";

    //*Text Content
    taskNotes.textContent = tasks;
    descNotes.textContent = desc;
    dateNotes.textContent = date;

    //?Append
    Notes.className = "Notes";

    document.body.appendChild(Notes);
    Notes.appendChild(taskNotes);
    Notes.appendChild(descNotes);
    Notes.appendChild(dateNotes);

    emergentWindow.style.display = "none";

    if (priorityInputHigh.checked) {
      taskNotes.style.color = "red";
    } else if (priorityInputMedium.checked) {
      taskNotes.style.color = "yellow";
    } else if (priorityInputLow.checked) {
      taskNotes.style.color = "green";
    }
  });

  return leftBar;
}

document.body.appendChild(Execution());
