import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class relacaoAlunoTest {

    private aluno aluno1, aluno2, aluno3, aluno4;

    @BeforeEach
    public void setup() {
        System.out.println("Criando novos alunos :) ...");
        aluno1 = new aluno("JovemNey", 80.0);
        aluno2 = new aluno("Arthur", 10.0);
        aluno3 = new aluno("Ariel", 40.0);
        aluno4 = new aluno("Mariana", 90.0);
    }

    // Teste para verificar se valores negativos geram erro
    @Test
    public void testCansacoNegativo() {
        System.out.println("Testando cansaço negativo...");
        aluno alunoComCansacoNegativo = new aluno("AlunoNegativo", -10.0);
        String descanso = relacaoAluno.calcularDescanso(alunoComCansacoNegativo);
        assertEquals("Erro! Cansaço inválido. O cansaço deve ser entre 0 e 100.", descanso, "Esperado erro para cansaço negativo.");
    }

    // Teste para verificar se valores maiores que 100 geram erro
    @Test
    public void testCansacoMaiorQueCem() {
        System.out.println("Testando cansaço maior que 100...");
        aluno alunoComCansacoExcedente = new aluno("AlunoExcesso", 150.0);
        String descanso = relacaoAluno.calcularDescanso(alunoComCansacoExcedente);
        assertEquals("Erro! Cansaço inválido. O cansaço deve ser entre 0 e 100.", descanso, "Esperado erro para cansaço maior que 100.");
    }

    // Teste para verificar o valor limite inferior de 0 (cansaço mínimo)
    @Test
    public void testCansacoZero() {
        System.out.println("Testando cansaço zero...");
        aluno alunoComCansacoZero = new aluno("AlunoZero", 0.0);
        String descanso = relacaoAluno.calcularDescanso(alunoComCansacoZero);
        assertEquals("Descanso diário suficiente: O aluno está tranquilo, sem stress!😎", descanso, "Esperado descanso diário suficiente para cansaço zero.");
    }

    // Teste para verificar se o espaço extra na resposta do descanso nos fins de semana aciona falha
    @Test
    public void testEspacosExtrasNaResposta() {
        System.out.println("Testando espaços extras na resposta...");
        aluno alunoComCansacoModerado = new aluno("AlunoModerado", 40.0);
        String descanso = relacaoAluno.calcularDescanso(alunoComCansacoModerado);
        assertEquals("Descanso nos fins de semana é suficiente: O aluno está moderadamente cansado. 😉", descanso, "Esperado descanso nos fins de semana para aluno com cansaço moderado.");
    }

    // Teste para verificar se valores exatamente no limite superior (100) geram a resposta correta
    @Test
    public void testCansacoCem() {
        System.out.println("Testando cansaço 100...");
        aluno alunoComCansacoCem = new aluno("AlunoCansado", 100.0);
        String descanso = relacaoAluno.calcularDescanso(alunoComCansacoCem);
        assertEquals("Alerta! O aluno está completamente exausto! 😢", descanso, "Esperado alerta de exaustão para cansaço de 100.");
    }

    // Teste para verificar se valores limítrofes (20, 50, 80) são corretamente classificados
    @Test
    public void testLimites() {
        // Teste para 20
        System.out.println("Testando cansaço de 20...");
        aluno alunoComCansaco20 = new aluno("Aluno20", 20.0);
        String descanso20 = relacaoAluno.calcularDescanso(alunoComCansaco20);
        assertEquals("Descanso diário suficiente: O aluno está tranquilo, sem stress!😎", descanso20, "Esperado descanso diário suficiente para cansaço 20.");

        // Teste para 50
        System.out.println("Testando cansaço de 50...");
        aluno alunoComCansaco50 = new aluno("Aluno50", 50.0);
        String descanso50 = relacaoAluno.calcularDescanso(alunoComCansaco50);
        assertEquals("Descanso nos fins de semana é suficiente: O aluno está moderadamente cansado. 😉", descanso50, "Esperado descanso nos fins de semana para cansaço 50.");

        // Teste para 80
        System.out.println("Testando cansaço de 80...");
        aluno alunoComCansaco80 = new aluno("Aluno80", 80.0);
        String descanso80 = relacaoAluno.calcularDescanso(alunoComCansaco80);
        assertEquals("Férias são necessárias! O aluno está exausto. 😒", descanso80, "Esperado férias para cansaço 80.");
    }
}



correcao 

if (cansaço < 0 || cansaço > 100) {
    return "Erro! Cansaço inválido. O cansaço deve ser entre 0 e 100.";
}
