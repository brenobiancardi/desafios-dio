using System;

namespace Desafios.MRV.Basicos
{
  class VisitaNaFeira
  {
    public static void Teste()
    {

      int a, b, x;
      string[] input = Console.ReadLine().Split(" ");
      a = Convert.ToInt32(input[0]);
      b = Convert.ToInt32(input[1]);

      x = a + b;

      Console.WriteLine("X = {0}", x);
    }
  }
}