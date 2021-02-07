using System;

namespace Desafios.Aritmeticos
{
	class Media 
	{ 
		public static void Teste() {  
			double A;
			double B;
			double media;
			A = Convert.ToDouble(Console.ReadLine());
			B = Convert.ToDouble(Console.ReadLine());
			media = ((A*3.5)+(B*7.5))/11;
			Console.WriteLine($"MEDIA = {(string.Format("{0:0.00000}",media))}");
		}
	}
}