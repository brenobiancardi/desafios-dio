using System;

namespace Desafios.Praticando
{
  class CoordenadaPonto
  {
    public static void Teste()
    {

      string[] input = Console.ReadLine().Replace(",", ".").Split(" ");

      double X = Convert.ToDouble(input[0]);
      double Y = Convert.ToDouble(input[1]);


      if ((X == Y) && X == 0)
      {
        Console.Write("Origem");
      }
      else if (X == 0)
      {
        Console.Write("Eixo Y");
      }
      else if (Y == 0)
      {
        Console.Write("Eixo X");
      }
      else if (X > 0 && Y > 0)
      {
        Console.Write("Q1");
      }
      else if (X > 0 && Y < 0)
      {
        Console.Write("Q4");
      }
      else if (X < 0 && Y > 0)
      {
        Console.Write("Q2");
      }
      else// if (X < 0 && Y < 0)
      {
        Console.Write("Q3");
      }
    }
  }
}