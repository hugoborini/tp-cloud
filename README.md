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
    POST:: add/Class
    params:
		   nameClass (str)
#### pour ajouter une matiere
    POST:: add/Matiere
    params:
		   nameMatiere (str)
#### pour ajouter un/une eleve
    POST:: add/Eleve
    params:
		   nameEleve (str)
		   lastNameEleve (str)
		   nameClass (str)
#### pour ajouter un/une prof

    POST:: add/Prof
    params:
		   nameProf (str)
		   lastNameProf (str)
		   nameMatiere (str)
#### pour ajouter un/une prof a une class
    POST:: add/ProfToClass
    params:
		   nameProf (str)
		   nameClass (str)
		   isPrincipal (bool)
		   
#### pour assigner une note a un eleve
    POST:: Note/:nameEleve(str)/:lastNameEleve(str)
    params:
		   nameMatiere (str)
		   lastNameProf (str)
		   nameClass (str)
		   note (int)
		   coef (int)
		   dateNote (date)

#### pour ajouter une absence a un/une eleve
    POST:: /Absence/:nameEleve(str)/:lastNameEleve(str)
    params:
		   dateStart (date)
		   dateEnd (date)
		   isJustificate (bool)

#### pour ajouter ou enlever une justification d'absence

    POST:: /addJustification/:id_absence(int)
    params:
		   isJustificate (bool)

### student

 - [Melina Chamayou](https://github.com/Klochette)
 - [Reda Hamouche](https://github.com/RedaHamouche)
 - [Hugo Cordilliot](https://github.com/Hgo0123)
 - [Nawel Berrichi](https://github.com/NawelBrrch)
 - [Borini Hugo](https://github.com/hugoborini)
