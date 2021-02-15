using System.Collections.ObjectModel;
using System;

namespace Desafios.MRV.Intermediarios
{
  class NotasMoedasII
  {
    public static void Teste()
    {
      //Esse deveria ser o correto mas falha em alguns testes
      double valor;
      int auxNotas;
      int auxMoedas;

      valor = Convert.ToDouble(Console.ReadLine());
      double[] notasValidas = { 100.00, 50.00, 20.00, 10.00, 5.00, 2.00 };
      double[] moedasValidas = { 1.00, 0.50, 0.25, 0.10, 0.05, 0.01 };

      auxNotas = (int)valor;
      valor -= auxNotas;

      Console.WriteLine("NOTAS:");
      foreach (int nota in notasValidas)
      {
        auxNotas = CalculaNotas(nota, auxNotas);
      }

      auxMoedas = (int)((valor + auxNotas) * 100); //Pega o que sobrou

      Console.WriteLine("MOEDAS:");
      foreach (double moeda in moedasValidas)
      {
        auxMoedas = CalculaMoedas(moeda, auxMoedas);
      }


    }
    private static int CalculaMoedas(double valorMoeda, int restaMoedas)
    {
      int qtdMoedas = 0;
      int valorMoedaInt = (int)(100 * valorMoeda);
      if (restaMoedas > 0)
      {
        qtdMoedas = restaMoedas / valorMoedaInt;
      }
      if (qtdMoedas >= 1)
      {

        restaMoedas -= (qtdMoedas * valorMoedaInt);
      }

      Console.WriteLine("{0} moeda(s) de R$ {1:F2}", qtdMoedas, valorMoeda);
      return restaMoedas;
    }

    private static int CalculaNotas(int valorNota, int restaNotas)
    {
      int qtdNotas = 0;
      if (restaNotas > 0)
      {
        qtdNotas = restaNotas / valorNota;
      }
      if (qtdNotas >= 1)
      {
        restaNotas -= qtdNotas * valorNota;
      }

      Console.WriteLine("{0} nota(s) de R$ {1:F2}", qtdNotas, valorNota);
      return restaNotas;
    }
  }
}