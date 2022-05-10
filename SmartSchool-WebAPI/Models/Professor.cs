namespace SmartSchool_WebAPI.Models
{
    public class Professor
    {
        public Professor() { }
        public Professor(string nome, int id, string disciplina)
        {
            this.id = id ;
            this.nome = nome;
            this.disciplina = disciplina;

        }
        public int id { get; set; }
        public string nome { get; set; }
        public string disciplina { get; set; }

    }
}