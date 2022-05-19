import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/aluno';
import { AlunoService } from './aluno.service';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  // styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;


  public alunos: Aluno[];


  constructor(private fb: FormBuilder,
    private modalService: BsModalService,
    private alunoService: AlunoService) {
    this.criarForm();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.alunoService.getAll().subscribe(
      (alunos: Aluno[]) => {
        this.alunos = alunos;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  criarForm() {
    this.alunoForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar() {
    this.alunoSelecionado = null;
  }

  alunoSubmit() {
    this.salvarAluno(this.alunoForm.value);
  }

  salvarAluno(aluno: Aluno) {
    this.alunoService.put(aluno.id, aluno).subscribe(
      (retorno: Aluno) => {
        this.carregarAlunos();
      },
      (error: any) => console.log(error)
    );
  }


}
