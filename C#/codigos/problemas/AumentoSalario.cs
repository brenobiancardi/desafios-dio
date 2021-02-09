using System;

namespace Desafios.Problemas
{
  class AumentoSalario
  {
    public static void Teste()
    {

      double salario, percentual;

      salario = double.Parse(Console.ReadLine().Replace(",", "."));

      if (salario >= 2000.01)
      {
        percentual = 0.04;
      }
      else if (salario >= 1200.01)
      {
        percentual = 0.07;
      }
      else if (salario >= 800.01)
      {
        percentual = 0.10;
      }
      else if (salario >= 400.01)
      {
        percentual = 0.12;
      }
      else if (salario >= 0.00)
      {
        percentual = 0.15;
      }
      else
      {
        salario = 0;
        percentual = 0;
      }

      CalculaReajuste(percentual, salario);
    }

    private static void CalculaReajuste(double percentualReajuste, double salarioAntigo)
    {
      double reajuste = salarioAntigo * percentualReajuste;
      double novoSalario = salarioAntigo + reajuste;
      double percentual = percentualReajuste * 100;
      Console.WriteLine("Novo salario: {0:0.00}", novoSalario);
      Console.WriteLine("Reajuste ganho: {0:0.00}", reajuste);
      Console.WriteLine("Em percentual: {0} %", percentual);
    }
  }
}