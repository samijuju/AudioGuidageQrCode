## Signer une application

### Importer projet cordova dans android-studio
- Import Projetct(Gradle, Eclipse ADT, etc.) :   
Choisir le dossier platforms/android

### Produire un "Android App Bundle"
- Une fois le dossier "platforms/android" totalement importer  
- Aller dans le menu "Build" puis "Generate Signed Bundle / APK..."   
- Sélectionner "Android App Bundle" + "Next"   
- Key store path -> "create new...":   
  . Entrer un emplacement de fichier, exemple: /media/dev/apps-android-key-store/store.jks   
  . Password et Password Alias doivent être identique   
  . remplissez les champs ...
- "Next"   
- "release" + "finish"

### Retrouver l'emplacement de "App bundle"
- Onglet "Event log" en bas à droite.   
- Cliquer sur le mot "locate" (le premier):   
platforms/android/app/release/app-release.aab

### Déployer votre application (google store)
https://play.google.com/apps/publish/signup/
#### - Créer une application
#### - Configurer votre application, Afficher les taches
- Accès aux applications + choix par rapport à l'app + Enregistrer + Tableau de bord
- Annonces(publicités) + choix par rapport à l'app + Enregistrer + Tableau de bord
- Classification du contenu + Répondre au questionnaire + Enregistrer + Suivant + Envoyer + Tableau de bord
- Cible et contenu + 13-15 + 16-17 + 18 ans et plus + Suivant + "oui" + Suivant + Enregistrer + Tableau de bord
- Applications d'actualités + choix par rapport à l'app + Enregistrer + Tableau de bord
- Applis sur le suivi des contacts et le statut COVID-19 + n'est pas une app covid19 + Enregistrer + Tableau de bord
- Sécurité des données + Suivant
- Sélectionner la catégorie de votre application... + tags + adresse email + décocher "Marketinn externe" + Enregistrer + Tableau de bord
- Configurer une fiche Play Store + .... + image + Enregistrer

#### Publier votre application sur Google Play
- Sélectionner les pays et les régions
- 