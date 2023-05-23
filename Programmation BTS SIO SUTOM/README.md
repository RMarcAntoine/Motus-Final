Présentation du code Marc-Antoine(js) et Nathan(html/css)

Pour la page Html nous avons :

<!DOCTYPE html> : Cette déclaration indique que le document est un document HTML.
<html lang="en"> : Cela indique que le contenu de la page est en anglais (langue anglaise).
<head> : C'est la balise d'en-tête de la page, elle contient des informations sur le document HTML.
- <meta charset="UTF-8"> : Cet élément spécifie l'encodage des caractères pour le document (UTF-8 est un encodage de caractères couramment utilisé).
- <meta http-equiv="X-UA-Compatible" content="IE=edge"> : Cette balise fournit des instructions aux navigateurs Internet Explorer sur la version de compatibilité à utiliser.
- <meta name="viewport" content="width=device-width, initial-scale=1.0"> : Cette balise définit l'affichage sur les appareils mobiles en spécifiant la largeur de l'appareil et le niveau de zoom initial.
- <title> : Cela définit le titre de la page qui sera affiché dans la barre de titre du navigateur.
- <link rel="stylesheet" href="./src/style.css"> : Cette balise lie une feuille de style CSS externe à la page HTML.
<body> : C'est la balise du corps de la page, elle contient le contenu visible de la page.
- <div id="startMenu"> : C'est un conteneur pour le menu de démarrage du jeu.
- <div class="button-container"> : C'est un conteneur pour un bouton "Actualiser" qui recharge la page lorsque cliqué.
- <div id="messages"> : C'est un conteneur pour afficher différents messages dans le jeu.
- <div id="game"> : C'est un conteneur principal pour le jeu.
- <div class="grid"> : C'est un conteneur pour la grille du jeu.
- <div id="keyboard"> : C'est un conteneur pour le clavier virtuel du jeu.
- <script src="./src/index.js" type="module"></script> : Cette balise lie un fichier JavaScript externe qui contrôle le comportement interactif du jeu.

Pour la page CSS nous avons :

html, body : Ces sélecteurs ciblent respectivement les balises <html> et <body>. Les propriétés qui suivent seront appliquées à ces éléments.

background: var(--default); : Cela définit la couleur de fond par défaut pour la page.
margin: 0; et padding: 0; : Ces propriétés suppriment les marges et les paddings par défaut des éléments <html> et <body>.
display: flex; : Cela définit le modèle d'affichage flex pour les éléments <html> et <body>.
flex-direction: column; : Cela définit la direction des éléments enfants pour les éléments <html> et <body>.
align-items: center; et justify-content: center; : Ces propriétés centrent les éléments enfants horizontalement et verticalement dans les éléments <html> et <body>.
height: 100vh; : Cela définit la hauteur de la page à 100% de la hauteur de la fenêtre visible (viewport height).
:root : Cela cible la racine du document (élément <html>) et définit des variables CSS personnalisées.

--default: #121213; : C'est la valeur de la variable personnalisée --default qui représente une couleur.
--empty: #3a3a3c; : C'est la valeur de la variable personnalisée --empty qui représente une autre couleur.
--wrong: #b59f3b; : C'est la valeur de la variable personnalisée --wrong qui représente une autre couleur.
--right: #538d4e; : C'est la valeur de la variable personnalisée --right qui représente une autre couleur.
#game : Cela cible un élément avec l'ID "game" et définit son apparence.

display: flex; : Cela définit le modèle d'affichage flex pour l'élément ciblé.
justify-content: center; et align-items: start; : Ces propriétés centrent horizontalement les éléments enfants et les alignent en haut de l'élément ciblé.
margin-top: 10px; et margin-bottom: 10px; : Ces propriétés définissent les marges supérieure et inférieure de l'élément ciblé.
width: 100%; et height: 72vh; : Ces propriétés définissent la largeur et la hauteur de l'élément ciblé.
.grid : Cela cible un élément avec la classe "grid" et définit son apparence.

display: grid; : Cela définit le modèle d'affichage en grille pour l'élément ciblé.
grid-template-rows: repeat(6, auto); : Cela définit les lignes de la grille avec une hauteur automatique répétée 6 fois.
grid-template-columns: repeat(5, auto); : Cela définit les colonnes de la grille avec une largeur automatique répétée 5 fois.
.box : Cela cible un élément avec la classe "box" et définit son apparence.

