import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';
import { ProfessoresService } from './professores.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public professorSelecionado: Professor;
  public professorForm: FormGroup;
  public titulo = 'Professores';
  public modo: string;

  public professores: Professor[];

  constructor(private fb: FormBuilder,
    private modalService: BsModalService,
    private professorService: ProfessoresService) {
    this.criarform();
  }

  ngOnInit(): void {
    this.carregarProfessores();
  }

  carregarProfessores() {
    this.professorService.getAll().subscribe(
      (professores: Professor[]) => {
        this.professores = professores;
      },
      (error: any) => {
        console.error(error);
      }
    );

  }

  criarform() {
    this.professorForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor);
  }

  voltar() {
    this.professorSelecionado = null;
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  professorSubmit() {
    this.salvarProfessor(this.professorForm.value);
  }

professorNovo() {
  this.professorSelecionado = new Professor();
  this.professorForm.patchValue(this.professorSelecionado);
}

salvarProfessor(professor: Professor) {
  (professor.id === 0) ? this.modo = 'post' : this.modo = 'put';
  console.log(this.modo)
  this.professorService[this.modo](professor).subscribe(
    (retorno: Professor) => {
      this.carregarProfessores();
    },
    (error: any) => console.log(error)
  );
}



}
