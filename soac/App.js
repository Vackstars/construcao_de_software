import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './pages/login';
import TelaPerfilPaciente from './pages/tela_perfil_paciente';
import TelaPerfilPacienteOpcoes from './pages/tela_perfil_paciente_opcoes';
import InformacoesConsulta from './pages/informacoes_consulta';
import CancelarConsultas from './pages/cancelar_consultas';
import PesquisarMedico from './pages/pesquisar_medico';
import PesquisarMedicoEsp from './pages/pesquisar_medico_esp';
import ResultadoPesquisaMedico from './pages/resultado_pesquisa_medico';
import SolicitacaoConsultaData from './pages/solicitacao_consulta_data';
import HorarioConsulta from './pages/horario_consulta';
import ConfirmarConsulta from './pages/confirmar_consulta';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TelaPerfilPaciente" component={TelaPerfilPaciente} />
        <Stack.Screen name="TelaPerfilPacienteOpcoes" component={TelaPerfilPacienteOpcoes} />
        <Stack.Screen name="InformacoesConsulta" component={InformacoesConsulta} />
        <Stack.Screen name="CancelarConsultas" component={CancelarConsultas} />
        <Stack.Screen name="PesquisarMedico" component={PesquisarMedico} />
        <Stack.Screen name="PesquisarMedicoEsp" component={PesquisarMedicoEsp} />
        <Stack.Screen name="ResultadoPesquisaMedico" component={ResultadoPesquisaMedico} />
        <Stack.Screen name="SolicitacaoConsultaData" component={SolicitacaoConsultaData} />
        <Stack.Screen name="HorarioConsulta" component={HorarioConsulta} />
        <Stack.Screen name="ConfirmarConsulta" component={ConfirmarConsulta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;