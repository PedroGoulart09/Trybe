

export default function heloo(parm) {
    const nota = parm.nota >= 7 ? 'aprovado' : 'reprovado'
    return (
        <div>

            <h2>{parm.titulo}</h2>

            <div>
                <strong> {parm.nome} </strong>
                tem nota
                <strong> {parm.nota} </strong>
                e está
                <strong> {nota} </strong>
            </div>
        </div>

    )
}