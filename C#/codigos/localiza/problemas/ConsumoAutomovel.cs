using System;

namespace Desafios.Problemas
{
  class ConsumoAutomovel
  {
    public static void Teste()
    {

      int distancia;
      double combustivelGasto, consumoMedio;

      distancia = Convert.ToInt32(Console.ReadLine());
      combustivelGasto = Convert.ToDouble(Console.ReadLine());

      consumoMedio = distancia / combustivelGasto;

      Console.WriteLine("{0:0.000} km/l", consumoMedio);
    }
  }
}