import axios from 'axios';
import { useEffect, useState } from 'react';

export default function GetAlunos() {
    const [list, setList] = useState(false);

    useEffect(() => {
        const AllAlunos = async () => {
            try {
                const query = await axios.get('http://localhost:3000/alunos/listAllAlunos');
                const returnList = query.data.map((all) => (
                    <div key={all.matricula}>
                        <p>Matrícula: {all.matricula}</p>
                        <p>Nome: {all.nome}</p>
                        <p>Email: {all.email}</p>
                        <p>Turma: {all.turma}</p>
                        <p>Fone: {all.fone}</p>
                        <p>Sexo: {all.sexo}</p>
                        <p>Data de Nascimento: {all.data_nascimento}</p>
                    </div>
                ));
                setList(returnList);
            } catch (error) {
                console.error('Erro ao obter lista de alunos:', error);
            }
        };
        AllAlunos();
    }, []);

    return (
        <div>
            <h1>Lista de Alunos</h1>
            <div>{list}</div>
        </div>
    );
}
