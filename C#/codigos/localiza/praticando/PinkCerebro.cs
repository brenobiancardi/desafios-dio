using System;

namespace Desafios.Praticando
{
  class PinkCerebro
  {

    public static void Teste()
    {
      int[] multiplos = { 2, 3, 4, 5 };
      int[] quantidade = { 0, 0, 0, 0 };
      int quantidadeNumeros = int.Parse(Console.ReadLine());
      string[] inputs = Console.ReadLine().Split(" ");
      int[] numeros = new int[quantidadeNumeros];


      for (int i = 0; i < quantidadeNumeros; i++)
      {
        numeros[i] = int.Parse(inputs[i]);
      }

      for (int i = 0; i < multiplos.Length; i++)
      {
        for (int j = 0; j < quantidadeNumeros; j++)
        {
          if (numeros[j] % multiplos[i] == 0) quantidade[i]++;
        }
      }

      for (int i = 0; i < multiplos.Length; i++)
      {
        Console.WriteLine("{0} Multiplo(s) de {1}", quantidade[i], multiplos[i]);
      }

    }
  }
}