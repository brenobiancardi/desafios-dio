using System; 

class minhaClasse {

	static void Main(string[] args) { 

		double salario,percentual;
		salario = Convert.ToDouble(Console.ReadLine());

		if (salario > 2000.00)
		{
			percentual = 0.04;
		}
		else if (salario > 1200.00)
		{
			percentual = 0.07;
		}
		else if (salario > 800.00)
		{
			percentual = 0.10;
		}
		else if (salario > 400.00)
		{
			percentual = 0.12;
		}
		else if(salario > 0.00)
		{
			percentual = 0.15;
		}
		else 
		{
			percentual = 0;
		}
		calculaReajuste(percentual, salario);
	}

	private static void calculaReajuste(double percentualReajuste,double salarioAntigo){
		double reajuste = salarioAntigo * percentualReajuste; 
		double novoSalario = salarioAntigo + reajuste;
		double percentual = percentualReajuste * 100;
		Console.WriteLine("Novo salario: {0:0.00}", novoSalario);
		Console.WriteLine("Reajuste ganho: {0:0.00}", reajuste);
		Console.WriteLine("Em percentual: {0} %", percentual);
	}
}