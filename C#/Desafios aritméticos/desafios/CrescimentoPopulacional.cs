using System;


class CrescimentoPopulacional
{

	public static void Teste()
	{

		int testes = Convert.ToInt32(Console.ReadLine());
		int populacaoA, populacaoB;
		double crescimentoA, crescimentoB;
		int anos;

		for (int i = 0; i < testes; i++)
		{
			anos = 0;
			string[] valores = Console.ReadLine().Split();
			populacaoA = int.Parse(valores[0]);
			populacaoB = int.Parse(valores[1]);

			crescimentoA = double.Parse(valores[2])/100;
			crescimentoB = double.Parse(valores[3])/100;

			while (populacaoA <= populacaoB)
			{
				anos++;
				if (anos > 100)
				{
					break;
				}
				populacaoB += (int)Math.Floor(crescimentoB * populacaoB);
				populacaoA += (int)Math.Floor(crescimentoA * populacaoA);
			}
			if (anos > 100)
            {
				Console.WriteLine("Mais de 1 seculo.");

			}else
            {
				Console.WriteLine($"{anos} anos.");
			}
		}
	}
}