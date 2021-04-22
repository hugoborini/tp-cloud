# tp-cloud


## to run : 

    cd app
    docker build -t tp-cloud .
    docker run -it -p 9000:3000 -v $(pwd):/app tp-cloud
    #or
    docker run -d -p 9000:3000 -v $(pwd):/app tp-cloud  
    #if you want to run it on background



## documentation

### add post :

#### pour ajouter une classe :
    POST:: /add/Class
    params:
		   nameClass (str)
#### pour ajouter une matiere
    POST:: /add/Matiere
    params:
		   nameMatiere (str)
#### pour ajouter un/une eleve
    POST:: /add/Eleve
    params:
		   nameEleve (str)
		   lastNameEleve (str)
		   nameClass (str)
#### pour ajouter un/une prof

    POST:: /add/Prof
    params:
		   nameProf (str)
		   lastNameProf (str)
		   nameMatiere (str)
#### pour ajouter un/une prof a une class
    POST:: /add/ProfToClass
    params:
		   nameProf (str)
		   nameClass (str)
		   isPrincipal (bool)
		   
#### pour assigner une note a un eleve
    POST:: /add/Note/:nameEleve(str)/:lastNameEleve(str)
    params:
		   nameMatiere (str)
		   lastNameProf (str)
		   nameClass (str)
		   note (int)
		   coef (int)
		   dateNote (date)

#### pour ajouter une absence a un/une eleve
    POST:: /add/Absence/:nameEleve(str)/:lastNameEleve(str)
    params:
		   dateStart (date)
		   dateEnd (date)
		   isJustificate (bool)

#### pour ajouter ou enlever une justification d'absence

    POST:: /add/Justification/:id_absence(int)
    params:
		   isJustificate (bool)

### get post : 

#### pour avoir les info d'un prof
    GET:: /get/Prof/:nameProf(str)

#### pour avoir les eleve d'une classe

    GET:: /get/EleveFromClass/:nameClass(str)


#### pour avoir les notes d'un eleve 

    GET:: /get/NoteByEleve/:nameEleve(str)/:lastNameEleve(str)

#### pour avoir les moyennes d'un eleve

    GET :: /get/AverageByEleve/:nameEleve(str)/:lastNameEleve(str)
   
#### pour avoir les notes d'une classe

    GET :: /get/NoteByClass/:nameClass(str)
    
#### pour avoir les moyennes d'une classe
	
    GET :: /get/AverageByClass/:nameClass(str)

#### pour avoir les eleve par recherche

    GET :: /get//EleveBySearch/:nameEleve(str)/:lastNameEleve(str)
    
### student

 - [Melina Chamayou](https://github.com/Klochette)
 - [Reda Hamouche](https://github.com/RedaHamouche)
 - [Hugo Cordillot](https://github.com/Hgo0123)
 - [Nawel Berrichi](https://github.com/NawelBrrch)
 - [Borini Hugo](https://github.com/hugoborini)
