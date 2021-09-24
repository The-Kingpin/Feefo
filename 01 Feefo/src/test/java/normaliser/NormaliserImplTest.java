package normaliser;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class NormaliserImplTest {
    private static final String QUANTITY_SURVEYOR="Quantity surveyor";

    Normaliser normaliser;

    @BeforeEach
    void setUp() {
        normaliser = new NormaliserImpl();
    }

    @Test
    void returnsArchitectFromTwoWordedSentenceTest(){
        assertEquals("Architect", normaliser.normalise("Chief Architect"));
    }

    @Test
    void returnsSoftwareEngineerWhenOnlyEngineerAppearsTest(){
        assertEquals("Software engineer", normaliser.normalise("C# engineer"));
    }

    @Test
    void returnsSoftwareEngineerWhenOnlySoftwareAppearsTest(){
        assertEquals("Software engineer", normaliser.normalise("C# Software developer"));
    }

    @Test
    void returnsQuantitySurveyorWhenOnlyQuantityAppearsTest(){
        assertEquals(QUANTITY_SURVEYOR, normaliser.normalise("Quantity"));
    }

    @Test
    void returnsQuantitySurveyorWhenOnlyPartialMatchSurveyorTest(){
        assertEquals(QUANTITY_SURVEYOR, normaliser.normalise("surveyor"));
    }

    @Test
    void returnsEmptyStringWhenEmptyInputIsGivenTest(){
        assertEquals(QUANTITY_SURVEYOR, normaliser.normalise("surveyor"));
    }

    @Test
    void returnsEmptyStringWhenNoMatchIsFoundTest(){
        assertEquals("", normaliser.normalise("surveyors"));
    }

    @Test
    void returnsEmptyStringWhenMatchWordPartOfAnotherWord(){
        assertEquals("", normaliser.normalise("View ArchitectArchitectx zx"));
    }

    @Test
    void returnsEmptyStringWhenInputIsNull(){
        assertEquals("", normaliser.normalise(null));
    }

}