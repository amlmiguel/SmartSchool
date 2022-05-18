import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Professor } from '../models/Professor';

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

  professores = [
     { id: 1, nome: 'Professor A', disciplina: 'Matemática' },
     { id: 2, nome: 'Professor B', disciplina: 'Física' },
     { id: 3, nome: 'Professor C', disciplina: 'Química' }
  ];

  constructor(private fb: FormBuilder,
              private modalService: BsModalService) {
    this.criarform();
   }

  ngOnInit(): void {
  }

  criarform() {
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required]
    });
  }

  professorSelect(professor: Professor)
  {
    this.professorSelecionado = professor;
    this.professorForm.patchValue(professor)
  }

  voltar()
  {
    this.professorSelecionado = null;
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

professorSubmit()
{

}



}