# tp-cloud


## to run : 

    cd app
    docker build -t tp-cloud .
    docker run -it -p 9000:3000 -v $(pwd):/app tp-cloud
    #or
    docker run -d -p 9000:3000 -v $(pwd):/app tp-cloud  
    #if you want to run it on background




## documentation

## Add post :

#### Pour ajouter une classe :
    POST:: /add/Class
    params:
		   nameClass (str)
		   
#### Pour ajouter une matiere
    POST:: /add/Matiere
    params:
		   nameMatiere (str)
		   
#### Pour ajouter un/une eleve
    POST:: /add/Eleve
    params:
		   nameEleve (str)
		   lastNameEleve (str)
		   nameClass (str)
#### Pour ajouter un/une prof

    POST:: /add/Prof
    params:
		   nameProf (str)
		   lastNameProf (str)
		   nameMatiere (str)
#### Pour ajouter un/une prof à une classe
    POST:: /add/ProfToClass
    params:
		   nameProf (str)
		   nameClass (str)
		   isPrincipal (bool)
		   
#### Pour assigner une note à un eleve
    POST:: /add/Note/:nameEleve(str)/:lastNameEleve(str)
    params:
		   nameMatiere (str)
		   lastNameProf (str)
		   nameClass (str)
		   note (int)
		   coef (int)
		   dateNote (date)

#### Pour ajouter une absence à un/une élève
    POST:: /add/Absence/:nameEleve(str)/:lastNameEleve(str)
    params:
		   dateStart (date)
		   dateEnd (date)
		   isJustificate (bool)

#### Pour ajouter ou enlever un justificatif d'absence

    POST:: /add/Justification/:id_absence(int)
    params:
		   isJustificate (bool)

## Get post : 

#### Pour avoir les informations d'un enseignant
    GET:: /get/Prof/:nameProf(str)

#### Pour avoir les élèves d'une classe

    GET:: /get/EleveFromClass/:nameClass(str)


#### Pour avoir les notes d'un élève 

    GET:: /get/NoteByEleve/:nameEleve(str)/:lastNameEleve(str)

#### Pour avoir les moyennes d'un élève

    GET :: /get/AverageByEleve/:nameEleve(str)/:lastNameEleve(str)
   
#### Pour avoir les notes d'une classe

    GET :: /get/NoteByClass/:nameClass(str)
    
#### Pour avoir les moyennes d'une classe
	
    GET :: /get/AverageByClass/:nameClass(str)

#### Pour avoir les élèves par recherche

    GET :: /get//EleveBySearch/:nameEleve(str)/:lastNameEleve(str)
    
### Student

 - [Melina Chamayou](https://github.com/Klochette)
 - [Reda Hamouche](https://github.com/RedaHamouche)
 - [Hugo Cordillot](https://github.com/Hgo0123)
 - [Nawel Berrichi](https://github.com/NawelBrrch)
 - [Borini Hugo](https://github.com/hugoborini)
