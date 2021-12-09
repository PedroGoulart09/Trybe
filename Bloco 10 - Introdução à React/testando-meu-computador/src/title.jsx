import React from "react";
function Task(value) {
    return (
        <li>{value}</li>
    );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends React.Component {
    render() {
        return tarefas.map((item) => Task(item))
    }
}
export default App;