public class Empregado {
    private int tipo;
    private double salario;
    private double comissao;
    private double bonus;
    private String nome;
    private int idade;

    public double calculaSalario(){
        if (tipo == 1)
            return salario
        else if (tipo == 2)
            return salario + salario * comissao;
        else if (tipo == 3)
            return salario + bonus;
        else
            return 0;
    }

    public String getNome(){
        return nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public int getIdade(){
        return idade;
    }

    public void setIdade(int idade){
        this.idade = idade;
    }

}