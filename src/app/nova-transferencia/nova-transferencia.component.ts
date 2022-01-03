import { Component } from "@angular/core";

@Component({
    selector: 'nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{
  valor: number = 0;
  destino: number = 0;

  transferir(){
    console.log('Solicitada nova transferencia');
    console.log('Destino: ' + this.destino);
    console.log('Valor: ' + this.valor);

  }
}
