using System;

namespace Desafios.MRV.Intermediarios
{
  class Triangulo
  {
    public static void Teste()
    {
      double A, B, C;
      string[] valor = Console.ReadLine().Split();
      A = Convert.ToDouble(valor[0]);
      B = Convert.ToDouble(valor[1]);
      C = Convert.ToDouble(valor[2]);

      //propriedade da desigualdade triangular
      //se a soma das medidas de dois lados é sempre maior que a medida do terceiro eles podem formar um triângulo.
      if (((A + B) > C) && ((B + C) > A) && ((C + A) > B))
      {
        double perimetro = A + B + C;
        Console.WriteLine("Perimetro = {0:0.0}", perimetro);
      }
      else
      {
        double area = ((A + B) * C) / 2;
        Console.WriteLine("Area = {0:0.0}", area);
      }
    }
  }
}