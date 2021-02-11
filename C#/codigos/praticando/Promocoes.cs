using System;
using System.Collections.Generic;

namespace Desafios.Praticando
{
  class Promocoes
  {
    public static void Teste()
    {
      string[] configs = Console.ReadLine().Split(" ");

      int qtdPromocoes = Convert.ToInt32(configs[0]);
      int qtdLatas = Convert.ToInt32(configs[1]);
      Dictionary<int, int> promocoes = new Dictionary<int, int>();
      int maiorArrecadacao = 0;

      while (qtdPromocoes > 0)
      {
        string[] inputs = Console.ReadLine().Split(" ");
        promocoes.Add(Convert.ToInt32(inputs[0]), Convert.ToInt32(inputs[1]));
        qtdPromocoes--;
      }

      foreach (var key in promocoes.Keys)
      {
        int arrecadacao = 0;
        int latasSobrando = qtdLatas;
        foreach (var itemTeste in promocoes)
        {

          double divisor = latasSobrando / itemTeste.Value;
          int multiplicador = (int)Math.Floor(divisor);
          if (multiplicador > 0)
          {
            latasSobrando -= multiplicador * itemTeste.Key;
            arrecadacao += multiplicador * itemTeste.Value;
          }
        }
        if (arrecadacao > maiorArrecadacao)
        {
          maiorArrecadacao = arrecadacao;
        }

        promocoes.Remove(key);
      }

      Console.WriteLine(maiorArrecadacao);

    }
  }
}