let processes = [];

function addProcess() {
  const name = document.getElementById('name').value;
  const burstTime = parseInt(document.getElementById('burstTime').value);
  const priority = parseInt(document.getElementById('priority').value);

  if (!name || burstTime <= 0) return alert("Datos inválidos");

  processes.push({ name, burstTime, priority });
  renderProcessList();
}

function renderProcessList() {
  const list = document.getElementById('processList');
  list.innerHTML = '<h3>🗂 Procesos en espera</h3>';
  processes.forEach((p, i) => {
    list.innerHTML += `<p>${i+1}. ${p.name} | Tiempo: ${p.burstTime} | Prioridad: ${p.priority}</p>`;
  });
}

function startSimulation() {
  const algorithm = document.getElementById('algorithm').value;
  const quantum = parseInt(document.getElementById('quantum').value);
  const simulation = document.getElementById('simulation');
  simulation.innerHTML = '<h3>🔄 Simulación en Progreso</h3>';

  let queue = [...processes];

  if (algorithm === "FIFO") {
    queue.forEach((p, i) => {
      setTimeout(() => renderProgress(p), i * 1000);
    });
  }

  else if (algorithm === "PRIORITY") {
    queue.sort((a, b) => a.priority - b.priority);
    queue.forEach((p, i) => {
      setTimeout(() => renderProgress(p), i * 1000);
    });
  }

  else if (algorithm === "RR") {
    let time = 0;
    const rrQueue = [...queue];
    const rrSteps = [];

    while (rrQueue.length > 0) {
      const p = rrQueue.shift();
      const execTime = Math.min(p.burstTime, quantum);
      rrSteps.push({ ...p, execTime });
      p.burstTime -= execTime;
      if (p.burstTime > 0) rrQueue.push(p);
    }

    rrSteps.forEach((step, i) => {
      setTimeout(() => renderProgress(step, step.execTime), i * 1000);
    });
  }

  processes = [];
  setTimeout(() => renderProcessList(), 1000);
}

function renderProgress(p, time = p.burstTime) {
  const simulation = document.getElementById('simulation');
  const div = document.createElement('div');
  div.className = 'process-bar';
  div.style.width = `${time * 30}px`; // Escala de tamaño visual
  div.textContent = `${p.name}`;
  simulation.appendChild(div);
}
