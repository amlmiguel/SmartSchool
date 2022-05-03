import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public professorSelecionado: string;

  titulo = 'Professores';

  professores = [
     { id: 1, nome: 'Professor A', disciplina: 'Matemática' },
     { id: 2, nome: 'Professor B', disciplina: 'Física' },
     { id: 3, nome: 'Professor C', disciplina: 'Química' }
  ];

  professorSelect(professor: any)
  {
    this.professorSelecionado = professor.nome;
  }

  voltar()
  {
    this.professorSelecionado = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
