Creaza o aplicatie web cu urmatoarele functionalitati:
La fiecare click in pagina web a aplicatiei se transmite un request catre backend cu pozitia mouse-ului, iar backendul raspunde cu o structura de forma:

```
{
  “objectType”: “circle”,
  “position”: {“x”: 100, “y”: 100},
  “label”: “random 5 to 10 letters”
}
```

in care objectType este generat aleator dintre valorile “triangle”, “circle”, “diamond”, iar  label este generat sub forma unui cuvant de 5 pana la 10 litere
- Pentru afisarea unui obiect (shape) se va implementa o clasa generica shapeObject si clase derivate din aceasta, specifice fiecarui tip de obiect.
- Desenarea obiectelor (shapes) se va face cu SVG, la dimensiuni si forme ale nodurilor din aplicatia my.machinations.io (foloseste Dev Tools pentru inspiratie, vezi source, pool, gate)
- Clasa generica shapeObject implementeaza functionalitatile comune diferitelor tipuri de obiecte (shapes), printre care si un context menu afisat la right-click pe obiectul (shape) din interfata. Continutul acestui context-menu va fi definit intr-o variabila, sub forma:

```
{
“contextMenu”: [
    {“label”: “Rename”, action: “rename”},
    {“label”: “Delete”, action: “delete”}
]
}
```
iar implementarea va se va face incat sa permita o dezvoltare ulterioara cat mai usoara.

- Selectarea optiunii “Rename” se va afisa in consola aplicatiei, iar optiunea “Delete” va elimina obiectul din interfata si din memoria aplicatiei client.

- Dupa adaugarea unui nou obiect (shape) si daca numarul total al obiectelor este mai mare decat 10, atunci se va elimina din interfata cel mai vechi obiect adaugat.

- Backend-ul stocheza intr-o baza de date (poate fi sqlite sau orice alta solutie) pozitia, tipul si eticheta fiecarui obiect transmis catre vreun client

- La initializarea aplicatiei in browser se va solicita de la backend lista ultimelor 10 obiecte stocate in baza de date, care apoi vor fi afisate in interfata.

- Implementare folosind Vue.js, Vuex, Node.js
