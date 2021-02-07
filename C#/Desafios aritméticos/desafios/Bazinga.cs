using System;
using System.Collections.Generic;
using System.Text;

namespace Desafios_aritméticos
{
    class Bazinga
    {
        public static void Teste()
        {
            int qtdTeste = int.Parse(Console.ReadLine());
            string v1, v2;
            for (int i = 1; i <= qtdTeste; i++)
            {
                string[] valores = Console.ReadLine().Split();
                v1 = valores[0];
                v2 = valores[1];
                if (v1 == v2)
                    Console.WriteLine("Caso #{0}: De novo!", i);
                else if (((v1 == "tesoura") && ((v2 == "papel") || (v2=="lagarto"))) ||
                    ((v1 == "papel") && ((v2 == "pedra") || (v2 == "Spock"))) ||
                    ((v1 == "pedra") && ((v2 == "lagarto") || (v2 == "tesoura"))) ||
                    ((v1 == "lagarto") && ((v2 == "Spock") || (v2 == "papel"))) ||
                    ((v1 == "Spock") && ((v2 == "pedra") || (v2 == "tesoura"))))
                    Console.WriteLine("Caso #{0}: Bazinga!", i);
                else
                    Console.WriteLine("Caso #{0}: Raj trapaceou!", i);
            }
        }
    }
}

