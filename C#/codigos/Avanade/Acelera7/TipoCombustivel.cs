using System;
using System.Collections.Generic;

namespace Desafios.Avanade.Acelera7
{
  class TipoCombustivel
  {
    public static void Teste()
    {

      Dictionary<string, int> fuels = new Dictionary<string, int>();
      fuels.Add("Alcool", 0);
      fuels.Add("Gasolina", 0);
      fuels.Add("Diesel", 0);

      int option;

      do
      {

        option = Convert.ToInt32(Console.ReadLine());

        switch (option)
        {
          case 1:
            fuels["Alcool"] += 1;
            break;
          case 2:
            fuels["Gasolina"] += 1;
            break;
          case 3:
            fuels["Diesel"] += 1;
            break;
          case 4:
            Console.WriteLine("MUITO OBRIGADO");
            break;
          default:
            continue;
        }
      }
      while (option != 4);

      foreach (var fuel in fuels)
      {
        Console.WriteLine("{0}: {1}", fuel.Key, fuel.Value);
      }

    }

  }
}
