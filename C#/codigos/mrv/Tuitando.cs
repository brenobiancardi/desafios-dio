using System;

namespace Desafios.MRV.Problemas
{
  class Tuitando
  {
    public static void Teste()
    {

      string v = Console.ReadLine();
      char[] arr = v.ToCharArray();
      if (arr.Length > 140 || arr.Length < 1)
        Console.WriteLine("MUTE");
      else
        Console.WriteLine("TWEET");
    }
  }
}