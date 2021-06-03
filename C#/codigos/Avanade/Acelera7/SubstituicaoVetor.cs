using System;

namespace Desafios.Avanade.Acelera7
{
  class SubstituicaoVetor
  {
    public static void Teste()
    {

      int[] vetor = new int[10];

      for (int i = 0; i < 10; i++)
      {
        int input = Convert.ToInt32(Console.ReadLine());

        if (input > 0)
        {
          vetor[i] = input;
        }
        else
        {
          vetor[i] = 1;
        }

      }

      for (int i = 0; i < 10; i++)
      {
        Console.WriteLine("X[{0}] = {1}", i, vetor[i]);
      }
    }

  }
}
