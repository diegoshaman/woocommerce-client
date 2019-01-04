import { Injectable } from '@angular/core';

@Injectable()
export class DataInfoProvider {
    

  userType: any = {name: 'Atendente', email: 'falecom@megaticket.com.br', photo: "assets/imgs/100x100.png"}
  userInfo: any;

  titleAppName: string = "3A PDVi"
  titleOnlineSales: string = "Vendas Online"
  titleCPF: string = "CPF"
  titleModuleOnline: string = "Módulo vendas online"
  titleAtention: string = "Atenção"
  titleStartDateEmpty: string = "Data inicial vazia"
  titleEndDateEmpty: string = "Data final vazia"
  titleCheckDates: string = "Verificar datas"
  titleCancel: string = "Cancelar"
  titleResultEmpty: string = "Resultado vazio"
  titleDayPurschase: string = "Data da compra"
  titleSettings: string = "Configurações"
  titleTicketType: string = "Tipo de ingresso"
  titleCategory: string = "Categorias"
  titleDayStart: string = "Data inicial"
  titleEndStart: string = "Data final"
  titleHistory: string = "Historico"
  titlePleaseWait: string = "Favor aguarde"
  titleEmailSendSuccess: string = "E-mail enviado com sucesso!"
  titlePrintSendSuccess: string = "Impressão enviada com sucesso!"
  titleSendEmailTo: string = "Enviar e-mail para "
  titleTicketOptions: string = " Opções ingresso"
  titleEmail: string = "E-mail"
  titleTicket: string = "Ingresso"
  titleTicketNumber: string = "Número do ingresso"
  titleTicketValue: string = "Valor da compra"
  titleTicketPayDay: string = "Data do pagamento"
  titleTicketPostDay: string = "Data da postagem"
  titleConfirmPrint: string = "Confirmar impressão "
  titleSearchingClientName: string = "Procurando pelo nome do cliente, favor aguarde"
  titleSearchingClientCPF: string = "Procurando pelo CPF do cliente, favor aguarde"
  titleConfirmMultiPrint: string = "Deseja confirmar impressão multipla?"
  titleStreet: string = "Rua"
  titleNumber: string = "Número"
  titleCity: string = "Cidade"
  titleCEP: string = "CEP"
  titleState: string = "Estado"
  titleLoadingInformations: string = "Carregando informações"
  titlePaymentForm: string = "Forma de pagamento"
  titleWarning: string = "Atenção"
  titleLimit: string = "Limite atingido"
  titleValue: string = "Valor"
  titleTotalSelected: string = "Total selecionado"
  titleSave: string = "Salvar"
  titlePay: string = "Pagar"
  titleReceived:  string = "Recebido"
  titleCheckout: string = "Conferir compras"
  titlePaymentSuccess: string = "Pagamento realizado com sucesso!"
  titlePayment: string = "Pagamento"
  titleTotalPayment: string = "Total Recebido: "
  titleTotalChange: string = "Troco: "
  titleFinalValue: string = "Valor final: "
  titleSelectOption: string = "Selecione uma opção"
  titleUsernameMinLenght: string = "Usuário deve ter no mínimo 3 caracteres"
  titlePasswordMinLenght: string = "Senha deve ter no mínimo 3 caracteres"    
  titleAuthError: string = "Erro de autenticação"
  titleSubproducts: string = "Subtipos de produto"
  titleBasic: string = "Básico"
  titleClientAddress: string = "Endereço comprador"
  titleLogin: string = "Login"
  titleForget: string = "Esqueci a senha"
  titlePassword: string = "Senha"

  constructor() {
    console.log('Hello DataInfoProvider Provider');
  }

}
