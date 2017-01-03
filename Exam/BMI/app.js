window.addEventListener('DOMContentLoaded', function () {

    // KOLOR CZERWONY
    // poniżej 16,0 – wygłodzenie
    // 16,0–16,99 – wychudzenie

    // KOLOR POMARAŃCZOWY
    // 17,0–18,49 – niedowaga

    // KOLOR ZIELONY
    // 18,5–24,99 – wartość prawidłowa

    // KOLOR POMARAŃCZOWY
    // 25,0–29,99 – nadwaga

    // KOLOR CZERWONY
    // 30,0–34,99 – I stopień otyłości
    // 35,0–39,99 – II stopień otyłości (otyłość kliniczna)
    // powyżej 40,0 – III stopień otyłości (otyłość skrajna)

    // BMI- Wskaźnik Body Mass Index (BMI) oblicza się wg wzoru: 
    // Masę ciała w kilogramach dzielimy przez wzrost w metrach do kwadratu
    // weight- waga w kilogramach oraz height- wzrost w centymetrach
    function calcBmi(weight, height) {
        var result = weight / Math.pow(height / 100, 2);
        return result;
    }

});