width: 60px; et height: 60px; : Ces propriétés définissent la largeur et la hauteur de l'élément ciblé.
border: 2px solid var(--empty); : Cela définit une bordure de 2 pixels avec une couleur personnalisée --empty.
margin: 4px; : Cela définit les marges de l'élément ciblé.
color: white; : Cela définit la couleur du texte à l'intérieur de l'élément ciblé.
text-transform: uppercase; : Cela transforme le texte à l'intérieur de l'élément en majuscules.
display: grid; : Cela définit le modèle d'affichage en grille pour l'élément ciblé.
place-items: center; : Cela centre le contenu de l'élément ciblé dans la grille.
font-family: "Roboto Medium", Ubuntu, Arial, Helvetica, sans-serif; : Cela définit la police de caractères pour le texte à l'intérieur de l'élément ciblé.
font-size: 2.4rem; : Cela définit la taille de police pour le texte à l'intérieur de l'élément ciblé.
.box.empty, .box.wrong, .box.right : Ce sont des sélecteurs qui ciblent des éléments avec les classes "empty", "wrong" et "right" respectivement et définissent leur apparence. Les propriétés définies sont similaires à celles de .box, mais avec des couleurs de fond différentes.

.animated : Cela cible un élément avec la classe "animated" et définit une animation CSS appelée "flip" qui sera appliquée à cet élément.

@keyframes flip : Cela définit l'animation "flip" utilisée par l'élément avec la classe "animated". Cette animation fait tourner l'élément sur son axe Y (symétrie verticale).

.button-container : Cela cible un élément avec la classe "button-container" et définit son apparence.

display: flex; : Cela définit le modèle d'affichage flex pour l'élément ciblé.
justify-content: center; : Cela centre horizontalement les éléments enfants de l'élément ciblé.
margin-top: 20px; : Cela définit la marge supérieure de l'élément ciblé.
.button-container button : Cela cible les boutons à l'intérieur de l'élément avec la classe "button-container" et définit leur apparence.

border: none; : Cela supprime les bordures des boutons.
border-radius: 0; : Cela supprime le rayon des coins arrondis des boutons.
background-color: green; : Cela définit la couleur de fond des boutons.
color: white; : Cela définit la couleur du texte à l'intérieur des boutons.
padding: 10px 20px; : Cela définit les marges intérieures des boutons.
cursor: pointer; : Cela définit le curseur de la souris lorsqu'il survole les boutons.
margin-bottom: 10px; : Cela définit la marge inférieure des boutons.
border-radius: 10px; : Cela définit le rayon des coins arrondis des boutons.
.message : Cela cible un élément avec la classe "message" et définit son apparence.
display: flex; : Cela définit le modèle d'affichage flex pour l'élément ciblé.
justify-content: center; et align-items: center; : Ces propriétés centrent horizontalement et verticalement le contenu de l'élément ciblé.
font-size: 20px; et font-weight: bold; : Ces propriétés définissent la taille de police et le poids de police pour le texte à l'intérieur de l'élément ciblé.
color: white; : Cela définit la couleur du texte à l'intérieur de l'élément ciblé.
background-color: rgba(0, 0, 0, 0.8); : Cela définit la couleur de fond de l'élément ciblé avec une certaine transparence.
padding: 1px; : Cela définit les marges intérieures de l'élément ciblé.
margin-bottom: 20px; et margin-top: 5px; : Ces propriétés définissent les marges inférieure et supérieure de l'élément ciblé.
.hidden : Cela cible un élément avec la classe "hidden" et définit son apparence.
display: none; : Cela masque l'élément ciblé en le rendant invisible.
#startMenu : Cela cible un élément avec l'ID "startMenu" et définit son apparence.
background-color: #333; : Cela définit la couleur de fond de l'élément ciblé.
color: white; : Cela définit la couleur du texte à l'intérieur de l'élément ciblé.
text-align: center; : Cela définit l'alignement du texte à l'intérieur de l'élément ciblé.
padding: 20px; : Cela définit les marges intérieures de l'élément ciblé.
font-weight: bold; : Cela définit le poids de police du texte à l'intérieur de l'élément ciblé.
width: 100%; : Cela définit la largeur de l'élément ciblé à 100%.
margin-top: 15%; : Cela définit la marge supérieure de l'élément ciblé.
border-radius: 10px; : Cela définit le rayon des coins arrondis de l'élément ciblé.
#title : Cela cible un élément avec l'ID "title" à l'intérieur de l'élément avec l'ID "startMenu" et définit son apparence.
font-size: 24px; : Cela définit la taille de police du texte à l'intérieur de l'élément ciblé.
border-bottom: 1px solid #ccc; : Cela définit une bordure inférieure de 1 pixel pour l'élément ciblé.
margin-bottom: 0; : Cela supprime la marge inférieure de l'élément ciblé.
#keyboard : Cela cible un élément avec l'ID "keyboard" et définit son apparence.
display: flex; : Cela définit le modèle d'affichage flex pour l'élément ciblé.
flex-direction: column; : Cela définit la direction des éléments enfants pour l'élément ciblé.
align-items: center; : Cela centre horizontalement les éléments enfants de l'élément ciblé.
margin-top: 20px; : Cela définit la marge supérieure de l'élément ciblé.
.row : Cela cible les éléments avec la classe "row" et définit leur apparence.
display: flex; : Cela définit le modèle d'affichage flex pour les éléments ciblés.
justify-content: center; : Cela centre horizontalement les éléments enfants des éléments ciblés.
margin-bottom: 10px; : Cela définit la marge inférieure des éléments ciblés.
.key : Cela cible les éléments avec la classe "key" et définit leur apparence.
display: flex; : Cela définit le modèle d'affichage flex pour les éléments ciblés.
justify-content: center; et align-items: center; : Ces propriétés centrent horizontalement et verticalement le contenu des éléments ciblés.
width: 40px; et height: 40px; : Ces propriétés définissent la largeur et la hauteur des éléments ciblés.
background-color: #b5adad; : Cela définit la couleur de fond des éléments ciblés.
border: 1px solid #444242; : Cela définit une bordure de 1 pixel avec une couleur spécifique pour les éléments ciblés.
cursor: pointer; : Cela définit le curseur de la souris lorsqu'il survole les éléments ciblés.
margin: 0 5px; : Cela définit les marges des éléments ciblés.
font-size: 14px; : Cela définit la taille de police des éléments ciblés.
border-radius: 10px; : Cela définit le rayon des coins arrondis des éléments ciblés.
.key.enter-key, .key.backspace-key, .key.space-key : Ce sont des sélecteurs qui ciblent des éléments avec les classes "enter-key", "backspace-key" et "space-key" respectivement et définissent leur apparence. Les propriétés définies sont similaires à celles de .key, mais avec des largeurs différentes.


