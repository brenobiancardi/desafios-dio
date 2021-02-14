using System;

namespace Desafios.MRV.Problemas
{
  class Tuitandoa
  {
    public static void Teste()
    {

      double[] notas = new double[2];
      bool condicao = true;
      int index = 0;
      double media;

      while (condicao)
      {
        double aux = double.Parse(Console.ReadLine());

        if (aux >= 0.00 & aux <= 10.00)
        {
          notas[index] = aux;
          index++;
          if (index > 1)
          {
            condicao = false;
          }
        }
        else
        {
          Console.WriteLine("nota invalida");
        }
      }
      media = (notas[0] + notas[1]) / 2;

      Console.WriteLine("media = {0}", media.ToString("N2").Replace(',', '.'));
    }
  }
}