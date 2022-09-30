import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-formularioregistro',
  templateUrl: './formularioregistro.component.html',
  styleUrls: ['./formularioregistro.component.css']
})
export class FormularioregistroComponent implements OnInit {

    formulario!:FormGroup;

  constructor(public fabricaDiccionario:FormBuilder) { }

  ngOnInit(): void {
    this.formulario=this.inicializarFormulario()
  }

  public analizarFormulario():void{
    console.log(this.formulario.value)
  }
  public inicializarFormulario():FormGroup{
    return this.fabricaDiccionario.group({
    iup:['juan',[Validators.required,Validators.minLength(6)]],
    tiporemitente:['empresa',[Validators.required,Validators.minLength(6)]],
    idremitente:['2323433',[Validators.required,Validators.minLength(6)]],
    nombreremitente:['tcc',[Validators.required,Validators.minLength(6)]],
    dptoremitente:['antioquia',[Validators.required,Validators.minLength(6)]],
    municipioremitente:['envigado',[Validators.required,Validators.minLength(6)]],
    direccionremitente:['cr 34',[Validators.required,Validators.minLength(6)]],
    tipodestinatario:['empresa',[Validators.required,Validators.minLength(6)]],
    iddestinatario:['2334554',[Validators.required,Validators.minLength(6)]],
    nombredestinatario:['luis',[Validators.required,Validators.minLength(6)]],
    dptodestinatario:['argos',[Validators.required,Validators.minLength(6)]],
    municipiodestinatario:['envigado',[Validators.required,Validators.minLength(6)]],
    direcciondestinatario:['cr 45',[Validators.required,Validators.minLength(6)]]

    })
  }

}