Pour la page Javascript:

drawGrid(container): Cette fonction crée la grille du jeu en utilisant des éléments HTML et l'ajoute à un conteneur spécifié. La grille est générée en fonction de la longueur du mot secret.

updateGrid(): Cette fonction met à jour le contenu de chaque case de la grille en fonction de l'état actuel du jeu.

registerKeyboardEvents(): Cette fonction enregistre les événements de clic sur les touches du clavier et les associe aux fonctions de manipulation appropriées.

handleEnterKey(): Cette fonction est appelée lorsque la touche "Enter" est pressée. Elle vérifie si le mot actuellement entré est valide et révèle le mot secret s'il est correct. Sinon, elle affiche un message d'erreur.

handleBackspaceKey(): Cette fonction est appelée lorsque la touche "Backspace" est pressée. Elle supprime la lettre précédente dans la grille.

handleLetterKey(letter): Cette fonction est appelée lorsque l'utilisateur presse une lettre du clavier. Elle ajoute la lettre à la grille si elle est valide.

drawBox(container, row, col, letter = ''): Cette fonction crée une case (élément HTML) pour la grille avec la lettre spécifiée et l'ajoute au conteneur.

getCurrentWord(): Cette fonction retourne le mot actuellement entré dans la grille.

isWordValid(word): Cette fonction vérifie si le mot spécifié est valide en le comparant avec un dictionnaire de mots.

getNumOfOccurrencesInWord(word, letter): Cette fonction retourne le nombre d'occurrences d'une lettre donnée dans un mot.

getPositionOfOccurrence(word, letter, position): Cette fonction retourne la position d'une occurrence spécifique d'une lettre dans un mot.

revealWord(guess): Cette fonction révèle les correspondances entre les lettres du mot secret et celles du mot deviné, en appliquant des animations visuelles à la grille.

isLetter(key): Cette fonction vérifie si la touche spécifiée est une lettre valide (caractère alphabétique).

addLetter(letter): Cette fonction ajoute une lettre à la grille à la position actuelle du curseur.

removeLetter(): Cette fonction supprime la lettre précédente dans la grille.

startup(): Cette fonction initialise le jeu en créant la grille, en enregistrant les événements du clavier et en affichant la première lettre du mot secret.

Le code utilise également une variable state qui stocke l'état actuel du jeu, y compris le mot secret, la grille, et la position actuelle du curseur dans la grille.

L'objectif global du code est de permettre au joueur de deviner le mot secret en entrant les lettres dans la grille, tout en recevant des indications visuelles sur les correspondances entre les lettres du mot deviné et celles du mot secret.