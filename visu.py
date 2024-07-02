# import matplotlib.pyplot as plt

# # Données
# labels = ['Messages well handled', 'NLU Fallback', 'Functionnal Fallback']
# sizes = [40, 5, 5]  # Valeurs numériques
# colors = ['#99ff99', '#0073FF', '#F4A79D']

# # Fonction pour afficher les valeurs numériques au lieu des pourcentages
# def func(pct, allvalues):
#     total = sum(allvalues)
#     absolute = pct * total / 100
#     return f"{int(absolute):d}"

# # Création du diagramme camembert
# fig, ax = plt.subplots()
# wedges, texts, autotexts = ax.pie(sizes, colors=colors, labels=labels, autopct=lambda pct: func(pct, sizes), startangle=90, pctdistance=0.85)

# # S'assurer que le graphique est un cercle
# ax.axis('equal')

# for text in texts:
#     text.set_fontsize(20)  # Ajustez la taille de la police selon vos besoins

# # Ajuster la taille des textes à l'intérieur
# for autotext in autotexts:
#     autotext.set_color('black')
#     autotext.set_fontsize(20)

# # Agrandir le graphique
# fig.set_size_inches(8, 8)

# # Afficher le graphique
# plt.show()



#-------------------------------------------------------------------------------------------

import matplotlib.pyplot as plt

# Données fictives pour le nombre de messages par jour
jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
nombre_messages = [50, 60, 55, 70, 65, 40, 30]

# Création du diagramme à barres
plt.figure(figsize=(10, 6))
plt.bar(jours, nombre_messages, color='skyblue')

# Ajout du titre et des étiquettes
plt.title('Nombre de messages par jour de la semaine')
plt.xlabel('Jour de la semaine')
plt.ylabel('Nombre de messages')

# Affichage du diagramme
plt.show()
plt.savefig(file_path)
