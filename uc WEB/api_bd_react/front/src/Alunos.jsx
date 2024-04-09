// import { useState } from "react";
import GetAlunos from './crud/GetAlunos';


export default function Alunos(){
//     const [methodCrud, setMethod] = useState('')

//     const returnMethod = () => {
//         switch (methodCrud) {
//             case 'getAlunos':
//                 return (<GetAlunos/>);
//             default:
//                 return (<GetAlunos/>);
//         }
//     }
    return(
        <GetAlunos/>
    );
}