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
  public modo: string;


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

  alunoNovo() {
    this.alunoSelecionado = new Aluno();
    this.alunoForm.patchValue(this.alunoSelecionado);

  }

  voltar() {
    this.alunoSelecionado = null;
  }

  alunoSubmit() {
    this.salvarAluno(this.alunoForm.value);
  }

  salvarAluno(aluno: Aluno) {
    (aluno.id === 0) ? this.modo = 'post' : this.modo = 'put';
    console.log(this.modo)
    this.alunoService[this.modo](aluno).subscribe(
      (retorno: Aluno) => {
        this.carregarAlunos();
      },
      (error: any) => console.log(error)
    );
  }

  deletarAluno(id: number) {
    this.alunoService.delete(id).subscribe(
      (model: any) => {
        this.carregarAlunos();
      },
      (error: any) => {
        console.error(error);
      }
    );

  }


}
