using System;

namespace Desafios.GFT.Intermediarios
{
  class NotasMoedas
  {
    public static void Teste()
    {
      double valor;
      int auxNotas, auxMoedas;

      valor = Convert.ToDouble(Console.ReadLine().Replace(".", ","));
      string[] notasValidas = { "100.00", "50.00", "20.00", "10.00", "5.00", "2.00" };
      string[] moedasValidas = { "1.00", "0.50", "0.25", "0.10", "0.05", "0.01" };

      auxNotas = (int)valor;
      auxMoedas = (int)(valor * 100 - auxNotas * 100);

      Console.WriteLine("NOTAS:");
      foreach (string nota in notasValidas)
      {
        auxNotas = CalculaNotas(nota, auxNotas);
      }

      auxMoedas += auxNotas * 100; //Pega o que sobrou

      Console.WriteLine("MOEDAS:");
      foreach (string moeda in moedasValidas)
      {
        auxMoedas = CalculaMoedas(moeda, auxMoedas);
      }


    }
    private static int CalculaMoedas(string valorMoedaString, int restaMoedas)
    {
      int valorMoeda = (int)(100 * Convert.ToDouble(valorMoedaString.Replace(".", ",")));
      int qtdMoedas = 0;
      if (restaMoedas > 0)
      {
        qtdMoedas = restaMoedas / valorMoeda;
      }
      if (qtdMoedas >= 1)
      {
        restaMoedas -= qtdMoedas * valorMoeda;
      }

      Console.WriteLine("{0} moeda(s) de R$ {1}", qtdMoedas, valorMoedaString);
      return restaMoedas;
    }

    private static int CalculaNotas(string valorNotaString, int restaNotas)
    {
      int valorNota = (int)Convert.ToDouble(valorNotaString.Replace(".", ","));
      int qtdNotas = 0;
      if (restaNotas > 0)
      {
        qtdNotas = restaNotas / valorNota;
      }
      if (qtdNotas >= 1)
      {
        restaNotas -= qtdNotas * valorNota;
      }

      Console.WriteLine("{0} nota(s) de R$ {1}", qtdNotas, valorNotaString);
      return restaNotas;
    }
  }
}