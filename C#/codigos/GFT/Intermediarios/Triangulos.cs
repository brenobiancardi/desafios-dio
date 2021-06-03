using System;
using System.Collections;

namespace Desafios.GFT.Intermediarios
{
  class Triangulos
  {
    public static void Teste()
    {
      string[] s = Console.ReadLine().Split(' ');
      double[] array = { double.Parse(s[0]), double.Parse(s[1]), double.Parse(s[2]) };
      IComparer orderByDesc = new ReverseComparer();
      Array.Sort(array, orderByDesc);

      double a = array[0];
      double b = array[1];
      double c = array[2];

      double a2 = Math.Pow(a, 2);
      double bc = Math.Pow(b, 2) + Math.Pow(c, 2);

      if (a >= (b + c))
        Console.WriteLine("NAO FORMA TRIANGULO");
      else if (a2 == bc)
        Console.WriteLine("TRIANGULO RETANGULO");
      else if (a2 > bc)
        Console.WriteLine("TRIANGULO OBTUSANGULO");
      else if (a2 < bc)
        Console.WriteLine("TRIANGULO ACUTANGULO");
      if (a == b && b == c)
        Console.WriteLine("TRIANGULO EQUILATERO");
      if ((((a == b) || (a == c)) && (b != c)) || ((b == c) && c != a))
        Console.WriteLine("TRIANGULO ISOSCELES");
    }
    public class ReverseComparer : IComparer
    {
      public int Compare(Object x, Object y)
      {
        return (new CaseInsensitiveComparer()).Compare(y, x);
      }
    }
  }
}