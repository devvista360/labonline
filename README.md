# Repositorio

https://github.com/devvista360/labonline.git

# Subir los fuentes

1. Ingresa por git bash

2. Ingresa al directorio donde vas a tener los fuentes. Ej.:
	$ cd /D/dev/vista360/labonline

3. Se clona el repositorio de los fuentes
	$ git clone https://github.com/devvista360/labonline.git

4. Se inicializa el repositorio si este aún no existe (opcional)
	$ git init

5. Para subir los cambios al HEAD se usa
	$ git add .

6. Para verificar que los cambios están reconocidos por git
	$ git status

7. Para subir los cambios al repositorio (requiere del paso 5)
	$ git commit -m "Initial commit"
	$ git push -u origin master

8. Si ya se tienen fuentes actualmente se usa lo siguiente
	$ git remote add origin https://github.com/devvista360/labonline.git
	$ git fetch origin
	$ git pull origin master
	$ git merge master
	$ git checkout master
	$ git merge origin/master --allow-unrelated-historie
