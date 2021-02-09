using System;
using System.Collections.Generic;
using System.Linq;

namespace Desafios.Praticando
{
  class Promocoes
  {
    public static void Teste()
    {

      string[] configs = Console.ReadLine().Split(" ");

      int qtdTestes = Convert.ToInt32(configs[0]);
      int qtdLatas = Convert.ToInt32(configs[1]);
      Dictionary<int, int> dadosTeste = new();


      while (qtdTestes > 0)
      {
        string[] inputs = Console.ReadLine().Split(" ");
        dadosTeste.Add(Convert.ToInt32(inputs[0]), Convert.ToInt32(inputs[1]));
        qtdTestes--;
      }

      foreach (var item in dadosTeste.OrderByDescending(r => r.Value))
      {
        Console.WriteLine("Chave: {0} Valor:{1}", item.Key, item.Value);
      }

    }
  }
}