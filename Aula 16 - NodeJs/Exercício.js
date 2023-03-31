let user = 'Supervisor'

switch (user) {
    case 'Admin': 
     console.log('Acesso a todos os módulos.')
     break;
     case 'Supervisor': 
     console.log('Relatórios')
     break;
     case 'Desenvolvedor': 
     console.log('Todos os módulos e delete all tables do sistema.')
     break;
     case 'Operador': 
     console.log('Cadastros e movimentações')
     break;
}
