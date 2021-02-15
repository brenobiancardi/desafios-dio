using System;

namespace Desafios.MRV.Intermediarios
{
  class TesteSelecao
  {
    public static void Teste()
    {
      string[] selections = Console.ReadLine().Split(' ');
      int A = int.Parse(selections[0]);
      int B = int.Parse(selections[1]);
      int C = int.Parse(selections[2]);
      int D = int.Parse(selections[3]);

      if (
        (A % 2 == 0) &&
        (C > 0) &&
        (D > 0) &&
        (B > C) &&
        (D > A) &&
        ((C + D) > (A + B)))
      {
        Console.WriteLine("Valores aceitos");
      }
      else
      {
        Console.WriteLine("Valores nao aceitos");
      }
    }
  }
}