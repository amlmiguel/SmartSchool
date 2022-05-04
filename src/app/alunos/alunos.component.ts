import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;
  public textSimple: string;

  alunos = [
    { id: 1, nome: 'Aluno 1', sobrenome: 'Sobrenome A', telefone: 33222266 },
    { id: 2, nome: 'Aluno 2', sobrenome: 'Sobrenome B', telefone: 33225588 },
    { id: 3, nome: 'Aluno 3', sobrenome: 'Sobrenome C', telefone: 31125566 }
  ];

  alunoSelect(aluno: Aluno)
  {
    this.alunoSelecionado = aluno;
  }

  voltar()
  {
    this.alunoSelecionado = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
