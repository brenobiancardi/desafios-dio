using System;
using System.Collections.Generic;
namespace Desafios.Praticando
{
  class Promocoes
  {

    public static void Teste()
    {

      int[] configs = ReadInputs();

      while (configs[0] > 0)
      {
        int[] promocoes = new int[configs[0]];
        int[] latas = new int[configs[0]];

        for (int i = 0; i < configs[0]; i++)
        {
          int[] input = ReadInputs();

          promocoes[i] = input[1];
          latas[i] = input[0];
        }

        Console.WriteLine(MaximoLucro(configs[1], latas, promocoes, configs[0]));

        configs = ReadInputs();
      }
    }

    private static int MaximoLucro(int valor, int[] qtdLatas, int[] precoVenda, int qtdPromocoes)
    {
      if (qtdPromocoes == 0 || valor == 0) return 0;

      if (qtdLatas[qtdPromocoes - 1] > valor)
      {
        return MaximoLucro(valor, qtdLatas, precoVenda, qtdPromocoes - 1);
      }
      else
      {
        return Max(precoVenda[qtdPromocoes - 1] +
                  MaximoLucro(valor - qtdLatas[qtdPromocoes - 1], qtdLatas, precoVenda, qtdPromocoes - 1),
                  MaximoLucro(valor, qtdLatas, precoVenda, qtdPromocoes - 1));
      }
    }
    private static int Max(int atual, int novo)
    {
      return novo > atual ? novo : atual;
    }

    private static int[] ReadInputs()
    {
      string[] inputs;
      int[] formatedInputs;
      try
      {
        inputs = Console.ReadLine().Split(" ");
        formatedInputs = new int[] { Convert.ToInt32(inputs[0]), Convert.ToInt32(inputs[1]) };
      }
      catch
      {
        formatedInputs = new int[2] { 0, 0 };
      }
      return formatedInputs;
    }

  }
}

/*
faz o calculo de todas e armazena
int[] promocoes = new int[2001];
        int[] latas = new int[configs[1] + 1];
        bool[] calculado = new bool[2001];

        calculado[0] = true;

        for (int i = 0; i < configs[0]; i++)
        {
          int[] input = ReadInputs();

          promocoes[input[0]] = input[1];
          calculado[input[0]] = true;
        }
for (int i = 0; i <= configs[1]; i++)
{
  for (int j = i; j >= 1; --j)
  {
    if (calculado[i - j] && promocoes[j] != 0)
    {
      int soma = latas[i - j] + promocoes[j];
      if (soma > latas[i])
      {
        latas[i] = soma;
      }
      calculado[i] = true;
    }
  }
}
*/