using System; 

namespace Desafios.Aritmeticos
{
    public class TempoEvento
    {
        public static void Teste() {  
            int diaInicio, diaTermino, horaMomentoInicio, minutoMomentoInicio, segundoMomentoInicio;
            int horaMomentoTermino, minutoMomentoTermino, segundoMomentoTermino;
            int segundos, minutos, horas, dias;

            string[] dadosInicio = Console.ReadLine().Split();
            diaInicio = Convert.ToInt32(dadosInicio[1]);

            string[] dadosMomentoInicio = Console.ReadLine().Split(" : ");
            horaMomentoInicio = Convert.ToInt32(dadosMomentoInicio[0]);
            minutoMomentoInicio = Convert.ToInt32(dadosMomentoInicio[1]);
            segundoMomentoInicio = Convert.ToInt32(dadosMomentoInicio[2]);

            string[] dadosTermino = Console.ReadLine().Split();
            diaTermino = Convert.ToInt32(dadosTermino[1]);

            string[] dadosMomentoTermino = Console.ReadLine().Split(" : ");
            horaMomentoTermino = Convert.ToInt32(dadosMomentoTermino[0]);
            minutoMomentoTermino = Convert.ToInt32(dadosMomentoTermino[1]);
            segundoMomentoTermino = Convert.ToInt32(dadosMomentoTermino[2]);

            dias = diaTermino - diaInicio;
            
            if(horaMomentoTermino >= horaMomentoInicio){
                horas = horaMomentoTermino - horaMomentoInicio;
            }else {
                horas = 24 + (horaMomentoTermino - horaMomentoInicio) ;
                dias--;
            }

            if(minutoMomentoTermino >= minutoMomentoInicio){
                minutos = minutoMomentoTermino - minutoMomentoInicio;
            }else {
                minutos = 60 + (minutoMomentoTermino - minutoMomentoInicio);
                horas--;
            }

            if(segundoMomentoTermino >= segundoMomentoInicio){
                segundos = segundoMomentoTermino - segundoMomentoInicio;
            }else {
                segundos = 60 + (segundoMomentoTermino - segundoMomentoInicio);
                minutos--;
            }

			if(minutos < 0) {
				minutos += 60;
				horas--;
			}
			if(horas < 0) {
				horas += 24;
				dias--;
			}
			

            Console.WriteLine("{0} dia(s)", dias);
            Console.WriteLine("{0} hora(s)", horas);
            Console.WriteLine("{0} minuto(s)", minutos);
            Console.WriteLine("{0} segundo(s)", segundos);
        }
    }
}