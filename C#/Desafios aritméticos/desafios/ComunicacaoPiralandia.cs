using System.Collections.Generic;
using System.Linq;
using System;

namespace Desafios_aritméticos
{
    public class ComunicacaoPiralandia
    {
        public static void Teste()
	    {
            string input = Console.ReadLine();

            IEnumerable<char> vetor = input.Reverse();
            string invertido = string.Join("",vetor);
            
            Console.WriteLine(invertido);
        }
    }
}