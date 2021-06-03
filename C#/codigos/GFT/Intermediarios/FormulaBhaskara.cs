using System;

namespace Desafios.GFT.Intermediarios
{
  class FormulaBhaskara
  {
    public static void Teste()
    {
      double a, b, c, delta, r1, r2;
      string[] valor = Console.ReadLine().Split();

      a = Convert.ToDouble(valor[0]);
      b = Convert.ToDouble(valor[1]);
      c = Convert.ToDouble(valor[02]);

      delta = (Math.Pow(b, 2) - (4 * a * c));


      if (a > 0 && delta > 0)
      {
        r1 = (-b + Math.Sqrt(delta)) / (2 * a);
        r2 = (-b - Math.Sqrt(delta)) / (2 * a);
        Console.WriteLine("R1 = {0:F5}", r1);
        Console.WriteLine("R2 = {0:F5}", r2);
      }
      else
      {
        Console.WriteLine("Impossivel calcular");
      }
    }
  }
}