# Cel Zadania 
 
# Stwórz aplikację, w której użytkownik może: 
 
Wybrać kolor z pola wyboru kolorów. 
Zobaczyć wybrany kolor jako tło w podglądzie. 
Wyświetlić wartości RGB i szesnastkowe (Hex) wybranego koloru w czasie rzeczywistym. 
 
## Wymagania 
 
Wykorzystaj HTML, CSS i JavaScript do stworzenia projektu. 
 
## Funkcjonalności aplikacji: 
 
Pole wyboru kolorów: Input, w którym użytkownik wybiera kolor. 
Podgląd koloru: Pole, które zmienia tło w zależności od wybranego koloru. 
Wyświetlanie kodów kolorów: Wyświetlanie wartości RGB i Hex wybranego koloru. 
 
# Zadanie Dodatkowe (Ocena 6) 
 
# Stylizacja aplikacji za pomocą Bootstrap: 
 
Dodaj Bootstrap do projektu (za pomocą linku CDN w <head>). 
Stwórz responsywny układ, np. przy użyciu siatek Bootstrap. 
Zmień style elementów takich jak przyciski, pola wyboru i teksty, aby były zgodne z wyglądem Bootstrap. 
 
## Lub: 
 
Dodać animację przejścia koloru w podglądzie. 
Utworzyć osobny przycisk „Resetuj”, który przywraca domyślny kolor. 
 
# Instrukcje 

## Struktura projektu 
 
Pliki i foldery: 
W folderze src utwórz nowe komponenty: 
ColorPicker.jsx (komponent odpowiedzialny za wybieranie kolorów). 
ColorPreview.jsx (komponent wyświetlający podgląd koloru). 
ColorInfo.jsx (komponent pokazujący kody kolorów RGB i Hex). 
Podział zadań między komponenty: 
Komponent główny (App.jsx) powinien zarządzać stanem wybranego koloru. 
Każdy komponent powinien otrzymywać dane jako props. 
 
## Funkcjonalności aplikacji 
 
Pole wyboru kolorów: 
Wykorzystaj element input typu color. 
Zadbaj o obsługę zdarzeń, aby wybrany kolor był zapisywany w stanie komponentu głównego. 
Podgląd koloru: 
Stwórz element, którego tło zmienia się dynamicznie w zależności od wybranego koloru. 
Wyświetlanie kodów kolorów: 
Obliczaj wartości RGB i Hex na podstawie wybranego koloru i wyświetlaj je w czasie rzeczywistym. 
 
## Stylizacja aplikacji 
 
Stwórz plik App.css i zaimportuj go do aplikacji. 
Dodaj style dla: 
Układu strony (wyśrodkowanie elementów). 
Komponentu podglądu koloru (np. ramka, zaokrąglone rogi). 
Tekstu i przycisków (czytelna czcionka, odstępy). 
 
# Funkcjonalność 
 
## Stan aplikacji: 
Zarządzaj kolorem w stanie za pomocą useState. 
W ColorPicker.jsx obsługuj zmiany w input i aktualizuj stan w App.jsx. 
Konwersja kolorów: 
Dodaj funkcję, która przekształca kod Hex na RGB. 
Wyświetl wynik w ColorInfo.jsx. 
Testowanie aplikacji: 
Sprawdź, czy aplikacja działa zgodnie z wymaganiami: 
Czy kolor podglądu zmienia się po wyborze nowego koloru? 

Czy wartości RGB i Hex są wyświetlane poprawnie? 
