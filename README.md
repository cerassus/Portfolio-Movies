# Aplikacja do zarządzania biblioteką filmów

Na bazie otwartego API ze strony http://omdbapi.com/, zaimplementuj aplikację do zarządzania biblioteką filmów.

Aplikacja ma udostępniać następujące funkcjonalności:

- wyszukiwarka filmów
- strona z detalami wybranego filmu
- lista obejrzanych filmów z możliwością oceny
- lista filmów "do obejrzenia"

## 1. Klucz API
Na początku należy wygenerować klucz do API. Po wejściu na stronę http://omdbapi.com/ znajdź zakładkę API Key a następnie wybierz opcję FREE. Wypełnij wszystkie wymagane pola. Po wysłaniu formularza na skrzynkę mailową podaną w formularzu przyjdzie klucz, dzięki któremu będzie można odpytywać API.

## 2. Wyszukiwarka
Widok wyszukiwarki powinien pozwolić na wyszukiwanie filmu w bazie OMDBapi. Lista filmów powinna być wyświetlana w formie okładek + tytuł + rok produkcji. Dodatkowo pod każdym filmem powinien pojawić się widget do oceny filmu w skali od 1-5. Szukasz inspiracji? Zajrzyj tu: https://codepen.io/jamesbarnett/pen/vlpkh :) Ostatnim elementem jest przycisk do oznaczenia filmu jako "chcę obejrzeć".

![images/warsztat1](images/warsztat1.png)

Kiedy użytkownik doda film jako obejrzany (przez dodanie oceny), bądź zaznaczy go jako "do obejrzenia" to przy następnym pojawieniu się na liście powinien mieć wypełnione odpowiednie pola (oceny bądź checkbox do obejrzenia).

Po kliknięciu na tytuł / plakat użytkownik przenoszony jest na stronę z detalami.

Na początku wyszukiwarka pokazuje pusty ekran powitalny np. "Hej! zacznij wyszukiwanie filmów". W trakcie wyszukiwania pokazywany jest spinner. Jeśli nastąpi błąd poinformuj użytkownika wyświetlając mu stosowny komunikat.

## 3. Strona z detalami filmu
Strona z detalami zawiera szczegółowe informacje na temat filmu. Użytkownik z tego miejsca też może ocenić film oraz dodać go do ulubionych. ID filmu powinno być odzwierciedlone w adresie URL tak aby był on łatwo kopiowalny np. moje-filmy.pl/detale/ID. Po wejściu na stronę z poprawnym ID mają się wyświetlić dane na temat filmu. Podanie błędnego ID powinno wyświetlić informację o błędzie. Podczas pobierania pokaż spinner.

![images/warsztat2](images/warsztat2.png)

**DLA CHĘTNYCH:**
Pod detalami filmu wyświetl listę filmów podobnych. Np. na podstawie reżysera, gatunku itp.

## 4. Strona z listą ulubionych / do obejrzenia
Obie listy powinny pokazywać listę filmów wraz z prostym formularzem do filtrowania np. po tytule czy gatunku. Dodatkowo użytkownik może wybrać różne metody sortowania filmów np. od oceny najwyższa-najniższa, rok wydania filmu, tytuł alfabetycznie itp.

Przy każdym filmie powinna pojawić się ikona do usunięcia filmu z listy. Np. ikona kosza.

![images/warsztat3](images/warsztat3.png)
