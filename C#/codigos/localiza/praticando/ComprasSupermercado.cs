using System;
using System.Collections.Generic;
using System.Linq;

namespace Desafios.Praticando
{
  class ComprasSupermercado
  {

    public static void Teste()
    {

      int totalDeCasosDeTeste = int.Parse(Console.ReadLine());
      string listaComprasOrdenada;


      while (totalDeCasosDeTeste > 0)
      {
        listaComprasOrdenada = "";
        string[] listaCompras = Console.ReadLine().Split(" ");

        IEnumerable<string> listaComprasDistintos = listaCompras.Distinct();
        listaComprasDistintos = listaComprasDistintos.OrderBy(value => value);

        foreach (string item in listaComprasDistintos)
        {
          listaComprasOrdenada += item + " ";
        }

        Console.WriteLine(listaComprasOrdenada.TrimEnd());

        totalDeCasosDeTeste--;
      }

    }
  }
}