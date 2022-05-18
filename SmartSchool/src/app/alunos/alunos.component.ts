import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/aluno';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;


  alunos = [
    { id: 1, nome: 'Aluno 1', sobrenome: 'Sobrenome A', telefone: 33222266 },
    { id: 2, nome: 'Aluno 2', sobrenome: 'Sobrenome B', telefone: 33225588 },
    { id: 3, nome: 'Aluno 3', sobrenome: 'Sobrenome C', telefone: 31125566 }
  ];



  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  constructor(private fb: FormBuilder,
              private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit(): void {
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSelect(aluno: Aluno)
  {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar()
  {
    this.alunoSelecionado = null;
  }

  alunoSubmit()
  {
    console.log(this.alunoForm.value);
  }


}
