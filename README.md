# TheGreater6ix
_Projet Finale_

## Description de l'application: 
Ce site sera pour montrer aux visiteurs les divers villes a travers le G.T.A 
Sur la page d'acceuille, 

#Backend
## Creation du backend 
Avec la commande 
```
activator list-templates
```
J'ai liste les options qui sont offert et j'ai choisi 'Play-Reactive-Mongo-DB'

J'ai cree la base backend avec la commande 
```
activator new backend play-reactive-mongo-db
```
J'ai ajouté le proxy a l'application de front end en ajoutant un fichier nommé 'proxy.conf.json' et coller le text ci-dessous dedans
```
{
  "/api/*": {
    "target": "http://localhost:9000",
    "secure": false,
    "LogLevel":"debug"
  }
}

```
Puis, j'ai ajoute le texte suivant au package.json
```
"start:withProxy": "ng serve --proxy-config proxy.conf.json",
```
