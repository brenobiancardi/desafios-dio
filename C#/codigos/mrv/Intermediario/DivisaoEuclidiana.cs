using System;

namespace Desafios.MRV.Intermediarios
{
  class DivisaoEuclidiana
  {
    public static void Teste()
    {
      string[] valores = Console.ReadLine().Split();
      int a = int.Parse(valores[0]);
      int b = int.Parse(valores[1]);
      int q, r, aux;

      q = a / b;
      r = a % b;

      if (r < 0)
      {
        if (b < 0)
        {
          aux = b * -1;
        }
        else
        {
          aux = b;
        }
        r += aux;
        q = (a - r) / b;
      }

      Console.WriteLine("{0} {1}", q, r);
    }
  }
}