import { Component, OnInit } from '@angular/core';
import { Professor } from '../models/Professor';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public professorSelecionado: Professor;

  titulo = 'Professores';

  professores = [
     { id: 1, nome: 'Professor A', disciplina: 'Matemática' },
     { id: 2, nome: 'Professor B', disciplina: 'Física' },
     { id: 3, nome: 'Professor C', disciplina: 'Química' }
  ];

  professorSelect(professor: Professor)
  {
    this.professorSelecionado = professor;
  }

  voltar()
  {
    this.professorSelecionado = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
