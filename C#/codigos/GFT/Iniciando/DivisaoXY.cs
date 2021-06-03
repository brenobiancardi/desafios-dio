using System;

namespace Desafios.GFT.Iniciando
{
  class DivisaoXY
  {
    public static void Teste()
    {
      int limit = Int32.Parse(Console.ReadLine());

      for (int i = 0; i < limit; i++)
      {
        try
        {
          string[] line = Console.ReadLine().Split(" ");
          double X = double.Parse(line[0]);
          double Y = double.Parse(line[1]);
          if (Y == 0)
          {
            Console.WriteLine("divisao impossivel");
          }
          else
          {
            double divisao = X / Y;
            if (Double.IsNaN(divisao))
            {
              Console.WriteLine("divisao impossivel");
              continue;
            }
            if (divisao == -0)
            {
              Console.WriteLine("0.0");
              continue;
            }
            Console.WriteLine(divisao.ToString("N1"));
          }

        }
        catch (System.Exception)
        {
          Console.WriteLine("divisao impossivel");
        }

      }
    }
  }
}